import './add-products.style.css'

import { useState } from "react";
import supabase from "../config/supabaseClient";

type AddProductsProps = {
    pageTitle: string;
}

const AddProducts: React.FC<AddProductsProps> = ({ pageTitle }) => {
    const [title, setTitle] = useState<string>("");
    const [price, setPrice] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [successMessage, setSuccessMessage] = useState<string|null>(null);
    const [errorMessage, setErrorMessage] = useState<string|null>(null);

    const handleProductNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPrice(event.target.value);
    };

    const handleDescriptionChange = (event: React.SyntheticEvent) => {
        setDescription((event.target as HTMLTextAreaElement).value);
    };

    const handleSubmit = async (e: React.SyntheticEvent) => {
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
        setErrorMessage( "Please sign in")
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