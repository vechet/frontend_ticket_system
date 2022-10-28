interface TableColumn {
  label: string;
  column: string;
  width?: string;
}

export const tableColumns: readonly TableColumn[] = [
  {
    label: "Subject",
    column: "summary",
    width: "25%",
  },
  {
    label: "Project",
    column: "projectName",
    width: "15%",
  },
  {
    label: "Priority",
    column: "priorityName",
    width: "15%",
  },
  // {
  //   label: "Severity",
  //   column: "severity",
  //   width: "15%",
  // },
  {
    label: "Ticket Type",
    column: "ticketTypeName",
    width: "15%",
  },
  {
    label: "Status",
    column: "statusName",
    width: "10%",
  },
  // {
  //   label: "Actions",
  //   column: "action",
  //   width: "10%",
  // },
];
