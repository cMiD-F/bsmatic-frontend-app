import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import { useFormik } from "formik";
import * as yup from "yup";
import {useDispatch} from "react-redux";
import {loginUser} from "../features/user/userSlice"

const logiSchema = yup.object({
  email: yup
    .string()
    .email("Email deve ser válido")
    .required("Endereço de email obrigatório"),
  senha: yup.string().required("Senha é obrigatório"),
});

const Login = () => {
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      email: "",
      senha: "",
    },
    validationSchema: logiSchema,
    onSubmit: (values) => {
      dispatch(loginUser(values));
    },
  });
  return (
    <>
      <Meta title={"Login"} />
      <BreadCrumb title="Login" />

      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Login</h3>
              <form action="" onSubmit={formik.handleSubmit} className="d-flex flex-column gap-15">
                <CustomInput
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={formik.handleChange("email")}
                  onBlur={formik.handleBlur("email")}
                  value={formik.values.email}
                />
                <div>{formik.touched.email && formik.errors.email}</div>
                <CustomInput
                  type="password"
                  name="senha"
                  placeholder="Senha"
                  onChange={formik.handleChange("senha")}
                  onBlur={formik.handleBlur("senha")}
                  value={formik.values.senha}
                />
                <div>{formik.touched.senha && formik.errors.senha}</div>
                <div>
                  <Link to="/esqueci-senha">Esqueceu sua senha?</Link>

                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className="button border-0" type="submit">
                      Login
                    </button>
                    <Link to="/signup" className="button signup">
                      Inscrever-se
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Login;
