import React, { useState } from 'react';
import {
    Container,
    Row,
    Col,
} from 'reactstrap';
import Image from '../images/dummy.jpg';

import { Button, Collapse, Card } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion'

const Table = () => {
    const [open, setOpen] = useState(false);
    const [isAddClicked, setIsAddClicked] = useState(false)

    // const handleClick = () => {
    //     setIsAddClicked(!isAddClicked)
    //     document.getElementById("switch_button").innerHTML
    // }

    return (
        <section className="outer-main">
        <Button id="switch_button" onClick={() => setIsAddClicked(!isAddClicked)}>{!isAddClicked ? "Add Competition Category" : "Back"}</Button>
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
                                            <td> Competition </td>
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
                                                        <th>Category</th>
                                                        <th>Edit</th>
                                                        <th>Delete</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td> 1.1 </td>
                                                        <td><img src={Image} alt="img here" width="50" height="50"></img></td>
                                                        <td> IIT/JEE </td>
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
                                            <td> Competition </td>
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
                                            <td> Competition </td>
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
                                            <td> Competition </td>
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
                                    <h1>Add Competition Category Form </h1>
                                    <form>
                                    <label for="name"> Category Name</label>
                                        <input type="text" id="name"></input>
                                        <label for="image">Upload Image </label>
                                        <input type="file" id="image"></input>
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