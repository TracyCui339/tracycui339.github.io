
document.addEventListener("DOMContentLoaded", () => {
    fetch('/data/energy1.csv')
        .then(response => response.text())
        .then(data => {
            const lines = data.split('\n').slice(1);
            const labels = [];
            const dailyFuelData = [];
            const theoreticalFuelData = [];

            lines.forEach(line => {
                const [date, dailyFuel, theoreticalFuel] = line.split(',');
                labels.push(date);
                dailyFuelData.push(dailyFuel ? parseFloat(dailyFuel) : null);
                theoreticalFuelData.push(theoreticalFuel ? parseFloat(theoreticalFuel) : null);
            });

            const ctx = document.getElementById('fuelChart').getContext('2d');
            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [
                        {
                            label: 'Daily Fuel excluding Auxi',
                            data: dailyFuelData,
                            borderColor: 'rgba(255, 99, 132, 1)',
                            backgroundColor: 'rgba(255, 99, 132, 0.2)',
                            yAxisID: 'y-axis-fuel',
                            fill: false,
                            borderWidth: 1,
                            pointRadius: 0
                        },
                        {
                            label: 'Theoretical Daily fuel from regression',
                            data: theoreticalFuelData,
                            borderColor: 'rgba(54, 162, 235, 1)',
                            backgroundColor: 'rgba(54, 162, 235, 0.2)',
                            yAxisID: 'y-axis-fuel',
                            fill: false,
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
                        'y-axis-fuel': {
                            type: 'linear',
                            position: 'left',
                            ticks: {
                                beginAtZero: true,
                                max: 2500,
                                stepSize: 500,
                                callback: function(value) { return value + ' tons'; }
                            },
                            title: {
                                display: true,
                                text: 'Fuel Consumption (tons)'
                            }
                        }
                    },
                    plugins: {
                        tooltip: {
                            mode: 'index',
                            intersect: false
                        },
                        legend: {
                            display: true,
                            position: 'top'
                        }
                    },
                    interaction: {
                        mode: 'index',
                        intersect: false
                    }
                }
            });
        });

    // Fetch data for DG Power Usage chart
    fetch('/data/energy2.csv')
        .then(response => response.text())
        .then(data => {
            const lines = data.split('\n').slice(1);
            const labels = [];
            const dg1Data = [];
            const dg2Data = [];
            const dg3Data = [];

            lines.forEach(line => {
                const [time, dg1, dg2, dg3] = line.split(',');
                labels.push(time);
                dg1Data.push(dg1 ? parseFloat(dg1) : null);
                dg2Data.push(dg2 ? parseFloat(dg2) : null);
                dg3Data.push(dg3 ? parseFloat(dg3) : null);
            });

            const ctx = document.getElementById('dgPowerChart').getContext('2d');
            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [
                        {
                            label: 'DG1',
                            data: dg1Data,
                            borderColor: 'rgba(255, 99, 132, 1)',
                            backgroundColor: 'rgba(255, 99, 132, 0.2)',
                            yAxisID: 'y-axis-dgPower',
                            fill: false,
                            borderWidth: 1,
                            pointRadius: 0
                        },
                        {
                            label: 'DG2',
                            data: dg2Data,
                            borderColor: 'rgba(54, 162, 235, 1)',
                            backgroundColor: 'rgba(54, 162, 235, 0.2)',
                            yAxisID: 'y-axis-dgPower',
                            fill: false,
                            borderWidth: 1,
                            pointRadius: 0
                        },
                        {
                            label: 'DG3',
                            data: dg3Data,
                            borderColor: 'rgba(75, 192, 192, 1)',
                            backgroundColor: 'rgba(75, 192, 192, 0.2)',
                            yAxisID: 'y-axis-dgPower',
                            fill: false,
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
                        'y-axis-dgPower': {
                            type: 'linear',
                            position: 'left',
                            ticks: {
                                beginAtZero: true,
                                max: 1,
                                stepSize: 0.05,
                                callback: function(value) { return value + ' kW'; }
                            },
                            title: {
                                display: true,
                                text: 'Power Usage (kW)'
                            }
                        }
                    },
                    plugins: {
                        tooltip: {
                            mode: 'index',
                            intersect: false
                        },
                        legend: {
                            display: true,
                            position: 'top'
                        }
                    },
                    interaction: {
                        mode: 'index',
                        intersect: false
                    }
                }
            });
        });
});
