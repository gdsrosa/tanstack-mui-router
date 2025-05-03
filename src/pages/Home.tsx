import { SLink } from "@/components/Link"
import { Grid, Typography } from "@mui/material"

function Home() {
  return (
    <Grid container flexDirection="column" paddingLeft={2}>
      <Typography
        component="h1"
        fontWeight="bold"
        color="primary.main"
        variant="h4"
        sx={{ marginBottom: 2 }}
      >
        Home
      </Typography>
      <SLink to="/debts">Check my current Debts 🏦</SLink>
    </Grid>
  )
}

export default Home
