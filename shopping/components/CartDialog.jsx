import { Dialog } from "primereact/dialog";

import AppOrderList from "./AppOrderList";

export default function CartDialog({ visible, setVisible }) {
  return (
    <div className="card flex justify-content-center">
      <Dialog
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => {
          if (!visible) return;
          setVisible(false);
        }}
      >
        <div className="m-0">
          <AppOrderList />
        </div>
      </Dialog>
    </div>
  );
}
