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
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.auth.user);
  const [edit, setEdit] = useState(true)

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      primeironome: userState?.primeironome,
      ultimonome: userState?.ultimonome,
      email: userState?.email,
      telefone: userState?.telefone,
    },
    validationSchema: profileSchema,
    onSubmit: (values) => {
      dispatch(updateProfile(values));
      setEdit(true)
    },
  });

  return (
    <>
      <BreadCrumb title="Meu Perfil" />
      <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="d-flex justify-content-between align-items-center">
            <h3 className="my-3">Edite seus dados</h3>
            <FiEdit className="fs-3" onClick={()=>setEdit(false)}/>
          </div>
          <div className="col-12">
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-3">
                <label htmlFor="example1" className="form-label">
                  Primeiro Nome
                </label>
                <input
                  type="text"
                  name="primeironome"
                  disabled={edit}
                  className="form-control"
                  id="example1"
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
                  Último Nome
                </label>
                <input
                  type="text"
                  name="ultimonome"
                  disabled={edit}
                  className="form-control"
                  id="example2"
                  value={formik.values.ultimonome}
                  onChange={formik.handleChange("ultimonome")}
                  onBlur={formik.handleBlur("ultimonome")}
                />
                <div className="error">
                  {formik.touched.ultimonome && formik.errors.ultimonome}
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Endereço de email
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  disabled={edit}
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={formik.values.email}
                  onChange={formik.handleChange("email")}
                  onBlur={formik.handleBlur("email")}
                />
                <div className="error">
                  {formik.touched.email && formik.errors.email}
                </div>
                {/* <div id="emailHelp" class="form-text">Nunca compartilharemos seu e-mail com mais ninguém.</div> */}
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail2" className="form-label">
                  Número de telefone
                </label>
                <input
                  type="number"
                  name="telefone"
                  className="form-control"
                  disabled={edit}
                  id="exampleInputEmail2"
                  aria-describedby="emailHelp"
                  value={formik.values.telefone}
                  onChange={formik.handleChange("telefone")}
                  onBlur={formik.handleBlur("telefone")}
                />
                <div className="error">
                  {formik.touched.telefone && formik.errors.telefone}
                </div>
              </div>

              {edit === false && (
                <button type="submit" className="btn btn-primary">
                  Salvar alterações
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
