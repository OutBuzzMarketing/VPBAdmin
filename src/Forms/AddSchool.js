import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'

const AddSchoolForm = () => {
    return (
        <div className="main-table">
            <h1>Add School Form</h1>
            <p>
                {/* <form onSubmit={"handleSubmit"}> */}
                    <input type="text" Required>SCHOOL NAME</input>
                    <input type="file" required>UPLOAD SCHOOL IMAGE</input>
                    <Button type="submit">SUBMIT</Button>
                {/* </form> */}
                
            </p>
        </div>
     );
}
 
export default AddSchoolForm;