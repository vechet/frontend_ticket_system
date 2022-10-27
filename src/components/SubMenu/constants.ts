export enum MenuEnum {
  USER = "ticket",
  TYPE = "ticketType",
}

export const TICKET_MENUS = [
  {
    label: "Ticket",
    value: MenuEnum.USER,
    url: "/ticket",
  },

  {
    label: "Ticket Type",
    value: MenuEnum.TYPE,
    url: "/ticketType",
  },
];
