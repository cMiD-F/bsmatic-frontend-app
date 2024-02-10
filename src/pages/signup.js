import React, { useEffect } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link, useNavigate } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import { useFormik } from "formik";
import * as yup from "yup";
import { registraUser } from "../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

const signupSchema = yup.object({
  primeironome: yup.string().required("O primeiro nome é obrigatório"),
  ultimonome: yup.string().required("O último nome é obrigatório"),
  email: yup
    .string()
    .email("E-mail deve ser válido")
    .email("Email Should be valid"),
  telefone: yup
    .number()
    .required()
    .positive()
    .integer("Não é necessário celular"),
  senha: yup.string().required("Senha requerida"),
});

const Signup = () => {
  const authState = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      primeironome: "",
      ultimonome: "",
      email: "",
      telefone: "",
      senha: "",
    },
    validationSchema: signupSchema,
    onSubmit: (values) => {
      dispatch(registraUser(values));
    },
  });

  return (
    <>
      <Meta title={"Inscrever-se"} />
      <BreadCrumb title="Inscrever-se" />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Inscrever-se</h3>
              <form
                action=""
                onSubmit={formik.handleSubmit}
                className="d-flex flex-column gap-15"
              >
                <CustomInput
                  type="text"
                  name="primeironome"
                  placeholder="Primeiro Nome"
                  value={formik.values.primeironome}
                  onChange={formik.handleChange("primeironome")}
                  onBlur={formik.handleBlur("primeironome")}
                />
                <div className="error">
                  {formik.touched.primeironome && formik.errors.primeironome}
                </div>
                <CustomInput
                  type="text"
                  name="ultimonome"
                  placeholder="Ultimo Nome"
                  value={formik.values.ultimonome}
                  onChange={formik.handleChange("ultimonome")}
                  onBlur={formik.handleBlur("ultimonome")}
                />
                <div className="error">
                  {formik.touched.ultimonome && formik.errors.ultimonome}
                </div>
                <CustomInput
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange("email")}
                  onBlur={formik.handleBlur("email")}
                />
                <div className="error">
                  {formik.touched.email && formik.errors.email}
                </div>
                <CustomInput
                  type="tel"
                  name="telefone"
                  placeholder="Número de telefone"
                  value={formik.values.telefone}
                  onChange={formik.handleChange("telefone")}
                  onBlur={formik.handleBlur("telefone")}
                />
                <div className="error">
                  {formik.touched.telefone && formik.errors.telefone}
                </div>
                <CustomInput
                  type="password"
                  name="senha"
                  placeholder="Senha"
                  value={formik.values.senha}
                  onChange={formik.handleChange("senha")}
                  onBlur={formik.handleBlur("senha")}
                />
                <div className="error">
                  {formik.touched.senha && formik.errors.senha}
                </div>
                <div>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className="button border-0">Inscrever-se</button>
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

export default Signup;
