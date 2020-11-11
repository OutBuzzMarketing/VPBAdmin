import React, { useState } from 'react';
import {
    Container,
    Row,
    Col,
} from 'reactstrap';
import Image from '../images/dummy.jpg';

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
        <section className="outer-main">
            <Container>
                <Row>
                    <Col md="12">
                        NCERT Testing
                    </Col>
                </Row>
            </Container>
        </section>

    );
}

export default Table;