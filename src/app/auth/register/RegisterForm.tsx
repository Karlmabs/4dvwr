import {
  AgreeWithSignUp,
  CreateAccount,
  CreateYourAccount,
  EmailAddressSignUp,
  EnterYourPersonalDetailsToCreateAccount,
  Href,
  PasswordSignUp,
  PrivacyPolicy,
  Username,
  YourNameSignUp,
} from "@/Constant";
import { useAppSelector } from "@/Redux/Hooks";
import { SignupProp, SignupSubmitProp } from "@/Types/AuthType";
import { Field, Form, Formik } from "formik";
import Link from "next/link";
import { useState } from "react";
import { Button, Col, FormGroup, Input, Label, Row } from "reactstrap";
import imageOne from "../../../../public/assets/images/logo/logo.png";
import imageTwo from "../../../../public/assets/images/logo/logo_dark.png";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { register } from "@/services/apis";

export const RegisterForm: React.FC<SignupProp> = ({ logoClass }) => {
  const [show, setShow] = useState(false);

  const router = useRouter();

  const submitHandler = async (
    values: SignupSubmitProp,
    { resetForm }: { resetForm: () => void }
  ) => {
    try {
      const authResponse = await register({
        email: values.email,
        username: values.username,
        password: values.password,
        birthDate: values.birthDate,
        firstName: values.firstname,
        phoneNumber: values.phoneNumber,
        registrationDate: new Date(),
        lastName: values.lastname,
        role: ["ROLE_USER"],
      });

      if (authResponse.status === 201) {
        router.push(`/auth/login`);
        toast.success("Your Account Created Successfully");
      } else
        toast.error(
          authResponse.data.message
            ? authResponse.data.message
            : "An Error Occured While Creating Account"
        );
    } catch (error) {
      console.error("Error fetching data:", error.response.data.message);
      toast.error("An Error Occured While Creating Account");
    }
    resetForm();
  };

  const { i18LangStatus } = useAppSelector((state) => state.langSlice);

  return (
    <div>
      <div>
        <Link
          className={`logo ${logoClass}`}
          href={`/${i18LangStatus}/dashboard/default_dashboard`}
        >
          <img
            className="img-fluid for-light"
            src={imageOne.src}
            alt="login page"
          />
          <img
            className="img-fluid for-dark"
            src={imageTwo.src}
            alt="login page"
          />
        </Link>
      </div>
      <div className="login-main">
        <Formik
          initialValues={{
            firstname: "",
            lastname: "",
            username: "",
            email: "",
            password: "",
            birthDate: new Date(),
            role: ["ROLE_USER"],
            phoneNumber: "",
          }}
          onSubmit={submitHandler}
        >
          {() => (
            <Form className="theme-form">
              <h4>{CreateYourAccount}</h4>
              <p>{EnterYourPersonalDetailsToCreateAccount}</p>
              <FormGroup>
                <Label className="pt-0 col-form-label">{YourNameSignUp}</Label>
                <Row className="g-2">
                  <Col sm="6">
                    <Field
                      className="form-control"
                      type="text"
                      name="firstname"
                      required
                      placeholder="First name"
                    />
                  </Col>
                  <Col sm="6">
                    <Field
                      className="form-control"
                      type="text"
                      name="lastname"
                      required
                      placeholder="Last name"
                    />
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Label className="col-form-label">{Username}</Label>
                <Field
                  name="username"
                  type="text"
                  className="form-control"
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label className="col-form-label">{EmailAddressSignUp}</Label>
                <Field
                  name="email"
                  type="email"
                  className="form-control"
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label className="col-form-label">Phone Number</Label>
                <Field
                  name="phoneNumber"
                  type="text"
                  className="form-control"
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label className="col-form-label">Birth Date</Label>
                <Field
                  name="birthDate"
                  type="date"
                  max="2024-01-01"
                  className="form-control"
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label className="col-form-label">{PasswordSignUp}</Label>
                <div className="position-relative">
                  <Field
                    className="form-control"
                    name="password"
                    type={show ? "text" : "password"}
                    required
                    placeholder="*********"
                  />
                  <div className="show-hide" onClick={() => setShow(!show)}>
                    <span className="show"></span>
                  </div>
                </div>
              </FormGroup>
              <FormGroup className="mb-0">
                <div className="checkbox p-0">
                  <Input id="checkbox1" type="checkbox" required />
                  <Label className="text-muted" htmlFor="checkbox1">
                    {AgreeWithSignUp}
                    <Link className="ms-2" href={Href}>
                      {PrivacyPolicy}
                    </Link>
                  </Label>
                </div>
                <Button block color="primary" className="w-100">
                  {CreateAccount}
                </Button>
              </FormGroup>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
