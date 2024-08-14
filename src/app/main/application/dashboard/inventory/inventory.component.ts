import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

import { CoreConfigService } from '@core/services/config.service';
import { CoreTranslationService } from '@core/services/translation.service';

//import { User } from 'app/auth/models';
import { colors } from 'app/colors.const';
//import { AuthenticationService } from 'app/auth/service';
//import { DashboardService } from 'app/main/dashboard/dashboard.service';

// import { locale as english } from 'app/main/dashboard/i18n/en';
// import { locale as french } from 'app/main/dashboard/i18n/fr';
// import { locale as german } from 'app/main/dashboard/i18n/de';
// import { locale as portuguese } from 'app/main/dashboard/i18n/pt';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class inventoryComponent implements OnInit {
// Decorator
@ViewChild('statisticsBarChartRef') statisticsBarChartRef: any;
@ViewChild('statisticsLineChartRef') statisticsLineChartRef: any;
@ViewChild('earningChartRef') earningChartRef: any;
@ViewChild('revenueReportChartRef') revenueReportChartRef: any;
@ViewChild('budgetChartRef') budgetChartRef: any;
@ViewChild('statePrimaryChartRef') statePrimaryChartRef: any;
@ViewChild('stateWarningChartRef') stateWarningChartRef: any;
@ViewChild('stateSecondaryChartRef') stateSecondaryChartRef: any;
@ViewChild('stateInfoChartRef') stateInfoChartRef: any;
@ViewChild('stateDangerChartRef') stateDangerChartRef: any;
@ViewChild('goalChartRef') goalChartRef: any;
@ViewChild('spoilageChartRef') spoilageChartRef: any;
@ViewChild('topChartRef') topChartRef: any;
@ViewChild('gainedChartRef') gainedChartRef: any;
@ViewChild('totalCategoryChartRef') totalCategoryChartRef: any;
@ViewChild('totalProductChartRef') totalProductChartRef: any;


// Public
public data: any;
public currentUser: any;
//public currentUser: User;
public isAdmin: boolean;
public isClient: boolean;
public statisticsBar;
public statisticsLine;
public revenueReportChartoptions;
public budgetChartoptions;
public goalChartoptions;
public statePrimaryChartoptions;
public stateWarningChartoptions;
public stateSecondaryChartoptions;
public stateInfoChartoptions;
public stateDangerChartoptions;
public earningChartoptions;
public isMenuToggled = false;
public spoilageChartoptions;
public topChartoptions;
public gainedChartoptions;
public totalCategoryChartoptions;
public totalProductChartoptions;

// Private
private $barColor = '#f3f3f3';
private $trackBgColor = '#EBEBEB';
private $textMutedColor = '#b9b9c3';
private $budgetStrokeColor2 = '#dcdae3';
private $goalStrokeColor2 = '#51e5a8';
private $textHeadingColor = '#5e5873';
private $strokeColor = '#ebe9f1';
private $earningsStrokeColor2 = '#28c76f66';
private $earningsStrokeColor3 = '#28c76f33';
private $topproductColorgreen = '#e0e0e0';

/**
 * Constructor
 * @param {AuthenticationService} _authenticationService
 * @param {DashboardService} _dashboardService
 * @param {CoreConfigService} _coreConfigService
 * @param {CoreTranslationService} _coreTranslationService
 */
