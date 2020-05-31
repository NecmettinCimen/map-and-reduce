import React from 'react';
import { Row, Col, Card} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";

class Dashboard extends React.Component {
    render() {
        return (
            <Aux>
                <Row>
                    <Col md={12} xl={12}>
                        <Card className='Recent-Users'>
                            <Card.Header>
                                <Card.Title as='h5'>Hakkında</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <h5>Projem dağıtık sistemlere önceden sisteme kayıt edilmiş problemler üzerindeki hesaplamaları, sisteme bağlı olan cihazlara gönderip yapılan hesaplamaların birleştirilmesini sağlamaktır.
                                Günlük hayatımızda bilgisayarlarımız, tabletlerimiz ve cep telefonlarımız bile çok fazla işlem gücü taşımakta fakat bu kapasitenin kullanılması konusunda her biri tek başına çok anlam ifade etmiyor.Çünkü her biri kendi başına küçük parçaları hesaplayabilecek kadar bir kapasiteye sahip ama bu hesaplama kapasitesi tüm cihazların bir araya gelerek çok daha büyük hesaplamalar yapmasını sağlayabilir.
                                Projedeki asıl amacımız bir browser üzerinde javascript çalıştırabilen tüm cihazlarda sisteme bağlı iş paylaşımı yapmak ve kapasitelerini kullanmak.
</h5>
                                <ul>
                                    <li>
                                        Proje Github Linki : <a href="https://github.com/NecmettinCimen/mapandreduce">https://github.com/NecmettinCimen/mapandreduce</a>
                                    </li>
                                    <li>
                                        Socket Sistem 1:
                                        https://socketmapandreduce.herokuapp.com/
                                    </li>
                                    <li>
                                        SocketSistem2:
                                        https://socket.necmettincimen.com
                                    </li>
                                    <li>
                                        Uygulama Sistem 1:
                                        https://mapandreduce.necmettincimen.com/
                                    </li>
                                    <li>
                                        Uygulama Sistem 2:
                                        https://necmettincimen.github.io/mapandreduce
                                    </li>
                                    <li>
                                        Uygulama Sistem 3:
                                        http://ubuntumapandreduce.necmettincimen.com/
                                    </li>
                                </ul>







                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default Dashboard;