import Stack from "@mui/material/Stack";
import { debounce } from "lodash";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import styled from "styled-components";
import useStates from "../../components/hooks";
import { PROJECT_MENUS, TypeEnum } from "../../components/SubMenu/constants";
import { Header } from "../../components/SubMenu/Header";
import { LeftMenu } from "../../components/SubMenu/LeftMenu";
import { baseUrl } from "../../components/utils";
import { CustomTable } from "../../components/CustomTable/CustomTable";
import { tableColumns } from "./utils";
import { instance } from "../../components/TicketApi";

const Project = React.memo(() => {
  const [state, setState]: any = useStates({
    search: "",
    loading: false,
    hasMore: true,
    error: "",
    results: [],
    skip: 0,
  });
  const { search, loading, results, skip, hasMore } = state;
  const router = useRouter();

  const fetchProjects = () => {
    setState({ loading: true });
    instance
      .get("Projects?skip=0&limit=10")
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
      .get(`Projects?skip=${_skip}&limit=10`)
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
    router.push(`/project/create`);
  };

  const handleEdit = (item: any) => {
    router.push(`/project/${item.id}`);
  };

  const handleViewDetail = (item: any) => {
    router.push(`/project/${item.id}`);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <StyledContent>
      <Header
        onSearch={handleSearch}
        type={TypeEnum.PROJECT}
        onCreate={handleCreate}
      />
      <Stack flex={1} sx={{ py: 2, px: 4, backgroundColor: "#f8f8f8" }}>
        <Stack flex={1} direction="row">
          <Stack className="right-menu">
            <LeftMenu menus={PROJECT_MENUS} />
          </Stack>
          <Stack flex={1}>
            <CustomTable
              hasMore={hasMore}
              onFetchMore={onFetchMore}
              items={results}
              loading={loading}
              tableColumns={tableColumns}
              onEdit={handleEdit}
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
  .infinite-scroll-component {
    overflow: unset !important;
  }
`;

export default Project;
