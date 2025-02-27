import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import "./loading.css";

export default function CircularIndeterminate() {
  return (
    <Box className="spinner" sx={{ display: "flex" }}>
      <CircularProgress color="inherit" />
    </Box>
  );
}
