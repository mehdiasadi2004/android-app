
import React, { useEffect, useState } from "react";
import "./AddCard.css";
import '../Box/Box.css'
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Box2 } from "./Box2";
import axios from "axios";


const AddCard = ({ setCars , cars }) => {
    const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1;
const day = today.getDate();
const date = ""+year+"/"+month+"/"+day+""
  const validation = yup.object().shape({
    titel: yup.string().required("Please enter title"),
    desc: yup.string().required("Please enter description"),
    image: yup.string().required("Please enter image address"),
    name: yup.string().required("Please enter name")
  });
  const onSuubmit2 = (values) => {
    alert("Car added successfully");
    
    postData(values)

    



    

    // console.log("Form submited!!!", values);
    
    }

    const postData = async (values) => {
    const res = await axios.post('https://66e3fba7d2405277ed128b1e.mockapi.io/api/brand/cars', values)
    setCars(res.data)
    // console.log(res.data)
    setCars([...cars, values]);
    fetchData();
    }

    const fetchData = async () => {
    const res = await axios.get('https://66e3fba7d2405277ed128b1e.mockapi.io/api/brand/cars')
    setCars(res.data)
    console.log(res.data)
    }

    
  

  return (
    <div className="center">
      <input type="checkbox" id="show" />
      <label htmlFor="show" className="show-btn">
        Add Car
      </label>
      <div className="form-wrapper">
        <Formik
          enableReinitialize={true}
          initialValues={{ titel: "", image: "../../../public/", name: "", desc: "",date:date ,id:""}}
          onSubmit={(values) => onSuubmit2(values) 
          }
          validationSchema={validation}
        >
          {(form) => (
            <div className="form-container">
              <div className="left">
                <label
                  htmlFor="show"
                  className="close-btn fas fa-times"
                  title="close"
                >
                  X
                </label>
                <div className="text">Add Car</div>
                
                <Form >
                  <div className="data">
                    <label>Name</label>
                    <Field name="name" placeholder="name..." />
                    <ErrorMessage
                      name="name"
                      component={"p"}
                      className="error"
                    />
                  </div>
                  <div className="data">
                    <label>Title</label>
                    <Field name="titel" placeholder="title..."  />
                    <ErrorMessage
                      name="titel"
                      component={"p"}
                      className="error"
                    />
                  </div>
                  <div className="data">
                    <label>Description</label>
                    <Field name="desc" placeholder="description..."  />
                    <ErrorMessage
                      name="desc"
                      component={"p"}
                      className="error"
                    />
                  </div>
                  <div className="data">
                    <label>Image address</label>
                    <Field name="image" placeholder="Pic..." />
                    <ErrorMessage name="image" component={"p"} className="error" />
                  </div>
                  <div className="btn">
                    <div className="inner"></div>
                    <button type="submit">Add</button>
                  </div>
                </Form>
              </div>
              <div className="right">
                <div className="container">
                  <Box2
                    
                    namee={form.values.name}
                    title={form.values.titel}
                    
                    
                    image={form.values.image}
                  />
                  
                </div>
              </div>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddCard;
