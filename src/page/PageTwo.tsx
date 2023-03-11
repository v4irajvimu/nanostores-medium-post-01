import { Box, Paper, Typography, Button } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import React from "react";
import Layout from "../common/Layout";

import { useSearchParams } from "react-router-dom";
import { useModeContext } from "../context/ModeContextProvider";

type Props = {};

const PageTwo = (props: Props) => {
  const [params] = useSearchParams();
  const { mode, toggleMode } = useModeContext();

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
            startIcon={mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
          >
            Switch to {`${mode === "dark" ? "light" : "dark"}`} mode
          </Button>
        </Box>
      </Paper>
    </Layout>
  );
};

export default PageTwo;
