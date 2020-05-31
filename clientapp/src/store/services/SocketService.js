

import io from 'socket.io-client';
const ENDPOINT = "https://socketmapandreduce.herokuapp.com/";

export default class SocketService {
    static instance = null;
    socket = io(ENDPOINT);
    socketDate = new Date();
    socketName = null;
    static getInstance() {
        if (SocketService.instance === null) {
            SocketService.instance = new SocketService();
        }
        return this.instance;
    }
    waitMessage() {
        this.socket.on('message', (params) => {
            switch (params.type) {
                case 'run':
                    var startDate = new Date()
                    var data = eval(params.mapfuncstr);
                    var time = (new Date().getTime() - startDate.getTime()) / 1000
                        SocketService.getInstance().socket.emit('reduce', {
                            id: params.id,
                            data,
                            meter: {
                                time,
                                appVersion: navigator.appVersion,
                                deviceMemory: navigator.deviceMemory,
                                hardwareConcurrency: navigator.hardwareConcurrency,
                                platform: navigator.platform,
                            }
                        })
                    break;
                case 'info':
                    SocketService.getInstance().socket.emit('info', {
                        id: params.id,
                        meter: {
                            appVersion: navigator.appVersion,
                            deviceMemory: navigator.deviceMemory,
                            hardwareConcurrency: navigator.hardwareConcurrency,
                            platform: navigator.platform,
                        }
                    })
                    break;

                default:
                    break;
            }
        });
    }
    getSocket() {
        return this.socket;
    }
    getSocketId() {
        return this.socket.id;
    }
    getSocketConnected() {
        return this.socket.connected;
    }
    getSocketDate() {
        return this.socketDate;
    }
    getSocketName(name) {
        return this.socketName;
    }
    setSocketName(name) {
        this.socketName = name;
        this.socket.emit('SetSocketName', this.socketName);
        return this.socketName;
    }
}