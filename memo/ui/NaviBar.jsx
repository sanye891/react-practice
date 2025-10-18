import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function NaviBar() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1,
        left: 0,
        right: 0,
      }}
    >
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            align="center"
          >
            SanYe Memo
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
