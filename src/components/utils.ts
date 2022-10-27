import {
  isProjectRoute,
  isTicketRoute,
  isUserRoute,
  MenuEnum,
} from "./constants";

export const checkActiveMenu = (url: string) => {
  if (isProjectRoute(url)) {
    return MenuEnum.PROJECT;
  } else if (isTicketRoute(url)) {
    return MenuEnum.TICKET;
  } else if (isUserRoute(url)) {
    return MenuEnum.USER;
  }
};
