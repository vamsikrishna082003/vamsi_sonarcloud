import React from 'react';
import { TableHead, TableRow, TableCell } from "@mui/material";

interface TableHeaderItemProps {
  headers: string[];
}

const TableHeaderItem: React.FC<TableHeaderItemProps> = ({headers}) => {
  return (
    <TableHead>
      <TableRow>
         <TableCell></TableCell>
        {headers.map((header, index) => (
          <TableCell key={index}>{header}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default TableHeaderItem;
