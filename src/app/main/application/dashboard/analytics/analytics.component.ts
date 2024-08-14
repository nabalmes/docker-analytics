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
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AnalyticsComponent implements OnInit {
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
        // left: 0,
        // right: 0,
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
        'analyticsData': {
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
        'analyticsData': {
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
        'analyticsData': {
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
        'analyticsData': {
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
    'statistics': {
        'analyticsData': {
            'sales': '230k',
            'customers': '8.549k',
            'products': '1.423k',
            'revenue': '$9745'
        }
    },
    'ordersChart': {
        'series': [
            {
                'name': '2020',
                'data': [
                    45,
                    85,
                    65,
                    45,
                    65
                ]
            }
        ],
        'analyticsData': {
            'orders': '2,76k'
        }
    },
    'profitChart': {
        'series': [
            {
                'data': [
                    0,
                    20,
                    5,
                    30,
                    15,
                    45
                ]
            }
        ],
        'analyticsData': {
            'profit': '6,24k'
        }
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
        'analyticsData': {
            'currentBudget': '$25,852',
            'totalBudget': '56,800'
        }
    },
    'goalOverview': {
        'series': [
            83
        ],
        'analyticsData': {
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
        }
      }, 500);
    }
  });
}
}
