import { Box, Grid } from "@mui/material";
import GridContainer from "../components/GridContainer";
import "./Dashboard.css";
import Header from "../components/Header";
import * as AiIcons from "react-icons/ai";
import * as CgIcons from "react-icons/cg";
import * as MdIcons from "react-icons/md";
import * as BsIcons from "react-icons/bs";
import { Overview } from "../components/Overview";
import { Customer } from "../components/Customer";

function Dashboard() {
  const data = [
    {
      title: "Earning",
      price: "$198k",
      difference: "37.8%",
      positive: true,
      backgroundColor: "#d4ffef",
      avatar: <AiIcons.AiOutlineDollarCircle color={"#00bb53"} size="50px" />,
    },
    {
      title: "Orders",
      price: "$2.4k",
      difference: "2%",
      positive: false,
      backgroundColor: "#ecd2ff",
      avatar: <CgIcons.CgFileDocument color={"#c400ff"} size="50px" />,
    },
    {
      title: "Balance",
      price: "$2.4k",
      difference: "2%",
      positive: false,
      backgroundColor: "#c4f3ff",
      avatar: <MdIcons.MdAccountBalance color={"#2f58cd"} size="50px" />,
    },
    {
      title: "Total Sales",
      price: "$89k",
      difference: "11%",
      positive: true,
      backgroundColor: "#ffaadb",
      avatar: <BsIcons.BsBagDash color={"#ec0000"} size="50px" />,
    },
  ];
  return (
    <div>
      <Header />
      <Box
        component="main"
        className="box-container"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Grid container spacing={3}>
          {data.map((item, index) => {
            return (
              <Grid item xs={3} key={index}>
                <GridContainer
                  title={item.title}
                  difference={item.difference}
                  positive={item.positive}
                  sx={{ height: "100%" }}
                  value={item.value}
                  price={item.price}
                  backgroundColor={item.backgroundColor}
                  avatar={item.avatar}
                />
              </Grid>
            );
          })}
          <Grid xs={8} className="chart-box">
            <Overview sx={{ height: "95%", width: "95%" }} />
          </Grid>
          <Grid className="donut-box">
            <Customer
              sx={{ height: "95%",width: "100%" }}
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Dashboard;
