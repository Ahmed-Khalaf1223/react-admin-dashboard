import {
  Box,
  IconButton,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import Line from "../../page/lineChart/Line";
import { DownloadOutlined } from "@mui/icons-material";
import { Transactions } from "./data";

const Row2 = () => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} sx={{ flexWrap: "wrap", gap: 1.5, mt: 2 }}>
      <Paper
        sx={{
          minWidth: "400px",
          maxWidth: "900px",
          flexGrow: 1,
        }}
      >
        <Stack
          direction={"row"}
          sx={{
            alignItems: "center",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography
              variant="h6"
              sx={{
                color: theme.palette.secondary.main,
                mb: 1,
                mt: 2,
                ml: 4,
                fontWeight: "bold",
              }}
            >
              Revenue Generated
            </Typography>
            <Typography variant="body2" sx={{ ml: 4 }}>
              $59,342.32
            </Typography>
          </Box>
          <Box>
            <IconButton sx={{ mr: 3 }}>
              <DownloadOutlined />
            </IconButton>
          </Box>
        </Stack>

        <Line isDahboard={true} />
      </Paper>
      <Box
        sx={{
          overflow: "auto",
          minWidth: "280px",
          maxHeight: "380px",
          flexGrow: 1,
        }}
      >
        <Paper>
          <Typography
            variant="h6"
            sx={{
              p: 1,
              color: theme.palette.secondary.main,
              fontWeight: "bold",
            }}
          >
            Recent Transactions
          </Typography>
        </Paper>
        {Transactions.map((item) => {
          return (
            <Paper
              sx={{
                mt: 0.4,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box sx={{ p: 1.2 }}>
                <Typography variant="body1">{item.txId}</Typography>
                <Typography variant="body2">{item.user} </Typography>
              </Box>
              <Typography variant="body1">{item.date} </Typography>

              <Typography
                variant="body2"
                sx={{
                  borderRadius: 1.4,
                  p: 1,
                  bgcolor: theme.palette.error.main,
                  color: theme.palette.getContrastText(
                    theme.palette.error.main,
                  ),
                }}
              >
                ${item.cost}
              </Typography>
            </Paper>
          );
        })}
      </Box>
    </Stack>
  );
};

export default Row2;
