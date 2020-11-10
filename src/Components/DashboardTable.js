import React, { Component } from 'react';
import {
    Container,
    Row,
    Col,
} from 'reactstrap';

class Table extends Component {
    render() {
        return (
            <section className="table">
                <Container>
                    <Row>
                        <Col md="12">
                            <div className="table-content"> 
                            <h1> Dashboard Testing </h1>
                            <table className="main-table">
                                    <tr>
                                        <th> # </th>
                                        <th> Image </th>
                                        <th> Navigation </th>
                                        <th> Edit </th>
                                        <th> Delete </th>
                                        <th> View Details </th>
                                    </tr>
                                </table>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default Table;