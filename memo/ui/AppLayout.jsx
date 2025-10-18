import { Outlet } from "react-router-dom";
import ButtonNaviBar from "./ButtonNaviBar";
import NaviBar from "./NaviBar";

function AppLayout() {
  return (
    <>
      <NaviBar />
      <div
        style={{ marginBottom: "56px", marginTop: "70px", textAlign: "center" }}
      >
        <Outlet />
      </div>

      <ButtonNaviBar />
    </>
  );
}

export default AppLayout;
