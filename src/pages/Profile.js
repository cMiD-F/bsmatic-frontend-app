import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../features/user/userSlice";
import { FiEdit } from "react-icons/fi";

const profileSchema = yup.object({
  primeironome: yup.string().required("O primeiro nome é obrigatório"),
  ultimonome: yup.string().required("O último nome é obrigatório"),
  email: yup
    .string()
    .email("Email deve ser válido")
    .required("É necessário um endereço de e-mail"),
  telefone: yup.string().required("O telefone não é obrigatório"),
});

const Profile = () => {
  const getTokenFromLocalStorage = localStorage.getItem("customer")
    ? JSON.parse(localStorage.getItem("customer"))
    : null;

  const config2 = {
    headers: {
      Authorization: `Bearer ${
        getTokenFromLocalStorage !== null ? getTokenFromLocalStorage.token : ""
      }`,
      Accept: "application/json",
    },
  };

  const dispatch = useDispatch();
  const userState = useSelector((state) => state.auth.user);
  const [edit, setEdit] = useState(true);
  const formik = useFormik({
    initialValues: {
      primeironome: userState?.primeironome,
      ultimonome: userState?.ultimonome,
      email: userState?.email,
      telefone: userState?.telefone,
    },
    validationSchema: profileSchema,
    onSubmit: (values) => {
      dispatch(updateProfile({ data: values, config2: config2 }));
      setEdit(true);
    },
  });

  return (
    <>
      <BreadCrumb title="Meu Perfil" />
      <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="d-flex justify-content-between align-items-center">
            <h3 className="my-3">Atualizar Perfil</h3>
            <FiEdit className="fs-3" onClick={() => setEdit(false)} />
          </div>
          <div className="col-12">
            <form action="" onSubmit={formik.handleSubmit}>
              <div className="mb-3">
                <div className="mb-3">
                  <label htmlFor="example1" className="form-label">
                    Primeiro nome
                  </label>
                  <input
                    type="text"
                    name="firstname"
                    className="form-control"
                    id="example1"
                    disabled={edit}
                    value={formik.values.primeironome}
                    onChange={formik.handleChange("primeironome")}
                    onBlur={formik.handleBlur("primeironome")}
                  />
                  <div className="error">
                    {formik.touched.primeironome && formik.errors.primeironome}
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="example2" className="form-label">
                    Último nome
                  </label>
                  <input
                    type="text"
                    name="ultimonome"
                    className="form-control"
                    id="example2"
                    disabled={edit}
                    value={formik.values.ultimonome}
                    onChange={formik.handleChange("ultimonome")}
                    onBlur={formik.handleBlur("ultimonome")}
                  />
                  <div className="error">
                    {formik.touched.ultimonome && formik.errors.ultimonome}
                  </div>
                </div>
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Endereço de Email 
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  disabled={edit}
                  aria-describedby="emailHelp"
                  value={formik.values.email}
                  onChange={formik.handleChange("email")}
                  onBlur={formik.handleBlur("email")}
                />
                <div className="error">
                  {formik.touched.email && formik.errors.email}
                </div>
                <div className="mb-3">
                  <label htmlFor="example3" className="form-label">
                    Nº Telefone
                  </label>
                  <input
                    type="number"
                    name="telefone"
                    className="form-control"
                    id="example3"
                    disabled={edit}
                    value={formik.values.telefone}
                    onChange={formik.handleChange("telefone")}
                    onBlur={formik.handleBlur("telefone")}
                  />
                  <div className="error">
                    {formik.touched.telefone && formik.errors.telefone}
                  </div>
                </div>
              </div>

              {edit === false && (
                <button type="submit" className="btn btn-primary">
                  Salvar
                </button>
              )}
            </form>
          </div>
        </div>
      </Container>
    </>
  );
};
export default Profile;
