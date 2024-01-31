import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const BarChartView = () => {
  const [tableData, setTableData] = useState([]);
  const labels = tableData.map((item) => item._id);
  const dataValues = tableData.map((item) => item.count);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "End Year Data",
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(75,192,192,0.4)",
        hoverBorderColor: "rgba(75,192,192,1)",
        data: dataValues,
      },
    ],
  };

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        "https://blackcoffer-backend-chaitanya.onrender.com/api/years-data"
      );
      const resData = await res.json();
      setTableData(resData);
    };
    getData();
  }, []);
  return (
    <div className="w-full lg:w-[70%] self-center">
      <Bar data={data} />
      <p className="text-center mt-5 text-lg text-gray-700">
        count of end year in each 5 years
      </p>
    </div>
  );
};

export default BarChartView;
