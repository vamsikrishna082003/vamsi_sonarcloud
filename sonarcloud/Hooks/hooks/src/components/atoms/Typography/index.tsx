
import React from "react";
import {Typography as MuiTypography,TypographyProps} from "@mui/material";

interface ITypography extends TypographyProps {
  text: string;
}
const Typography: React.FC<ITypography> = ({ text,...props }) => {
  return <MuiTypography {...props}>{text}</MuiTypography>;
};

export default Typography;
