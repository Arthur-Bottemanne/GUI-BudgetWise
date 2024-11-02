const lineChartOptions = {
  chart: {
    height: "100%",
    maxWidth: "100%",
    type: "line",
    fontFamily: "Lato",
    dropShadow: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    enabled: true,
    x: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: 3,
  },
  grid: {
    show: true,
    strokeDashArray: 4,
    padding: {
      left: 2,
      right: 2,
      top: -26,
    },
  },
  series: [
    {
      name: "Balance",
      data: [510.24, 653.74, 568.52, 500.0, 488.12, 560.42],
      color: "#2E7D32",
    },
  ],
  legend: {
    show: false,
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    categories: [
      "aaaa 10 Oct",
      "11 Oct",
      "12 Oct",
      "13 Oct",
      "14 Oct",
      "15 Oct",
    ],
    labels: {
      show: true,
      style: {
        fontFamily: "Lato",
        cssClass: "text-xs font-normal text-secondary-gray",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
};

const donutChartOptions = {
  series: [35.1, 33, 18.8],
  colors: ["#595959", "#02A8B9", "#B602B9"],
  chart: {
    height: 320,
    width: "100%",
    type: "donut",
  },
  stroke: {
    colors: ["transparent"],
  },
  plotOptions: {
    pie: {
      donut: {
        size: "70%",
      },
    },
  },
  grid: {
    padding: {
      top: -2,
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  yaxis: {
    labels: {
      formatter: function (value) {
        return value + "k";
      },
    },
  },
  xaxis: {
    labels: {
      formatter: function (value) {
        return value + "k";
      },
    },
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
  },
};

var lineChart = new ApexCharts(
  document.querySelector("#line-chart"),
  lineChartOptions
);

var donutChart = new ApexCharts(
  document.querySelector("#donut-chart"),
  donutChartOptions
);

lineChart.render();

donutChart.render();
