/* eslint-disable no-unused-vars */
import React from "react";
import "./EditCard.css";
import '../Box/Box.css'
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Box2 } from "./Box2";
import axios from "axios";

import { Box } from "../Box/Box";
import { json } from "react-router-dom";

const EditCard = ({  makeDefult , fname , titel , desc , image ,carid ,car, setCar}) => {

  const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1;
const day = today.getDate();
const date = ""+year+"/"+month+"/"+day+""
// console.log(`Today's date: ${year}-${month}-${day}`);
  
  const validation = yup.object().shape({
    titel: yup.string().required("Please enter title"),
    desc: yup.string().required("Please enter description"),
    
    name: yup.string().required("Please enter name")
  });
  const onSuubmit2 = (values) => {
    
    console.log(values)
    postData(values)
    console.log(carid)




alert("Car edited successfully");

    

    // console.log("Form submited!!!", values);
    
    }

    const postData = async (values) => {
      
    const res = await axios.put('https://66e3fba7d2405277ed128b1e.mockapi.io/api/brand/cars/'+carid, values)
    setCar(res.data)
    console.log(res.data)
    setCar([...car, values]);
    fetchData();
    }

    const fetchData = async () => {
    const res = await axios.get('https://66e3fba7d2405277ed128b1e.mockapi.io/api/brand/cars')
    setCar(res.data)
    console.log(res.data)
    }

  // setCardList([...cardList, values]);

  return (
    <div className="center">
        <input type="checkbox" id="showEdit" />
        <label htmlFor="showEdit" className="show-btn">
          Edit Car
        </label>
      <div className="form-wrapper">
        <Formik
          enableReinitialize={true}
          initialValues={{ titel: titel, image:image, name: fname, desc: desc,date:date ,id:""}}
          onSubmit={(values) => onSuubmit2(values) 
          }
          validationSchema={validation}
        >
          {(form) => (
            <div className="form-container">
              <div className="left">
                <label
                  htmlFor="showEdit"
                  className="close-btn fas fa-times"
                  title="close"
                >
                  X
                </label>
                <div className="text">Edit Car</div>
                <Form>
                  <div className="data">
                    <label>Name</label>
                    <Field name="name" placeholder="name..." values={fname}/>
                    <ErrorMessage
                      name="name"
                      component={"p"}
                      className="error"
                    />
                  </div>
                  <div className="data">
                    <label>Title</label>
                    <Field name="titel" placeholder="title..."  values={titel}/>
                    <ErrorMessage
                      name="titel"
                      component={"p"}
                      className="error"
                    />
                  </div>
                  <div className="data">
                    <label>Description</label>
                    <Field name="desc" placeholder="description..."  values={desc}/>
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
                    isFocused={true}
                    namee={form.values.name}
                    title={form.values.titel}
                    desc={form.values.desc}
                    
                    image={image}
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

export default EditCard;
