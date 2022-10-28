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
    label: "Project Type",
    column: "projectTypeName",
    width: "22.5%",
  },
  {
    label: "Name",
    column: "projectPackageName",
    width: "22.5%",
  },
  {
    label: "Website",
    column: "websiteUrl",
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
