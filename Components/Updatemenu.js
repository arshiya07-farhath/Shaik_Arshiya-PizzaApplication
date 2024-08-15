import { useFormik } from "formik";
import axios from "axios";
import {useNavigate,useParams } from "react-router-dom";
import * as Yup from "yup";
import { useEffect,useState } from "react";

function Updatemenu() {
  const { id } = useParams();
  const [ourmenu, setOurmenu] = useState(null);
  const navigate = useNavigate();


  useEffect(() => {
    axios.get(`http://localhost:3000/ourmenu/${id}`)
      .then((response) => {
        setOurmenu(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data", error);
      });
  }, [id]);
  const formik = useFormik({
    initialValues: {
      image: ourmenu?.image || '' ,
      price: ourmenu?.price || '' ,
      Size: ourmenu?.Size || '' ,
      token:  ourmenu?.token || '' ,
      id: ourmenu?.id || '' ,
       
      
       
       
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      image: Yup.string().required("Image url is required"),
      name: Yup.string()
        .min(5, "Name must be atleast 5 characters")
        .required("Name is required"),
      prize: Yup.number()
        .min(2, "Price must be greater than 0")
        .required("Name is required"),
      Size: Yup.string()
        .min(3, "Name must be atleast 3 characters")
        .required("Name is required"),
      id: Yup.number()
        .min(1, "Number must be atleast 1characters")
        .required("Number is required"),
      token: Yup.number()
        .min(1, "Number must be atleast 1characters")
        .required("Number is required"),
    }),
    onsubmit: (values, { setSubmitting, resetForm, setStatus }) => {
      axios.put(`http://localhost:3001/ourmenu/${id}`, values)
        .then((response) => {
          setStatus("success");
          resetForm();
          navigate("/ourmenu");
        })
        .catch((error) => {
          setStatus("error");
        })
        .finally(() => {
          setSubmitting(false);
        });
    },
  });

  return (
    <div className="container mt-4">
      <h2>Update newmenu</h2>

      <form onSubmit={formik.handleSubmit}>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Image URL
          </label>
          <input
            id="image"
            name="image"
            type="text"
            className="form-control"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.image}
          />
          {formik.touched.image && formik.errors.image ? (
            <div className="text-danger">{formik.errors.image}</div>
          ) : null}
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-danger">{formik.errors.name}</div>
          ) : null}
        </div>
        <div className="mb-3">
          <label htmlFor="size" className="form-label">
            Size
          </label>
          <input
            id="size"
            name="size"
            type="text"
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.size}
          />
          {formik.touched.size && formik.errors.size ? (
            <div className="text-danger">{formik.errors.size}</div>
          ) : null}
        </div>
        <div className="mb-3">
          <label htmlFor="token" className="form-label">
            token
          </label>
          <input
            id="token"
            name="token"
            type="number"
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.token}
          />
          {formik.touched.token && formik.errors.token ? (
            <div className="text-danger">{formik.errors.token}</div>
          ) : null}
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            id="price"
            name="price"
            type="number"
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.price}
          />
          {formik.touched.price && formik.errors.price ? (
            <div className="text-danger">{formik.errors.price}</div>
          ) : null}
        </div>
        <button type="submit" className="btn btn-primary">
          submit
        </button>
      </form>
    </div>
  );
}

export default Updatemenu;
/*


name
age
submit





*/