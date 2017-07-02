import React, {Component} from 'react';
import _ from 'lodash';

export default class DataLayer extends Component {

    constructor(opts){
        super();
        this.options = {
            fetchOnLoad: true,
            ...opts
        };
    }

    calls = {};

    defaultVars = {};

    componentWillMount() {
        let data = {};
        _.each(this.calls, (item, index) => {
            data[index] = {loading : true, value : {}, status: "LOADING"}
        });

        this.state = {
            data: {...data}
        };

        if (this.options.fetchOnLoad) {
            this.getData();
        }
    }

    refetchData = (callIndex, params) => {
        if (callIndex)
            this.getDataFor(callIndex, params || this.defaultVars[callIndex] || null);
        else
            this.getData();
    };

    getData() {
        _.each(this.calls, (call, index) => {
            this.getDataFor(index);
        })
    }

    getDataFor(index, params) {
        let newState = this.state;
        newState.data[index] = {
            ...newState.data[index],
            loading : true,
            status : "UPDATING"
        };
        this.setState(newState);

        Promise.resolve(this.calls[index](params || this.defaultVars[index] || null)).then(
            val => {
                let newState = this.state;
                newState.data[index] = {
                    loading: false,
                    value: val,
                    status : "LOADED"
                };
                this.setState(newState);

            },
            err => {
                let newState = this.state;
                newState.data[index] = {
                    loading: false,
                    value: err,
                    status : "ERROR"
                };
                this.setState(newState);
            }
        )
    }

    render() {
        return null;
    }
}