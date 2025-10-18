import { useNavigate } from "react-router-dom";

import { Divider, IconButton, ListItem, ListItemText } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function Lists({ item, handleDelete }) {
  const navigate = useNavigate();
  const processListContent =
    item.content.length > 10
      ? item.content.split(" ").slice(0, 6).join(" ") + "..."
      : item.content;

  return (
    <>
      <ListItem
        alignItems="flex-start"
        secondaryAction={
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={(e) => {
              e.stopPropagation(), handleDelete(item.id);
            }}
          >
            <DeleteIcon />
          </IconButton>
        }
        onClick={() => navigate(`/memo/${item.id}`)}
      >
        <ListItemText
          primary={item.title}
          secondary={<>{processListContent}</>}
        />
      </ListItem>
      <Divider component="li" />
    </>
  );
}

export default Lists;
