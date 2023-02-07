

import { motion } from 'framer-motion';
import PropsTypes from 'prop-types';
import React from 'react';

function HoverButton({ lable, backgroundColor = "red", size = "md", onClick }) {
    let scale = 1;
    if (size == "sm") scale = 0.74;
    if (size == "lg") scale = 1.5;
    const style = {
        backgroundColor,
        padding: `${scale * 0.5}rem ${scale * 1}rem`,
        border: "none",
    }
    return (
        <motion.button
            className="box"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            onClick={onClick} style={style}>
            {lable}
        </motion.button >
    );
}

HoverButton.prototype = {
    lable: PropsTypes.string,
    backgroundColor: PropsTypes.string,
    size: PropsTypes.oneOf(["sm", "md", "lg"]),
    onclick: PropsTypes.func,
}

export default HoverButton;