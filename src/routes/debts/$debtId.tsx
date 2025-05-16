import ViewDebt from "@/modules/debts/pages/ViewDebt"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/debts/$debtId")({
  component: ViewDebt,
})
