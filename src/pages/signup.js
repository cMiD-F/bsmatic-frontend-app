import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { useFormik } from "formik";
import * as yup from "yup";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import { useDispatch} from "react-redux";
import { registraUser } from "../features/user/userSlice";

const signUpSchema = yup.object({
  primeiroNome: yup.string().required("Primeiro nome é obrigatório"),
  ultimoNome: yup.string().required("Ultimo nome é obrigatório"),
  email: yup.string().email("Email deve ser válido").required("Endereço de email obrigatório"),
  telefone: yup.string().required("Número de telefone obrigatório"),
  senha: yup.string().required("Senha é obrigatório"),
});

const Signup = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      primeiroNome: "",
      ultimoNome: "",
      email: "",
      telefone: "",
      senha: "",
    },
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      dispatch(registraUser(values));
    },
  });

  return (
    <>
      <Meta title={"Sign Up"} />
      <BreadCrumb title="Sign Up" />
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
                  name="primeiroNome"
                  placeholder="Primeiro Nome"
                  value={formik.values.primeiroNome}
                  onChange={formik.handleChange("primeiroNome")}
                  onBlur={formik.handleBlur("primeiroNome")}
                />
                <div className="error">
                  {formik.touched.primeiroNome && formik.errors.primeiroNome}
                </div>
                <CustomInput
                  type="text"
                  name="ultimoNome"
                  placeholder="Ultimo Nome"
                  value={formik.values.ultimoNome}
                  onChange={formik.handleChange("ultimoNome")}
                  onBlur={formik.handleBlur("ultimoNome")}
                />
                <div className="error">
                  {formik.touched.ultimoNome && formik.errors.ultimoNome}
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
                  type="telefone"
                  name="telefone"
                  placeholder="Telefone"
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
