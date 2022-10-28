import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { map } from "lodash";
import router from "next/router";
import React, { useEffect } from "react";
import { Form, FormRenderProps, Field } from "react-final-form";
import styled from "styled-components";
import useStates from "../../components/hooks";
import { baseUrl } from "../../components/utils";
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

const TicketCreate = React.memo(() => {
  const [state, setState]: any = useStates({
    priorities: [],
    projects: [],
    ticketTypes: [],
    pLoading: false,
    ptLoading: false,
    tLoading: false,
    error: "",
  });
  const { priorities, projects, ticketTypes, pLoading, ptLoading, tLoading } =
    state;

  const fetchProjects = () => {
    const url = `${baseUrl}/api/v1/Projects?skip=0&limit=100`;
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setState({
          projects: map(json.data, (item) => {
            return { value: item?.id, label: item?.name };
          }),
          pLoading: false,
        });
      })
      .catch((error) => {
        setState({ pLoading: false, error: error });
      });
  };

  const fetchTicketTypes = () => {
    const url = `${baseUrl}/api/v1/TicketTypes?skip=0&limit=100`;
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setState({
          ticketTypes: map(json.data, (item) => {
            return { value: item?.id, label: item?.name };
          }),
          tLoading: false,
        });
      })
      .catch((error) => {
        setState({ tLoading: false, error: error });
      });
  };

  const fetchPriorities = () => {
    const url = `${baseUrl}/api/v1/TicketPriorities?skip=0&limit=100`;
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setState({
          priorities: map(json.data, (item) => {
            return { value: item?.id, label: item?.name };
          }),
          ptLoading: false,
        });
      })
      .catch((error) => {
        setState({ ptLoading: false, error: error });
      });
  };

  const onSubmit = async (fields: any) => {
    try {
      fields.statusId = 1;
      if (!fields?.severity) {
        fields.severity = false;
      }
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      };
      const url = `${baseUrl}/api/v1/TicketCreate`;
      const response = await fetch(url, requestOptions);
      const data = await response.json();

      if (!data.success) {
        console.log(data.message);
        return;
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
          {({ handleSubmit, submitting, pristine }: FormRenderProps) => {
            return (
              <StyledForm onSubmit={handleSubmit}>
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
                    <Grid item sm={10} md={10}>
                      <Field
                        name="summary"
                        label="Subject"
                        size="small"
                        fullWidth
                        component={TextInput}
                        validate={validateCRequired("Email is required")}
                        required
                      />
                    </Grid>
                    <Grid item sm={2} md={2}>
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
                        removeDot
                        component={InputSelectField}
                      />
                    </Grid>
                    <Grid item sm={12} md={4}>
                      <Field
                        name="projectId"
                        options={projects}
                        label="Project"
                        removeDot
                        component={InputSelectField}
                      />
                    </Grid>
                    <Grid item sm={12} md={4}>
                      <Field
                        name="priorityId"
                        options={priorities}
                        label="Priority"
                        removeDot
                        component={InputSelectField}
                      />
                    </Grid>
                    <Grid item sm={12} md={12}>
                      <Field
                        name="description"
                        label="Description"
                        component={TextAreaInput}
                        multiline
                        rows={4}
                      />
                    </Grid>
                  </Grid>
                </Box>
                {/* <Stack spacing={1}>
                  <Field
                    name="summary"
                    label="Subject"
                    size="small"
                    fullWidth
                    component={TextInput}
                    validate={validateCRequired("Email is required")}
                    required
                  />
                  <Field
                    name="ticketTypeId"
                    options={ticketTypes}
                    label="Ticket Type"
                    removeDot
                    component={InputSelectField}
                  />
                  <Field
                    name="projectId"
                    options={projects}
                    label="Project"
                    removeDot
                    component={InputSelectField}
                  />
                  <Field
                    name="priorityId"
                    options={priorities}
                    label="Priority"
                    removeDot
                    component={InputSelectField}
                  />
                  <Field
                    name="description"
                    label="Description"
                    component={TextAreaInput}
                    multiline
                    rows={4}
                  />
                  <Field
                    name="severity"
                    label="Severity"
                    type="checkbox"
                    component={RenderCheckBox}
                  />
                </Stack> */}
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
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
`;

export default TicketCreate;
