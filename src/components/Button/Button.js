import PropsTypes from 'prop-types';
import React from 'react';

function Button({ lable, backgroundColor = "red", size = "md", onClick }) {
    let scale = 1;
    if (size == "sm") scale = 0.74;
    if (size == "lg") scale = 1.5;
    const style = {
        backgroundColor,
        padding: `${scale * 0.5}rem ${scale * 1}rem`,
        border: "none",
    }
    return (
        <button onClick={onClick} style={style}>{lable}</button>
    );
}

Button.prototype = {
    lable: PropsTypes.string,
    backgroundColor: PropsTypes.string,
    size: PropsTypes.oneOf(["sm", "md", "lg"]),
    onclick: PropsTypes.func,
}

export default Button;