import { Paper, Stack, Typography, useTheme } from "@mui/material";
import Pie from "../../page/pieChart/pie";
import Bar from "../../page/barChart/bar";
import Geo from "../../page/geography/geo";

const Row3 = () => {
  const theme = useTheme();
  return (
    <Stack
      direction="row"
      sx={{ display: "flex", gap: 1.5, mt: "15px", flexWrap: "wrap" }}
    >
      <Paper
        sx={{
          minWidth: "400px",
          flexGrow: 1,
          width: "28%",
        }}
      >
        <Typography
          sx={{
            color: theme.palette.secondary.main,
            padding: "30px 30px 0 30px",
            fontWeight: "600",
          }}
          variant="h6"
        >
          Campaign
        </Typography>

        <Pie isDashbord={true} />

        <Typography variant="h6" align="center" sx={{ mt: "15px" }}>
          $48,352 revenue generated
        </Typography>
        <Typography variant="body2" sx={{ px: "0.7", pb: "3" }} align="center">
          Includes extra misc expenditures and costs
        </Typography>
      </Paper>
      <Paper
        sx={{
          minWidth: "400px",
          flexGrow: 1,
          width: "33%",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            padding: "30px 30px 0 30px",
            color: theme.palette.secondary.main,
            fontWeight: "600",
          }}
        >
          Sales Quantity
        </Typography>

        <Bar isDashbord={true} />
      </Paper>
      <Paper
        sx={{
          minWidth: "400px",
          flexGrow: 1,
          width: "33%",
        }}
      >
        <Geo isDashbord={true} />
      </Paper>
    </Stack>
  );
};

export default Row3;
