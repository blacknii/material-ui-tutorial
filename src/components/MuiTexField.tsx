import { Stack, TextField, InputAdornment } from "@mui/material";

const MuiTexField = () => {
  return (
    <Stack spacing={4}>
      <Stack direction={"row"} spacing={2}>
        <TextField label="name" variant="outlined" />
        <TextField label="name" variant="filled" />
        <TextField label="name" variant="standard" />
      </Stack>
      <Stack direction={"row"} spacing={2}>
        <TextField
          size="small"
          color="secondary"
          label="Small secondary"
          variant="outlined"
        />
      </Stack>
      <Stack direction={"row"} spacing={2}>
        <TextField label="Form Input" required />
        <TextField
          label="Password"
          type="password"
          helperText="Do not share your password with anyone"
          disabled
        />
        <TextField label="Read only" inputProps={{ readOnly: true }} />
      </Stack>
      <Stack direction={"row"} spacing={2}>
        <TextField
          label="Amount"
          inputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          inputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  );
};

export default MuiTexField;
