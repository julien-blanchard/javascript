let tweets_text = "https://raw.githubusercontent.com/julien-blanchard/dbs/main/df_tweets.csv";

function getDonutPlot(plotLocation) {
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
      "text": "Sentiment distribution on Twitter",
      "anchor": "start"
    },
    "description": "Covid19 DBS visualisation",
    "data": {
      "url": tweets_text
    },
    "mark": {
      "type": "arc",
      "innerRadius": 40,
      "tooltip": true
    },
    "encoding": {
      "theta": {
        "field": "sent_count",
        "aggregate": "max"
      },
      "color": {
        "field": "sentiment_tag",
        "type": "nominal",
        "scale": {
          "scheme": "Blues"
        }
      }
    }
  }
  vegaEmbed(plotLocation, spec, {})
};
