import React from 'react';
import './App.css';
import { Event, SocketContext } from 'react-socket-io';
import { Fragment } from 'react';
import {
  Container,
  Menu,
  Card,
  Table,
  Label,
  Icon,
  Form,
} from 'semantic-ui-react'
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";


class App extends React.Component {
  state = {
    users: [],
    page: 0,
    mapfuncstr: `function map(data){
      // reduce edilecek konuzu bu kısma yazınız
      jobs[jobindex].result= jobs[jobindex].result*data;
    }`,
    reducefuncstr: `function reduce(data){
      var result = 1;
      for(var i=1;i<10;i++){
        result *=i ;
      }
      return result;
    }`,
    job: null
  }

  constructor(props) {
    super(props);
    this.addUser = this.addUser.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.message = this.message.bind(this);
    this.onChangeMap = this.onChangeMap.bind(this);
    this.onChangeReduce = this.onChangeReduce.bind(this);
  }

  addUser(users) {
    console.log('users', users.length, users)
    this.setState({ users })
  }
  prevPage() {
    if ((this.state.page - 1) >= 0) {
      this.setState({ page: --this.state.page })
    }
  }
  nextPage() {
    if ((this.state.page + 1) < this.state.users.length / 10) {
      this.setState({ page: ++this.state.page })
    }
  }

  calistir() {
    var job = {
      id: Date.now(),
      mapfuncstr: this.state.mapfuncstr,
      reducefuncstr: this.state.reducefuncstr,
      status: 'Hazır',
      result: 1
    };
    this.context.emit('map', job)
    this.setState({ job })
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  onChangeMap(mapfuncstr) {
    this.setState({ mapfuncstr })
  }

  onChangeReduce(reducefuncstr) {
    this.setState({ reducefuncstr })
  }

  message(data) {
    switch (data.type) {
      case 'run':
        console.log("message", data)
        var res = eval(data.reducefuncstr + 'reduce()')
        console.log(res)
        this.context.emit('reduce', { id: data.id, data: res });
        break;
      case 'jobupdate':
        console.log("jobupdate", data)
        this.setState({ job: data.job })
        break;

    }
  }

  render() {
    return (
      <Fragment>
        <Event event='users' handler={this.addUser} />
        <Event event='message' handler={this.message} />
        <Menu fixed='top' inverted>
          <Container>
            <Menu.Item as='a' header>
              Map And Reduce
        </Menu.Item>
            <Menu.Item as='a'>Anasayfa</Menu.Item>
          </Container>
        </Menu>

        <Container text style={{ marginTop: '7em' }}>
          <Card fluid color='green' header={this.state.job ? this.state.job.status + '\n Sonuç : ' + this.state.job.result : 'Bağlantı Hazır'} />

          <Form>
            <Form.Group widths='equal'>
              <AceEditor
                placeholder="Reduce"
                mode="javascript"
                theme="monokai"
                name="reduce"
                onChange={this.onChangeReduce}
                fontSize={14}
                showPrintMargin={true}
                showGutter={true}
                highlightActiveLine={true}
                value={this.state.reducefuncstr}
                setOptions={{
                  enableBasicAutocompletion: true,
                  enableLiveAutocompletion: true,
                  enableSnippets: true,
                  showLineNumbers: true,
                  tabSize: 2,
                }} />
              <AceEditor
                placeholder="Map"
                mode="javascript"
                theme="monokai"
                name="map"
                onChange={this.onChangeMap}
                fontSize={14}
                showPrintMargin={true}
                showGutter={true}
                highlightActiveLine={true}
                value={this.state.mapfuncstr}
                setOptions={{
                  enableBasicAutocompletion: true,
                  enableLiveAutocompletion: true,
                  enableSnippets: true,
                  showLineNumbers: true,
                  tabSize: 2,
                }} />
            </Form.Group>
            <Form.Button primary onClick={() => this.calistir()}>Çalıştır</Form.Button>
          </Form>

          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Bağlantı Adı</Table.HeaderCell>
                <Table.HeaderCell>Bağlantı Tarihi</Table.HeaderCell>
                <Table.HeaderCell>Bağlantı Durumu</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {
                this.state.users.slice(this.state.page * 10, (this.state.page * 10) + 10).map((item, index) => {
                  var d = new Date(item.tarih);
                  return (
                    <Table.Row key={'table_row_' + index}>
                      <Table.Cell>
                        {item.id}
                      </Table.Cell>
                      <Table.Cell>{
                        d.toDateString() + " " + d.toTimeString()
                      }</Table.Cell>
                      <Table.Cell>
                        {item.durum}
                      </Table.Cell>
                    </Table.Row>
                  )
                })
              }
            </Table.Body>

            <Table.Footer>
              <Table.Row>
                <Table.HeaderCell colSpan='4'>
                  <Menu floated='right' pagination>
                    <Label>Sayfa : {this.state.page + 1} | Bağlantı Sayısı : {this.state.users.length}</Label>
                    <Menu.Item as='a' icon onClick={() => this.prevPage}>
                      <Icon name='chevron left' />
                    </Menu.Item>
                    <Menu.Item as='a' icon onClick={() => this.nextPage} >
                      <Icon name='chevron right' />
                    </Menu.Item>
                  </Menu>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table>
        </Container>

      </Fragment >
    );
  }
}
App.contextType = SocketContext
export default App;
