import { useDebts } from "@/lib/hooks"
import { Typography } from "@mui/material"

export default function Home() {
  const { debts } = useDebts()
  return (
    <>
      <Typography component="h1" fontSize={28} color="primary.main">
        Debto
      </Typography>
      <pre>{JSON.stringify(debts, null, 2)}</pre>
    </>
  )
}
