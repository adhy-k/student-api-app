import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Viewall = () => {

    const [students, changeStudents] = useState(
        {
            "status": "success", "data":[]
        }
    )

    const fetchData = () => {
        axios.get("http://18.144.111.41/view_all_students.php").then(
            (response) => {
                changeStudents(response.data)
            }
        ).catch()
    }

    useEffect(()=>{fetchData()},[])

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Id</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Roll number</th>
                                        <th scope="col">Admission number</th>
                                        <th scope="col">College</th>
                                    </tr>
                                </thead>
                                {
                                    students.data.map(
                                        (value, index) => {
                                            return (

                                                <tbody>
                                                    <tr>
                                                        <th>{value.id}</th>
                                                        <td>{value.name}</td>
                                                        <td>{value.roll_number}</td>
                                                        <td>{value.admission_number}</td>
                                                        <td>{value.college}</td>
                                                    </tr>
                                                </tbody>

                                            )
                                        }
                                    )
                                }
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Viewall