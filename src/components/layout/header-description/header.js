import React from 'react';

class HeaderComponent extends React.Component {

    render(){
        return <div>
            <h1> {this.props.text}
            </h1>
            <h3>{this.props.description}</h3>
        </div>;
    }
}

export default HeaderComponent;