import React from 'react'
import { NavLink } from 'react-router-dom';
import { GoPerson } from "react-icons/go";
import { BiMessageAltDetail } from "react-icons/bi";
import { BsBookmark } from "react-icons/bs";
import { AiFillCloseSquare } from "react-icons/ai";
import '../Screens/AddDetails.css'

const FormDetails = ({handleChange,handleSubmit,handleClose,rest}) => {
  return (
    <>
             <div className='details_div border'   style={{zIndex:'1'}}>
                    <form className='m-4' >
                    <div className="text-end close_btn" onClick={handleClose}><AiFillCloseSquare /></div>

                    <div className="">
                      <label className="py-2" for="specificSizeInputGroupUsername">Username</label>
                      <div className="input-group">
                        <div className="input-group-text"><GoPerson /></div>
                        <input 
                           type="text" 
                           name='name'
                           value={rest.name}
                           onChange={handleChange}
                           className="form-control" 
                           id="specificSizeInputGroupUsername" 
                           placeholder="Username"/>
                      </div>
                    </div>
                    <div className="">
                      <label className="py-2" for="specificSizeInputGroupSubject">Subject</label>
                      <div className="input-group">
                        <div className="input-group-text"><BiMessageAltDetail /></div>
                        <input 
                          type="text" 
                          name='subject'
                          value={rest.subject}
                          onChange={handleChange}
                          className="form-control" 
                          id="specificSizeInputGroupSubject" 
                          placeholder="Subject"/>
                      </div>
                    </div>
                    <div className="">
                      <label className="py-2" for="specificSizeInputGroupMark">Mark</label>
                      <div className="input-group">
                        <div className="input-group-text"><BsBookmark /></div>
                        <input
                           type="text" 
                           name='marks'
                           value={rest.marks}
                           onChange={handleChange}
                           className="form-control" 
                           id="specificSizeInputGroupMark" 
                           placeholder="Mark"/>
                      </div>
                    </div>
              
                    <div className="addButtonDiv ">
               
                         <div className="addButton " onClick={handleSubmit}>
                                  Add
                         </div>
                         
                    </div>   
                    </form>
                    </div>
    </>
  )
}

export default FormDetails
