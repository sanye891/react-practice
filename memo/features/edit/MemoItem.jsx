import { useLocalStorage } from "@reactuses/core";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { Button, Fab, TextField } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import toast from "react-hot-toast";

function MemoItem() {
  const navigate = useNavigate();
  const { memoId } = useParams();
  const [memoList] = useLocalStorage("memoList", []);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // 然后查找 memo
  const memo = memoList.find((item) => Number(item.id) === Number(memoId));

  // 使用 useEffect 来更新状态
  useEffect(() => {
    if (memo) {
      setTitle(memo.title || "");
      setContent(memo.content || "");
    }
  }, [memo]);

  function update() {
    const newMemoList = memoList.map((item) => {
      if (Number(item.id) === Number(memoId)) {
        return { ...item, title, content };
      }
      return item;
    });
    localStorage.setItem("memoList", JSON.stringify(newMemoList));
    toast.success("Updated");
    navigate("/");
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
          style={{ marginBottom: "10px" }}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <TextField
          id="outlined-multiline-static"
          label="Content"
          multiline
          value={content}
          rows={4}
          style={{ marginBottom: "10px" }}
          onChange={(e) => setContent(e.target.value)}
        />
        <br />
        <Button variant="contained" onClick={update}>Update</Button>
        <Fab
          color="primary"
          aria-label="add"
          style={{ position: "absolute", bottom: 80, right: 50 }}
          onClick={() => navigate("/")}
        >
          <HomeIcon />
        </Fab>
      </>
    </form>
  );
}

export default MemoItem;
