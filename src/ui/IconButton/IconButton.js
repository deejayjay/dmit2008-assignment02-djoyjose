import React from "react";
import { IconButtonStyles } from "./styles";
import { FaIcon } from "./../FaIcon";

function IconButton({ text, iconPosition, bgColor, color, ...props }) {
  return (
    <>
      <IconButtonStyles bgColor={bgColor} color={color}>
        {iconPosition === "before" ? <FaIcon color={color} {...props} /> : ""}
        {text}
        {iconPosition === "after" ? <FaIcon color={color} {...props} /> : ""}
      </IconButtonStyles>
    </>
  );
}

export default IconButton;
