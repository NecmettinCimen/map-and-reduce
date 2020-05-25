import React, { Component } from 'react';
import { Alert, Row, Col, Form, Button } from 'react-bootstrap';

import Aux from "../../hoc/_Aux";
import Card from "../../App/components/MainCard";
import UcFirst from '../../App/components/UcFirst';

import JobService from '../../store/services/Job'
import { Link } from 'react-router-dom';

class NewJob extends Component {

    state = {
        id: 0,
        name: 'İş ismi',
        mapfuncstr: `function map(data){
          // map edilecek konuzu bu kısma yazınız
          var result = 1;
          for(var i=1;i<10;i++){
            result *=i ;
          }
          return result;
        }`,
        reducefuncstr: `function reduce(data){
          // reduce edilecek konuzu bu kısma yazınız
          jobs[jobindex].result= jobs[jobindex].result*data;
        }`,
        success: null,
        exmessage: '',
        loading: false,
        isedit: false
    }

    constructor() {
        super()

        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleOnSubmit = this.handleOnSubmit.bind(this)
    }

    componentDidMount() {

        if (this.props.location.pathname.split('/').length > 3) {
            var pathnames = this.props.location.pathname.split('/');
            var idstr = pathnames[pathnames.length - 1]
            if (typeof (parseInt(idstr)) === "number") {
                this.getJob(idstr);
            }
        }
    }

    getJob = async (id) => {
        this.setState({ loading: true })
        var result = await JobService.get(id)
        this.setState({
            id: result.data.id,
            name: result.data.name,
            mapfuncstr: result.data.mapFuncStr,
            reducefuncstr: result.data.reduceFuncStr,
            loading: false,
            isedit: true
        })
    }

    handleOnChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleOnSubmit = async () => {
        this.setState({ loading: true })
        var result = await JobService[this.state.isedit ? "put" : "post"]({
            id: this.state.id,
            name: this.state.name,
            mapFuncStr: this.state.mapfuncstr,
            reduceFuncStr: this.state.reducefuncstr
        })
        this.setState({ loading: false, success: result.success, exmessage: result.errorMsg })
    }

    handleOnDelete = async () => {
        this.setState({ loading: true })
        var result = await JobService.delete(this.state.id)
        this.setState({ loading: false, success: result.success, exmessage: result.errorMsg })
    }

    render() {
        return (
            <Aux>
                <Row>
                    <Col>
                        {!this.state.loading ? null : <Alert variant="primary">Lütfen Bekleyin Bilgiler Sunucu Üzerinden getiriliyor.</Alert>}
                        {this.state.success == null ? null : this.state.success ? <Alert variant="success">Başarılı! İş Kayıt Edildi. <Link to="/jobs/list">İş Listesine Git</Link></Alert> : <Alert variant="danger">Başarısız! {this.state.exmessage}</Alert>}
                        <Card title='Yeni Bir İş' isCardRight cardRight={
                            <div>
                                <Button variant='primary' onClick={this.handleOnSubmit}><UcFirst text="Kaydet" /></Button>
                                <Button variant='danger' onClick={this.handleOnDelete}><UcFirst text="Sil" /></Button>
                            </div>
                        }>
                            <Form>
                                <Form.Group>
                                    <Form.Control as="input" value={this.state.name} name="name" onChange={this.handleOnChange} />
                                </Form.Group>
                            </Form>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card title='Map' isOption>
                            <Form>
                                <Form.Group>
                                    <Form.Control as="textarea" rows="9" value={this.state.mapfuncstr} name="mapfuncstr" onChange={this.handleOnChange} />
                                </Form.Group>
                            </Form>
                        </Card>
                    </Col>
                    <Col>
                        <Card title='Reduce' isOption>
                            <Form>
                                <Form.Group>
                                    <Form.Control as="textarea" rows="9" value={this.state.reducefuncstr} name="reducefuncstr" onChange={this.handleOnChange} />
                                </Form.Group>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default NewJob;