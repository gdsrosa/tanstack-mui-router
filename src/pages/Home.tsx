import { Grid, Typography } from "@mui/material"

function Home() {
  return (
    <Grid container>
      <Typography
        component="h1"
        fontWeight="bold"
        paddingLeft={2}
        color="primary.main"
        variant="h4"
        sx={{ marginBottom: 2 }}
      >
        Home
      </Typography>
    </Grid>
  )
}

export default Home
