import React from 'react';

class HeaderComponent extends React.Component {

    render(){
        return <div className="navbar navbar-default">
            <div className="navbar-header">

                <a className="navbar-brand" href="#">
                {this.props.text}
            </a></div>


        </div>;
    }
}

export default HeaderComponent;