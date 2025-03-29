import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";

export default function SearchBox({
  handleSubmit,
  cityName,
  handleInputChange,
}) {
  return (
    <form className="SearchBox" onSubmit={handleSubmit}>
      <TextField
        id="outlined-basic"
        label="City Name"
        variant="outlined"
        size="small"
        required
        value={cityName}
        onChange={handleInputChange}
      />
      <Button variant="contained" type="submit">
        Search
      </Button>
    </form>
  );
}
