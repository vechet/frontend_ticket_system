import { Alert, Box, Button, Grid, Stack, Typography } from "@mui/material";
import { map } from "lodash";
import router from "next/router";
import React, { useEffect } from "react";
import { Form, FormRenderProps, Field } from "react-final-form";
import styled from "styled-components";
import useStates from "../../components/hooks";
import { validateCRequired } from "../../components/validations";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import {
  RenderCheckBox,
  TextAreaInput,
  TextInput,
} from "../../components/Fields";
import { InputSelectField } from "../../components/InputSelectField";
import LoadingOverlay from "../../components/LoadingOverlay/LoadingOverlay";
import { FORM_ERROR } from "final-form";
import { instance } from "../../components/TicketApi";

const TicketCreate = React.memo(() => {
  const [state, setState]: any = useStates({
    priorities: [],
    projects: [],
    ticketTypes: [],
    pLoading: true,
    ptLoading: true,
    tLoading: true,
    error: "",
  });
  const { priorities, projects, ticketTypes, pLoading, ptLoading, tLoading } =
    state;

  const fetchProjects = () => {
    instance
      .get("Projects?skip=0&limit=10")
      .then(function (response) {
        const { data: json } = response;
        setState({
          projects: map(json.data, (item) => {
            return { value: item?.id, label: item?.name };
          }),
          pLoading: false,
        });
      })
      .catch(function (error) {
        setState({ pLoading: false, error: error });
      });
  };

  const fetchTicketTypes = () => {
    instance
      .get("TicketTypes?skip=0&limit=10")
      .then(function (response) {
        const { data: json } = response;
        setState({
          ticketTypes: map(json.data, (item) => {
            return { value: item?.id, label: item?.name };
          }),
          tLoading: false,
        });
      })
      .catch(function (error) {
        setState({ tLoading: false, error: error });
      });
  };

  const fetchPriorities = () => {
    instance
      .get("TicketPriorities?skip=0&limit=10")
      .then(function (response) {
        const { data: json } = response;
        setState({
          priorities: map(json.data, (item) => {
            return { value: item?.id, label: item?.name };
          }),
          ptLoading: false,
        });
      })
      .catch(function (error) {
        setState({ ptLoading: false, error: error });
      });
  };

  const onSubmit = async (fields: any) => {
    try {
      setState({ loading: true });
      const response = await instance.post("TicketCreate", fields);
      const { data } = response;
      if (!data.success) {
        setState({ loading: false });
        return { [FORM_ERROR]: data.message };
      }
      await 3600;
      router.replace(`/ticket`);
    } catch (err) {
      console.log("err:: ", err);
    }
  };

  const handleCancel = () => {
    router.push("/ticket");
  };

  useEffect(() => {
    fetchTicketTypes();
    fetchProjects();
    fetchPriorities();
  }, []);

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
          {/* <Link underline="hover" color="inherit" href="/ticketType">
            Ticket
          </Link> */}
          <Typography color="text.primary" sx={{ fontSize: "14px" }}>
            Open Ticket
          </Typography>
        </Breadcrumbs>
      </Stack>
      <Stack flex={1}>
        <Form onSubmit={onSubmit}>
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
                <LoadingOverlay loading={tLoading || ptLoading || pLoading} />
                <Box
                  sx={{
                    flexGrow: 1,
                    p: 5,
                    backgroundColor: "#fff",
                    backgroundClip: "border-box",
                    border: "1px solid rgba(0,0,0,.125)",
                    borderRadius: " 0.25rem",
                  }}
                >
                  <Grid container spacing={2}>
                    <Grid item sm={9} md={9}>
                      <Field
                        name="subject"
                        label="Subject"
                        size="small"
                        fullWidth
                        component={TextInput}
                        validate={validateCRequired("Email is required")}
                        required
                      />
                    </Grid>
                    <Grid item sm={3} md={3}>
                      <Stack
                        justifyContent="center"
                        alignItems="center"
                        sx={{ width: "100%", height: "100%" }}
                      >
                        <Field
                          name="severity"
                          label="Severity"
                          type="checkbox"
                          component={RenderCheckBox}
                        />
                      </Stack>
                    </Grid>
                    <Grid item sm={12} md={4}>
                      <Field
                        name="ticketTypeId"
                        options={ticketTypes}
                        label="Ticket Type"
                        component={InputSelectField}
                        validate={validateCRequired("Ticket Type is required")}
                        required
                      />
                    </Grid>
                    <Grid item sm={12} md={4}>
                      <Field
                        name="projectId"
                        options={projects}
                        label="Project"
                        component={InputSelectField}
                        validate={validateCRequired("Project is required")}
                        required
                      />
                    </Grid>
                    <Grid item sm={12} md={4}>
                      <Field
                        name="priorityId"
                        options={priorities}
                        label="Priority"
                        component={InputSelectField}
                        validate={validateCRequired("Priority is required")}
                        required
                      />
                    </Grid>
                    <Grid item sm={12} md={12}>
                      <Field
                        name="description"
                        label="Description"
                        component={TextAreaInput}
                        multiline
                        rows={4}
                        validate={validateCRequired("Description is required")}
                        required
                      />
                    </Grid>
                  </Grid>
                </Box>
                <Stack
                  justifyContent="flex-end"
                  direction="row"
                  py={2}
                  spacing={2}
                >
                  <Button
                    disabled={submitting || pristine}
                    type="submit"
                    variant="contained"
                  >
                    Post Ticket
                  </Button>
                  <Button variant="outlined" onClick={handleCancel}>
                    Cancel
                  </Button>
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

export default TicketCreate;
