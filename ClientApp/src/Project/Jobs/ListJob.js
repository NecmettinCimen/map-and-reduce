import React, { Component } from 'react';
import { Alert, Row, Col, Table, Button, Pagination } from 'react-bootstrap';

import { Link } from 'react-router-dom';

import Aux from "../../hoc/_Aux";
import Card from "../../App/components/MainCard";
import jobService from '../../store/services/Job';

class ListJob extends Component {
    state = {
        list: [],
        loading: true
    }
    componentDidMount() {
        this.jobList()
    }

    jobList = async () => {
        var list = await jobService.getall()
        this.setState({ loading: false, list: list.data })
    }

    render() {
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card title='İş Listem' isOption>
                            {this.state.loading ? <Alert variant="primary">Lütfen Bekleyin Bilgiler Sunucudan Getiriliyor.</Alert> :
                                <Table responsive hover striped bordered={true}>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>İsim</th>
                                            <th>Kayıt Tarihi</th>
                                            <th>İşlemler</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.list.map((item, id) => <tr key={id}>
                                            <th scope="row">{item.id}</th>
                                            <td>{item.name}</td>
                                            <td>{new Date(item.createdDate).toLocaleDateString()}</td>
                                            <td>
                                                <Pagination>
                                                    <Link to={`/jobs/edit/${item.id}`}><Button variant="secondary">Düzenle</Button></Link>
                                                    <Link to={`/jobs/run/${item.id}`}><Button variant="warning">Çalıştır</Button></Link>
                                                </Pagination>
                                            </td>
                                        </tr>)}
                                    </tbody>
                                </Table>
                            }
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default ListJob;