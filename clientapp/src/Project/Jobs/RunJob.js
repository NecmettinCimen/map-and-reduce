import React, { Component } from 'react';
import { Row, Col, Form, Button, Table } from 'react-bootstrap';

import Aux from "../../hoc/_Aux";
import Card from "../../App/components/MainCard";
import UcFirst from '../../App/components/UcFirst';

import { Link } from 'react-router-dom';

class RunJob extends Component {

    state = {
        file: '',
        data: null,
        id: '0'
    }

    constructor(props) {
        super(props)
        this.handleOnChange = this.handleOnChange.bind(this)
        this.fileInput = React.createRef();

        if (props.location.pathname.split('/').length > 3) {
            var pathnames = props.location.pathname.split('/');
            var idstr = pathnames[pathnames.length - 1]
            this.state.id = idstr
        }
    }
    handleOnChange(event) {


        this.setState({ [event.target.name]: this.fileInput.current.files[0] })

        const reader = new FileReader()
        reader.onload = async (e) => {
            const text = (e.target.result)
            this.setState({ data: text.split('\n') })
            localStorage.setItem('data_' + this.state.id, text)

        };
        reader.readAsText(this.fileInput.current.files[0])
    }

    render() {
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card title='Data' isCardRight cardRight={<Link to={"/jobs/detail/" + this.state.id}><Button variant='warning'><UcFirst text="Çalıştır" /></Button></Link>}>
                            <Form style={{ marginTop: 10 }}>
                                <Form.Group>
                                    <Form.Control ref={this.fileInput} accept=".csv, .txt" as="input" type="file" name="file" onChange={this.handleOnChange} />
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
                            {this.state.data !== null ? <div style={{ overflow: 'scroll', height: 1000 }}><Table>
                                <thead><tr><th>Data</th></tr></thead>
                                <tbody>
                                    {this.state.data.map((item, index) => (<tr key={"tr_" + index}><td>{item}</td></tr>))}
                                </tbody>
                            </Table></div> : null}
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default RunJob;