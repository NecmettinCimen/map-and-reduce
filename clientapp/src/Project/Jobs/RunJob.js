import React, { Component } from 'react';
import { Row, Col, Form, Button, Table } from 'react-bootstrap';

import Aux from "../../hoc/_Aux";
import Card from "../../App/components/MainCard";
import UcFirst from '../../App/components/UcFirst';

import { Link } from 'react-router-dom';

class RunJob extends Component {

    state = {
        file: ''
    }

    constructor() {
        super()
        this.handleOnChange = this.handleOnChange.bind(this)
        this.fileInput = React.createRef();
    }

    handleOnChange(event) {
        this.setState({ [event.target.name]: this.fileInput.current.files[0] })
    }

    render() {
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card title='Data' isCardRight cardRight={<Link to="/jobs/detail"><Button variant='warning'><UcFirst text="Çalıştır" /></Button></Link>}>
                            <Form>
                                <Form.Group>
                                    <Form.Control ref={this.fileInput} as="input" type="file" name="file" onChange={this.handleOnChange} />
                                </Form.Group>
                            </Form>
                            {this.state.file !== '' ? <Table responsive>
                                <tbody>
                                    <tr><th>Adı</th><td>{this.state.file.name}</td></tr>
                                    <tr><th>Boyutu</th><td>{(this.state.file.size < 1024 ? this.state.file.size + ' KB'
                                        : this.state.file.size < (1024 * 1024 * 1024) ? (this.state.file.size / 1024) / 1024 + ' MB' :
                                            ((this.state.file.size / 1024) / 1024) / 1024 + ' GB')}</td></tr>
                                    <tr><th>Tipi</th><td>{this.state.file.type}</td></tr>
                                    <tr><th>Son Değiştirilme Tarihi</th><td>{this.state.file.lastModifiedDate.toISOString()}</td></tr>
                                </tbody>
                            </Table> : null}
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default RunJob;