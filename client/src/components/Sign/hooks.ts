import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { loginUser, registerUser } from "../../redux/features/auth/authSlice";

export const useAuthHook = (toogle: boolean) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { status } = useAppSelector((state: any) => state?.users);

  const validationSchema = yup.object({
    email: yup.string().email("Неверный email").required("Обязательное поле"),
    password: yup
      .string()
      .min(8, "Минимум 8 символов")
      .required("Обязательное поле"),
    name: yup.string().required("Обязательное поле"),
    phone: yup.string().min(11, "Минимум 11 символов").length(11),
  });

  const formik = useFormik({
    initialValues:
      toogle === true
        ? {
            email: "",
            password: "",
            name: "",
            phone: "",
          }
        : {
            email: "",
            password: "",
          },
    validationSchema: validationSchema,
    onSubmit: () => {},
  });

  const handleSubmit = async () => {
    try {
      const response = await dispatch(
        // if toogle === true to send fetch register
        toogle ? registerUser(formik.values) : loginUser(formik.values)
      );
      toast(status);
      if (response) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { handleSubmit, formik, status };
};
