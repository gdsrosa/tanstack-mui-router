import { SLink } from "@/components/Link"
import { useDebts } from "@/lib/hooks"
import { formatMoney } from "@/utils"
import { Box, Grid, Typography } from "@mui/material"

function Home() {
  const { debts } = useDebts()
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
      <Box>
        <Typography component="h2" variant="h6" paddingTop={2}>
          Total:{" "}
          {formatMoney(
            debts?.reduce(
              (acc, value) => acc + Number(value.amount),
              0,
            ) as number,
            "EUR",
            "pt-PT",
          )}
        </Typography>
      </Box>
    </Grid>
  )
}

export default Home
