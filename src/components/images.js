import React, { Component } from 'react';

export class Images extends Component {
    constructor(props) {
        super(props);
        this.state = {interval: null};
    }

    componentDidMount() {
        console.log("Images Com mounted");
        this.setState({
            interval: setInterval(() =>{
                console.log("Hello");
            },1000),
        });
    }

    componentWillUnmount() {
        console.log("Images Comp unmounted");
        clearInterval(this.state.interval);
    }

    render() {
        return (
            <div>
                <img src="https://images.unsplash.com/photo-1592419044706-39796d40f98c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1911&q=80" />
            </div>
        )
    }
}

export default Images;