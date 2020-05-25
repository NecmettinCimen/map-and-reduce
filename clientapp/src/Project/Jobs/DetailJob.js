import React from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';

import Aux from "../../hoc/_Aux";
import DEMO from "../../store/constant";

import avatar3 from '../../assets/images/user/avatar-3.jpg';

class DetailJob extends React.Component {
    render() {
        return (
            <Aux>
                <Row>
                    <Col md={6} xl={4}>
                        <Card>
                            <Card.Body>
                                <h6 className='mb-4'>Bağlı Sistem Sayısı</h6>
                                <div className="row d-flex align-items-center">
                                    <div className="col-9">
                                        <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-arrow-up text-c-green f-30 m-r-5" /> 10</h3>
                                    </div>

                                    <div className="col-3 text-right">
                                        <p className="m-b-0">100%</p>
                                    </div>
                                </div>
                                <div className="progress m-t-30" style={{ height: '7px' }}>
                                    <div className="progress-bar progress-c-theme" role="progressbar" style={{ width: '100%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={4}>
                        <Card>
                            <Card.Body>
                                <h6 className='mb-4'>Son Çalışma Süresi</h6>
                                <div className="row d-flex align-items-center">
                                    <div className="col-9">
                                        <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-arrow-down text-c-red f-30 m-r-5" /> 10:55 sn</h3>
                                    </div>

                                    <div className="col-3 text-right">
                                        <p className="m-b-0">100%</p>
                                    </div>
                                </div>
                                <div className="progress m-t-30" style={{ height: '7px' }}>
                                    <div className="progress-bar progress-c-theme2" role="progressbar" style={{ width: '100%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4}>
                        <Card>
                            <Card.Body>
                                <h6 className='mb-4'>Son Toplanan Data Boyutu</h6>
                                <div className="row d-flex align-items-center">
                                    <div className="col-9">
                                        <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-arrow-up text-c-green f-30 m-r-5" /> 10 MB</h3>
                                    </div>

                                    <div className="col-3 text-right">
                                        <p className="m-b-0">100%</p>
                                    </div>
                                </div>
                                <div className="progress m-t-30" style={{ height: '7px' }}>
                                    <div className="progress-bar progress-c-theme" role="progressbar" style={{ width: '100%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={8}>
                        <Card className='Recent-Users'>
                            <Card.Header>
                                <Card.Title as='h5'>Bağlı Sistem Bilgileri</Card.Title>
                            </Card.Header>
                            <Card.Body className='px-0 py-2'>
                                <Table responsive hover>
                                    <tbody>
                                        <tr className="unread">
                                            <td><img className="rounded-circle" style={{ width: '40px' }} src={avatar3} alt="activity-user" /></td>
                                            <td>
                                                <h6 className="mb-1">Sistem Id</h6>
                                                <p className="m-0">Bağlantı Süresi: 10 dk. CPU:10%, RAM:1GB, DISK:100GB </p>
                                            </td>
                                            <td>
                                                <h6 className="text-muted"><i className="fa fa-circle text-c-green f-10 m-r-15" />11 MAY 12:56</h6>
                                            </td>
                                            <td><a href={DEMO.BLANK_LINK} className="label theme-bg2 text-white f-12">Gönderilen Datayı İndir</a>
                                                <a href={DEMO.BLANK_LINK} className="label theme-bg text-white f-12">Sonuç Datayı İndir</a></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={4}>
                        <Card className='card-event'>
                            <Card.Body style={{ cursor: 'pointer' }}>
                                <div className="row align-items-center justify-content-center">
                                    <div className="col">
                                        <h5 className="m-0">Sonuç Datayı İndir</h5>
                                    </div>
                                    <div className="col-auto">
                                        <label className="label theme-bg2 text-white f-14 f-w-400 float-right">100%</label>
                                    </div>
                                </div>
                                <h2 className="mt-2 f-w-300">10<sub className="text-muted f-14"> Sistem üzerinde çalıştırıldı.</sub></h2>
                                <h6 className="text-muted mt-3 mb-0">Son Çalıştırılma Tarihi : 10.10.2020 </h6>
                                <i className="feather icon-download text-c-purple f-50" />
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body className='border-bottom' style={{ cursor: 'pointer' }}>
                                <div className="row d-flex align-items-center">
                                    <div className="col-auto">
                                        <i className="feather icon-play f-30 text-c-green" />
                                    </div>
                                    <div className="col">
                                        <h3 className="f-w-300">Çalıştır</h3>
                                        <span className="d-block text-uppercase">Methodları Sistemlere Gönder</span>
                                    </div>
                                </div>
                            </Card.Body>
                            <Card.Body style={{ cursor: 'pointer' }}>
                                <div className="row d-flex align-items-center">
                                    <div className="col-auto">
                                        <i className="feather icon-stop-circle f-30 text-c-red" />
                                    </div>
                                    <div className="col">
                                        <h3 className="f-w-300">Durdur</h3>
                                        <span className="d-block text-uppercase">Sistemelere Durma İsteği Gönder</span>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={4}>
                        <Card className='card-social'>
                            <Card.Body className='border-bottom'>
                                <div className="row align-items-center justify-content-center">
                                    <div className="col-auto">
                                        <i className="feather icon-cpu text-primary f-36" />
                                    </div>
                                    <div className="col text-right">
                                        <h3>42 %</h3>
                                        <h5 className="text-c-green mb-0"> <span className="text-muted">Ortalama Kullanılan CPU Miktarı</span></h5>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={4}>
                        <Card className='card-social'>
                            <Card.Body className='border-bottom'>
                                <div className="row align-items-center justify-content-center">
                                    <div className="col-auto">
                                        <i className="feather icon-bar-chart-2 text-c-blue f-36" />
                                    </div>
                                    <div className="col text-right">
                                        <h3>4 GB</h3>
                                        <h5 className="text-c-purple mb-0"> <span className="text-muted">Ortalama Kullanılan Ram Miktarı</span></h5>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4}>
                        <Card className='card-social'>
                            <Card.Body className='border-bottom'>
                                <div className="row align-items-center justify-content-center">
                                    <div className="col-auto">
                                        <i className="feather icon-clock text-c-red f-36" />
                                    </div>
                                    <div className="col text-right">
                                        <h3>00:59 SN</h3>
                                        <h5 className="text-c-purple mb-0"><span className="text-muted">Şuan ki çalışma süresi</span></h5>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default DetailJob;