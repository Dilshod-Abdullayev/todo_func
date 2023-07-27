import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space, Button } from "antd";
import "../../styles/style.css";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../redux/action/themeAction";

const items = [
  {
    label: <span style={{ color: "red" }} className="bg__color">red</span>,
    key: "0",
  },
  {
    label: <span style={{ color: "yellow" }} className="bg__color">yellow</span>,
    key: "1",
  },
  {
    label: <span style={{ color: "aqua" }} className="bg__color">aqua</span>,
    key: "2",
  },
  {
    label: <span style={{ color: "yellowgreen" }} className="bg__color">yellowgreen</span>,
    key: "3",
  },
];

export default function Settings() {
  const dispatch = useDispatch();
  const handleChangeTheme = (color) => {
    dispatch(setTheme(color));
  };

  const themeReducer = useSelector((state) => state.themeReducer);
  const currentTheme = themeReducer.theme;

  return (
    <div className="settings">
      <Dropdown
        menu={{
          items: items.map(item => {
            return {
              ...item,
              onClick: () => handleChangeTheme(item.label.props.style.color)
            };
          }),
        }}
        trigger={["click"]}
      >
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            <Button>{currentTheme} <DownOutlined /></Button>
          </Space>
        </a>
      </Dropdown>
    </div>
  );
}
