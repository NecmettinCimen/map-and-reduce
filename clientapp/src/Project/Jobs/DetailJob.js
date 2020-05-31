import React from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';

import Aux from "../../hoc/_Aux";
import DEMO from "../../store/constant";

import avatar3 from '../../assets/images/user/avatar-3.jpg';

import JobService from '../../store/services/Job'
import SocketService from '../../store/services/SocketService'

let _socketService = SocketService.getInstance()

class DetailJob extends React.Component {
    state = {
        loading: true,
        users: [],
        id: 0,
        name: '',
        mapfuncstr: '',
        reducefuncstr: '',
        job: null,
        jobsusers: false,
        time: 0,
        data: null
    }
    componentDidMount() {


        _socketService.socket.emit('listenusers')
        _socketService.socket.on('users', (users) => {
            if (!this.state.jobsusers)
                this.setState({ users })
        })
        _socketService.socket.on('message', (params) => {
            switch (params.type) {
                case 'jobupdate':
                    var job = params.job;
                    console.log(job)
                    this.setState({ job, jobsusers: true, users: job.users })

                    break;
                case 'users':
                    var users = params.users;
                    this.setState({ users })

                    break;

                default:
                    break;
            }
        })
        if (this.props.location.pathname.split('/').length > 3) {
            var pathnames = this.props.location.pathname.split('/');
            var idstr = pathnames[pathnames.length - 1]
            if (typeof (parseInt(idstr)) === "number") {
                this.getJob(idstr);

                this.setState({ data: localStorage.getItem('data_' + idstr) })

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
        })
    }
    runJob = () => {
        _socketService.socket.emit('map', {
            id: this.state.id,
            name: this.state.name,
            mapfuncstr: this.state.mapfuncstr,
            reducefuncstr: this.state.reducefuncstr,
            data: this.state.data ? this.state.data.split('\n') : []
        })
    }

    downloadCsvFile = () => {
        const element = document.createElement("a");
        const file = new Blob([this.state.job.result.join ? this.state.job.result.join('\n') : this.state.job.result], { type: 'text/csv' });
        element.href = URL.createObjectURL(file);
        element.download = this.state.name + this.state.time + ".csv";
        document.body.appendChild(element);
        element.click();
    }

    render() {
        setInterval(() => {
            if (this.state.job) {
                if (this.state.job.statuscode !== 2) {
                    this.setState({ time: (new Date().getTime() - new Date(this.state.job.startDate).getTime()) / 1000 })
                }
            }
        }, 500);
        return (
            <Aux>
                {this.state.loading ? null : <Card className='card-event'>
                    <Card.Body style={{ cursor: 'pointer' }}>
                        <div className="row align-items-center justify-content-center">
                            <div className="col">
                                <h5 className="m-0">{this.state.name}</h5>
                            </div>
                            <div className="col-auto">
                                <label className="label theme-bg2 text-white f-14 f-w-400 float-right">{this.state.job ? (this.state.job.socketresults.length / this.state.job.users.length) * 100 : 0}%</label>
                            </div>
                        </div>
                    </Card.Body>
                </Card>}
                <Row>
                    <Col md={6} xl={4}>
                        <Card>
                            <Card.Body>
                                <h6 className='mb-4'>Bağlı Sistem Sayısı</h6>
                                <div className="row d-flex align-items-center">
                                    <div className="col-9">
                                        <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-arrow-up text-c-green f-30 m-r-5" /> {this.state.job ? this.state.job.users.length : this.state.users.length}</h3>
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
                                <h6 className='mb-4'>Çalışma Süresi</h6>
                                <div className="row d-flex align-items-center">
                                    <div className="col-9">
                                        <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-arrow-down text-c-red f-30 m-r-5" /> {this.state.time} sn</h3>
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
                                        {
                                            this.state.users.map((item, index) => (
                                                <tr className="unread" key={"tr_" + index}>
                                                    <td><img className="rounded-circle" style={{ width: '40px' }} src={avatar3} alt="activity-user" /></td>
                                                    <td>
                                                        <h6 className="mb-1">{item.name} || {item.id}</h6>
                                                        <p className="m-0">Bağlantı Süresi: {item.time} sn. CPU: {item.meter.hardwareConcurrency},
                                                             RAM:{item.meter.deviceMemory} GB,
                                                             <br /> App Version: {item.meter.appVersion.split(')')[0] + ')'}
                                                            <br /> Durum: {item.durum}
                                                        </p>
                                                    </td>
                                                    <td>
                                                        <h6 className="text-muted"><i className="fa fa-circle text-c-green f-10 m-r-15" />{new Date(item.tarih).toTimeString().slice(0, 8)}</h6>
                                                    </td>
                                                    <td>{!this.state.jobsusers ? null : <div> <a href={DEMO.BLANK_LINK} className="label theme-bg2 text-white f-12">Gönderilen Datayı Göster</a>
                                                        <a href={DEMO.BLANK_LINK} className="label theme-bg text-white f-12">Sonuç Datayı Göster</a></div>}</td>
                                                </tr>
                                            ))
                                        }
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
                                        <h5 className="m-0">{this.state.job ? this.state.job.status : "Sonuç Datayı İndir"}</h5>
                                    </div>
                                    <div className="col-auto">
                                        <label className="label theme-bg2 text-white f-14 f-w-400 float-right">{this.state.job ? this.state.job.result.length : 0}</label>
                                    </div>
                                </div>
                                <h2 className="mt-2 f-w-300">{this.state.job ? this.state.job.users.length : 0}<sub className="text-muted f-14"> Sistem üzerinde çalıştırıldı.</sub></h2>
                                <h6 className="text-muted mt-3 mb-0">Sonuc Sayısı : {this.state.job ? this.state.job.socketresults.length : 0}</h6>
                                <h6 className="text-muted mt-3 mb-0">Sistem Sayısı : {this.state.job ? this.state.job.users.length : 0}</h6>
                                <i className="feather icon-download text-c-purple f-50" onClick={this.downloadCsvFile} />
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body className='border-bottom' style={{ cursor: 'pointer' }} onClick={this.runJob}>
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
                                        <h3>{this.state.job ? (this.state.job.users.map(item => item.meter.hardwareConcurrency || 0).reduce((a, b) => a + b, 0)
                                            / this.state.job.users.length).toFixed(2) : 0}</h3>
                                        <h5 className="text-c-green mb-0"> <span className="text-muted">Ortalama Kullanılan CPU </span></h5>
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
                                        <h3>{this.state.job ?
                                            (this.state.job.users.map(item => item.meter.deviceMemory || 0).reduce((a, b) => a + b, 0)
                                                / this.state.job.users.length).toFixed(2) : 0} GB</h3>
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
                                        <h3>{this.state.job ? this.state.job.time : 0} sn</h3>
                                        <h5 className="text-c-purple mb-0"><span className="text-muted">Ortalama çalışma süresi</span></h5>
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