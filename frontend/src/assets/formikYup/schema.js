import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required("name is required"),
  price: yup.number().required("price is required").positive(),
  image: yup.string().url().required("image is required"),
  description: yup.string().required("description is required"),
});

export default schema;
