import React, { Component } from 'react';
import windowSize from 'react-window-size';

import Aux from "../../../../../../hoc/_Aux";
import SocketService from "../../../../../../store/services/SocketService";

let _socketService = SocketService.getInstance();

class NavSearch extends Component {
    state = {
        name: _socketService.getSocketName() || ''
    };

    constructor() {
        super()
        this.handleOnChange = this.handleOnChange.bind(this)
    }

    searchOnHandler = () => {
        _socketService.setSocketName(this.state.name)
    };


    handleOnChange(event) {
        this.setState({ [event.target.name]: event.target.value })
        _socketService.setSocketName(event.target.value)
    }

    render() {
        let searchClass = ['main-search', 'open'];

        return (
            <Aux>
                <div id="main-search" className={searchClass.join(' ')}>
                    <div className="input-group">
                        <input
                            type="text" id="m-search"
                            name="name" onChange={this.handleOnChange}
                            className="form-control" placeholder="Socket İsmi . . ." style={{ width: 250 }} />
                    </div>
                </div>
            </Aux>
        );
    }
}

export default windowSize(NavSearch);