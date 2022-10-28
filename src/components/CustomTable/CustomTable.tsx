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
import { tableColumns } from "../../view/Project/utils";

interface IProps {
  items: any[];
  hasMore: any;
  onFetchMore(): void;
  loading: boolean;
}
export const CustomTable: React.FC<IProps> = React.memo((props) => {
  const { items, hasMore, loading, onFetchMore } = props;
  console.log("items==", items);

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
              {tableColumns.map((headCell: any) => {
                return (
                  <TableCell width={headCell?.width} key={headCell.column}>
                    {headCell.label}
                  </TableCell>
                );
              })}
              <TableCell align="center" width={"10%"}>
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items?.map((item: any, index: number) => {
              return (
                <>
                  <TableRow
                    key={index}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    {tableColumns.map((headCell: any) => {
                      return (
                        <TableCell
                          width={headCell?.width}
                          key={headCell.column}
                        >
                          {item[headCell.column]}
                        </TableCell>
                      );
                    })}
                    <TableCell align="center">
                      <ActionButtonDropdown
                        item={item}
                        handleAction={handleAction}
                      />
                    </TableCell>
                  </TableRow>
                </>
              );
            })}
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
