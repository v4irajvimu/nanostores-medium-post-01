import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Box, Button, Paper, Typography } from "@mui/material";
import Layout from "../common/Layout";
import { useModeContext } from "../context/ModeContextProvider";

type Props = {};

const PageOne = (props: Props) => {
  const { mode, toggleMode } = useModeContext();

  const handleButtonClick = () => toggleMode();

  return (
    <Layout>
      <Paper
        sx={{
          flex: 1,
          display: "flex",
          height: "100vh",
          p: 4,
        }}
      >
        <Box
          display={"flex"}
          flex={1}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          border={"5px solid"}
          borderColor={"ext.primary"}
        >
          <Box
            display={"flex"}
            flex={1}
            minWidth={"80vw"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
          >
            <Typography variant="h1">Page one</Typography>
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
          <Box
            display={"flex"}
            flex={1}
            minWidth={"80vw"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
            p={10}
          >
            <Box
              width={"100%"}
              height={"100%"}
              border={"5px solid"}
              borderColor={"ext.primary"}
            >
              <iframe
                src="http://127.0.0.1:5173/page-2?rendersInIframe=true"
                frameborder="0"
                width="100%"
                height="100%"
              ></iframe>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Layout>
  );
};

export default PageOne;
