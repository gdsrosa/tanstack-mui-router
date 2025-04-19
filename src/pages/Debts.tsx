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
import { ChangeEvent } from "react"
import { NumberFormatValues, NumericFormat } from "react-number-format"

interface Debt {
  amount: string
  creditor: string
  isRecurrent: boolean
  notify: boolean
}

const debt: Debt = {
  amount: "",
  creditor: "",
  isRecurrent: false,
  notify: false,
}

const MAX_LIMIT = 10000000

function isAllowed(values: NumberFormatValues, maxLimit: number) {
  if (!values.floatValue) return false
  return values.floatValue < maxLimit
}

function Debts() {
  const { Field, handleSubmit, state } = useForm({
    defaultValues: debt,
    onSubmit: ({ value }) => {
      console.log(value)
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
          type="submit"
          variant="contained"
          sx={{ color: "secondary.main" }}
        >
          Submit
        </Button>
      </Box>
      <pre>{JSON.stringify(state.values, null, 2)}</pre>
    </Grid>
  )
}
export default Debts
