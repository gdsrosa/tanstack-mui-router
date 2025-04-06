import { CustomIcon } from "@/components/CustomIcon"
import { Grid, Stack, SxProps, Typography } from "@mui/material"
import { Outlet } from "@tanstack/react-router"
import { ReactNode } from "react"
import { SLink } from "./components/Link"

function Item({ children, sx }: { children: ReactNode; sx?: SxProps }) {
  return (
    <Typography
      sx={{
        ...sx,
        cursor: "pointer",
        "&:hover, &:focus": {
          backgroundColor: "secondary.main",
          color: "primary.main",
          transition: "0.2s ease-in",
        },
      }}
      padding={1}
      borderRadius={1}
      color="secondary.main"
      component="div"
    >
      {children}
    </Typography>
  )
}

function App() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid
          size={4}
          bgcolor="primary.main"
          color="white"
          padding={2}
          width="220px"
          height="100vh"
        >
          <Stack direction="column">
            <Stack direction="row" alignItems="center">
              <CustomIcon
                id="home"
                color="info"
                sx={{ height: 25, width: 25 }}
              />
              <Typography
                component="h2"
                fontWeight="bold"
                paddingLeft={2}
                color="secondary.main"
              >
                Tanstack MUI Router
              </Typography>
            </Stack>
            <Stack>
              <Stack paddingTop={2}>
                <SLink underline="none" to="/">
                  <Item>Home</Item>
                </SLink>
                <SLink underline="none" to="/about">
                  <Item>About</Item>
                </SLink>
                <SLink underline="none" to="/contact">
                  <Item>Contact</Item>
                </SLink>
              </Stack>
            </Stack>
          </Stack>
        </Grid>
        <Grid size={8} bgcolor="AppWorkspace" padding={2}>
          <Outlet />
        </Grid>
      </Grid>
    </>
  )
}

export default App
