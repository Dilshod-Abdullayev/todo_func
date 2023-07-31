import React from "react";
import { RiMenuUnfoldFill, RiMenuFoldLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { menuAction } from "../../redux/action/menuAction";
import { motion } from "framer-motion";

export default function Menu() {
    const sizeReduc = useSelector((state) => state.menuReducer);
    const dispatch = useDispatch();
    let menu = sizeReduc.menu;

    const menuIconVariants = {
        open: { rotate: 0 },
        close: { rotate: -90 },
    };

    return (
        <div>
            <motion.div
                animate={menu ? "open" : "close"}
                variants={menuIconVariants}
                onClick={() => dispatch(menuAction())}
                style={{
                    cursor: "pointer",
                    transition: "transform 0.1s ease", // Set the transition for a smooth rotation
                }}
            >
                {menu ? <RiMenuUnfoldFill /> : <RiMenuFoldLine />}
            </motion.div>
        </div>
    );
}
