document.addEventListener("DOMContentLoaded", () => {
    // Typing effect for the index page
    const headingText = "Energy and Emission Performance Measurement";
    const headingElement = document.getElementById("dynamic-heading");
    const paragraphElement = document.getElementById("dynamic-paragraph");

    let index = 0;

    function typeHeading() {
        if (index < headingText.length) {
            headingElement.innerHTML += headingText.charAt(index);
            index++;
            setTimeout(typeHeading, 10); // Decreased delay for faster typing
        } else {
            paragraphElement.style.opacity = 1;
        }
    }

    if (headingElement && paragraphElement) {
        headingElement.style.opacity = 1;
        typeHeading();
    }

    // New functionality for instrument gallery
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const info = item.getAttribute('data-info');
            alert(info); // Display the detailed information in an alert box (replace with a modal if needed)
        });
    });

    // Load and display the operation chart if on the operation page
    if (document.getElementById('operationChart')) {
        fetch('/data/operation.csv')
            .then(response => response.text())
            .then(data => {
                const lines = data.split('\n').slice(1);
                const labels = [];
                const rpmData = [];
                const speedData = [];

                lines.forEach(line => {
                    const [time, rpm, speed] = line.split(',');
                    labels.push(time); // Only take the time part for labels
                    rpmData.push(parseFloat(rpm));
                    speedData.push(parseFloat(speed));
                });

                const ctx = document.getElementById('operationChart').getContext('2d');
                new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: labels,
                        datasets: [
                            {
                                label: 'RPM',
                                data: rpmData,
                                borderColor: 'rgba(255, 99, 132, 1)',
                                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                                yAxisID: 'y-axis-rpm',
                                fill: false,
                                borderWidth: 1,
                                pointRadius: 0
                            },
                            {
                                label: 'Speed (knots)',
                                data: speedData,
                                borderColor: 'rgba(54, 162, 235, 1)',
                                backgroundColor: 'rgba(54, 162, 235, 0.2)', // Area fill
                                yAxisID: 'y-axis-speed',
                                fill: true,
                                borderWidth: 1,
                                pointRadius: 0
                            }
                        ]
                    },
                    options: {
                        responsive: true,
                        scales: {
                            x: {
                                title: {
                                    display: true,
                                    text: 'Time'
                                },
                                ticks: {
                                    maxRotation: 0,
                                    minRotation: 0
                                }
                            },
                            'y-axis-rpm': {
                                type: 'linear',
                                position: 'left',
                                title: {
                                    display: true,
                                    text: 'RPM'
                                }
                            },
                            'y-axis-speed': {
                                type: 'linear',
                                position: 'right',
                                title: {
                                    display: true,
                                    text: 'Speed (knots)'
                                }
                            }
                        },
                        plugins: {
                            tooltip: {
                                mode: 'index',
                                intersect: false,
                            },
                            legend: {
                                display: true,
                                position: 'top',
                            }
                        },
                        interaction: {
                            mode: 'index',
                            intersect: false
                        }
                    }
                });
            })
            .catch(error => console.error('Error fetching or processing the CSV data:', error));
    }
});
