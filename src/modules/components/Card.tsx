import { CustomIcon } from "@/components/CustomIcon"
import { SLink } from "@/components/Link"
import { Debt } from "@/types"
import { formatMoney } from "@/utils"
import {
  Box,
  Button,
  Chip,
  Paper,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material"
import { deleteDebt } from "../debts/db/actions"

function Card({ item }: { item: Debt }) {
  return (
    <Box width="100%">
      <SLink to="/debts/$debtId" params={{ debtId: item.id ?? "" }}>
        <Paper elevation={2} sx={{ paddingY: 1, paddingX: 2 }}>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography component="p" variant="h6" color="text.primary">
              {item.creditor}
            </Typography>
            <Tooltip title="Delete a Debt" placement="bottom">
              <Button
                onClick={() => {
                  if (item.id) {
                    deleteDebt(item.id)
                  }
                }}
              >
                <CustomIcon id="delete" color="error" />
              </Button>
            </Tooltip>
          </Box>
          <Typography component="p" variant="body1" color="text.secondary">
            {formatMoney(Number(item.amount), "EUR", "pt-PT")}
          </Typography>
          <Stack direction="row" spacing={1} paddingTop={1}>
            {item.recurrent ? (
              <Chip
                label="Recurrent"
                color="success"
                variant="outlined"
                size="small"
              />
            ) : null}
            {item.notify ? (
              <Chip
                label="Notify by email"
                color="info"
                variant="outlined"
                size="small"
              />
            ) : null}
          </Stack>
        </Paper>
      </SLink>
    </Box>
  )
}

export default Card
