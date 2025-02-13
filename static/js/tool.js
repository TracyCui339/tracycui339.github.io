document.addEventListener('DOMContentLoaded', function() {
    const groupData = {
        group1: {
            name: 'Hull Structure',
            components: [
                { 
                    name: 'Wing', 
                    defaultAmount: 1319,
                    unit: 'kg',
                    formulas: {
                        co2: '84968.30251/amount',
                        ch4: '168.5879018/amount',
                        n2o: '17.81306132/amount',
                        co2eq: '94409.22501/amount'
                    }
                },
                { 
                    name: 'Fuselage',
                    defaultAmount: 1080,
                    unit: 'kg',
                    formulas: {
                        co2: '74506.01421/amount',
                        ch4: '147.8293993/amount',
                        n2o: '15.61971369/amount',
                        co2eq: '82784.46024/amount'
                    }
                },
                { 
                    name: 'Tail',
                    defaultAmount: 568,
                    unit: 'kg',
                    formulas: {
                        co2: '43434.52434/amount',
                        ch4: '86.17961802/amount',
                        n2o: '9.10577463/amount',
                        co2eq: '48260.58261/amount'
                    }
                }
            ]
        },
        group2: {
            name: 'Propulsion',
            components: [
                {
                    name: 'Engine',
                    defaultAmount: 460,
                    unit: 'kg',
                    formulas: {
                        co2: '1923.277614/amount',
                        ch4: '3.816027012/amount',
                        n2o: '0.403202854/amount',
                        co2eq: '2136.975127/amount'
                    }
                },
                {
                    name: 'Alternator',
                    defaultAmount: 13.4,
                    unit: 'kg',
                    formulas: {
                        co2: '81.42848657/amount',
                        ch4: '0.161564457/amount',
                        n2o: '0.017070962/amount',
                        co2eq: '90.47609618/amount'
                    }
                },
                {
                    name: 'Engine_Coolant Pump',
                    defaultAmount: 1.81,
                    unit: 'kg',
                    formulas: {
                        co2: '20.50481577/amount',
                        ch4: '0.040684158/amount',
                        n2o: '0.004298704/amount',
                        co2eq: '22.78312864/amount'
                    }
                },
                {
                    name: 'Gearbox',
                    defaultAmount: 40,
                    unit: 'kg',
                    formulas: {
                        co2: '82.16545584/amount',
                        ch4: '0.163026698/amount',
                        n2o: '0.017225462/amount',
                        co2eq: '91.29495093/amount'
                    }
                },
                {
                    name: 'Propeller',
                    defaultAmount: 103.6,
                    unit: 'kg',
                    formulas: {
                        co2: '651.6127814/amount',
                        ch4: '1.292882503/amount',
                        n2o: '0.136606453/amount',
                        co2eq: '724.0142015/amount'
                    }
                },
                {
                    name: 'Fuel System',
                    defaultAmount: 78.26,
                    unit: 'kg',
                    formulas: {
                        co2: '518.7576977/amount',
                        ch4: '1.029281146/amount',
                        n2o: '0.108754234/amount',
                        co2eq: '576.3974419/amount'
                    }
                },
                
                {
                    name: 'Radiator',
                    defaultAmount: 11,
                    unit: 'kg',
                    formulas: {
                        co2: '86.68873403/amount',
                        ch4: '0.172001456/amount',
                        n2o: '0.018173739/amount',
                        co2eq: '96.32081558/amount'
                    }
                },
                {
                    name: 'Air filter',
                    defaultAmount: 9.26,
                    unit: 'kg',
                    formulas: {
                        co2: '28.73228892/amount',
                        ch4: '0.05700851/amount',
                        n2o: '0.006039408/amount',
                        co2eq: '32.0088638/amount'
                    }
                }
            ]
        },
        group3: {
            name: 'Electric',
            components: [
                {
                    name: 'Wires',
                    defaultAmount: 79,
                    unit: 'kg',
                    formulas: {
                        co2: '207.3766858/amount',
                        ch4: '0.411461678/amount',
                        n2o: '0.043475196/amount',
                        co2eq: '230.4185398/amount'
                    }
                },
                {
                    name: 'Codiut, Clamps, Connector',
                    defaultAmount: 6,
                    unit: 'kg',
                    formulas: {
                        co2: '482.0580995/amount',
                        ch4: '0.956464483/amount',
                        n2o: '0.101092133/amount',
                        co2eq: '539.83012635/amount'
                    }
                },
                {
                    name: 'AGM-SL 12V Battery',
                    defaultAmount: 138,
                    unit: 'kg',
                    formulas: {
                        co2: '576.4325018/amount',
                        ch4: '1.158428402/amount',
                        n2o: '0.122232099/amount',
                        co2eq: '647.8301241/amount'
                    }
                },
                {
                    name: 'Transducer',
                    defaultAmount: 9.19,
                    unit: 'kg',
                    formulas: {
                        co2: '60.49933544/amount',
                        ch4: '0.121166092/amount',
                        n2o: '0.012802455/amount',
                        co2eq: '67.22148382/amount'
                    }
                }
            ]
        },
        group4: {
            name: 'Mechanical',
            components: [
                {
                    name: 'Anchor',
                    defaultAmount: 9.5,
                    unit: 'kg',
                    formulas: {
                        co2: '19.55793507/amount',
                        ch4: '0.038805427/amount',
                        n2o: '0.004100196/amount',
                        co2eq: '21.73103896/amount'
                    }
                },
                {
                    name: 'Nylon Rope',
                    defaultAmount: 16,
                    unit: 'kg',
                    formulas: {
                        co2: '158.7091132/amount',
                        ch4: '0.314899034/amount',
                        n2o: '0.033272351/amount',
                        co2eq: '176.3434591/amount'
                    }
                },
                {
                    name: 'Chain',
                    defaultAmount: 20,
                    unit: 'kg',
                    formulas: {
                        co2: '40.09008607/amount',
                        ch4: '0.079543822/amount',
                        n2o: '0.00840463/amount',
                        co2eq: '44.54454008/amount'
                    }
                },
                {
                    name: 'Engine Driven Compressor',
                    defaultAmount: 9.8,
                    unit: 'kg',
                    formulas: {
                        co2: '26.35485858/amount',
                        ch4: '0.052291386/amount',
                        n2o: '0.005481318/amount',
                        co2eq: '29.05098294/amount'
                    }
                },
                {
                    name: 'Magnetic Clutch for Compressor',
                    defaultAmount: 4.4,
                    unit: 'kg',
                    formulas: {
                        co2: '11.27993662/amount',
                        ch4: '0.022380827/amount',
                        n2o: '0.002364767/amount',
                        co2eq: '12.53326291/amount'
                    }
                },
                {
                    name: 'Front evaporator',
                    defaultAmount: 3.7,
                    unit: 'kg',
                    formulas: {
                        co2: '21.39261436/amount',
                        ch4: '0.042445663/amount',
                        n2o: '0.004484825/amount',
                        co2eq: '23.76957152/amount'
                    }
                },
                {
                    name: 'Rear evaporator',
                    defaultAmount: 6.7,
                    unit: 'kg',
                    formulas: {
                        co2: '39.64355541/amount',
                        ch4: '0.078657848/amount',
                        n2o: '0.008311018/amount',
                        co2eq: '44.0483949/amount'
                    }
                },
                {
                    name: 'Closures',
                    defaultAmount: 23,
                    unit: 'kg',
                    formulas: {
                        co2: '248.497201/amount',
                        ch4: '0.493050002/amount',
                        n2o: '0.052095849/amount',
                        co2eq: '276.1080011/amount'
                    }
                },
                {
                    name: 'Bilge System',
                    defaultAmount: 12.5,
                    unit: 'kg',
                    formulas: {
                        co2: '118.2666405/amount',
                        ch4: '0.234656033/amount',
                        n2o: '0.024793845/amount',
                        co2eq: '131.4073783/amount'
                    }
                }
            ]
        },
        group5: {
            name: 'Outfit',
            components: [
                {
                    name: 'Pilot Seat 2 seats',
                    defaultAmount: 70,
                    unit: 'kg',
                    formulas: {
                        co2: '214.4193665/amount',
                        ch4: '0.425435251/amount',
                        n2o: '0.044951649/amount',
                        co2eq: '231.8437406/amount'
                    }
                },
                {
                    name: 'Passenger Seat 8 seats',
                    defaultAmount: 96,
                    unit: 'kg',
                    formulas: {
                        co2: '288.894624/amount',
                        ch4: '0.573203619/amount',
                        n2o: '0.060564911/amount',
                        co2eq: '320.9940267/amount'
                    }
                },
                {
                    name: 'Seat Rail',
                    defaultAmount: 15,
                    unit: 'kg',
                    formulas: {
                        co2: '28.00313204/amount',
                        ch4: '0.05556177/amount',
                        n2o: '0.005870678/amount',
                        co2eq: '31.11459115/amount'
                    }
                },
                {
                    name: 'Painting_Antifouling',
                    defaultAmount: 24.8,
                    unit: 'kg',
                    formulas: {
                        co2: '125.6462009/amount',
                        ch4: '0.249298018/amount',
                        n2o: '0.026340923/amount',
                        co2eq: '139.6068899/amount'
                    }
                },
                {
                    name: 'Painting_Epoxy Primer',
                    defaultAmount: 49.8,
                    unit: 'kg',
                    formulas: {
                        co2: '210.4933002/amount',
                        ch4: '0.417645437/amount',
                        n2o: '0.044128574/amount',
                        co2eq: '233.8814447/amount'
                    }
                },
                {
                    name: 'Painting_Topcoat',
                    defaultAmount: 49.6,
                    unit: 'kg',
                    formulas: {
                        co2: '209.2616006/amount',
                        ch4: '0.415201589/amount',
                        n2o: '0.043870357/amount',
                        co2eq: '232.5128896/amount'
                    }
                },
                {
                    name: 'Sound Insulation',
                    defaultAmount: 45,
                    unit: 'kg',
                    formulas: {
                        co2: '96.22269664/amount',
                        ch4: '0.190918049/amount',
                        n2o: '0.020172473/amount',
                        co2eq: '106.9141074/amount'
                    }
                },
                {
                    name: 'Interior',
                    defaultAmount: 30,
                    unit: 'kg',
                    formulas: {
                        co2: '86.68507709/amount',
                        ch4: '0.171994201/amount',
                        n2o: '0.018172972/amount',
                        co2eq: '96.31675232/amount'
                    }
                }
            ]
        },
        group6: {
            name: 'Safety',
            components: [
                {
                    name: 'Lifejacket',
                    defaultAmount: 12,
                    unit: 'kg',
                    formulas: {
                        co2: '31.73681774/amount',
                        ch4: '0.062969876/amount',
                        n2o: '0.006653421/amount',
                        co2eq: '35.26313082/amount'
                    }
                },
                {
                    name: 'Liferaft',
                    defaultAmount: 42,
                    unit: 'kg',
                    formulas: {
                        co2: '137.0985513/amount',
                        ch4: '0.272020935/amount',
                        n2o: '0.028741835/amount',
                        co2eq: '152.3317237/amount'
                    }
                }
            ]
        },
        group7: {
            name: 'Other Parts',
            components: [
                {
                    name: 'Other Parts',
                    defaultAmount: 628,
                    unit: 'kg',
                    formulas: {
                        co2: '530.2051572/amount',
                        ch4: '1.05199436/amount',
                        n2o: '0.111154121/amount',
                        co2eq: '589.1168414/amount'
                    }
                }
            ]
        }
    };

    function initializeCharts() {
        const barCtx = document.getElementById('emissionBarChart').getContext('2d');
        const pieCtx = document.getElementById('emissionPieChart').getContext('2d');
        
        const chartContainer = document.querySelector('.chart-box:first-child');
        const pieContainer = document.querySelector('.chart-box:last-child');
        
        const buttonContainer = document.createElement('div');
        buttonContainer.className = 'group-button-container';
        
        const groupNames = ['Hull Structure', 'Propulsion', 'Electric', 'Mechanical', 'Outfit', 'Safety', 'Other Parts'];
        groupNames.forEach((name, index) => {
            const button = document.createElement('button');
            button.className = 'group-switch-btn';
            button.title = name;  // 添加悬停
            button.dataset.groupId = index + 1;
            button.addEventListener('click', () => showComponentDistribution(index + 1, 'bar'));
            buttonContainer.appendChild(button);
        });
        
        chartContainer.appendChild(buttonContainer);

  
        const refreshBtn = document.createElement('button');
        refreshBtn.className = 'chart-refresh-btn';
        refreshBtn.innerHTML = '↺';
        refreshBtn.style.display = 'none';
        refreshBtn.addEventListener('click', () => {
            barChart.data.labels = groupNames;
            refreshBtn.style.display = 'none';
            calculateEmissions();
        });
        chartContainer.insertBefore(refreshBtn, chartContainer.firstChild);

        
        const pieRefreshBtn = document.createElement('button');
        pieRefreshBtn.className = 'chart-refresh-btn';
        pieRefreshBtn.innerHTML = '↺';
        pieRefreshBtn.style.display = 'none';
        pieRefreshBtn.addEventListener('click', () => {
            pieChart.data.labels = groupNames;
            pieRefreshBtn.style.display = 'none';
            calculateEmissions();
        });
        pieContainer.insertBefore(pieRefreshBtn, pieContainer.firstChild);

        
        const emissionSelectorBar = document.createElement('select');
        emissionSelectorBar.className = 'emission-selector';
        emissionSelectorBar.innerHTML = `
            <option value="co2" selected>CO2</option>
            <option value="ch4">CH4</option>
            <option value="n2o">N2O</option>
            <option value="co2eq">CO2eq</option>
        `;
        chartContainer.insertBefore(emissionSelectorBar, chartContainer.firstChild);

        const emissionSelectorPie = document.createElement('select');
        emissionSelectorPie.className = 'emission-selector';
        emissionSelectorPie.innerHTML = emissionSelectorBar.innerHTML;
        pieContainer.insertBefore(emissionSelectorPie, pieContainer.firstChild);

        
        emissionSelectorBar.addEventListener('change', calculateEmissions);
        emissionSelectorPie.addEventListener('change', calculateEmissions);

       
        const barChart = new Chart(barCtx, {
            type: 'bar',
            data: {
                labels: ['Hull Structure', 'Propulsion', 'Electric', 'Mechanical', 'Outfit', 'Safety', 'Other Parts'],
                datasets: [{
                    data: [0, 0, 0, 0, 0, 0, 0],
                    backgroundColor: [
                        'rgba(10, 54, 113, 0.7)',
                        'rgba(30, 136, 229, 0.7)',
                        'rgba(0, 150, 136, 0.7)',
                        'rgba(76, 175, 80, 0.7)',
                        'rgba(156, 39, 176, 0.7)',
                        'rgba(255, 152, 0, 0.7)',
                        'rgba(244, 67, 54, 0.7)'
                    ]
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        enabled: false  // 禁用悬停提示
                    },
                    datalabels: {
                        anchor: function(context) {
                            const value = context.dataset.data[context.dataIndex];
                            // 根据数值大小动态调整标签位置
                            return value > 100 ? 'center' : 'end';
                        },
                        align: function(context) {
                            const value = context.dataset.data[context.dataIndex];
                            // 根据数值大小动态调整标签位置
                            return value > 100 ? 'center' : 'top';
                        },
                        color: function(context) {
                            const value = context.dataset.data[context.dataIndex];
                            // 根据数值大小动态调整标签颜色
                            return value > 100 ? 'white' : 'black';
                        },
                        formatter: function(value) {
                            return value.toFixed(2);
                        },
                        font: {
                            size: 11
                        },
                        // 添加偏移量设置
                        offset: function(context) {
                            const value = context.dataset.data[context.dataIndex];
                            return value > 100 ? 0 : 4;  // 当标签在外部时添加一点偏移
                        }
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            callback: function(value, index) {
                                return this.getLabelForValue(index);
                            },
                            font: {
                                weight: 'bold'
                            }
                        }
                    },
                    y: {
                        beginAtZero: true,
                        // 添加上边距以防止标签溢出
                        ticks: {
                            padding: 20
                        }
                    }
                },
                onClick: null
            }
        });

        // 饼图
        const pieChart = new Chart(pieCtx, {
            type: 'pie',
            data: {
                labels: groupNames,
                datasets: [{
                    data: [0, 0, 0, 0, 0, 0, 0],
                    backgroundColor: [
                        'rgba(10, 54, 113, 0.7)',
                        'rgba(30, 136, 229, 0.7)',
                        'rgba(0, 150, 136, 0.7)',
                        'rgba(76, 175, 80, 0.7)',
                        'rgba(156, 39, 176, 0.7)',
                        'rgba(255, 152, 0, 0.7)',
                        'rgba(244, 67, 54, 0.7)'
                    ]
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                aspectRatio: 1,
                plugins: {
                    title: {
                        display: false
                    },
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `${context.label}: ${context.raw}%`;
                            }
                        }
                    },
                    datalabels: {
                        display: false  // 禁用饼图的数值标签
                    }
                }
            }
        });

        
        const pieButtonContainer = document.createElement('div');
        pieButtonContainer.className = 'group-button-container pie-buttons';

        
        groupNames.forEach((name, index) => {
            const buttonWrapper = document.createElement('div');
            buttonWrapper.className = 'button-label-wrapper';

            const button = document.createElement('button');
            button.className = 'group-switch-btn';
            button.title = name;
            button.dataset.groupId = index + 1;
            button.style.backgroundColor = pieChart.data.datasets[0].backgroundColor[index];
            button.addEventListener('click', () => showComponentDistribution(index + 1, 'pie'));

            const label = document.createElement('span');
            label.className = 'group-button-label';
            label.textContent = name;

            buttonWrapper.appendChild(button);
            buttonWrapper.appendChild(label);
            pieButtonContainer.appendChild(buttonWrapper);
        });

        pieContainer.appendChild(pieButtonContainer);

        return { barChart, pieChart };
    }

    
    function calculateEmissions() {
        const barSelector = document.querySelector('.chart-box:first-child .emission-selector');
        const pieSelector = document.querySelector('.chart-box:last-child .emission-selector');
        const barType = barSelector.value;
        const pieType = pieSelector.value;

        const groupEmissions = Array(7).fill(0);

        // 遍历所有组
        for (let groupId = 1; groupId <= 7; groupId++) {
            const group = groupData[`group${groupId}`];
            
            // 计算该组所有组件的排放量总和
            group.components.forEach((component, componentIndex) => {
                // 查找对应的输入框，如果找不到就使用默认值
                const input = document.querySelector(`.step-input[data-group="${groupId}"][data-component="${componentIndex}"]`);
                const amount = input ? parseFloat(input.value) : component.defaultAmount;
                
                // 计算并累加排放量
                const emission = calculateEmission(component.formulas[barType], amount);
                groupEmissions[groupId - 1] += emission;
            });
        }

        // 更新图表
        const { barChart, pieChart } = window.charts;
        const barRefreshBtn = document.querySelector('.chart-box:first-child .chart-refresh-btn');
        const pieRefreshBtn = document.querySelector('.chart-box:last-child .chart-refresh-btn');

        if (barRefreshBtn.style.display === 'none') {
            barChart.data.datasets[0].data = groupEmissions;
            barChart.update();
        }

        if (pieRefreshBtn.style.display === 'none') {
            const total = groupEmissions.reduce((a, b) => a + b, 0);
            pieChart.data.datasets[0].data = groupEmissions.map(value => ((value / total) * 100).toFixed(2));
            pieChart.update();
        }
    }

   
    window.charts = initializeCharts();
    showGroupComponents(1);
    document.querySelector('.stage[data-group="1"]').classList.add('active');
    calculateEmissions();

    
    document.getElementById('calculateBtn').addEventListener('click', calculateEmissions);

    
    document.addEventListener('input', function(e) {
        if (e.target.classList.contains('step-input')) {
            const groupId = e.target.dataset.group;
            const componentIndex = e.target.dataset.component;
            const amount = parseFloat(e.target.value) || 0;
            const component = groupData[`group${groupId}`].components[componentIndex];
            
            
            const row = e.target.closest('.step-row');
            const emissions = row.querySelectorAll('.step-emission');
            emissions[0].textContent = calculateEmission(component.formulas.co2, amount).toFixed(2);
            emissions[1].textContent = calculateEmission(component.formulas.ch4, amount).toFixed(2);
            emissions[2].textContent = calculateEmission(component.formulas.n2o, amount).toFixed(2);
            emissions[3].textContent = calculateEmission(component.formulas.co2eq, amount).toFixed(2);
        }
    });

    
    document.querySelectorAll('.stage').forEach(stage => {
        stage.addEventListener('click', function() {
            const groupId = this.dataset.group;
            
            document.querySelectorAll('.stage').forEach(s => s.classList.remove('active'));
            this.classList.add('active');
            
            showGroupComponents(groupId);
        });
    });

    function showGroupComponents(groupId) {
        const container = document.querySelector('.steps-container');
        const group = groupData[`group${groupId}`];
        
        container.innerHTML = '';
        
        const header = document.createElement('div');
        header.className = 'step-row header';
        header.innerHTML = `
            <div class="step-label">Component</div>
            <div class="step-input-header">Amount</div>
            <div class="step-emission-header">kg CO2/kg Item</div>
            <div class="step-emission-header">kg CH4/kg Item</div>
            <div class="step-emission-header">kg N2O/kg Item</div>
            <div class="step-emission-header">kg CO2eq/kg Item</div>
        `;
        container.appendChild(header);
        
        group.components.forEach((component, index) => {
            const row = document.createElement('div');
            row.className = 'step-row';
            row.innerHTML = `
                <label class="step-label">${component.name}</label>
                <div class="step-input-container">
                    <input type="number" class="step-input" value="${component.defaultAmount}" min="0" step="0.1"
                        data-group="${groupId}" data-component="${index}">
                    <span class="input-unit">${component.unit}</span>
                </div>
                <div class="step-emission">${calculateEmission(component.formulas.co2, component.defaultAmount).toFixed(2)}</div>
                <div class="step-emission">${calculateEmission(component.formulas.ch4, component.defaultAmount).toFixed(2)}</div>
                <div class="step-emission">${calculateEmission(component.formulas.n2o, component.defaultAmount).toFixed(2)}</div>
                <div class="step-emission">${calculateEmission(component.formulas.co2eq, component.defaultAmount).toFixed(2)}</div>
            `;
            container.appendChild(row);
        });
    }

   
    document.querySelector('.reset-btn').addEventListener('click', function() {
        // 重置所有输入值为各自的默认值
        document.querySelectorAll('.step-input').forEach(input => {
            const groupId = input.dataset.group;
            const componentIndex = input.dataset.component;
            const defaultAmount = groupData[`group${groupId}`].components[componentIndex].defaultAmount;
            input.value = defaultAmount;
            input.dispatchEvent(new Event('input'));
        });

        // 计算并更新图表
        calculateEmissions();

        // 重新显示第一个group
        document.querySelectorAll('.group').forEach(g => g.classList.remove('active'));
        document.querySelector('.group[data-group="1"]').classList.add('active');
        showGroupComponents(1);
    });


    function calculateEmission(formula, amount) {
        return eval(formula.replace('amount', amount));
    }


    const timelinePoints = document.querySelectorAll('.timeline-point');
    
    timelinePoints.forEach(point => {
        point.addEventListener('click', function() {
           
            timelinePoints.forEach(p => p.classList.remove('active'));
            
            this.classList.add('active');
        });
    });

   
    function showComponentDistribution(groupId, chartType) {
        const { barChart, pieChart } = window.charts;
        const group = groupData[`group${groupId}`];
        const emissionType = document.querySelector(`.chart-box:${chartType === 'bar' ? 'first' : 'last'}-child .emission-selector`).value;
        
        
        const componentData = group.components.map(component => {
            const input = document.querySelector(`.step-input[data-group="${groupId}"][data-component="${group.components.indexOf(component)}"]`);
            const amount = input ? (parseFloat(input.value) || 1) : 1;
            return calculateEmission(component.formulas[emissionType], amount);
        });

        if (chartType === 'bar') {
            barChart.data.labels = group.components.map(c => c.name);
            barChart.data.datasets[0].data = componentData;
            barChart.update();
            document.querySelector('.chart-box:first-child .chart-refresh-btn').style.display = 'block';
        } else {
            // 更新
            const total = componentData.reduce((a, b) => a + b, 0);
            pieChart.data.labels = group.components.map(c => c.name);
            pieChart.data.datasets[0].data = componentData.map(value => ((value / total) * 100).toFixed(2));
            pieChart.options.plugins.title.text = `${group.name} Components Distribution`;
            pieChart.update();
            document.querySelector('.chart-box:last-child .chart-refresh-btn').style.display = 'block';
        }
    }
});
