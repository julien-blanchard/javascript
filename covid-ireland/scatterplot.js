let tweets_text2 = "https://raw.githubusercontent.com/julien-blanchard/dbs/main/df_tweets.csv";

function getScatterPlot(plotLocation) {
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
      "text": "Relationship between likes and retweets",
      "anchor": "start"
    },
    "description": "Covid19 DBS visualisation",
    "data": {
      "url": tweets_text2
    },
    "mark": {
      "type": "circle",
      "tooltip": true,
      "clip": true
    },
    "encoding": {
      "x": {
        "field": "favorites",
        "type": "quantitative",
        "scale": {"domain": [0,80]},
        "title": "favorites"
      },
      "y": {
        "field": "retweets",
        "type": "quantitative",
        "scale": {"domain": [0,50]},
        "title": "retweets"
      },
      "color": {
        "field": "sentiment_tag",
        "type": "nominal",
        "scale": {
          "scheme": "Blues"
        }
      },
      "size": {
        "field": "sentiment_tag",
        "type": "nominal"
      }
    }
  }
  vegaEmbed(plotLocation, spec, {})
};
