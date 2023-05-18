import { colors } from './colors';

const legendDefault = {
  display: false,
};

const tooltipDefault = {
  displayColors: false,
  backgroundColor: `${colors.white}`,
  bodyColor: `${colors.navy}`,
  titleColor: `${colors.darkGrey}`,
  borderColor: `#ccc`,
  bodyAlign: 'left',
  borderRadius: 10,
  borderWidth: 1,
  padding: { top: 10, left: 10, right: 10, bottom: 5 },
  titleFont: {
    weight: 'bold',
    family: 'Avenir, Open-Sans, Sans-Serif, Helvetica',
  },
  bodyFont: {
    weight: 'bold',
    family: 'Avenir, Open-Sans, Sans-Serif, Helvetica',
  },
};

export const tooltipCallbackLBS = (tooltipItems: any) =>
  `${tooltipItems.formattedValue} lbs`;

const biomarkerElements = {
  line: {
    borderWidth: 5,
    borderColor: `${colors.chartBlue}`,
    color: `${colors.chartBlue}`,
  },
  point: {
    pointBackgroundColor: `${colors.white}`,
    borderWidth: 3,
    radius: 7,
    hoverRadius: 8,
    hoverBorderWidth: 4,
  },
};

const yAxisTicksBiomakers = {
  font: {
    weight: 600,
    size: 12,
    family: 'Avenir, Open-Sans, Sans-Serif, Helvetica',
  },
  color: `${colors.grey65}`,
  padding: 4,
  beginAtZero: true,
  autoSkip: true,
  maxTicksLimit: 5,
  maxRotation: 0,
  minRotation: 0,
};

export const ticksCallbackLBS = (value: any) => `${value} lbs`;

const xAxisBiomarkers = {
  grid: {
    tickColor: 'transparent',
    borderDash: [0],
    borderDashOffset: 0,
    lineWidth: 1,
    color: function (context: any) {
      if (context.tick?.value === 0) {
        return `${colors.grey65}`;
      }
      return 'transparent';
    },
  },
  ticks: {
    font: {
      weight: 600,
      size: 12,
      family: 'Avenir, Open-Sans, Sans-Serif, Helvetica',
    },
    color: colors.grey65,
    padding: 2,
    maxRotation: 45,
    minRotation: 45,
    autoSkip: false,
  },
};

export const biomarkerChartConfig = {
  animation: {
    easing: 'easeInSine',
  },
  plugins: {
    backgrounds: {
      hbars: [],
    },
    legend: legendDefault,
    tooltip: { ...tooltipDefault, callbacks: { label: tooltipCallbackLBS } },
  },
  responsive: true,
  maintainAspectRatio: false,
  elements: biomarkerElements,
  scales: {
    y: {
      grid: {
        color: function (context: any) {
          if (context.index === 0) {
            return colors.grey65;
          }
          return 'transparent';
        },
      },
      ticks: {
        ...yAxisTicksBiomakers,
        callback: ticksCallbackLBS,
      },
    },
    x: xAxisBiomarkers,
  },
};