constructor(
  //private _authenticationService: AuthenticationService,
  //private _dashboardService: DashboardService,
  private _coreConfigService: CoreConfigService,
  private _coreTranslationService: CoreTranslationService
) {
  // this._authenticationService.currentUser.subscribe(x => (this.currentUser = x));
  // this.isAdmin = this._authenticationService.isAdmin;
  // this.isClient = this._authenticationService.isClient;
  this.isAdmin = true;

  // this._coreTranslationService.translate(english, french, german, portuguese);
  // Statistics Bar Chart
  this.statisticsBar = {
    chart: {
      height: 70,
      type: 'bar',
      stacked: true,
      toolbar: {
        show: false
      }
    },
    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0,
        top: -15,
        bottom: -15
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '20%',
        startingShape: 'rounded',
        colors: {
          backgroundBarColors: [this.$barColor, this.$barColor, this.$barColor, this.$barColor, this.$barColor],
          backgroundBarRadius: 5
        }
      }
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false
    },
    colors: [colors.solid.warning],
    series: [
      {
        name: '2020',
        data: [45, 85, 65, 45, 65]
      }
    ],
    xaxis: {
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    yaxis: {
      show: false
    },
    tooltip: {
      x: {
        show: false
      }
    }
  };

  // Statistics Line Chart
  this.statisticsLine = {
    chart: {
      height: 70,
      type: 'line',
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      }
    },
    grid: {
      // show: true,
      borderColor: this.$trackBgColor,
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: true
        }
      },
      yaxis: {
        lines: {
          show: false
        }
      },
      padding: {
        top: -30,
        bottom: -10
      }
    },
    stroke: {
      width: 3
    },
    colors: [colors.solid.info],
    series: [
      {
        data: [0, 20, 5, 30, 15, 45]
      }
    ],
    markers: {
      size: 2,
      colors: colors.solid.info,
      strokeColors: colors.solid.info,
      strokeWidth: 2,
      strokeOpacity: 1,
      strokeDashArray: 0,
      fillOpacity: 1,
      discrete: [
        {
          seriesIndex: 0,
          dataPointIndex: 5,
          fillColor: '#ffffff',
          strokeColor: colors.solid.info,
          size: 5
        }
      ],
      shape: 'circle',
      radius: 2,
      hover: {
        size: 3
      }
    },
    xaxis: {
      labels: {
        show: true,
        style: {
          fontSize: '0px'
        }
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    yaxis: {
      show: false
    },
    tooltip: {
      x: {
        show: false
      }
    }
  };


  this.gainedChartoptions = {
    series: [
      {
        name: 'Subscribers',
        data: [0,15]
      }
    ],
    chart: {
      type: 'area', 
      height: 100, 
      width: '100%',
      toolbar: {
        show: false 
      },
      sparkline: {
        enabled: true 
      }
    },
    colors: ['#7367f0'], 
    stroke: {
      curve: 'smooth',
      width: 2.5
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.5,
        stops: [0, 90, 100],
        shade: 'light'
      }
    },
    grid: {
      show: false 
    },
    dataLabels: {
      enabled: false 
    },
    markers: {
      size: 0 
    },
    tooltip: {
      enabled: true,
      x: {
        show: false 
      }
    }
  };
  
  // Revenue Report Chart
  this.revenueReportChartoptions = {
    chart: {
      height: 230,
      stacked: true,
      type: 'bar',
      toolbar: { show: false }
    },
    plotOptions: {
      bar: {
        columnWidth: '17%',
        endingShape: 'rounded'
      }
    },
    colors: [colors.solid.primary, colors.solid.warning],
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false
    },
    grid: {
      padding: {
        top: -20,
        bottom: -10
      },
      yaxis: {
        lines: { show: false }
      }
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      labels: {
        style: {
          colors: this.$textMutedColor,
          fontSize: '0.86rem'
        }
      },
      axisTicks: {
        show: false
      },
      axisBorder: {
        show: false
      }
    },
    yaxis: {
      labels: {
        style: {
          colors: this.$textMutedColor,
          fontSize: '0.86rem'
        }
      }
    }
  };


  this.totalCategoryChartoptions = {
    series: [41], 
  chart: {
    height: 200,
    type: 'radialBar'
  },
  plotOptions: {
    radialBar: {
      offsetY: -10,
      startAngle: -150,
      endAngle: 150,
      hollow: {
        margin: 15,
        size: '70%', 
        background: 'transparent', 
        image: undefined
      },
      dataLabels: {
        name: {
          offsetY: 30,
          show: true,
          color: '#888',
          fontSize: '12px'
        },
        value: {
          formatter: (val) => `${val}`, 
          offsetY: 0, 
          offsetX: 0, 
          color: '#333',
          fontSize: '30px',
          show: true
        }
      }
    }
  },
  fill: {
    colors: ['#4cab29'], 
    type: 'solid' 
  },
  stroke: {
    lineCap: 'round'
  },
  labels: ['Categories'] 
};

