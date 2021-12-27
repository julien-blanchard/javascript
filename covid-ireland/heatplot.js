let tweets_text3 = "https://raw.githubusercontent.com/julien-blanchard/dbs/main/df_tweets.csv";

function getHeatPlot(plotLocation) {
  let spec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "width": "container",
  "data": {
      "url": tweets_text3
  },
  "title": "Daily Max Temperatures (C) in Seattle, WA",
  "config": {
      "view": {
          "strokeWidth": 0,
          "step": 13
      },
      "axis": {
          "domain": false
      }
  },
  "mark": "rect",
  "encoding": {
      "x": {
          "field": "hour",
          "type": "nominal",
          "title": "",
          "axis": {
              "labelAngle": 0,
              "format": "%e"
          }
      },
      "y": {
          "field": "day_name",
          "type": "nominal",
          "title": ""
      },
      "color": {
          "field": "retweets",
          "aggregate": "count",
          "legend": {
              "title": null
          }
      }
  }
  }
  vegaEmbed(plotLocation, spec, {})
};
