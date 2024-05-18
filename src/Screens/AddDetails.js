import React,{useEffect, useState} from 'react'
// import {Container} from 'react-bootstrap'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Button, Menu, MenuItem } from '@mui/material';
import './AddDetails.css'
import { IoCaretDownCircleSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import FormDetails from '../components/formDetails';
axios.defaults.baseURL="http://localhost:3002/"

const AddDetails = () => {
    const[addsection,setAddsection]=useState(false)
    const[editsection,setEditSection]=useState(false)
    const [actionStudent, setActionStudent] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null);
    const[dataList,setDataList]=useState([])
    let navigate=useNavigate()

    
    const[studentInfo,setStudentInfo]=useState({
        name:'',
        subject:'',
        marks:''
    })
      
    const[studentInfoEdit,setStudentInfoEdit]=useState({
        name:'',
        subject:'',
        marks:'',
        id:''
    })
    const handleChange=(e)=>{
            const{name,value}=e.target
            setStudentInfo(prev=>({
                ...prev,
                [name]:value
            }))
    }
    const handleSubmit=async(e)=>{
        e.preventDefault()
        const data= await axios.post('/create',studentInfo) 
        console.log(data)
        if(data.data.Success){
            setAddsection(false)
            alert(data.data.message)
          
        }
          getFetchData()

    }

    const getFetchData=async()=>{
        const data=await axios.get('/studentList')
          
           if(data.status===200){
            setDataList(data.data)
            console.log(data.data)
           }
           console.log(data)
       
       
    }
  useEffect(()=>{getFetchData()},[])
  
       const handleDelete=async(student)=>{
        const id=student._id
        console.log(id)
             let response=await axios.delete('/delete/'+id)
             if(response.status===200){
                getFetchData()
                alert('data deleted successfully')
             }
         }

         const handleEdit=(el)=>{
            setEditSection(true)
            setStudentInfoEdit(el)
         }

         const handleEditOnChange=async(e)=>{
            const{name,value}=e.target
            setStudentInfoEdit(prev=>({
                ...prev,
                [name]:value
            }))
         }

         const handleUpdate = async (e) => {
            e.preventDefault();
            console.log('Sending data:', studentInfoEdit);
            try {
                let response = await axios.put('http://localhost:3002/update', studentInfoEdit);
                console.log('response==>', response.data);
                if (response.status === 200) {
                    alert('data updated successfully');
                    setEditSection(false);
                    getFetchData();
                }
            } catch (error) {
                console.error('Error updating data:', error);
            }
        };
        
        let handleClick=(student,event)=>{
            setActionStudent(student);
            setAnchorEl(student ? event.currentTarget : null);
        }

        useEffect(() => {
            const token = localStorage.getItem('token');
            // console.log(token)
            if (!token) {
                navigate('/login');
                return;
            }
          
          }, [navigate]);
  return (
    <>
          {/* <Container className=' justify-content-center align-items-center container details_container' > */}
       <div className="details_container container">

            {
               addsection && (
               <FormDetails 
               handleChange={handleChange}
               handleSubmit={handleSubmit}
               handleClose={()=>setAddsection(false)}
               rest={studentInfo}
            />
            )}
            {
                editsection && (
                    <FormDetails 
                    handleSubmit={handleUpdate}
                    handleChange={handleEditOnChange}
                    handleClose={()=>setEditSection(false)}
                    rest={studentInfoEdit}
                    />
                )
            }


           <TableContainer sx={{ bgcolor: '#fff', p: 0 }}>
            <Table>
               <TableHead>
                   <TableRow >
                       <TableCell sx={{fontWeight:'500',fontSize:'18px',px:5}}  >Student</TableCell>
                       <TableCell sx={{fontWeight:'500',fontSize:'18px'}} align='left'>Subject</TableCell>
                       <TableCell sx={{fontWeight:'500',fontSize:'18px'}} align='center'>Marks</TableCell>
                       <TableCell sx={{fontWeight:'500',fontSize:'18px'}} align='center'>Action</TableCell>
                   </TableRow>
               </TableHead>

              <TableBody>
                  {dataList.map((student, index) => (
                      <TableRow key={index}>
                          <TableCell sx={{fontWeight:'450',fontSize:'18px'}}>
                              <Typography
                                  sx={{
                                      height: '40px',
                                      width: '40px',
                                      textAlign: 'center',
                                      m: 2,
                                      color: 'white',
                                      bgcolor: 'primary.main',
                                      borderRadius: '50%',
                                      display: 'inline-block',
                                      fontSize: '26px'
                                  }}
                              >
                                    {student.name.charAt(0)}
                              </Typography>
                            {student.name}
                          </TableCell>
                          <TableCell align='left' sx={{fontWeight:'450',fontSize:'18px'}}   >{student.subject}</TableCell>
                          <TableCell align='center' sx={{fontWeight:'450',fontSize:'18px'}}  >{student.marks}</TableCell>
                          <TableCell align='center'>
                              <Button
                                //   variant="contained"
                                   color="dark"
                                 sx={{fontSize:'30px'}}
                                  onClick={(event) => handleClick(student, event)}
                              >
                               <IoCaretDownCircleSharp />                  
                             </Button>
                              {/* <button className='btn btn-primary' onClick={()=>handleEdit(student)}>Edit</button>
                              <button className='btn btn-danger' onClick={()=>handleDelete(student._id)}>delete</button>
                          */}
                          </TableCell>
                      </TableRow>
                  ))}
              </TableBody>
              {/* <div className="btn btn-primary btn_add" onClick={()=>setAddsection(true)}>Add</div> */}

          </Table>
          <div className="my-3 mb-5 d-flex flex-column align-items-center">
                {/* <Link to={'/addDetails'}> */}
                    <div
                        className="bg-dark link-light text-center py-2"
                        style={{ width: '200px', textDecoration: 'none' }}
                    >
                       <div className="button" onClick={()=>setAddsection(true)}>Add Student</div>
                    </div>
                {/* </Link> */}
            </div>
          
                 {actionStudent&&(   <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => handleClick(null)}>
   
        {/* <MenuItem onClick={handleEdit}>
            <Link to={`/addDetails/${actionStudent._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                Edit{actionStudent._id}
            </Link>
        </MenuItem> */}
              <MenuItem onClick={()=>handleEdit(actionStudent)}>Edit</MenuItem>
              <MenuItem onClick={()=>handleDelete(actionStudent)}>Delete</MenuItem>
      </Menu>)}

            </TableContainer>   
           
        </div>
    {/* </Container> */}
    </>
  )
}

export default AddDetails
