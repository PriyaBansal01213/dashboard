import {
  Avatar,
  Card,
  CardContent,
  Stack,
  SvgIcon,
  Typography,
} from "@mui/material";
import "../pages/Dashboard.css";
import * as AiIcons from "react-icons/ai";

const GridContainer = (props) => {
  const {
    difference,
    avatar,
    backgroundColor,
    positive = false,
    price,
    title,
  } = props;

  return (
    <Card sx={{ height: "75%" }} className="grid-class">
      <CardContent>
        <Stack alignItems="flex-start" direction="row" spacing={1}>
          <div className="avatar">
            <Avatar
              sx={{
                backgroundColor: { backgroundColor },
                height: 100,
                width: 100,
              }}
            >
              {avatar}
            </Avatar>
          </div>
          <Stack direction="column">
            <div className="card-content">
              <Typography color={"#d9d9d9"}>{title}</Typography>
              <Typography variant="h4" fontWeight={"bold"}>
                {price}
              </Typography>
              <Stack direction="row">
                <Typography>
                    {positive ? (
                      <AiIcons.AiOutlineArrowUp  className={"uparrow"}/>
                    ) : (
                      <AiIcons.AiOutlineArrowDown className={"downarrow"}/>
                    )}
                </Typography>
                <Typography>
                  <div className={positive ? "difference" :"difference-error"}>{difference}</div>
                </Typography>
                <Typography
                  color="text.secondary"
                  variant="caption"
                  className="month-header"
                >
                  this month
                </Typography>
              </Stack>
            </div>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default GridContainer;
