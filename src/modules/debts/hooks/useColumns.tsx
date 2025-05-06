import { CustomIcon } from "@/components/CustomIcon"
import { useDebts } from "@/lib/hooks"
import { Debt } from "@/types"
import { formatMoney } from "@/utils"
import { Button, Tooltip } from "@mui/material"
import { createColumnHelper } from "@tanstack/react-table"
import { deleteDebt } from "../db/actions"

export const useColumns = () => {
  const columnHelper = createColumnHelper<Debt>()
  useDebts()

  const columns = [
    columnHelper.accessor("amount", {
      header: "Amount",
      cell: info => {
        const amount = Number(info.getValue())
        const amountFormatted = formatMoney(amount, "EUR", "pt-PT")
        return amountFormatted
      },
      size: 100,
    }),
    columnHelper.accessor("creditor", {
      header: "Creditor",
      cell: info => info.getValue(),
      size: 100,
    }),
    columnHelper.accessor("recurrent", {
      header: "Is Recurrent",
      cell: info => (info.getValue() ? "Yes" : "No"),
      size: 100,
    }),
    columnHelper.accessor("notify", {
      header: "Notify",
      cell: info => (info.getValue() ? "Yes" : "No"),
      size: 100,
    }),
    columnHelper.display({
      header: "Actions",
      id: "actions",
      cell: info => {
        const debtId = info.row.original.id

        return (
          <Tooltip title="Delete a Debt" placement="bottom">
            <Button
              onClick={() => {
                if (debtId) {
                  deleteDebt(debtId)
                }
              }}
            >
              <CustomIcon id="delete" color="error" />
            </Button>
          </Tooltip>
        )
      },
    }),
  ]
  return columns
}
