import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"; // Create this file separately

const useCustomForm = ({ validationSchema, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const submitHandler = handleSubmit((data) => {
    onSubmit(data);
  });

  return {
    register,
    submitHandler,
    errors,
  };
};

export default useCustomForm;
