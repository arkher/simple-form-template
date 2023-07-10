import { useFormik } from "formik";
import { useCallback, useState } from "react";
import { Button, Container, Header } from "../../components";
import ButtonContainer from "../../components/ButtonContainer/ButtonContainer";
import { sendCredentialsService } from "../../services";
import Email from "./fields/Email";
import Name from "./fields/Name";
import Password from "./fields/Password";
import validationSchema from "./validationSchema";
import PasswordValidationResult from "./fields/PasswordValidationResult";

function BasicData() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (values, actions) => {
      sendCredentials(values, actions.resetForm);
    },
    validationSchema,
  });

  const {
    values,
    touched,
    errors,
    isSubmitting,
    getFieldProps,
    setSubmitting,
    isValid,
  } = formik;

  const buttonDisabled =
    !isValid ||
    !values.name ||
    !values.email ||
    !values.password ||
    isSubmitting;

  const [error, setError] = useState<undefined | boolean>(undefined);

  const sendCredentials = useCallback(
    async (data: IFormData, resetForm: () => void) => {
      try {
        setSubmitting(true);
        const response = await sendCredentialsService.post(data);
        if (response.success) {
          resetForm();
        }
        setError(false);
      } catch (error: unknown) {
        setError(true);
      } finally {
        setSubmitting(false);
      }
    },
    []
  );

  return (
    <Container data-testid="validate-password-screen">
      <Header />

      <form onSubmit={formik.handleSubmit} data-testid="form">
        <div className="flex flex-col justify-center items-center pt-4">
          <Name
            errors={errors}
            disabled={isSubmitting}
            touched={touched}
            {...getFieldProps("name")}
          />
          <Email
            errors={errors}
            disabled={isSubmitting}
            touched={touched}
            {...getFieldProps("email")}
          />
          <Password
            errors={errors}
            disabled={isSubmitting}
            touched={touched}
            {...getFieldProps("password")}
          />
          <PasswordValidationResult password={values.password} />

          <ButtonContainer error={error}>
            <Button
              type="submit"
              name="submit"
              isLoading={isSubmitting}
              disabled={buttonDisabled}
            >
              Enviar
            </Button>
          </ButtonContainer>
        </div>
      </form>
    </Container>
  );
}

export default BasicData;
