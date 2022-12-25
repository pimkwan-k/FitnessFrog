// quickchart-js https://github.com/typpo/quickchart-js

import QuickChart from "quickchart-js";
const DaysmobileChart = (total, dayspent) => {
  const Daysmobile = new QuickChart();
  const Percentage = (dayspent / total ) * 100;

  Daysmobile.setWidth(50);
  Daysmobile.setHeight(50);
  Daysmobile.setVersion("2");
  Daysmobile.setBackgroundColor("transparent");

  Daysmobile.setConfig({
    type: "radialGauge",
    data: {
      datasets: [
        {
          data: [Percentage],
          backgroundColor: QuickChart.getGradientFillHelper("vertical", [
            "#0000FF",
            "#25EAE7",
            "purple",
          ]),
        },
      ],
    },

    options: {
      // See https://github.com/pandameister/chartjs-chart-radial-gauge#options
      domain: [0, 100],
      trackColor: "#ccddee",
      centerPercentage: 75,
      centerArea: {
        text: (val) => val + "%",
      },
    },
  });
  return Daysmobile;
};
export default DaysmobileChart;
