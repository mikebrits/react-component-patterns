import React, { Component } from 'react';
import MyButton from './MyButtonComponent';
import DataLayer from './MyButtonDataLayer';

class App extends Component {
    methods = {
        handleOnClick : ()  => {
            this.props.refetchData('myNumber');
        }
    };
    render() {
        if(this.props.data.myNumber.loading)
            return <div>Loading...</div>;
        return <MyButton state={this.state} {...this.methods} {...this.props}/>
    }
}

export default DataLayer(App);
