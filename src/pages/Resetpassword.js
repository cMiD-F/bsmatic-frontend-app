import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link, useLocation } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetPassword } from "../features/user/userSlice";

let passwordSchema = yup.object({
  senha: yup.string().required("Senha é obrigatória."),
});

const ResetSenha = () => {
  const location = useLocation();
  const getToken = location.pathname.split("/")[2];
  console.log(getToken);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      senha: "",
    },
    validationSchema: passwordSchema,
    onSubmit: (values) => {
      dispatch(resetPassword({ token: getToken, senha: values.senha }));
      navigate("/login");
    },
  });

  return (
    <>
      <Meta title={"Reset Password"} />
      <BreadCrumb title="Reset Password" />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Reset Password</h3>
              <form action="" className="d-flex flex-column gap-15">
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <CustomInput
                  type="password"
                  name="confpassword"
                  placeholder="Enter your new senha"
                  value={formik.values.senha}
                  onChange={formik.handleChange("senha")}
                  onBlur={formik.handleBlur("senha")}
                />
                <div className="error">
                  {formik.touched.senha && formik.errors.senha}
                </div>
                <div>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className="button border-0">Ok</button>
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

export default ResetSenha;
