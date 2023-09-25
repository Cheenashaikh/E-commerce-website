// import React, { useState } from "react";

// function Signup() {
//     const [name, setName] = useState("");
//     const [password, setPassword] = useState("");
//     const [email, setEmail] = useState("");

//     const Register = async (e)=> {
//         e.preventDefault();
//                 let item = { admin_name:name, admin_email:email,admin_password:password };
//                 console.warn(item); 
//                 const result = await fetch("http://localhost:5000/api/sign/signup", {
//                     method: "POST",
                   
//                     headers: {
//                         "Content-type": "application/json",
//                         "Accept": "application/json"
//                     },  body: JSON.stringify(item),
//                 });
        
//                  let result1 = await result.json();
//                  alert("Data added")
//                 localStorage.setItem("user-info", JSON.stringify(result1));
//             }

//     return (
//         <form  action="POST " onSubmit={Register}>
//         <div className="p-4">
  

   
        
//             <h1>Sign Up</h1>
//             <div className="mb-3 px-4 text-center">
//             <label>Name</label>
//                 <input
//                     type="text"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     className="form-control shadow-none"
//                     placeholder="name"
//                 />
//             </div>
//             <div className="mb-3 px-4 text-center">
//             <label>Password</label>
//                 <input
//                     type="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     className="form-control"
//                     placeholder="password"
//                 />
//             </div>
//             <div className="mb-3 px-4 text-center">
//             <label>Email</label>
//                 <input
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     className="form-control"
//                     placeholder="email"
//                 />
//             </div>
//            <form onSubmit={Register}><button onClick={Register} className="btn btn primary">  sign up</button></form>

        
     
    
//              </div>
//              </form>
        
//     );
// }

// export default Signup;