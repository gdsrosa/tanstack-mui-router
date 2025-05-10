import { Debt } from "@/types"
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material"
import { useForm } from "@tanstack/react-form"
import { useNavigate } from "@tanstack/react-router"

import { createDebt } from "@/modules/debts/db/actions"
import { ChangeEvent } from "react"
import { z } from "zod"

const debt: Debt = {
  amount: "",
  creditor: "",
  recurrent: false,
  notify: false,
}

const debtSchema = z
  .object({
    amount: z.string({ required_error: "Amount is required" }).min(2).max(20),
    creditor: z
      .string({ required_error: "Creditor is required" })
      .min(1)
      .max(20),
    recurrent: z.boolean().nullable(),
    notify: z.boolean().nullable(),
  })
  .required({ amount: true, creditor: true })

function Debts() {
  const navigate = useNavigate()

  const { Field, handleSubmit, state } = useForm({
    defaultValues: debt,
    onSubmit: ({ value }) => {
      const result = debtSchema.safeParse(value)

      if (result.success) {
        createDebt(value)
        navigate({ to: "/debts" })
      }
    },
  })

  return (
    <Grid container flexDirection="column">
      <Typography component="h1" fontSize={24}>
        Create a debt
      </Typography>
      <Box
        paddingTop={4}
        rowGap={2}
        display="flex"
        flexDirection="column"
        component="form"
        onSubmit={e => {
          e.preventDefault()
          handleSubmit()
        }}
      >
        <Field
          name="creditor"
          validators={{
            onChange: z
              .string({ required_error: "Creditor is required" })
              .min(2)
              .max(20),
          }}
          children={({ state, handleChange, handleBlur }) => (
            <TextField
              error={state.meta.errors.length > 0}
              helperText={state.meta.errors[0]?.message}
              label="Creditor"
              variant="outlined"
              value={state.value}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleChange(e.target.value)
              }
              onBlur={handleBlur}
              placeholder="Enter debt creditor"
            />
          )}
        />
        <Field
          name="amount"
          validators={{
            onChange: z
              .string({ required_error: "Amount is required" })
              .min(2)
              .max(20),
          }}
          children={({ state, handleChange, handleBlur }) => (
            <TextField
              type="number"
              value={state.value}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleChange(e.target.value)
              }
              error={state.meta.errors.length > 0}
              helperText={state.meta.errors[0]?.message}
              onBlur={handleBlur}
              variant="outlined"
              label="Amount"
              placeholder="Enter debt value in cents.. Ex: 100€ needs to be 10000"
            />
          )}
        />
        <Box display="flex">
          <Field
            name="recurrent"
            children={({ state, handleChange, handleBlur }) => (
              <FormControlLabel
                label="Recurrent"
                control={
                  <Checkbox
                    aria-label="test"
                    color="primary"
                    checked={state.value}
                    onChange={e => handleChange(e.target.checked)}
                    onBlur={handleBlur}
                  />
                }
              />
            )}
          />

          <Field
            name="notify"
            children={({ state, handleChange, handleBlur }) => (
              <FormControlLabel
                label="Remind me monthly"
                control={
                  <Checkbox
                    aria-label="test"
                    color="primary"
                    checked={state.value}
                    onChange={e => handleChange(e.target.checked)}
                    onBlur={handleBlur}
                  />
                }
              />
            )}
          />
        </Box>

        <Button
          disabled={!state.canSubmit}
          type="submit"
          variant="contained"
          sx={{ color: "common.white", backgroundColor: "secondary.main" }}
        >
          Submit
        </Button>
      </Box>
    </Grid>
  )
}
export default Debts
