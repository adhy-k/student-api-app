import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Addstudent = () => {
    const [input, changeInput] = useState(
        {
            name: "",
            roll_number: "",
            admission_number: "",
            college: ""
        }
    )
    const inputHandle = (event) => {
        changeInput({...input,[event.target.name]:event.target.value})
    }

    const readInput=()=>{
        console.log(input)
            axios.post("http://18.144.111.41/student_api.php",input).then(
                (req)=>{
                    alert("Student Data Added Successfully")
                }
            ).catch()
    }

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Name</label>
                                <input type="text" className="form-control" name='name' value={input.name} onChange={inputHandle} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Roll_number</label>
                                <input type="text" className="form-control" name='roll_number' value={input.roll_number} onChange={inputHandle}/>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Admission_number</label>
                                <input type="text" className="form-control" name='admission_number' value={input.admission_number} onChange={inputHandle}/>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">College</label>
                                <input type="text" className="form-control" name='college' value={input.college} onChange={inputHandle}/>
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-primary" onClick={readInput}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addstudent