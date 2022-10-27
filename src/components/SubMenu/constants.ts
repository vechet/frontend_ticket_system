export enum TypeEnum {
  TICKET = "ticket",
  TICKET_TYPE = "ticketType",
  USER_ACCOUNT = "userAccount",
  USER_ROLE = "userRole",
  PROJECT = "project",
  PROJECT_TYPE = "projectType",
  PROJECT_PACKAGE = "projectPackage",
}

export enum MenuEnum {
  TICKET = "ticket",
  TICKET_TYPE = "ticketType",
  USER_ACCOUNT = "userAccount",
  USER_ROLE = "userRole",
  PROJECT = "project",
  PROJECT_TYPE = "projectType",
  PROJECT_PACKAGE = "projectPackage",
}

export const TICKET_MENUS = [
  {
    label: "Ticket",
    value: MenuEnum.TICKET,
    url: "/ticket",
  },
  {
    label: "Ticket Type",
    value: MenuEnum.TICKET_TYPE,
    url: "/ticketType",
  },
];

export const USER_MENUS = [
  {
    label: "User Account",
    value: MenuEnum.USER_ACCOUNT,
    url: "/userAccount",
  },
  {
    label: "User Role",
    value: MenuEnum.USER_ROLE,
    url: "/userRole",
  },
];

export const PROJECT_MENUS = [
  {
    label: "Project",
    value: MenuEnum.PROJECT,
    url: "/project",
  },
  {
    label: "Project Type",
    value: MenuEnum.PROJECT_TYPE,
    url: "/projectType",
  },
  {
    label: "Project Package",
    value: MenuEnum.PROJECT_PACKAGE,
    url: "/projectPackage",
  },
];
