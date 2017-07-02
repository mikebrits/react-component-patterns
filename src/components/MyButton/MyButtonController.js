import React, {Component} from 'react';
import MyButton from './MyButtonComponent';
import DataLayer from './MyButtonDataLayer';

class MyButtonController extends Component {

    constructor() {
        super();
        this.offset = 0
    }


    handleOnClick = () => {
        if (!this.props.UPDATING){
            this.offset++;
            this.props.refetchData(this.offset);
        }
    }

    render() {

        console.log(this.props);

        return (
            <MyButton
                state={this.state}
                prepend={this.offset}
                disabled={this.props.UPDATING}
                isUpdating={this.props.UPDATING}
                handleOnClick={() => this.handleOnClick()}
                {...this.props}
            />
        )


    }
}

const Loading = (
    <div>**Loading**</div>
);

export default DataLayer(

        MyButtonController,
        {
            components : {
                LOADING: Loading
            }
        }

);
