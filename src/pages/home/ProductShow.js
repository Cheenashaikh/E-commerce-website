import { useEffect, useState } from "react";
import './table.css'

function ProductShow() {
  const [user, setUser] = useState([]); // Initialize as an empty array

  useEffect(() => {
    getApiData();
  }, []);

  const getApiData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/product");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setUser(data.message); 
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <div className="Time">
      <table>
      <tr>

    
        <th>ID</th>
        <th>Product Name</th>
        <th>Product price</th>
        <th>Product Category</th>
        <th>Product Url</th>
        </tr>

    
        {user.map((userItem) => (

      
          <tr>

        
            <td>{userItem.Id}</td>
            <td>{userItem.product_name}</td>
            <td>{userItem.product_price}</td>
            <td>{userItem.product_category}</td>
            <td>{userItem.product_url}</td>
            </tr>
         
        ))}



        </table>
      </div>
    </>
  );
}

export default ProductShow;
