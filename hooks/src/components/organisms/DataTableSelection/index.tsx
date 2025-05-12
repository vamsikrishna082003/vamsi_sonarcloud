
import React, { useState } from "react";
import { Box, Paper, Table, TableContainer, TableBody } from "@mui/material";
import Heading from "../../molecules/Heading";
import Refresher from "../../molecules/Refresher";
import {TABLE_DATA,MYCONTRACTS_DATA,MYCASHKICKS_DATA} from "../../../utils/constants";
import { styled } from "@mui/material/styles";
import ButtonTab from "../../atoms/Button";
import TableRowItem from "../../molecules/TableRowItem";
import TableHeaderItem from "../../molecules/TableHeader";

const StyledtableContainer = styled("div")({
  maxWidth: "996px",
  maxHeight: "354px",
  marginTop: 0,
});

const Headers = styled("div")(({ theme }) =>({
  color: theme.palette.text.primary,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  maxWidth: "996px",
  height: "29px",
  marginBottom: "0px",
  paddingTop: theme.spacing(2.5),
}));

const PageContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
}));

const StyledButtonTab = styled(ButtonTab)(({ theme }) =>({
  width: "147px",
  height: "43px",
  borderRadius: theme.spacing(1.5), 
  gap:theme.spacing(1),
  color: theme.palette.text.primary,
  border: 0,
}));

const ButtonGroupContainer = styled(Box)(({ theme }) =>({
  display: "flex",
  width: "312px",
  height: "43px",
  gap: theme.spacing(1.5),
  marginTop: theme.spacing(3.75),
  marginBottom:0,
}));

const DataTableSelection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(TABLE_DATA.contractsButton);
  const [selectedIndices, setSelectedIndices] = useState<number[]>([]);

  const handleCheckboxToggle = (index: number) => {
    if (selectedIndices.includes(index)) {
      setSelectedIndices((prev) => prev.filter((i) => i !== index));
    } else {
      setSelectedIndices((prev) => [...prev, index]);
    }
  };


  const isRowSelected = (index: number) => selectedIndices.includes(index);

  const renderTable = () => {
    const isContractsTab = activeTab === TABLE_DATA.contractsButton;
    const dataToRender = isContractsTab
      ? MYCONTRACTS_DATA
      : selectedIndices.map((i) => MYCASHKICKS_DATA[i]);

    const headers = isContractsTab
      ? Object.values(TABLE_DATA.ContractsMetaData)
      : Object.values(TABLE_DATA.KicksMetaData);

    return (
      <>
        <TableHeaderItem headers={headers}/>
        <TableBody>
          {dataToRender.map((row, index) => {
            const realIndex = isContractsTab ? index : selectedIndices[index];
            return (
              <TableRowItem
                key={realIndex}
                row={row}
                isChecked={isRowSelected(realIndex)}
                onCheckToggle={() => handleCheckboxToggle(realIndex)}
                showCheckbox={isContractsTab}
              />
            );
          })}
        </TableBody>
      </>
    );
  };

  return (
    <PageContainer>
      <Headers>
        <Heading />
        <Refresher />
      </Headers>
      <ButtonGroupContainer>
        <StyledButtonTab
          variant={activeTab === TABLE_DATA.contractsButton ? "contained" : "outlined"}
          label={TABLE_DATA.contractsButton}
          onClick={() => setActiveTab(TABLE_DATA.contractsButton)}
        />
        <StyledButtonTab
          variant={activeTab === TABLE_DATA.kicksButton ? "contained" : "outlined"}
          label={TABLE_DATA.kicksButton}
          onClick={() => setActiveTab(TABLE_DATA.kicksButton)}
        />
      </ButtonGroupContainer>
      <StyledtableContainer>
        <TableContainer component={Paper}>
          <Table>{renderTable()}</Table>
        </TableContainer>
      </StyledtableContainer>
    </PageContainer>
  );
};

export default DataTableSelection;
