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

    componentWillMount() {
        let data = {};
        _.each(this.calls, (item, index) => {
            data[index] = {loading : true, value : {}}
        });

        this.state = {
            data: {...data}
        };

        if (this.options.fetchOnLoad) {
            this.getData();
        }
    }

    refetchData = (callIndex) => {
        if (callIndex)
            this.getDataFor(callIndex);
        else
            this.getData();
    };

    getData() {
        _.each(this.calls, (call, index) => {
            this.getDataFor(index);
        })
    }

    getDataFor(index) {
        let newState = this.state;
        newState.data[index].loading = true;
        this.setState(newState);

        Promise.resolve(this.calls[index]()).then(
            val => {
                let newState = this.state;
                newState.data[index] = {
                    loading: false,
                    value: val
                };
                this.setState(newState);

            }
        )
    }

    render() {
        return null;
    }
}