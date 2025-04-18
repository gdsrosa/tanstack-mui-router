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
        rowGap={4}
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
            <TextField
              label="Amount"
              variant="outlined"
              value={state.value}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleChange(e.target.value)
              }
              onBlur={handleBlur}
              placeholder="Enter debt value"
            />
          )}
        />
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
