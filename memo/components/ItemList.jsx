import List from "@mui/material/List";
import Lists from "./Lists";
import { useLocalStorage } from "@reactuses/core";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function ItemList({ search = "" }) {
  const [memoList, setMemoList] = useLocalStorage("memoList", []);
  const [filterList, setFilterList] = useState(memoList);

  useEffect(() => {
    if (search === "") {
      setFilterList(memoList);
      return;
    }

    setFilterList(
      memoList.filter((item) =>
        item?.title?.toLowerCase().includes(search?.toLowerCase())
      )
    );
  }, [search, memoList]);

  function handleDelete(id) {
    setMemoList(memoList.filter((item) => item.id !== id));
    toast.error("Deleted");
  }

  return (
    <List sx={{ width: "100%", bgcolor: "background.paper", zIndex: 0 }}>
      {filterList.map((item) => (
        <Lists item={item} key={item.id} handleDelete={handleDelete} />
      ))}
    </List>
  );
}
