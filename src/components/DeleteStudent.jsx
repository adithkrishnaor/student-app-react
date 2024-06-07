import React from 'react'
import Navbar from './Navbar'

function DeleteStudent() {
    return (
        <div>
            <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <br />
                    <center>
                        <h3>Delete Student</h3>
                    </center>
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Admmission Number</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <center>
                                <button className="btn btn-danger">Delete</button>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default DeleteStudent