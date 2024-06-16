import {
  CreateAccount,
  DontHaveAccount,
  Password,
  RememberPassword,
  SignIn,
  SignInToAccount,
} from "@/Constant";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import imageOne from "../../../../public/assets/images/logo/logo.png";
import imageTwo from "../../../../public/assets/images/logo/logo_dark.png";
import { login } from "@/services/apis";
import { loginFailed, loginSuccess } from "@/Redux/Reducers/AuthSlice";

export const UserForm = () => {
  const { i18LangStatus } = useAppSelector((store) => store.langSlice);
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const dispatch = useAppDispatch();

  const formSubmitHandle = async () => {
    try {
      const authResponse = await login({ username, password });

      if (authResponse.status === 200) {
        console.log("authResponse", authResponse);
        Cookies.set("token", authResponse.data.accessToken);
        dispatch(loginSuccess(authResponse.data.user));
        router.push("/en/home");
      }
    } catch (error) {
      console.error("Error fetching data:", error.response.data.message);
      dispatch(loginFailed(error.response.data.message));
      toast.error("Please Enter Valid Email Or Password");
      // alert("Please Enter Valid Email Or Password");
    }
  };

  return (
    <div>
      <div>
        <Link className="logo" href={`/${i18LangStatus}/sample_page`}>
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
        <Form className="theme-form">
          <h4>{SignInToAccount}</h4>
          <p>Enter your username & password to login</p>
          <FormGroup>
            <Label className="col-form-label">Username</Label>
            <Input
              type="text"
              defaultValue={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label className="col-form-label">{Password}</Label>
            <div className="position-relative">
              <Input
                type={show ? "text" : "password"}
                defaultValue={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <div className="show-hide" onClick={() => setShow(!show)}>
                <span className="show"> </span>
              </div>
            </div>
          </FormGroup>
          <FormGroup className="mb-0">
            <div className="checkbox p-0">
              <Input id="checkbox1" type="checkbox" />
              <Label className="text-muted" htmlFor="checkbox1">
                {RememberPassword}
              </Label>
            </div>
            <div className="text-end mt-3">
              <Button
                color="primary"
                block
                className="w-100"
                onClick={formSubmitHandle}
              >
                {SignIn}
              </Button>
            </div>
          </FormGroup>
          {/*<h6 className="text-muted mt-4 or">{OrSignInWith}</h6>*/}
          {/*<UserSocialApp />*/}
          <p className="mt-4 mb-0 text-center">
            {DontHaveAccount}
            <Link className="ms-2" href="/auth/register">
              {CreateAccount}
            </Link>
          </p>
        </Form>
      </div>
    </div>
  );
};
