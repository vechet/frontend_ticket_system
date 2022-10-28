interface TableColumn {
  label: string;
  column: string;
  width?: string;
}

export const tableColumns: readonly TableColumn[] = [
  {
    label: "Name",
    column: "name",
    width: "22.5%",
  },
  {
    label: "Status",
    column: "statusName",
    width: "22.5%",
  },
  // {
  //   label: "Actions",
  //   column: "action",
  //   width: "10%",
  // },
];
