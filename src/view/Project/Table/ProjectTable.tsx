import React from "react";
import {
  Stack,
  Typography,
  Table,
  TableCell,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import styled from "styled-components";
import { isEmpty } from "lodash";
import ActionButtonDropdown from "./ActionButtonDropdown";
import Loader from "./Loader";
import InfiniteScroll from "react-infinite-scroll-component";
import EmptyTable from "./EmptyTable";
import { useRouter } from "next/router";

interface IProps {
  items: any[];
  hasMore: any;
  onFetchMore(): void;
  loading: boolean;
}
export const ProjectTable: React.FC<IProps> = React.memo((props) => {
  const { items, hasMore, loading, onFetchMore } = props;
  const router = useRouter();

  const handleAction = (action: any, item: any) => {
    if (action === "handle_edit") {
      handleEdit(item);
      return;
    }

    if (action === "handle_view_detail") {
      handleViewDetail(item);
      return;
    }
  };

  const handleEdit = (item: any) => {
    router.push(`/project/${item.id}`);
  };

  const handleViewDetail = (item: any) => {
    router.push(`/project/detail/${item.id}`);
  };

  return (
    <StyledWrapper>
      <TableContainer
        id="infinite-scroll"
        sx={{
          bgcolor: "white",
          maxHeight: "calc(100vh - 150px)",
        }}
      >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell width={"25%"}>Name</TableCell>
              <TableCell width={"20%"}>Project Type</TableCell>
              <TableCell width={"20%"}>Project Package</TableCell>
              <TableCell width={"15%"}>Website</TableCell>
              <TableCell width={"10%"}>Status</TableCell>
              <TableCell align="center" width={"10%"}>
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items?.map((item: any, index: number) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.projectTypeName}</TableCell>
                <TableCell>{item.projectPackageName}</TableCell>
                <TableCell>{item.websiteUrl}</TableCell>
                <TableCell>{item.statusName}</TableCell>
                <TableCell align="center">
                  <ActionButtonDropdown
                    item={item}
                    handleAction={handleAction}
                  />
                </TableCell>
              </TableRow>
            ))}
            {isEmpty(items) && !loading && <EmptyTable />}
          </TableBody>
        </Table>
        <InfiniteScroll
          scrollableTarget="infinite-scroll"
          dataLength={items?.length || 0}
          next={onFetchMore}
          hasMore={hasMore}
          loader={loading && <Loader />}
        >
          <div></div>
        </InfiniteScroll>
      </TableContainer>
    </StyledWrapper>
  );
});

const StyledWrapper = styled(Stack)`
  && {
    p {
      margin: 0px;
    }
  }
`;
