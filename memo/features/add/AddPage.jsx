import { Button, TextField } from "@mui/material";
import { useLocalStorage } from "@reactuses/core";
import { useState } from "react";
import toast from "react-hot-toast";



export function AddPage() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [memoList, setMemoList] = useLocalStorage("memoList", []);

    function save() {
        setMemoList([...memoList, { id : Date.now(), title, content }]);
        setTitle("");
        setContent("");
        toast.success("Memo saved");
    }
  return (
    <form style={{ textAlign: "center" }}>
      <>
        <TextField
          id="outlined-multiline-flexible"
          label="Title"
          multiline
          maxRows={4}
          value={title}
          style={{marginBottom: "10px"}}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <TextField
          id="outlined-multiline-static"
          label="Content"
          multiline
          value={content}
          rows={4}
          style={{marginBottom: "10px"}}
          onChange={(e) => setContent(e.target.value)}
        />
        <br />
        <Button variant="contained" onClick={save}>Save</Button>
      </>
    </form>
  );
}