this.totalProductChartoptions = {
  series: [7], 
chart: {
  height: 200,
  type: 'radialBar'
},
plotOptions: {
  radialBar: {
    offsetY: -10,
    startAngle: -150,
    endAngle: 150,
    hollow: {
      margin: 15,
      size: '70%', 
      background: 'transparent', 
      image: undefined
    },
    dataLabels: {
      name: {
        offsetY: 30,
        show: true,
        color: '#888',
        fontSize: '12px'
      },
      value: {
        formatter: (val) => `${val}`, 
        offsetY: 0, 
        offsetX: 0, 
        color: '#333',
        fontSize: '30px',
        show: true
      }
    }
  }
},
fill: {
  colors: ['#4cab29'], 
  type: 'solid' 
},
stroke: {
  lineCap: 'round'
},
labels: ['Products'] 
};


  // Budget Chart
  this.budgetChartoptions = {
    chart: {
      height: 80,
      toolbar: { show: false },
      zoom: { enabled: false },
      type: 'line',
      sparkline: { enabled: true }
    },
    stroke: {
      curve: 'smooth',
      dashArray: [0, 5],
      width: [2]
    },
    colors: [colors.solid.primary, this.$budgetStrokeColor2],
    tooltip: {
      enabled: false
    }
  };

  // Goal Overview  Chart
  this.goalChartoptions = {
    chart: {
      height: 245,
      type: 'radialBar',
      sparkline: {
        enabled: true
      },
      dropShadow: {
        enabled: true,
        blur: 3,
        left: 1,
        top: 1,
        opacity: 0.1
      }
    },
    colors: [this.$goalStrokeColor2],
    plotOptions: {
      radialBar: {
        offsetY: -10,
        startAngle: -150,
        endAngle: 150,
        hollow: {
          size: '77%'
        },
        track: {
          background: this.$strokeColor,
          strokeWidth: '50%'
        },
        dataLabels: {
          name: {
            show: false
          },
          value: {
            color: this.$textHeadingColor,
            fontSize: '2.86rem',
            fontWeight: '600'
          }
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'horizontal',
        shadeIntensity: 0.5,
        gradientToColors: [colors.solid.success],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100]
      }
    },
    stroke: {
      lineCap: 'round'
    },
    grid: {
      padding: {
        bottom: 30
      }
    }
  };

  // Browser States Primary Chart
  this.statePrimaryChartoptions = {
    chart: {
      height: 30,
      width: 30,
      type: 'radialBar'
    },
    grid: {
      show: false,
      padding: {
        left: -15,
        right: -15,
        top: -12,
        bottom: -15
      }
    },
    colors: [colors.solid.primary],
    series: [54.4],
    plotOptions: {
      radialBar: {
        hollow: {
          size: '22%'
        },
        track: {
          background: this.$trackBgColor
        },
        dataLabels: {
          showOn: 'always',
          name: {
            show: false
          },
          value: {
            show: false
          }
        }
      }
    },
    stroke: {
      lineCap: 'round'
    }
  };

  // Browser States Warning Chart
  this.stateWarningChartoptions = {
    chart: {
      height: 30,
      width: 30,
      type: 'radialBar'
    },
    grid: {
      show: false,
      padding: {
        left: -15,
        right: -15,
        top: -12,
        bottom: -15
      }
    },
    colors: [colors.solid.warning],
    series: [6.1],
    plotOptions: {
      radialBar: {
        hollow: {
          size: '22%'
        },
        track: {
          background: this.$trackBgColor
        },
        dataLabels: {
          showOn: 'always',
          name: {
            show: false
          },
          value: {
            show: false
          }
        }
      }
    },
    stroke: {
      lineCap: 'round'
    }
  };

  // Browser States Secondary Chart
  this.stateSecondaryChartoptions = {
    chart: {
      height: 30,
      width: 30,
      type: 'radialBar'
    },
    grid: {
      show: false,
      padding: {
        left: -15,
        right: -15,
        top: -12,
        bottom: -15
      }
    },
    colors: [colors.solid.secondary],
    series: [14.6],
    plotOptions: {
      radialBar: {
        hollow: {
          size: '22%'
        },
        track: {
          background: this.$trackBgColor
        },
        dataLabels: {
          showOn: 'always',
          name: {
            show: false
          },
          value: {
            show: false
          }
        }
      }
    },
    stroke: {
      lineCap: 'round'
    }
  };

  this.spoilageChartoptions = {
    chart: {
      type: 'donut',
      height: 210,
      toolbar: {
        show: false
      }
    },
    dataLabels: {
      enabled: false
    },
    
    series: [53, 16, 31, 48],
    legend: { show: false },
    comparedResult: [2, -3, 8],
    labels: ['Alangilan', 'Pallocan', 'Mahabang Parang', 'Balagtas'],
    stroke: { width: 0 },
    colors: ['#328520', '#73ab67', '#6eba70', colors.solid.success],
    grid: {
      padding: {
        right: -20,
        bottom: -8,
        left: -20,
      }
    },
    plotOptions: {
      pie: {
        startAngle: -10,
        donut: {
          labels: {
            show: true,
            name: {
              offsetY: 20,
             
            },
            value: {
              offsetY: -15,
              formatter: function (val) {
                return parseInt(val) + '%';
              }
            },
            total: {
              show: true,
              offsetY: 15,
              label: 'Average',
              formatter: function (w) {
                // Calculate the average percentage
                const total = w.config.series.reduce((acc, val) => acc + val, 0);
                const average = total / w.config.series.length;
                return average + '%'; // Adjust the number of decimal places if needed
              }
            }
          }
        }
      }
    },
    responsive: [
      {
        breakpoint: 1325,
        options: {
          chart: {
            height: 250,
         
          }
          
        }
      },
      {
        breakpoint: 1200,
        options: {
          chart: {
            height: 250
          }
        }
      },
      {
        breakpoint: 1065,
        options: {
          chart: {
            height: 250
          }
        }
      },
      {
        breakpoint: 992,
        options: {
          chart: {
            height: 250
          }
        }
      },
      {
        breakpoint: 576, // Additional breakpoint for phones
        options: {
        chart: {
          height: 250
          }
        }
      }
    ]
  };
  
 
    this.topChartoptions = {
      series: [
        {
          data: [97, 84, 75, 69, 55, 45, 37, 28, 10, 5]
        }
      ],
      chart: {
        type: 'bar',
        height: 365,
        toolbar: {
          show: false // Disable the toolbar
        }
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          horizontal: true, // Ensure bars are horizontal
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: [
          'SKF DOG LACE',
          'RAINCOAT LIDA',
          'HEAD UMBRELLA',
          'HAIR BRUSH ASSORTED',
          'FACEMASK HARD CASE',
          'SUMMER BAG',
          'JANSPORT BAG-MED',
          'SANRIYO 270',
          'WRIST WATCH KIDS',
          'HAIR NET'
        ],
        title: {
          text: 'Percentage (%)',
        }
      },
      yaxis: {
        title: {
          text: 'Products',
        }
      },
      colors: ['#0b4f03', '#0b4f03', '#0b4f03', '#0b4f03', '#0b4f03', '#0b4f03', '#0b4f03', '#0b4f03', '#0b4f03', '#0b4f03'], // Customize bar colors
      responsive: [
        {
          breakpoint: 1325,
          options: {
            chart: {
              height: 333
            }
          }
        },
        {
          breakpoint: 1200,
          options: {
            chart: {
              height: 333
            }
          }
        },
        {
          breakpoint: 1065,
          options: {
            chart: {
              height: 333
            }
          }
        },
        {
          breakpoint: 992,
          options: {
            chart: {
              height: 333
            }
          }
        },
        {
          breakpoint: 576, // Additional breakpoint for phones
          options: {
            chart: {
              height: 333
            }
          }
        }
      ]
    };

  // Browser States Info Chart
  this.stateInfoChartoptions = {
    chart: {
      height: 30,
      width: 30,
      type: 'radialBar'
    },
    grid: {
      show: false,
      padding: {
        left: -15,
        right: -15,
        top: -12,
        bottom: -15
      }
    },
    colors: [colors.solid.info],
    series: [4.2],
    plotOptions: {
      radialBar: {
        hollow: {
          size: '30%'
        },
        track: {
          background: this.$trackBgColor
        },
        dataLabels: {
          showOn: 'always',
          name: {
            show: false
          },
          value: {
            show: false
          }
        }
      }
    },
    stroke: {
      lineCap: 'round'
    }
  };

  // Browser States Danger Chart
  this.stateDangerChartoptions = {
    chart: {
      height: 30,
      width: 30,
      type: 'radialBar'
    },
    grid: {
      show: false,
      padding: {
        left: -15,
        right: -15,
        top: -12,
        bottom: -15
      }
    },
    colors: [colors.solid.danger],
    series: [8.4],
    plotOptions: {
      radialBar: {
        hollow: {
          size: '22%'
        },
        track: {
          background: this.$trackBgColor
        },
        dataLabels: {
          showOn: 'always',
          name: {
            show: false
          },
          value: {
            show: false
          }
        }
      }
    },
    stroke: {
      lineCap: 'round'
    }
  };

  // Earnings Chart
  this.earningChartoptions = {
    chart: {
      type: 'donut',
      height: 120,
      toolbar: {
        show: false
      }
    },
    dataLabels: {
      enabled: false
    },
    series: [53, 16, 31],
    legend: { show: false },
    comparedResult: [2, -3, 8],
    labels: ['App', 'Service', 'Product'],
    stroke: { width: 0 },
    colors: [this.$earningsStrokeColor2, this.$earningsStrokeColor3, colors.solid.success],
    grid: {
      padding: {
        right: -20,
        bottom: -8,
        left: -20
      }
    },
    plotOptions: {
      pie: {
        startAngle: -10,
        donut: {
          labels: {
            show: true,
            name: {
              offsetY: 15
            },
            value: {
              offsetY: -15,
              formatter: function (val) {
                return parseInt(val) + '%';
              }
            },
            total: {
              show: true,
              offsetY: 15,
              label: 'App',
              formatter: function (w) {
                return '53%';
              }
            }
          }
        }
      }
    },
    responsive: [
      {
        breakpoint: 1325,
        options: {
          chart: {
            height: 100
          }
        }
      },
      {
        breakpoint: 1200,
        options: {
          chart: {
            height: 120
          }
        }
      },
      {
        breakpoint: 1065,
        options: {
          chart: {
            height: 100
          }
        }
      },
      {
        breakpoint: 992,
        options: {
          chart: {
            height: 120
          }
        }
      }
    ]
  };
}

