import React, { useState, useEffect } from 'react';

import * as R from 'ramda';
import { Line } from 'react-chartjs-2';

import {
  biomarkerChartConfig,
  styledBiomarckerChartElements,
} from 'components/Charts/utils/customViewChart';
import { getYearFromDateArray } from 'pages/Biomarkers/Biomarkers.helper';
import { colors } from '../utils/colors';
import { formatDateDespiteTimeZone } from 'utils/helpers';

const NORMAL_RANGE_LINE_CONFIG = {
  type: 'line',
  borderDash: [4],
  borderColor: `${colors.grey40}`,
  borderWidth: 1,
  label: {
    enabled: true,
    labelX: 10,
    labelY: 10,
    labelWidth: 20,
    labelHeight: 100,
    backgroundColor: 'transparent',
    color: colors.grey40,
  },
};


function BiomarkersGraph({
	graphData,
	unit,
	max,
	min,
	dateOptions,
	selectedDatePeriod,
}: any) {
	const [dataResult, setDataResult] = useState<any>();
	const labelDate = getYearFromDateArray(graphData.label);
	useEffect(() => {
		const data = {
			labels: graphData?.label.map((date: any) =>
				formatDateDespiteTimeZone(date, 'MM/dd/yyyy')
			),
			datasets: [
				{
					data: graphData?.data,
					tension: 0.4,
					pointBorderColor: graphData?.data.map((el: any) => {
						if (min === null && max === null) {
							return colors.graphPointGreen;
						} else if (parseFloat(el) < min || parseFloat(el) > max) {
							return colors.yellow70;
						}
						return colors.graphPointGreen;
					}),
					pointHoverBackgroundColor: graphData?.data.map((el: any) => {
						if (min === null && max === null) {
							return colors.graphPointGreen;
						} else if (
							(min !== null && max !== null) ||
							parseFloat(el) < min ||
							parseFloat(el) > max
						) {
							return colors.yellow70;
						}
						return colors.graphPointGreen;
					}),
				},
			],
		};
		setDataResult(data);
	}, [graphData, max, min, setDataResult, dateOptions, selectedDatePeriod]);

	const formatYAxisLabel = (tooltipItems: any) => {
		return `${tooltipItems}`;
	};

	const formatXAxisLabel = (tooltipItems: any) => {
		return `${tooltipItems.formattedValue} ${unit}`;
	};

	const config: any = {
		...biomarkerChartConfig,
		plugins: {
			...biomarkerChartConfig.plugins,
			tooltip: {
				...biomarkerChartConfig.plugins.tooltip,
				callbacks: {
					label: formatXAxisLabel,
				},
			},
			annotation: {
				annotations: {
					minLine: () => {
						if (typeof min === 'number') {
							return R.mergeDeepRight(NORMAL_RANGE_LINE_CONFIG, {
								yMin: min,
								yMax: min,
								label: {
									content: 'MIN',
									position: 'start',
									padding: 2,
									yAdjust: 10,
								},
							});
						}
					},
					minGhostLine: () => {
						if (typeof min === 'number') {
							return R.mergeDeepRight(NORMAL_RANGE_LINE_CONFIG, {
								yMin: min - 6,
								yMax: min - 6,
								borderDash: [0],
								borderColor: `transparent`,
								borderWidth: 0,
								label: {
									enabled: false,
								},
							});
						}
					},
					maxLine: () => {
						if (typeof max === 'number') {
							return R.mergeDeepRight(NORMAL_RANGE_LINE_CONFIG, {
								yMin: max,
								yMax: max,
								label: {
									content: 'MAX',
									position: 'start',
									padding: 2,
									yAdjust: -10,
								},
							});
						}
					},
				},
			},
		},
		elements: styledBiomarckerChartElements(graphData?.label?.length - 1),
		scales: {
			...biomarkerChartConfig.scales,
			y: {
				...biomarkerChartConfig.scales.y,
				ticks: {
					...biomarkerChartConfig.scales.y.ticks,
					callback: formatYAxisLabel,
					stepSize: 0.1,
					maxTicksLimit: 10,
					precision: 2,
				},
			},
			x: {
				ticks: {
					callback: function (value: number) {
						return labelDate[value];
					},
				},
			},
		},
	};

	return <div>{dataResult && <Line data={dataResult} options={config} />}</div>;
}

export default BiomarkersGraph;