import { useDebt } from "@/lib/hooks"
import { getRouteApi } from "@tanstack/react-router"

const route = getRouteApi("/debts/$debtId")

function ViewDebt() {
  const { debtId } = route.useParams()
  const { debt } = useDebt(debtId)

  // if (loading) return <div>Loading...</div>

  return (
    <div>
      <h2>Hello "/debts/{debtId}!</h2>
      <pre>{JSON.stringify(debt, null, 2)}</pre>
    </div>
  )
}

export default ViewDebt
