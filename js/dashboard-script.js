var map, polyline, marker;
var tracking = false;
var index = 0;
var routeData = [];
var operationChart, energyChart, emissionChart;

document.addEventListener('DOMContentLoaded', function() {

    map = L.map('map').setView([1.302563, 103.970317], 12);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    polyline = L.polyline([], { color: '#2981CA' }).addTo(map);

    loadCSV();

    document.getElementById('start-tracking').addEventListener('click', startTracking);
    document.getElementById('stop-tracking').addEventListener('click', stopTracking);
    
    // Initialize the operation chart
    var ctxOperation = document.getElementById('operationChart').getContext('2d');
    operationChart = new Chart(ctxOperation, {
        type: 'line',
        data: {
            labels: [], 
            datasets: [
                {
                    label: 'Speed (knots)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderWidth: 1, 
                    data: [],
                    yAxisID: 'left-y-axis',
                    pointRadius: 0
                },
                {
                    label: 'RPM',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderWidth: 1, 
                    data: [],
                    yAxisID: 'right-y-axis',
                    pointRadius: 0 
                }
            ]
        },
        options: {
            responsive: true,
            interaction: {
                mode: 'index',
                intersect: false
            },
            plugins: {
                tooltip: {
                    mode: 'index',
                    intersect: false
                },
                legend: {
                    labels: {
                        font: {
                            size: 10 
                        }
                    }
                }
            },
            scales: {
                x: {
                    type: 'category',
                    title: {
                        display: true,
                        text: 'Time',
                        font: {
                            size: 10 
                        }
                    },
                    ticks: {
                        font: {
                            size: 8 
                        }
                    }
                },
                'left-y-axis': {
                    type: 'linear',
                    position: 'left',
                    title: {
                        display: true,
                        text: 'Speed (knots)',
                        font: {
                            size: 10 
                        }
                    },
                    ticks: {
                        font: {
                            size: 8 
                        }
                    }
                },
                'right-y-axis': {
                    type: 'linear',
                    position: 'right',
                    title: {
                        display: true,
                        text: 'RPM',
                        font: {
                            size: 10
                        }
                    },
                    ticks: {
                        font: {
                            size: 8 
                        }
                    },
                    grid: {
                        drawOnChartArea: false
                    }
                }
            }
        }
    });

    // Initialize the energy chart
    var ctxEnergy = document.getElementById('energyChart').getContext('2d');
    energyChart = new Chart(ctxEnergy, {
        type: 'line',
        data: {
            labels: [], 
            datasets: [
                {
                    label: 'DG1',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderWidth: 1, 
                    data: [],
                    pointRadius: 0 
                },
                {
                    label: 'DG2',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderWidth: 1, 
                    data: [],
                    pointRadius: 0 
                },
                {
                    label: 'DG3',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderWidth: 1, 
                    data: [],
                    pointRadius: 0 
                }
            ]
        },
        options: {
            responsive: true,
            interaction: {
                mode: 'index',
                intersect: false
            },
            plugins: {
                tooltip: {
                    mode: 'index',
                    intersect: false
                },
                legend: {
                    labels: {
                        font: {
                            size: 10 
                        }
                    }
                }
            },
            scales: {
                x: {
                    type: 'category',
                    title: {
                        display: true,
                        text: 'Time',
                        font: {
                            size: 10
                        }
                    },
                    ticks: {
                        font: {
                            size: 8 
                        }
                    }
                },
                y: {
                    type: 'linear',
                    title: {
                        display: true,
                        text: 'Energy',
                        font: {
                            size: 10 
                        }
                    },
                    ticks: {
                        font: {
                            size: 8 
                        }
                    }
                }
            }
        }
    });

    // Initialize the emission chart
    var ctxEmission = document.getElementById('emissionChart').getContext('2d');
    emissionChart = new Chart(ctxEmission, {
        type: 'line',
        data: {
            labels: [], 
            datasets: [
                {
                    label: 'Emission(kg/min)',
                    borderColor: 'rgba(153, 102, 255, 1)',
                    backgroundColor: 'rgba(153, 102, 255, 0.2)',
                    borderWidth: 1, 
                    data: [],
                    pointRadius: 0 
                }
            ]
        },
        options: {
            responsive: true,
            interaction: {
                mode: 'index',
                intersect: false
            },
            plugins: {
                tooltip: {
                    mode: 'index',
                    intersect: false
                },
                legend: {
                    labels: {
                        font: {
                            size: 10 
                        }
                    }
                }
            },
            scales: {
                x: {
                    type: 'category',
                    title: {
                        display: true,
                        text: 'Time',
                        font: {
                            size: 10 
                        }
                    },
                    ticks: {
                        font: {
                            size: 8 
                        }
                    }
                },
                y: {
                    type: 'linear',
                    title: {
                        display: true,
                        text: 'Emission (kg/min)',
                        font: {
                            size: 10 
                        }
                    },
                    ticks: {
                        font: {
                            size: 8 
                        }
                    }
                }
            }
        }
    });
});

