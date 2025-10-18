import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import TextField from "@mui/material/TextField";

import ItemList from "../../components/ItemList";
function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q"));
  function onChange(e) {
    const { value } = e.target;
    setSearch(value);
    setSearchParams({ q: value });
  }

  return (
    <>
      <TextField
        id="outlined-basic"
        label="Title"
        variant="outlined"
        onChange={onChange}
        value={search || ""}
      />
      <ItemList search={search} />
    </>
  );
}

export default SearchPage;
