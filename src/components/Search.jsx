import { TextField } from "@mui/material";

const Search = (props) => {
  const { onChange, value } = props;
                    
  return <TextField
    label='search'
    variant="standard"
    fullwidth="true"
    type='search'
    value={value}
    onChange={onChange}
    sx={{
      mb: '1.5rem'
    }}
  />;                         
};

export default Search;