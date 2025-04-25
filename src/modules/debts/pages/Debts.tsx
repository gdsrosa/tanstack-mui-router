import { useDebts } from "@/lib/hooks"
import { Debt } from "@/types"
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material"
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"

const columnHelper = createColumnHelper<Debt>()

const columns = [
  columnHelper.accessor("amount", {
    header: "Amount",
    cell: info => info.getValue(),
    size: 100,
  }),
  columnHelper.accessor("creditor", {
    header: "Creditor",
    cell: info => info.getValue(),
    size: 100,
  }),
  columnHelper.accessor("isRecurrent", {
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

export default function Home() {
  const { debts } = useDebts()
  const table = useReactTable({
    data: debts,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <>
      <Typography component="h2" fontSize={24} color="primary.main">
        Your debts
      </Typography>

      <TableContainer component={Paper} sx={{ marginTop: 2 }}>
        <Table>
          <TableHead>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(column => (
                  <th key={column.id}>
                    {column.isPlaceholder ? null : (
                      <div>
                        {flexRender(
                          column.column.columnDef.header,
                          column.getContext(),
                        )}
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </TableHead>
          <TableBody>
            {table.getRowModel().rows.map(row => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map(cell => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
