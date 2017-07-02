import React, {Component} from 'react';
import _ from 'lodash';

export default class DataLayer extends Component {

    constructor(Wrapped, opts) {
        super();
        this.options = {
            fetchOnLoad: true,
            ...opts
        };
        this.Wrapped = Wrapped;
    }

    getWrapped = (Wrapped = this.Wrapped) => (
        <Wrapped data={this.state.data} refetchData={this.refetchData} {...this.props}/>
    )

    call = () => {};
    defaultVars = null;

    componentWillMount() {
        let data = {loading: true, value: {}, status: "LOADING",};

        this.state = {
            data: {...data}
        };

        if (this.options.fetchOnLoad) {
            this.getData(this.defaultVars);
        }
    }

    refetchData = (params) => {
        this.getData(params || this.defaultVars || null);
    };


    getData(params) {
        let newState = _.clone(this.state);

        newState.data = {
            ...newState.data,
            status: this.state.data.status === "LOADED" ? "UPDATING" : "LOADING",
            // status: "LOADING"
        };
        this.setState(newState);

        Promise.resolve(this.call(params || this.defaultVars || null)).then(
            val => {
                let newState = _.clone(this.state);
                console.log('Val', val);
                newState.data = {
                    value: val,
                    status: "LOADED",
                };
                newState.data = this.mutateData(newState.data);
                this.setState(newState);

            },
            err => {
                let newState = _.clone(this.state);
                newState.data = {
                    value: err,
                    status: "ERROR",
                };
                this.setState(newState);
            }
        )
    }

    mutateData = (nextData) => {
        return nextData;
    };

    render() {
        const components = this.options.components || {};
        let sendStatus = {};
        sendStatus[this.state.data.status] = true;

        return components[this.state.data.status] || this.getWrapped(this.Wrapped);
    }
}