import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios'

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const handleRegister = async (e) => {
        e.preventDefault(); // Prevent default form submission
    
        if (!name || !email || !password) {
            alert('Please enter all fields');
            return;
        }
    
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('password', password);
        console.log('formData',formData)

        try {
             axios.post('http://localhost:3002/register', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            alert('Registration Success');
            navigate('/login');
        } catch (error) {
            console.error("Registration error: ", error);
            alert('Failed to register user');
            setError("Failed to register user: " + (error.response?.data?.error || "Unknown Error"));
        }
    }
    


  
  return (
    <>
   <div className='container px-0' style={{backgroundColor:'#cfd8dc'}}>
      
      <div className="col-md-12  d-flex justify-content-center align-item-center shadow py-5 ">
            <div className="bg-light rounded p-3 m-auto col-md-6 col-lg-5">
                <h1 className="text-center">Register</h1>
                <form className='mx-5'>     
     
                         <div className="mb-3">
                             <label htmlFor="nameId" className="form-label"><strong>Name</strong></label>
                             <input type="text"
                                 id="nameId"
                                 className="form-control"
                                 placeholder='Enter your name'
                                 value={name}
                                 onChange={(e) => setName(e.target.value)}
                             />
                         </div>
     
                         <div className="mb-3">
                             <label htmlFor="emailId" className="form-label"><strong>Email</strong></label>
                             <input type="email"
                                 id="emailId"
                                 className="form-control"
                                 placeholder='Enter your email'
                                 value={email}
                                 onChange={(e) => setEmail(e.target.value)}
                             />
                         </div>
     
                         <div className="mb-3">
                             <label htmlFor="passwordId" className="form-label"><strong>Password</strong></label>
                             <input type="password"
                                 id="passwordId"
                                 className="form-control"
                                 placeholder='Enter your password'
                                 value={password}
                                 onChange={(e) => setPassword(e.target.value)}
                             />
                             <div className="form-text">Your password will be kept secret</div>
                         </div>
     
     
                         <div className="mb-3 d-flex justify-content-center">
                             <button className="btn btn-info px-5" type="submit" onClick={handleRegister}><strong>Register</strong></button>
                         </div>
                     </form>
                     <div className="mb-3 d-flex flex-column align-items-center">
                    <h5>Already have an Account?</h5>
                    <Link to='/login' >
                        <div className="bg-dark link-light text-center py-2" style={{width:'200px',textDecoration:'none'}}><strong>Login</strong></div>
                    </Link>
                </div>
                </div>
   
            </div>
        </div>
      </>

  )
}

export default Register
