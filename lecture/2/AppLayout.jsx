import {
  BrowserRouter,
  Outlet,
  useNavigate,
  useLocation,
} from "react-router-dom";

function AppLayout() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  function change() {
    if (pathname === "/") {
      navigate("/about");
      return;
    }
    navigate("/");
  }
  return (
    <>
      <button onClick={change}>achange</button>
      <h1>hallo</h1>
      <Outlet />
    </>
  );
}

export default AppLayout;
