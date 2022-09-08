import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import React from 'react';
import { Box, InputLabel } from '@mui/material';
import AppContext from './AppContext';

export default function LangSelect() {
  const [age, setAge] = React.useState('');
  const value = React.useContext(AppContext);

  const handleChange = (event: SelectChangeEvent) => {
    value.setLanguageSelected(event.target.value)
  };
  const { languageLabel} = value.state.languages;
  console.log(value);
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{ value.state.languageSelected}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={"en"}>En</MenuItem>
          <MenuItem value={"ar"}>العربية</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}