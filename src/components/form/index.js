import { useEffect, useState } from "react";
import './form.css'
import { useCartContext } from "../../hooks/CartContext";
import { useNavigate } from "react-router-dom";

function Form(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [total, setTotal] = useState("");

  const { removeAllItems } = useCartContext();
  const navigate = useNavigate();

  useEffect(() => {
    setTotal(props.total);
  }, [props]);

  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangeContact = (e) => {
    setContact(e.target.value);
  };
  const handleChangeTotal = (e) => {
    setTotal(e.target.value);
  };

  const handleSubmit = () => {
    fetch("http://localhost:5000/api/admin/makeadmin", {
      method: "POST",
      body: JSON.stringify({
        admin_name: name,
        admin_email: email,
        admin_contact: contact,
        admin_Total: total,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        removeAllItems();
        navigate('/');
        
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <form>
      <div>
        <label> Customer Name:</label>
        <input
          placeholder="Enter name"
          value={name}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div>
        <label> Email:</label>
        <input
          placeholder="enter Email"
          value={email}
          onChange={(e) => handleChangeEmail(e)}
        />
      </div>
      <div>
        <label>Contact Number:</label>
        <input
          placeholder="Enter Contact No:"
          value={contact}
          onChange={(e) => handleChangeContact(e)}
        />
      </div>
      <div>
        <label>Total:</label>
        <input
          placeholder=""
          value={total}
          onChange={(e) => handleChangeTotal(e)}
        />
      </div>
      <div>
        <button onClick={() => handleSubmit()}> done</button>
      </div>
    </form>
  );
}
export default Form;
