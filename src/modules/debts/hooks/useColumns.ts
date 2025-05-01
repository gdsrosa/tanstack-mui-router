import { Debt } from "@/types"
import { createColumnHelper } from "@tanstack/react-table"

function formatMoney(
  amountInCents: number,
  currency = "USD",
  locale = "en-US",
) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(amountInCents / 100)
}

export const useColumns = () => {
  const columnHelper = createColumnHelper<Debt>()

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
  ]
  return columns
}
