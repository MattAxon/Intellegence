import React from "react";
import Timebar from "./Timebar";

export default function Timeline({ color1, color2, color3, hoverColor1, hoverColor2, hoverColor3, colorNum }) {
  if (colorNum == 2) {
    return (
      <div className="flex h-7 w-full z-40 mt-16">
        <Timebar color={color1} hoverColor={hoverColor1} year="1960" />
        <Timebar color={color2} hoverColor={hoverColor2} year="1970" />
        <Timebar color={color1} hoverColor={hoverColor1} year="1980" />
        <Timebar color={color2} hoverColor={hoverColor2} year="1990" />
        <Timebar color={color1} hoverColor={hoverColor1} year="2000" />
        <Timebar color={color2} hoverColor={hoverColor2} year="2010" />
      </div>
    );
  } else if (colorNum == 3) {
    return (
      <div className="flex h-7 w-full z-40 mt-16">
        <Timebar color={color1} hoverColor={hoverColor1} year="1960" />
        <Timebar color={color2} hoverColor={hoverColor2} year="1970" />
        <Timebar color={color3} hoverColor={hoverColor3} year="1980" />
        <Timebar color={color1} hoverColor={hoverColor1} year="1990" />
        <Timebar color={color2} hoverColor={hoverColor2} year="2000" />
        <Timebar color={color3} hoverColor={hoverColor3} year="2010" />
      </div>
    );
  }
}
