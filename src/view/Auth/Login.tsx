import { Alert, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { Field, Form, FormRenderProps } from "react-final-form";
import styled from "styled-components";
import { TextInput } from "../../components/Fields";
import { validateCRequired } from "../../components/validations";

const Login = React.memo(() => {
  const onSubmit = async (fields: any) => {
    console.log("====", fields);
  };
  return (
    <StyledContent justifyContent="center" alignItems="center">
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
              {/* <LoadingOverlay loading={tLoading || ptLoading || pLoading} /> */}
              <Stack alignItems="center" pb={5}>
                <Typography variant="h3">Ticket System</Typography>
              </Stack>
              <Stack sx={{ width: "350px" }}>
                <Field
                  name="userName"
                  label="UserName"
                  size="small"
                  fullWidth
                  component={TextInput}
                  validate={validateCRequired("UserName is required")}
                  required
                />
                <Field
                  name="password"
                  label="Password"
                  size="small"
                  fullWidth
                  component={TextInput}
                  validate={validateCRequired("Password is required")}
                  required
                />
              </Stack>
              <Stack py={2} spacing={2}>
                <Button
                  disabled={submitting || pristine}
                  type="submit"
                  variant="contained"
                >
                  Login
                </Button>
              </Stack>
            </StyledForm>
          );
        }}
      </Form>
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

export default Login;
