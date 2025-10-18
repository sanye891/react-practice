import { useEffect, useRef, useState } from "react";
import { Toast } from "primereact/toast";
import { useDispatch } from "react-redux";
import { load } from "./components/cartListSlice";

import "primeicons/primeicons.css";

import Navbar from "./components/Navbar";
import ShopList from "./components/ShopList";
import CartDialog from "./components/CartDialog";
import { useLocalStorage } from "@reactuses/core";


export default function App() {
  const [visible, setVisible] = useState(false);

  const toast = useRef(null);

  const dispatch = useDispatch();
  const [cartList] = useLocalStorage("cart", []);

  useEffect(() => {
    dispatch(load(cartList));
  }, [cartList, dispatch]);

  return (
    <>
      <Navbar setVisible={setVisible} />
      <CartDialog visible={visible} setVisible={setVisible} />
      <ShopList toast={toast} />
      <Toast ref={toast} />
    </>
  );
}
