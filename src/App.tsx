import { CustomIcon } from "@/components/CustomIcon"
import { Grid, Stack, Typography } from "@mui/material"
import { Outlet } from "@tanstack/react-router"
import Sidebar from "./modules/navigation/Sidebar"

function App() {
  return (
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
              id="currency_exchange"
              color="info"
              sx={{ height: 25, width: 25 }}
            />
            <Typography
              component="h2"
              fontWeight="bold"
              paddingLeft={2}
              color="secondary.main"
            >
              Debto
            </Typography>
          </Stack>
          <Sidebar />
        </Stack>
      </Grid>
      <Grid size={9} bgcolor="AppWorkspace" padding={2}>
        <Outlet />
      </Grid>
    </Grid>
  )
}

export default App
