import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function MoneyInput() {
  return (
    <Box
    component="form"
    sx={{
      '& > :not(style)': { width: '80%' },
    }}
    noValidate
    autoComplete="off"
  >
    <TextField
      style={{ direction: 'ltr' }}
      id="standard-basic"
      label="ILS (בשקלים)"
      variant="standard"
      type="number"
    />
  </Box>
  )
}
