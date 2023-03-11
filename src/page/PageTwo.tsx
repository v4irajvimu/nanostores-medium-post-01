import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import Layout from "../common/Layout";

import { useSearchParams } from "react-router-dom";

type Props = {};

const PageTwo = (props: Props) => {
  const [params] = useSearchParams();
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
        </Box>
      </Paper>
    </Layout>
  );
};

export default PageTwo;
