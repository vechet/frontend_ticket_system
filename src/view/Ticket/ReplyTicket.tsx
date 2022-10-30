import {
  Alert,
  Avatar,
  Box,
  Breadcrumbs,
  Button,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { FORM_ERROR } from "final-form";
import { map, omit } from "lodash";
import router, { useRouter } from "next/router";
import React, { useEffect } from "react";
import { Field, Form, FormRenderProps } from "react-final-form";
import styled from "styled-components";
import { TextAreaInput } from "../../components/Fields";
import { getDateFormat, getTimeFormat } from "../../components/helpers";
import useStates from "../../components/hooks";
import { InputSelectField } from "../../components/InputSelectField";
import LoadingOverlay from "../../components/LoadingOverlay/LoadingOverlay";
import { instance } from "../../components/TicketApi";
import { baseUrl } from "../../components/utils";
import { validateCRequired } from "../../components/validations";

const ReplyTicket = React.memo(() => {
  const [state, setState]: any = useStates({
    search: "",
    loading: false,
    hasMore: true,
    error: "",
    result: {},
    skip: 0,
    pLoading: true,
    transactionTypes: [],
    initialValues: {},
  });
  const {
    search,
    loading,
    result,
    skip,
    hasMore,
    tLoading,
    transactionTypes,
    initialValues,
  } = state;
  const router = useRouter();
  const { query } = router;

  const fetchTicketTypes = () => {
    instance
      .get(`TicketDetail?id=${query.id}`)
      .then(function (response) {
        const { data: json } = response;
        setState({
          result: json.data,
          loading: false,
          initialValues: { transactionType: json.data.transactionType },
        });
      })
      .catch(function (error) {
        setState({ loading: false, error: error });
      });
  };

  const fetchTransactionTypes = () => {
    instance
      .get("TicketTransactionTypes?skip=0&limit=10")
      .then(function (response) {
        const { data: json } = response;
        setState({
          transactionTypes: map(json.data, (item) => {
            return { value: item?.id, label: item?.name };
          }),
          tLoading: false,
        });
      })
      .catch(function (error) {
        setState({ tLoading: false, error: error });
      });
  };

  const onSubmit = async (fields: any) => {
    try {
      setState({ loading: true });
      fields.ticketId = result.id;
      const response = await instance.post("ReplyTicket", fields);
      const { data } = response;
      if (!data.success) {
        setState({ loading: false });
        return { [FORM_ERROR]: data.message };
      }
      setState({ loading: false });
    } catch (err) {
      console.log("err:: ", err);
    }
  };

  const handleCancel = () => {
    router.push("/ticket");
  };

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ loading: true });
    const fields = {
      ticketId: result.id,
      transactionType: event?.target?.value,
    };
    const response = await instance.post("UpdateTicketTransactionType", fields);
    const { data } = response;
    if (!data.success) {
      setState({ loading: false });
      return { [FORM_ERROR]: data.message };
    }
    setState({ loading: false });
  };

  useEffect(() => {
    fetchTicketTypes();
    fetchTransactionTypes();
  }, [loading]);

  return (
    <StyledContent px={10} py={2}>
      <Stack pt={2} pb={3}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            sx={{ fontSize: "14px" }}
            underline="hover"
            color="inherit"
            href="/ticket"
          >
            Ticket
          </Link>
          <Typography color="text.primary" sx={{ fontSize: "14px" }}>
            Reply Ticket
          </Typography>
        </Breadcrumbs>
      </Stack>
      <Stack flex={1}>
        <Form onSubmit={onSubmit} initialValues={initialValues}>
          {({
            handleSubmit,
            submitError,
            submitting,
            pristine,
          }: FormRenderProps) => {
            return (
              <StyledForm onSubmit={handleSubmit}>
                {submitError && (
                  <Alert severity="error" style={{ marginTop: 10 }}>
                    {submitError}
                  </Alert>
                )}
                <LoadingOverlay loading={tLoading || loading} />
                <Stack>
                  <Stack direction="row" justifyContent="space-between">
                    <Stack>
                      <Typography sx={{ fontWeight: 600, fontSize: "1.5rem" }}>
                        {result.subject}
                      </Typography>
                      <Typography sx={{ color: "#42526E" }}>
                        {result.projectName}
                      </Typography>
                    </Stack>
                    <Stack sx={{ width: "200px" }}>
                      <Field
                        name="transactionType"
                        options={transactionTypes}
                        component={InputSelectField}
                        onChange={(e: any) => {
                          handleChange(e);
                        }}
                        validate={validateCRequired(
                          "Transaction Type is required"
                        )}
                        required
                      />
                    </Stack>
                  </Stack>
                  <Field
                    name="description"
                    placeholder="Add a comment..."
                    component={TextAreaInput}
                    multiline
                    rows={4}
                    validate={validateCRequired("Description is required")}
                    required
                  />
                  <Stack
                    justifyContent="flex-end"
                    direction="row"
                    spacing={2}
                    pt={1}
                  >
                    <Button
                      disabled={submitting || pristine}
                      type="submit"
                      variant="contained"
                    >
                      Reply Ticket
                    </Button>
                    <Button variant="outlined" onClick={handleCancel}>
                      Cancel
                    </Button>
                  </Stack>
                  {result?.ticketActionList?.map(
                    (ticketAction: any, index: any) => {
                      return (
                        <Stack key={index} direction="row" spacing={2} py={2}>
                          <Avatar></Avatar>
                          <Stack>
                            <Stack direction="row" spacing={2} pb={1}>
                              <Typography sx={{ fontWeight: 600 }}>
                                {ticketAction.userName}
                              </Typography>
                              <Typography
                                sx={{ color: "#42526E", fontSize: "14px" }}
                              >
                                <span>
                                  {getDateFormat(ticketAction.transactionDate)}
                                </span>
                                {` at `}
                                <span style={{ color: "gray" }}>
                                  {getTimeFormat(ticketAction.transactionDate)}
                                </span>
                              </Typography>
                            </Stack>
                            <Typography sx={{ fontSize: "14px" }}>
                              {ticketAction.description}
                            </Typography>
                          </Stack>
                        </Stack>
                      );
                    }
                  )}
                </Stack>
              </StyledForm>
            );
          }}
        </Form>
      </Stack>
    </StyledContent>
  );
});

const StyledForm = styled.form``;

const StyledContent = styled(Stack)`
  overflow: auto;
  height: calc(100vh - 48px);
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export default ReplyTicket;