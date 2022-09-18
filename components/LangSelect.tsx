import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import React from "react";
import { Box, InputLabel } from "@mui/material";
import AppContext from "./AppContext";
import { setCookie, getCookie } from "cookies-next";
import Router from 'next/router'

export default function LangSelect() {
  const [age, setAge] = React.useState("");
  const value = React.useContext(AppContext);

  const handleChange = (event: SelectChangeEvent) => {
    setCookie("lang", event.target.value);
    value.setLanguageSelected(event.target.value);
    Router.push('/'+event.target.value+'/recipes')
  };
  const { languageLabel } = value.state.languages;
  console.log(value)
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl
        sx={{
          "& .MuiSvgIcon-root": {
            color: "white",
          },
        }}
        fullWidth
      >
        <InputLabel
          sx={{
            color: "white",
            "& .MuiSvgIcon-root": {
              color: "white",
            },
          }}
          id="demo-simple-select-label"
        >
          {value.state.languages.languageLableName}
        </InputLabel>
        <Select
          value={age}
          label="Age"
          onChange={handleChange}
          sx={{
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
          }}
        >
          <MenuItem value={"en"}>En</MenuItem>
          <MenuItem value={"ar"}>العربية</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
