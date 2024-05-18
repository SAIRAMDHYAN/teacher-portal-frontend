// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Button, Menu, MenuItem } from '@mui/material';
// import axios from 'axios';
// // import AddDetails from '../components/addDetails';
// import AddDetails from './AddDetails';

// const StudentsDetails = () => {
//     const [anchorEl, setAnchorEl] = useState(null);
//     const [edit, setEdit] = useState(false);
//     const [actionStudent, setActionStudent] = useState(null);
//     const [editStudent, setEditStudent] = useState(null);
//     const [students, setStudents] = useState([]);

//     useEffect(() => {
//         const fetchStudents = async () => {
//             try {
//                 const response = await axios.get('http://localhost:3002/studentList');
//                 setStudents(response.data);
//                 console.log(response.data);
//             } catch (error) {
//                 console.log(error);
//             }
//         };
//         fetchStudents();
//     }, []);

//     const handleClick = (student, event) => {
//         setActionStudent(student);
//         setEditStudent(student)
//         setAnchorEl(student ? event.currentTarget : null);
//     };

//     const handleEdit = async () => {
//         setEdit(true);
//         setAnchorEl(null);
//         if (editStudent) {
//             try {
//                 const response = await axios.put(`http://localhost:3002/students/${editStudent._id}`, editStudent);
//                 const updatedStudent = response.data;
//                 const updatedStudents = students.map(student =>
//                     student._id === updatedStudent._id ? updatedStudent : student
//                 );
//                 setStudents(updatedStudents);
//             } catch (error) {
//                 console.log(error);
//             }
//         }
//     };
    

//     const handleDelete = async (student) => {
                
//         const studentID=student._id
//         console.log(studentID)
//             try {
//                 await axios.delete(`http://localhost:3002/students/${studentID}`);
//                 const updatedStudents = students.filter(student => student._id !== studentID);
//                 setStudents(updatedStudents);
//             } catch (error) {
//                 console.log(error);
//             }
       
//         setAnchorEl(null);
//     };

//     return (
//         <Container sx={{ bgcolor: '#cfd8dc' }}>
//      {edit ? ( <AddDetails />
//          ) : (
//             <TableContainer sx={{ bgcolor: '#fff', p: 0 }}>
//             <Table>
//                <TableHead>
//                    <TableRow>
//                        <TableCell>Student</TableCell>
//                        <TableCell align='left'>Subject</TableCell>
//                        <TableCell align='center'>Marks</TableCell>
//                        <TableCell align='center'>Action</TableCell>
//                    </TableRow>
//                </TableHead>

//               <TableBody>
//                   {students.map((student, index) => (
//                       <TableRow key={index}>
//                           <TableCell>
//                               <Typography
//                                   sx={{
//                                       height: '40px',
//                                       width: '40px',
//                                       textAlign: 'center',
//                                       m: 2,
//                                       color: 'white',
//                                       bgcolor: 'primary.main',
//                                       borderRadius: '50%',
//                                       display: 'inline-block',
//                                       fontSize: '26px'
//                                   }}
//                               >
//                                   {/* {student.name.charAt(0)} */}
//                               </Typography>
//                               {student.name}
//                           </TableCell>
//                           <TableCell align='left'>{student.subject}</TableCell>
//                           <TableCell align='center'>{student.marks}</TableCell>
//                           <TableCell align='center'>
//                               <Button
//                                   variant="contained"
//                                   color="primary"
//                                   onClick={(event) => handleClick(student, event)}
//                               >
//                                   Actions
//                               </Button>
//                           </TableCell>
//                       </TableRow>
//                   ))}
//               </TableBody>
//           </Table>
          
//            {actionStudent&&(   <Menu
//     id="simple-menu"
//     anchorEl={anchorEl}
//     open={Boolean(anchorEl)}
//     onClose={() => handleClick(null)}
// >
   
//         <MenuItem onClick={handleEdit}>
//             <Link to={`/addDetails/${actionStudent._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
//                 Edit{actionStudent._id}
//             </Link>
//         </MenuItem>
     
//               <MenuItem onClick={()=>handleDelete(actionStudent)}>Delete</MenuItem>
//       </Menu>)}

//             </TableContainer>   
//            )}

//          <div className="my-3 mb-5 d-flex flex-column align-items-center">
//                 <Link to={'/addDetails'}>
//                     <div
//                         className="bg-dark link-light text-center py-2"
//                         style={{ width: '200px', textDecoration: 'none' }}
//                     >
//                         <strong>Add Student</strong>
//                     </div>
//                 </Link>
//             </div>
  
//         </Container>
//     );
// };

// export default StudentsDetails;
