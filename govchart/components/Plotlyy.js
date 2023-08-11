
import Plot from "react-plotly.js";

function Plotlyy({ data, layout }) {
  console.log("Chart data", data);
  const chartLayout = {

    width: 920,
    height: 640,
    margin: { b: 180 },
    title: "Crime Head-wise Crime against Foreigners during 2019",
    xaxis: {
      title: "Crime Head",
      tickfont: {
        size: 9,
        color: "green",
      },
    },
    yaxis: {
      title: "Cases against Foreign Tourists",
      tickfont: {
        size: 12,
        color: "black",
      },
    },
    ...layout,
  };
  return <Plot data={data} layout={chartLayout} />;
}

export default Plotlyy;
