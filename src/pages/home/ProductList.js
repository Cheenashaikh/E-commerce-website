import React, { useState } from "react";

function ProductList() {
    const [productName, setName] = useState("");
    const [Price, setPrice] = useState("");
    const [productCategory, setProductCategory] = useState("");
    const[productUrl,setProductUrl]=useState("");

    const Register = async (e) => {
        e.preventDefault();
        let item = { product_name: productName, product_price: Price, product_category: productCategory ,product_url:productUrl};
        console.warn(item);
        
        const result = await fetch("http://localhost:5000/api/product/product", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(item),
        });

        let result1 = await result.json();
        alert("Data added");
        localStorage.setItem("user-info", JSON.stringify(result1));
    };

    return (
        <form action="POST" onSubmit={Register}>
            <div className="p-4">
                <h1>Product ADD</h1>
                <div className="mb-3 px-4 text-center">
                <label>Name</label>
                    <input
                        type="text"
                        value={productName}
                        onChange={(e) => setName(e.target.value)}
                        className="form-control shadow-none"
                        placeholder="name"
                    />
                </div>
                <div className="mb-3 px-4 text-center">
                <label> Price</label>
                    <input
                        type="text"
                        value={Price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="form-control"
                        placeholder="price"
                    />
                </div>
                <div className="mb-3 px-4 text-center">
                <label> Category</label>
                    <input
                        type="text"
                        value={productCategory}
                        onChange={(e) => setProductCategory(e.target.value)}
                        className="form-control"
                        placeholder="category"
                    />
 <label> Image Url</label>
                    <input
                        type="text"
                        value={productUrl}
                        onChange={(e) => setProductUrl(e.target.value)}
                        className="form-control"
                        placeholder="Image Url"
                    />

                </div>
                <button type="submit" className="btn btn-primary">Add</button>
            </div>
        </form>
    );
}

export default ProductList;
