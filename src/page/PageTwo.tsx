import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Box, Button, Paper, Typography } from "@mui/material";
import Layout from "../common/Layout";
import { useStore } from "@nanostores/react";
import { useSearchParams } from "react-router-dom";
import { mode, toggleMode } from "../store/modeStore";

type Props = {};

const PageTwo = (props: Props) => {
  const [params] = useSearchParams();
  const modeValue = useStore(mode);

  const handleButtonClick = () => toggleMode();
  return (
    <Layout>
      <Paper sx={{ flex: 1, display: "flex", height: "100vh" }}>
        <Box
          display={"flex"}
          flex={1}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
        >
          {params.get("rendersInIframe") && (
            <Typography variant="h3" gutterBottom>
              Rendered inside iframe
            </Typography>
          )}
          <Typography variant="h1">Page Two </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ mt: 2 }}
            onClick={handleButtonClick}
            startIcon={
              modeValue === "dark" ? <LightModeIcon /> : <DarkModeIcon />
            }
          >
            Switch to {`${modeValue === "dark" ? "light" : "dark"}`} mode
          </Button>
        </Box>
      </Paper>
    </Layout>
  );
};

export default PageTwo;
