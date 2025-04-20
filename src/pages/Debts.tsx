import { useDebts } from "@/lib/hooks"
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

import { ChangeEvent } from "react"
import { NumberFormatValues, NumericFormat } from "react-number-format"
import { z } from "zod"

const debt: Debt = {
  amount: "",
  creditor: "",
  isRecurrent: false,
  notify: false,
}
const MAX_LIMIT = 10000000

const debtSchema = z
  .object({
    amount: z.string({ required_error: "Amount is required" }).min(1),
    creditor: z.string({ required_error: "Creditor is required" }).min(1),
    isRecurrent: z.boolean(),
    notify: z.boolean({ required_error: "Recurrent is required" }),
  })
  .required({ amount: true, creditor: true })

function isAllowed(values: NumberFormatValues, maxLimit: number) {
  if (!values.floatValue) return false
  return values.floatValue < maxLimit
}

function Debts() {
  const { setDebts } = useDebts()
  const navigate = useNavigate()

  const { Field, handleSubmit, state } = useForm({
    defaultValues: debt,
    validators: {
      onChange: debtSchema,
    },
    onSubmit: ({ value }) => {
      const result = debtSchema.safeParse(value)
      if (result.success) {
        setDebts(prev => [...prev, value])
        navigate({ to: "/" })
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
          children={({ state, handleChange, handleBlur }) => (
            <NumericFormat
              value={state.value}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleChange(e.target.value)
              }
              error={state.meta.errors.length > 0}
              helperText={state.meta.errors[0]?.message}
              onBlur={handleBlur}
              customInput={TextField}
              variant="outlined"
              thousandSeparator
              valueIsNumericString
              decimalScale={2}
              decimalSeparator="."
              allowNegative={false}
              label="Amount"
              prefix="€"
              isAllowed={values => isAllowed(values, MAX_LIMIT)}
              placeholder="Enter debt value"
            />
          )}
        />
        <Box display="flex">
          <Field
            name="isRecurrent"
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
          sx={{ color: "secondary.main" }}
        >
          Submit
        </Button>
      </Box>
    </Grid>
  )
}
export default Debts
