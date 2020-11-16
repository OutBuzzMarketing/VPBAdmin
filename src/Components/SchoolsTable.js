import React, { useState, useEffect } from 'react';
import {
    Container,
    Row,
    Col,
} from 'reactstrap';
import Image from '../images/dummy.jpg';

import { Button, Collapse, Card } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion'
import axios from 'axios';


const Table = () => {

    const [ schoolName, setSchoolName  ] = useState('');
    const [ schoolImage, setSchoolImage ] = useState(undefined)
    const [ selectedImage, setSelectedImage ] = useState(undefined)
    const [ isAddClicked, setIsAddClicked ] = useState(false)
    
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'http://127.0.0.1:5000/add-school',
            );

        }
        fetchData();
    }, [])
    
    const handleChange = event => {
        setSchoolImage(event.target.files[0])
        setSelectedImage(URL.createObjectURL(event.target.files[0]))
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        
        formData.append(
            'SchoolImage',
            schoolImage,
            schoolImage.name
        )

        let data = {
            name: schoolName,
        }

        formData.append("data", JSON.stringify(data))

        fetch('http://127.0.0.1:5000/add-school',
        {
            method: 'POST',
            body: formData,
              
            }).then(response => { 
            return response.json();
        }).catch((err) => console.log(err));

        setSchoolName('');
        setSchoolImage(undefined);
        setSelectedImage(undefined);
        setIsAddClicked(!isAddClicked);
    }

    return (
        <section className="outer-main">
        <Button id="switch_button" onClick={() => setIsAddClicked(!isAddClicked)}>{!isAddClicked ? "Add School" : "Back"}</Button>
            <Container>
                <Row>
                    <Col md="12">
                        <div className="table-box">
                            {!isAddClicked ?
                            <table className="main-table">
                                <Accordion>
                                    <tr>
                                        <th> # </th>
                                        <th> Image </th>
                                        <th> Navigation </th>
                                        <th> Edit </th>
                                        <th> Delete </th>
                                        <th>View Details</th>
                                    </tr>
                                    <Card>
                                        <tr>
                                            <td> 1 </td>
                                            <td><img src={Image} alt="img here" width="50" height="50"></img></td>
                                            <td> School </td>
                                            <td> <Button className="edit">Edit</Button> </td>
                                            <td> <Button className="delete">Delete</Button> </td>
                                            <td> <Accordion.Toggle as={Button} eventKey="0">
                                                <Button className="view-more">View More</Button>
                                            </Accordion.Toggle> </td>
                                        </tr>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>
                                                <thead>
                                                    <tr>
                                                        <th>S. No.</th>
                                                        <th>Image</th>
                                                        <th>Class/Category</th>
                                                        <th>Edit</th>
                                                        <th>Delete</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td> 1.1 </td>
                                                        <td><img src={Image} alt="img here" width="50" height="50"></img></td>
                                                        <td> Class X </td>
                                            <td> <Button className="edit">Edit</Button> </td>
                                            <td> <Button className="delete">Delete</Button> </td>
                                                    </tr>
                                                </tbody>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>

                                    <Card>
                                        <tr>
                                            <td> 2 </td>
                                            <td><img src={Image} alt="img here" width="50" height="50"></img></td>
                                            <td> School </td>
                                            <td> <Button className="edit">Edit</Button> </td>
                                            <td> <Button className="delete">Delete</Button> </td>
                                            <td> <Accordion.Toggle as={Button} eventKey="1">
                                                <Button className="view-more">View More</Button>
                                            </Accordion.Toggle> </td>
                                        </tr>
                                        <Accordion.Collapse eventKey="1">
                                            <Card.Body>Hello! I'm another body</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <tr>
                                            <td> 3 </td>
                                            <td><img src={Image} alt="img here" width="50" height="50"></img></td>
                                            <td> School </td>
                                            <td> <Button className="edit">Edit</Button> </td>
                                            <td> <Button className="delete">Delete</Button> </td>
                                            <td> <Accordion.Toggle as={Button} eventKey="2">
                                                <Button className="view-more">View More</Button>
                                            </Accordion.Toggle> </td>
                                        </tr>
                                        <Accordion.Collapse eventKey="2">
                                            <Card.Body>Hello! I'm another body</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <tr>
                                            <td> 4 </td>
                                            <td><img src={Image} alt="img here" width="50" height="50"></img></td>
                                            <td> School </td>
                                            <td> <Button className="edit">Edit</Button> </td>
                                            <td> <Button className="delete">Delete</Button> </td>
                                            <td> <Accordion.Toggle as={Button} eventKey="3">
                                                <Button className="view-more">View More</Button>
                                            </Accordion.Toggle> </td>
                                        </tr>
                                        <Accordion.Collapse eventKey="3">
                                            <Card.Body>Hello! I'm another body</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>

                                </table> 
                          : <div className="form-main">
                                    <h1>Add School Form </h1>
                                    <img src={selectedImage} alt="" height="200" width="200"></img>
                                    <form onSubmit={handleSubmit}>
                                    <label for="name"> School Name</label>
                                        <input value={schoolName} onChange={(e) => setSchoolName(e.target.value)} type="text" id="name" required></input>
                                        <label for="image">Upload Image </label>
                                        <input onChange={handleChange} type="file" id="image" required></input>
                                        <button className="submit-form"> Submit </button>
                                    </form>
                                </div>
                            }</div>

                    </Col>
                </Row>
            </Container>
        </section>

    );
}

export default Table;