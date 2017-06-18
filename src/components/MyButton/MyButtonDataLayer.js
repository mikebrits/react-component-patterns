import React from 'react';
import DataLayer from './data-layer';
import {FakeAPI} from '../../api/fakeAPI';

export default (Wrapped, opts) => class DataLayer extends DataLayer {

    constructor(){
        super(Wrapped, opts);
    }

    calls = {
        myNumber : () => FakeAPI.getNumber(),
    };

    render() {
        return <Wrapped data={this.state.data} refetchData={this.refetchData} {...this.props}/>
    }
}