// Lifecycle Hooks
// -----------------------------------------------------------------------------------------------------

/**
 * On init
 */
ngOnInit(): void {
  // get the currentUser details from localStorage
  this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

  // Get the dashboard service data
  // this._dashboardService.onApiDataChanged.subscribe(response => {
  //   this.data = response;
  // });

  this.data = {
    'subscribers_gained': {
        'series': [
            {
                'name': 'Subscribers',
                'data': [
                    28,
                    40,
                    36,
                    52,
                    38,
                    60,
                    55
                ]
            }
        ],
        'inventoryData': {
            'subscribers': '92.6k'
        }
    },
    'ordersRecevied': {
        'series': [
            {
                'name': 'Orders',
                'data': [
                    10,
                    15,
                    8,
                    15,
                    7,
                    12,
                    8
                ]
            }
        ],
        'inventoryData': {
            'orders': '38.4k'
        }
    },
    'avgSessions': {
        'series': [
            {
                'name': 'Sessions',
                'data': [
                    75,
                    125,
                    225,
                    175,
                    125,
                    75,
                    25
                ]
            }
        ],
        'inventoryData': {
            'avgSessions': '2.7k',
            'vsLastSevenDays': '+5.2%',
            'goal': '$100000',
            'goalProgressbar': 50,
            'retention': '90%',
            'retentionProgressbar': 60,
            'users': '100k',
            'usersProgressbar': 70,
            'duration': '1yr',
            'durationProgressbar': 90
        }
    },
    'supportTracker': {
        'series': [
            83
        ],
        'inventoryData': {
            'tickets': 163,
            'newTickets': 29,
            'openTickets': 63,
            'responseTime': '1d'
        }
    },
    'salesLastSixMonths': {
        'series': [
            {
                'name': 'Sales',
                'data': [
                    90,
                    50,
                    86,
                    40,
                    100,
                    20
                ]
            },
            {
                'name': 'Visit',
                'data': [
                    70,
                    75,
                    70,
                    76,
                    20,
                    85
                ]
            }
        ]
    },

    'revenueReport': {
        'earningExpenseChart': {
            'series': [
                {
                    'name': 'Earning',
                    'data': [
                        95,
                        177,
                        284,
                        256,
                        105,
                        63,
                        168,
                        218,
                        72
                    ]
                },
                {
                    'name': 'Expense',
                    'data': [
                        -145,
                        -80,
                        -60,
                        -180,
                        -100,
                        -60,
                        -85,
                        -75,
                        -100
                    ]
                }
            ]
        },
        'budgetChart': {
            'series': [
                {
                    'data': [
                        61,
                        48,
                        69,
                        52,
                        60,
                        40,
                        79,
                        60,
                        59,
                        43,
                        62
                    ]
                },
                {
                    'data': [
                        20,
                        10,
                        30,
                        15,
                        23,
                        0,
                        25,
                        15,
                        20,
                        5,
                        27
                    ]
                }
            ]
        },
        'inventoryData': {
            'currentBudget': '$25,852',
            'totalBudget': '56,800'
        }
    },
    'goalOverview': {
        'series': [
            83
        ],
        'inventoryData': {
            'completed': '786,617',
            'inProgress': '13,561'
        }
    }
};
}

