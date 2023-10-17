import Chart from "react-apexcharts";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  SvgIcon,
} from "@mui/material";
import { useState } from "react";
import "./Header.css";
import * as AiIcons from "react-icons/ai";


export const Overview = (props) => {
  const { sx } = props;
  const [chartData, setChartData] = useState({
    options: {
      plotOptions: {
        bar: {
          borderRadius: 10
        }
      },
      chart: {
        id: "basic-bar",
        animations: {
          enabled: false,
        },
        toolbar:{
          tools: {
            download: false,
          },
        }
        
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      yaxis:{
        labels:{
          show:false
        }
      },
      tooltip:{
        enabled:false,
      },
      colors:['#ff008e'],
      grid:{
        show:false,
      },
      legend:{
        onItemHover: {
          highlightDataSeries: true,
      },
      },
      states:{
        hover: {
          filter: {
              type: 'lighten',
              value: "0.15",
          }
      },
      }
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91, 22, 40, 50, 60],
      },
    ],
  });

  return (
    <Card sx={sx}>
      <CardHeader
        action={
          <Button
            color="inherit"
            size="small"
            endIcon={
              <SvgIcon fontSize="small"><AiIcons.AiOutlineDown /></SvgIcon>
            }
          >
            Quaterly
          </Button>
        }
        title="Overview"
      />
      <CardContent>
        <Chart
          options={chartData.options}
          series={chartData.series}
          type="bar"
          width="600"
        />
      </CardContent>
    </Card>
  );
};
