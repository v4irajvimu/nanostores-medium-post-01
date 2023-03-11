import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import Layout from "../common/Layout";

type Props = {};

const PageOne = (props: Props) => {
  return (
    <Layout>
      <Typography variant="h1">Page one</Typography>
    </Layout>
  );
};

export default PageOne;