/**
 * After View Init
 */
ngAfterViewInit() {
  // Subscribe to core config changes
  this._coreConfigService.getConfig().subscribe(config => {
    // If Menu Collapsed Changes
    if (
      (config.layout.menu.collapsed === true || config.layout.menu.collapsed === false) &&
      localStorage.getItem('currentUser')
    ) {
      setTimeout(() => {
        if (this.currentUser.role == 'Admin') {
          // Get Dynamic Width for Charts
          this.isMenuToggled = true;
          this.statisticsBar.chart.width = this.statisticsBarChartRef?.nativeElement.offsetWidth;
          this.statisticsLine.chart.width = this.statisticsLineChartRef?.nativeElement.offsetWidth;
          this.earningChartoptions.chart.width = this.earningChartRef?.nativeElement.offsetWidth;
          this.revenueReportChartoptions.chart.width = this.revenueReportChartRef?.nativeElement.offsetWidth;
          this.budgetChartoptions.chart.width = this.budgetChartRef?.nativeElement.offsetWidth;
          this.goalChartoptions.chart.width = this.goalChartRef?.nativeElement.offsetWidth;
          this.spoilageChartoptions.chart.width = this.spoilageChartRef?.nativeElement.offsetWidth;
          this.topChartoptions.chart.width = this.topChartRef?.nativeElement.offsetWidth;
          this.gainedChartoptions.chart.width = this.gainedChartRef?.nativeElement.offsetWidth;  
          this.totalCategoryChartoptions.chart.width = this.totalCategoryChartRef?.nativeElement.offsetWidth;  
          this.totalProductChartoptions.chart.width = this.totalProductChartRef?.nativeElement.offsetWidth;  
          
        }
      }, 500);
    }
  });
}
}
