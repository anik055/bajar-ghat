import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [imageURL, setIMageURL] = useState(null);


  const onSubmit = data => {
    const eventData = {
      name: data.name,
      imageURL: imageURL
    };
    const url = `https://serene-island-10470.herokuapp.com/addEvent`;
    console.log(eventData)
    
    fetch(url, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(eventData)
    })
    .then(res => res.json())
    .then(data => console.log(data) )
  };

  const handleImageUpload = event => {
    console.log(event.target.files[0])
    const imageData = new FormData();
    imageData.set('key', '5a2f710cdc7bc8987fa156b3b0947e57');
    imageData.append('image', event.target.files[0]);
    
    axios.post('https://api.imgbb.com/1/upload', 
    imageData)
    .then(function (response) {
      setIMageURL(response.data.data.display_url);
      console.log(response.data.data.display_url)
    })
    .catch(function (error) {
      console.log(error);
    });

  }
  return (
    <div>
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="">Product Name</label>
      <input name="name" defaultValue="New exciting Event" ref={register} />
      <br/>
      <label htmlFor="">Add Price</label>
      <input name="name" defaultValue="New exciting Event" ref={register} />
      <br/>
      <label htmlFor="">Add Photo</label>
      <input name="exampleRequired" type="file" onChange={handleImageUpload} />
      <br/>
      <input type="submit" />
    </form>
    </div>
  );
};

export default AddProduct;