import axios from "axios";
import Chart from "react-apexcharts";
import { BASE_URL } from "utils/requests";
import { useEffect, useState } from "react";
import { SuccessSeller } from "models/successSeller";
import { round } from "utils/roundPercentage";

type ChartData = {
  labels: {
    categories: string[];
  };

  series: [
    {
      name: string;
      data: number[];
    }
  ];
};

function BarChart() {
  const [chartData, setChartData] = useState<ChartData>({
    labels: {
      categories: [],
    },

    series: [
      {
        name: "",
        data: [],
      },
    ],
  });

  useEffect(() => {
    axios.get(`${BASE_URL}/sales/success-by-seller`).then((response) => {
      const data = response.data as SuccessSeller[];
      const myLabels = data.map((x) => x.sellerName);
      const mySeries = data.map((x) => round((x.deals / x.visited) * 100, 1));

      setChartData({
        labels: {
          categories: myLabels,
        },

        series: [
          {
            name: "% de sucesso",
            data: mySeries,
          },
        ],
      });
    });
  }, []);

  const options = {
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
  };

  return (
    <Chart
      options={{ ...options, xaxis: chartData.labels }}
      series={chartData.series}
      type="bar"
      height="240"
    />
  );
}

export default BarChart;
