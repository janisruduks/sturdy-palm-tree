import './addProducts.style.css'

import React, { useState } from "react";
import supabase from "../config/supabaseClient";

const AddProducts = ({ pageTitle }) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [successMessage, setSuccessMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    const handleProductNameChange = (event) => {
        setTitle(event.target.value);
    };

    const handlePriceChange = (event) => {
        setPrice(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { data, error } = await supabase
            .from("products")
        .insert([{ 
            title: title, 
            price: price, 
            description: description 
        }]);

    if (error) {
        console.log(error);
        setErrorMessage( "Please sign in", error.message)
    } else {
        setTitle("");
        setPrice("");
        setDescription("");
        setSuccessMessage("Product added successfully!");
    }
  };

    return (
        <div>
            <h1 className='title-menu'>{pageTitle}</h1>
            <hr></hr>
            <div className='form-container'>

                <form onSubmit={handleSubmit}>
                <label>
                    Product Name:
                    <input type="text" value={title} onChange={handleProductNameChange} />
                </label>
                <label>
                    Price:
                    <input type="number" value={price} onChange={handlePriceChange} />
                </label>
                <label>
                    Description:
                    <textarea value={description} onChange={handleDescriptionChange} />
                </label>
                <button type="submit">Add Product</button>
                </form>
                {successMessage && <p>{successMessage}</p>}
                {errorMessage && <p>{errorMessage}</p>}
            </div>
        </div>
    );
};

export default AddProducts;