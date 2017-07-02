import React from 'react';
import DataLayer from './data-layer';
import {FakeAPI} from '../../api/fakeAPI';

export default (Wrapped, opts) => class DataLayer extends DataLayer {

    constructor(){
        super(Wrapped, opts);
        this.call = (opts = 0) => FakeAPI.getNumber(opts);
    }

    mutateData = (nextData) => {
        nextData.value = nextData.value*10;
        return nextData;
    };

    // render(){
    //     return <Wrapped data={this.state.data} refetchData={this.refetchData} {...this.props}/>
    //     //return <div>PEw</div>
    // }

}