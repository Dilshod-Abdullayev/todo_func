import React from "react";
import "../../styles/style.css";
import { useSelector,useDispatch } from "react-redux";
export default function Sidebar() {
  const sizeReduc = useSelector((state) => state.menuReducer);
  const dispatch = useDispatch();
  let menu = sizeReduc.menu;
  return (
    <div className={`sidebar ${menu ? "hidden" : ""}`}>
    </div>
  );
}
