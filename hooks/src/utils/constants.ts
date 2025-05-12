export interface ContractData {
  name: string;
  status: string;
  type: string;
  perPayment: string;
  totalFinanced: string;
  totalAvailable: string;
  [key: string]: string;
}

export interface KickData {
  name: string;
  status: string;
  type: string;
  perPayment: string;
  totalFinanced: string;
  totalAvailable: string;
  [key: string]: string;
}
 export const TABLE_DATA = {
    Heading: "Cash Acceleration",
    synctext:"Sync Now",
    contractsButton: "My Contracts",
    kicksButton: "My Cash Kicks",
    ContractsMetaData: {
      data1: "Name",
      data2: "Status",
      data3: "Type",
      data4: "Per payment",
      data5: "Total financed",
      data6: "Total available",
    },
    KicksMetaData: {
      data1: "Name",
      data2: "Status",
      data3: "Type",
      data4: "Per payment",
      data5: "Total financed",
      data6: "Total available",
    },
  };
  
  export const MYCONTRACTS_DATA :ContractData[] = [
    {
      name: "Contract 1",
      status: "Available",
      type: "Monthly",
      perPayment: "$12,000.25",
      totalFinanced: "-",
      totalAvailable: "$126,722.64",
    },
    {
      name: "Contract 2",
      status: "Available",
      type: "Monthly",
      perPayment: "$6,000.25",
      totalFinanced: "-",
      totalAvailable: "$63,380.00",
    },
  ]
  
  export const MYCASHKICKS_DATA :KickData[] = [
    {
      name: "Contract 1",
      status: "Available",
      type: "Monthly",
      perPayment: "$12,000.25",
      totalFinanced: "-",
      totalAvailable: "$126,722.64",
    },
    {
      name: "Contract 2",
      status: "Available",
      type: "Monthly",
      perPayment: "$6,000.25",
      totalFinanced: "-",
      totalAvailable: "$63,380.00",
    },
  ]
  