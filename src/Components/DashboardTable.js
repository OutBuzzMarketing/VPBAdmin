import React, { useState } from 'react';
import {
    Container,
    Row,
    Col,
} from 'reactstrap';

import { Button, Collapse, Card } from 'react-bootstrap';
import AddSchoolForm from '../Forms/AddSchool'
import Accordion from 'react-bootstrap/Accordion'

const Table = () => {
    const [open, setOpen] = useState(false);
    const [isAddClicked, setIsAddClicked] = useState(false)
    
    // const handleClick = () => {
    //     setIsAddClicked(!isAddClicked)
    //     document.getElementById("switch_button").innerHTML
    // }

    return (
        <section className="table">
            <Button id="switch_button" onClick={() => setIsAddClicked(!isAddClicked) }>{!isAddClicked ? "ADD SCHOOL" : "BACK"}</Button>
            <Container>
                <Row>
                    <Col md="12">
                        <div className="table-content"> 
                        <h1> Dashboard Testing </h1>
                            {!isAddClicked ? <table className="main-table">
                                <Accordion>
                                    <th> # </th>
                                    <th> Image </th>
                                    <th> Navigation </th>
                                    <th> Edit </th>
                                    <th> Delete </th>
                                    <Card>
                                        <tr>
                                        <td> 1 </td>
                                        <td><img src="https://storage.googleapis.com/newreact-7a58e.appspot.com/testImages/test102.png" alt="img here" width="50" height="50"></img></td>
                                        <td> School </td>
                                        <td> <Button>Edit</Button> </td>
                                        <td> <Button>Delete</Button> </td>
                                        </tr>
                                        <Accordion.Toggle as={Button} eventKey="0">
                                        <Button>Show More</Button>
                                        </Accordion.Toggle>
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
                                                        <td><img src="https://storage.googleapis.com/newreact-7a58e.appspot.com/testImages/test102.png" alt="img here" width="50" height="50"></img></td>
                                                        <td> Class X </td>
                                                        <td> <Button>Edit</Button> </td>
                                                        <td> <Button>Delete</Button> </td>
                                                    </tr>
                                                </tbody>
                                        </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>

                                    <Card>
                                        <tr>
                                        <td> 1 </td>
                                        <td><img src="https://storage.googleapis.com/newreact-7a58e.appspot.com/testImages/test102.png" alt="img here" width="50" height="50"></img></td>
                                        <td> School </td>
                                        <td> <Button>Edit</Button> </td>
                                        <td> <Button>Delete</Button> </td>
                                        </tr>
                                        <Accordion.Toggle as={Button} eventKey="1">
                                        <Button>Show More</Button>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="1">
                                        <Card.Body>Hello! I'm another body</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <tr>
                                        <td> 1 </td>
                                        <td><img src="https://storage.googleapis.com/newreact-7a58e.appspot.com/testImages/test102.png" alt="img here" width="50" height="50"></img></td>
                                        <td> School </td>
                                        <td> <Button>Edit</Button> </td>
                                        <td> <Button>Delete</Button> </td>
                                        </tr>
                                        <Accordion.Toggle as={Button} eventKey="2">
                                        <Button>Show More</Button>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="2">
                                        <Card.Body>Hello! I'm another body</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <tr>
                                        <td> 1 </td>
                                        <td><img src="https://storage.googleapis.com/newreact-7a58e.appspot.com/testImages/test102.png" alt="img here" width="50" height="50"></img></td>
                                        <td> School </td>
                                        <td> <Button>Edit</Button> </td>
                                        <td> <Button>Delete</Button> </td>
                                        </tr>
                                        <Accordion.Toggle as={Button} eventKey="3">
                                        <Button>Show More</Button>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="3">
                                        <Card.Body>Hello! I'm another body</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                                
                            </table> : <div className="main-table">
                                    <h1>HEYY</h1>
                                    <p>
                                        <input type="text"></input>
                                        <input type="file"></input>
                                    </p>
                                </div>
                                
                                 }
                        </div>
                        
                    </Col>
                </Row>
            </Container>
        </section>
        
    );
}
 
export default Table;