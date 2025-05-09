
import { TableRow, TableCell } from "@mui/material";
import CheckBox from "../../atoms/CheckBox";
import { styled } from "@mui/material";

interface TableRowItemProps {
  row: Record<string, string>;
  isChecked?: boolean;
  onCheckToggle?: () => void;
  showCheckbox?: boolean;
}

const StyledCheckbox = styled(CheckBox)(({theme}) =>({
  color: "white",
  padding: 0,
  margin: 0,
  verticalAlign: "middle",
  "&.Mui-checked": {
    color: theme.palette.custom.blue,
  },
  "& .MuiSvgIcon-root": {
    fill: theme.palette.custom.blue,
  },
}));

const TableRowItem: React.FC<TableRowItemProps> = ({
  row,
  isChecked = false,
  onCheckToggle = () => {},
  showCheckbox = true,
}) => {
  return (
    <TableRow>
      <TableCell>
        {showCheckbox ? (<StyledCheckbox checked={isChecked} onChange={onCheckToggle} />) : null}
      </TableCell>
      {Object.values(row).map((value, id) => (
        <TableCell key={id}>{value}</TableCell>
      ))}
    </TableRow>
  );
};

export default TableRowItem;
