// Data sources
const covid_time = "https://raw.githubusercontent.com/julien-blanchard/dbs/main/COVID-19_HPSC_Detailed_Statistics_Profile.csv";

function getLinePlot(plotLocation) {
  let spec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.0.json",
    "width": "container",
    "config": {
      "axis": {
        "grid": false
      },
      "view": {
        "strokeWidth": 0
      },
      "font": "Helvetica",
      "background": "white"
    },
    "title": {
      "text": "Confirmed cases over time",
      "anchor": "start"
    },
    "data": {
      "url": covid_time
    },
    "mark": {
      "type": "area",
      "tooltip": true,
      "line": true,
      "point":true,
      "interpolate": "step-after"
    },
    "encoding": {

      "x": {
        "field": "Date",
        "type": "temporal",
        "title": ""
      },
      "y": {
        "field": "ConfirmedCovidCases",
        "type": "quantitative",
        "title": ""
      }
    }
  }
  vegaEmbed(plotLocation, spec, {})
};
