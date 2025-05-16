import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createProduct,
  deleteProduct,
  fetchProducts,
} from "../../features/Product";
import { useFormik } from "formik";
import schema from "../../formikYup/schema";

const Admin = () => {
  const products = useSelector((state) => state.products.products);
  // console.log(products);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const formik = useFormik({
    initialValues: {
      name: "",
      image: "",
      price: "",
      description: "",
    },
    validationSchema: schema,
    onSubmit: (values, { resetForm }) => {
      dispatch(createProduct(values)), resetForm();
    },
  });
  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-3">
          <label htmlFor="">Name Input</label>
          <input
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          <span className="danger">{formik.errors.name}</span>
        </div>
        <div className="mb-3">
          <label htmlFor="">img Input</label>
          <input
            type="text"
            name="image"
            value={formik.values.image}
            onChange={formik.handleChange}
          />
          <span className="danger">{formik.errors.image}</span>
        </div>
        <div className="mb-3">
          <label htmlFor="">price Input</label>
          <input
            type="number"
            name="price"
            value={formik.values.price}
            onChange={formik.handleChange}
          />
          <span className="danger">{formik.errors.price}</span>
        </div>
        <div className="mb-3">
          <label htmlFor="">Name Input</label>
          <input
            type="text"
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
          />
          <span className="danger">{formik.errors.description}</span>
        </div>
        <button type="submit" className="btn btn-success">
          Add Product
        </button>
      </form>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">description</th>
            <th scope="col">Funcitons</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product._id}>
              <th scope="row">{index + 1}</th>
              <td>
                <img src={product.image} alt="" />
              </td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.description}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => dispatch(deleteProduct(product._id))}
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