function loadCSV() {
    fetch('/data/gps-short.csv')
        .then(response => response.text())
        .then(data => {
            let lines = data.split('\n');
            for (let i = 1; i < lines.length; i++) {
                let line = lines[i].split(',');
                if (line.length < 10) continue; 
                let datetime = line[0].trim();
                let time = datetime.split(' ')[1];
                let lat = parseFloat(line[3].trim());
                let lng = parseFloat(line[4].trim());
                let speed = parseFloat(line[2].trim());
                let rpm = parseFloat(line[5].trim());
                let mode = line[6].trim();
                let dg1 = parseFloat(line[7].trim());
                let dg2 = parseFloat(line[8].trim());
                let dg3 = parseFloat(line[9].trim());
                let emission = parseFloat(line[10].trim());
                routeData.push({ lat, lng, speed, time, rpm, mode, dg1, dg2, dg3, emission });
            }
        })
        .catch(error => console.error('Error loading the CSV file:', error));
}

function startTracking() {
    tracking = true;
    index = 0;
    if (routeData.length > 0) {
        map.setView([routeData[0].lat, routeData[0].lng], 12); 
    }
    updateMapAndCharts();
}

function stopTracking() {
    tracking = false;
    document.querySelector('#datetime .small-box-value').innerText = '--';
    document.querySelector('#gps .small-box-value').innerText = '--';
    document.querySelector('#mode .small-box-value').innerText = '--';
    polyline.setLatLngs([]);
    if (marker) {
        map.removeLayer(marker);
        marker = null;
    }
    operationChart.data.labels = [];
    operationChart.data.datasets[0].data = [];
    operationChart.data.datasets[1].data = [];
    operationChart.update();
    energyChart.data.labels = [];
    energyChart.data.datasets[0].data = [];
    energyChart.data.datasets[1].data = [];
    energyChart.data.datasets[2].data = [];
    energyChart.update();
    emissionChart.data.labels = [];
    emissionChart.data.datasets[0].data = [];
    emissionChart.update();
}

function updateMapAndCharts() {
    if (!tracking || index >= routeData.length) return;

    let point = routeData[index];
    polyline.addLatLng([point.lat, point.lng]);

    if (!marker) {
        marker = L.marker([point.lat, point.lng]).addTo(map);
    } else {
        marker.setLatLng([point.lat, point.lng]);
    }

    map.setView([point.lat, point.lng], map.getZoom()); 

    document.querySelector('#datetime .small-box-value').innerText = point.time;
    document.querySelector('#gps .small-box-value').innerText = point.lat + ', ' + point.lng;
    document.querySelector('#mode .small-box-value').innerText = point.mode;

    operationChart.data.labels.push(point.time);
    operationChart.data.datasets[0].data.push(point.speed);
    operationChart.data.datasets[1].data.push(point.rpm);
    operationChart.update();

    energyChart.data.labels.push(point.time);
    energyChart.data.datasets[0].data.push(point.dg1);
    energyChart.data.datasets[1].data.push(point.dg2);
    energyChart.data.datasets[2].data.push(point.dg3);
    energyChart.update();

    emissionChart.data.labels.push(point.time);
    emissionChart.data.datasets[0].data.push(point.emission);
    emissionChart.update();

    index++;
    setTimeout(updateMapAndCharts, 1000);
}

document.addEventListener('DOMContentLoaded', function() {

    var modal = document.getElementById("vesselModal");
    var btn = document.getElementById("vessel-info");
    var span = document.getElementsByClassName("close-button")[0];

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {

    var vesselModal = document.getElementById("vesselModal");
    var vesselBtn = document.getElementById("vessel-info");
    var vesselClose = vesselModal.getElementsByClassName("close-button")[0];

    var eppmModal = document.getElementById("eppmModal");
    var eppmBtn = document.getElementById("instrument-system");
    var eppmClose = eppmModal.getElementsByClassName("close-button")[0];

    vesselBtn.onclick = function() {
        vesselModal.style.display = "block";
    }

    vesselClose.onclick = function() {
        vesselModal.style.display = "none";
    }

    eppmBtn.onclick = function() {
        eppmModal.style.display = "block";
    }

    eppmClose.onclick = function() {
        eppmModal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == vesselModal) {
            vesselModal.style.display = "none";
        }
        if (event.target == eppmModal) {
            eppmModal.style.display = "none";
        }
    }
});