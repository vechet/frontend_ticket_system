import { Alert, Button, Stack, Typography } from "@mui/material";
import router from "next/router";
import React from "react";
import { Field, Form, FormRenderProps } from "react-final-form";
import styled from "styled-components";
import { TextInput } from "../../components/Fields";
import useStates from "../../components/hooks";
import LoadingOverlay from "../../components/LoadingOverlay/LoadingOverlay";
import SnackBarCustom from "../../components/SnackBarCustom";
import { instance } from "../../components/TicketApi";
import { sleep } from "../../components/utils";
import { validateCRequired } from "../../components/validations";

const Login = React.memo(() => {
  const [state, setState]: any = useStates({
    error: "",
    open: false,
    message: "",
    success: false,
    loading: false,
  });
  const { open, message, success, loading } = state;

  const onSubmit = async (fields: any) => {
    try {
      setState({ loading: true });
      const response = await instance.post("Login", fields);
      const { data } = response;
      setState({
        loading: false,
        open: true,
        message: data.message,
        success: data.success,
      });

      if (data.success) {
        localStorage.setItem("userToken", data.data.token);
        await sleep(1000);
        router.replace("/ticket");
      }
    } catch (err) {
      console.log("err:: ", err);
    }
  };

  return (
    <StyledContent justifyContent="center" alignItems="center">
      <SnackBarCustom
        open={open}
        message={message}
        onClose={() => setState({ open: false })}
        success={success}
      />
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
              <LoadingOverlay loading={loading} />
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
