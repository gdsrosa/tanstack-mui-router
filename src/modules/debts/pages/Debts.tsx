import { useDebts } from "@/lib/hooks"
import { Card } from "@/modules/components"
import { Grid, Typography } from "@mui/material"

function Debts() {
  const { debts, loading } = useDebts()

  return (
    <>
      <Typography
        component="h2"
        variant="h2"
        fontSize={24}
        color="text.primary"
      >
        Your debts
      </Typography>

      {loading ? (
        <Typography component="p" variant="body2" color="text.primary">
          Loading
        </Typography>
      ) : (
        <Grid container spacing={2} paddingTop={2}>
          {debts?.map(item => <Card key={item.id} item={item} />)}
        </Grid>
      )}
    </>
  )
}

export default Debts
