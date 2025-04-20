import { Grid, Stack, useMediaQuery } from "@mui/material"
import { Outlet } from "@tanstack/react-router"
import Sidebar from "./modules/navigation/Sidebar"
import Topbar from "./modules/navigation/Topbar"

function App() {
  const isMobile = useMediaQuery("(max-width:900px)")

  return (
    <Grid container spacing={2}>
      {!isMobile ? (
        <Grid
          size={4}
          bgcolor="primary.main"
          color="white"
          padding={2}
          width="220px"
          height="100vh"
        >
          <Stack direction="column">
            <Sidebar />
          </Stack>
        </Grid>
      ) : (
        <Topbar />
      )}
      <Grid
        size={8}
        bgcolor="AppWorkspace"
        padding={2}
        sx={{ width: isMobile ? "100%" : "calc(90vw - 220px)" }}
      >
        <Outlet />
      </Grid>
    </Grid>
  )
}

export default App
