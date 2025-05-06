import { useDebts } from "@/lib/hooks"
import { useColumns } from "@/modules/debts/hooks/useColumns"
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material"
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"

function Debts() {
  const { debts, loading } = useDebts()
  const columns = useColumns()
  const table = useReactTable({
    data: debts ?? [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <>
      <Typography component="h2" fontSize={24} color="primary.main">
        Your debts
      </Typography>

      {loading ? (
        <Typography component="p" variant="body2">
          Loading
        </Typography>
      ) : (
        <TableContainer sx={{ marginTop: 2 }}>
          <Table sx={{ border: "1px solid", borderColor: "common.white" }}>
            <TableHead sx={{ backgroundColor: "common.white" }}>
              {table.getHeaderGroups().map(headerGroup => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map(column => (
                    <th key={column.id}>
                      {column.isPlaceholder ? null : (
                        <Typography component="span">
                          {flexRender(
                            column.column.columnDef.header,
                            column.getContext(),
                          )}
                        </Typography>
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
                    <TableCell key={cell.id} sx={{ textAlign: "center" }}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  )
}

export default Debts
