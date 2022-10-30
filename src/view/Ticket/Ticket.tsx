import Stack from "@mui/material/Stack";
import { debounce } from "lodash";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import styled from "styled-components";
import { CustomTable } from "../../components/CustomTable/CustomTable";
import useStates from "../../components/hooks";
import SnackBarCustom from "../../components/SnackBarCustom";
import { TICKET_MENUS, TypeEnum } from "../../components/SubMenu/constants";
import { Header } from "../../components/SubMenu/Header";
import { LeftMenu } from "../../components/SubMenu/LeftMenu";
import { instance } from "../../components/TicketApi";
import { tableColumns } from "./utils";

const Ticket = React.memo(() => {
  const [state, setState]: any = useStates({
    search: "",
    loading: false,
    hasMore: true,
    error: "",
    results: [],
    skip: 0,
    open: false,
    message: "",
    success: false,
  });
  const { search, loading, results, skip, hasMore, open, message, success } =
    state;
  const router = useRouter();

  const fetchTicketTypes = async () => {
    setState({ loading: true });
    instance
      .get("Tickets?skip=0&limit=10")
      .then(function (response) {
        const { data: json } = response;
        setState({ results: json.data, loading: false });
      })
      .catch(function (error) {
        setState({ loading: false, error: error });
      });
  };

  const onFetchMore = async () => {
    const _skip = skip + 10;
    setState({ loading: true, skip: _skip });
    instance
      .get(`Tickets?skip=${_skip}&limit=10`)
      .then(function (response) {
        const { data: json } = response;
        if (json.data.length < 10) {
          setState({ hasMore: false, loading: false });
          return;
        }
        setState({
          results: [...results, ...json.data],
          loading: false,
        });
      })
      .catch(function (error) {
        setState({ loading: false, error: error });
      });
  };

  const handleSearch = debounce((value: string) => {
    setState({ search: value });
  }, 360);

  const handleCreate = () => {
    router.push(`/ticket/create`);
  };

  const handleEdit = (item: any) => {
    router.push(`/ticket/${item.id}`);
  };

  const handleDelete = async (item: any) => {
    try {
      const fields = { id: item.id };
      setState({ loading: true });
      const response = await instance.post("TicketDelete", fields);
      const { data } = response;
      setState({
        loading: false,
        open: true,
        message: data.message,
        success: data.success,
      });
    } catch (err) {
      console.log("err:: ", err);
    }
  };

  const handleViewDetail = (item: any) => {
    router.push(`/ticket/${item.id}`);
  };

  useEffect(() => {
    fetchTicketTypes();
  }, [message]);

  return (
    <StyledContent>
      <SnackBarCustom
        open={open}
        message={message}
        onClose={() => setState({ open: false })}
        success={success}
      />
      <Header
        onSearch={handleSearch}
        type={TypeEnum.TICKET}
        onCreate={handleCreate}
      />
      <Stack flex={1} sx={{ py: 2, px: 4, backgroundColor: "#f8f8f8" }}>
        <Stack flex={1} direction="row">
          <Stack className="right-menu">
            <LeftMenu menus={TICKET_MENUS} />
          </Stack>
          <Stack flex={1}>
            <CustomTable
              hasMore={hasMore}
              onFetchMore={onFetchMore}
              items={results}
              loading={loading}
              tableColumns={tableColumns}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onViewDetail={handleViewDetail}
            />
          </Stack>
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
