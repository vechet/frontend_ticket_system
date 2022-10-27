export enum MenuEnum {
  PROJECT = "projects",
  TICKET = "ticket",
  USER = "user",
}

export const MENU_ITEM = [
  {
    label: "Project",
    value: MenuEnum.PROJECT,
    url: "/project",
    newtab: false,
  },
  {
    label: "User",
    value: MenuEnum.USER,
    url: "/userAccount",
    newtab: false,
  },
  {
    label: "Ticket",
    value: MenuEnum.TICKET,
    url: "/ticket",
    newtab: false,
  },
];

export const isProjectRoute = (pathname: string) => {
  return pathname.includes("/project");
};
export const isUserRoute = (pathname: string) => {
  return pathname.includes("/user");
};

export const isTicketRoute = (pathname: string) => {
  return pathname.includes("/ticket");
};
