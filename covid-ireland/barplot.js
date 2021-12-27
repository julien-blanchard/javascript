let journal = "https://raw.githubusercontent.com/julien-blanchard/dbs/main/df_journal.csv";
let texttokens = "https://raw.githubusercontent.com/julien-blanchard/dbs/main/df_text.csv";
let tweets = "https://raw.githubusercontent.com/julien-blanchard/dbs/main/df_tweets.csv";

// Bar plot with aggregated values
function getSimpleBarPlot(plotLocation,data,title,x,x_type,y,c,c_type) {
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
      "text": title,
      "anchor": "start"
    },
    "data": {
      "url": data
    },
    "mark": {
      "type": "bar",
      "tooltip": true,
      "cornerRadiusEnd": 4
    },
    "encoding": {

      "x": {
        "field": x,
        "aggregate": x_type,
        "title": ""
      },
      "y": {
        "field": y,
        "type": "nominal",
        "sort": "-x",
        "title": ""
      },
      "color": {
        "field": c,
        "aggregate": c_type,
        "title": "Volume",
        "scale": {
          "scheme": "Blues"
        }
      }
    }
  }
  vegaEmbed(plotLocation, spec, {})
};
