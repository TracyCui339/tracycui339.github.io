document.addEventListener("DOMContentLoaded", () => {
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

    // Map functionality
    function initializeMap() {
        var map = L.map('map').setView([1.302563, 103.970317], 12);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        var routeData = [];
        var polylineBackground;
        var polylineForeground;
        var marker;
        var index = 0;
        var interpolating = false;
        var animationFrame;

        var customIcon = L.icon({
            iconUrl: '/images/custom-icon.png',
            iconSize: [64, 32],
            iconAnchor: [32, 16],
            popupAnchor: [0, -16]
        });

        function loadCSV() {
            fetch('/data/gps-short.csv')
                .then(response => response.text())
                .then(data => {
                    let lines = data.split('\n');
                    for (let i = 1; i < lines.length; i++) {
                        let line = lines[i].split(',');
                        if (line.length < 6) continue; // assuming Mode is the 6th column
                        let datetime = line[0].trim();
                        let lat = parseFloat(line[2].trim());
                        let lng = parseFloat(line[3].trim());
                        let speed = parseFloat(line[1].trim());
                        let rpm = parseFloat(line[4].trim());
                        let mode = line[5].trim();
                        routeData.push([lat, lng, speed, datetime, rpm, mode]);
                    }
                })
                .catch(error => console.error('Error loading the CSV file:', error));
        }

        function startRoute() {
            if (polylineBackground) {
                map.removeLayer(polylineBackground);
            }
            if (polylineForeground) {
                map.removeLayer(polylineForeground);
            }
            if (marker) {
                map.removeLayer(marker);
            }

            polylineBackground = L.polyline([], { color: '#A0A0FF', weight: 8 }).addTo(map); // Background polyline with lighter color
            polylineForeground = L.polyline([], { color: '#5932EA', weight: 4 }).addTo(map); // Foreground polyline with main color
            marker = L.marker(routeData[0].slice(0, 2), { icon: customIcon }).addTo(map);
            marker.on('click', function() {
                marker.bindPopup(createPopupContent(routeData[index - 1])).openPopup();
            });

            index = 0;
            interpolating = false;
            updateRoute();
        }

        function createPopupContent(point) {
            return 'Time: ' + point[3] + '<br>Speed: ' + point[2] + ' knots<br>Lat: ' + point[0] + '<br>Lng: ' + point[1] + '<br>RPM: ' + point[4] + '<br>Mode: ' + point[5];
        }

        function interpolatePoint(lat1, lng1, lat2, lng2, fraction) {
            var lat = lat1 + (lat2 - lat1) * fraction;
            var lng = lng1 + (lng2 - lng1) * fraction;
            return [lat, lng];
        }

        function updateRoute() {
            if (index >= routeData.length - 1) return;

            if (!interpolating) {
                var point = routeData[index];
                polylineBackground.addLatLng(point.slice(0, 2));
                polylineForeground.addLatLng(point.slice(0, 2));
                document.getElementById('current-speed').innerText = point[2] + ' knots';
                document.getElementById('current-datetime').innerText = point[3];
                document.getElementById('current-mode').innerText = point[5]; // Display the mode

                index++;
                interpolating = true;
                animationFrame = requestAnimationFrame(animateStep);
            }
        }

        function animateStep() {
            if (!interpolating || index >= routeData.length) return;

            var start = routeData[index - 1];
            var end = routeData[index];
            var numSteps = 10;
            var step = 0;

            function animate() {
                if (step >= numSteps) {
                    interpolating = false;
                    updateRoute();
                    return;
                }

                var fraction = step / numSteps;
                var interpolatedPoint = interpolatePoint(start[0], start[1], end[0], end[1], fraction);
                marker.setLatLng(interpolatedPoint);
                map.setView(interpolatedPoint, map.getZoom());

                marker.on('click', function() {
                    marker.bindPopup(createPopupContent(routeData[index - 1])).openPopup();
                });

                step++;
                animationFrame = requestAnimationFrame(animate);
            }

            animate();
        }

        document.getElementById('start-btn').addEventListener('click', startRoute);
        document.getElementById('stop-btn').addEventListener('click', () => {
            if (polylineBackground) {
                map.removeLayer(polylineBackground);
            }
            if (polylineForeground) {
                map.removeLayer(polylineForeground);
            }
            if (marker) {
                map.removeLayer(marker);
            }
            if (animationFrame) {
                cancelAnimationFrame(animationFrame);
            }
            index = 0;
            interpolating = false;
            document.getElementById('current-speed').innerText = '-';
            document.getElementById('current-datetime').innerText = '-';
            document.getElementById('current-mode').innerText = '-';

            // Reset map view and clear polyline layers
            map.setView([1.302563, 103.970317], 12);
        });

        loadCSV();

        // Ensure map is resized properly
        function resizeMap() {
            map.invalidateSize();
        }

        window.addEventListener('resize', resizeMap);
        setTimeout(resizeMap, 1000); // Give some time for the map to render correctly
    }

    initializeMap();
});
