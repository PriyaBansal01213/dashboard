import Chart from "react-apexcharts";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  SvgIcon,
  Typography,
} from "@mui/material";
import { useState } from "react";
import "./Header.css";
import * as AiIcons from "react-icons/ai";

export const Customer = (props) => {
  const { sx } = props;
  const [chartData, setChartData] = useState({
    series: [30, 50, 20],
    options: {
      chart: {
        width: 380,
        type: "donut",
      },
      plotOptions: {
        pie: {
          expandOnClick: true,
          donut: {
            labels: {
              show: false,
            },
          },
        },
        dataLabels: {
          enabled: false,
        },
        fill: {
          type: "gradient",
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
    },
  });

  return (
    <Card sx={sx}>
      <CardHeader title="Customers" />
      <Typography className={"customer-title"}>
        {"Customers that buy products"}
      </Typography>
      <CardContent className={"donut-chart"}>
        <Chart
          options={chartData.options}
          series={chartData.series}
          type="donut"
          width="400"
        />
      </CardContent>
    </Card>
  );
};
