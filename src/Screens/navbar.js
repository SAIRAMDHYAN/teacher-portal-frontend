import React from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown';
// import { Container, TableContainer } from '@mui/material'
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Navbare = () => {
let navigate=useNavigate()
  let token=localStorage.getItem('token')
  let logout=()=>{
    localStorage.removeItem('token')
    alert('logout')
    navigate('/login')
  }
  // console.log(token)
  return (
   <Container>
   <div className=" navbar navbar-danger bg-light fw-bold fs-5 fixed mb-2 border" >
    <div className="container bg-light" style={{position:'sticky',top:'10px'}}>
        <div className="navbar-brand link-danger">tailwebs.</div>
        <div className="nav-items d-flex align-item-right ">
           <div className="nav-items px-5">Home</div>
           {token ?(<div className="nav-items " style={{cursor:'pointer'}} onClick={logout}>Logout</div>):
                      <div className="nav-items " style={{cursor:'pointer'}} onClick={logout}>Login</div>

           }
        </div>

    </div>
   </div>
   </Container>
  )
}

export default Navbare
