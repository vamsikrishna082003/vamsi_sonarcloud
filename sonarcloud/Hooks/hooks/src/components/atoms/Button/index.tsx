
import React from "react";
import { Button,ButtonProps} from "@mui/material";

interface IButton extends ButtonProps {
  label :string
  
}
const ButtonTab: React.FC<IButton> = ({ label,...props }) => (
  <Button {...props}>{label}</Button>
);

export default ButtonTab;
