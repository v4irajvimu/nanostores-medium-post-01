import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useStore } from "@nanostores/react";
import { ReactNode } from "react";
import { mode } from "../store/modeStore";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const modeValue = useStore(mode);
  const theme = createTheme({
    palette: {
      mode: modeValue,
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default Layout;
