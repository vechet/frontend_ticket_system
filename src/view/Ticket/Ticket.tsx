import Stack from "@mui/material/Stack";
import { debounce } from "lodash";
import React from "react";
import styled from "styled-components";
import useStates from "../../components/hooks";
import { TICKET_MENUS } from "../../components/SubMenu/constants";
import { Header } from "../../components/SubMenu/Header";
import { LeftMenu } from "../../components/SubMenu/LeftMenu";

const Ticket = React.memo(() => {
  const [state, setState]: any = useStates({
    search: "",
  });
  const { search } = state;

  const handleSearch = debounce((value: string) => {
    setState({ search: value });
  }, 360);

  const handleCreate = () => {
    console.log("handleCreate===");
  };

  return (
    <StyledContent>
      <Header onSearch={handleSearch} type="ticket" onCreate={handleCreate} />
      <Stack flex={1} sx={{ py: 2, px: 4, backgroundColor: "#f8f8f8" }}>
        <Stack flex={1} direction="row">
          <Stack className="right-menu">
            <LeftMenu menus={TICKET_MENUS} />
          </Stack>
          <Stack flex={1}>dddd</Stack>
        </Stack>
      </Stack>
    </StyledContent>
  );
});

const StyledContent = styled.div`
  height: calc(100vh - 48px);
  width: 100%;
  display: flex;
  flex-direction: column;
  .right-menu {
    width: 320px;
    min-width: 320px;
  }
`;

export default Ticket;
