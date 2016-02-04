import React from 'react';
import './page-header.scss';

class PageHeaderComponent extends React.Component {

    render(){
        return <div className="navbar navbar-default">
            <div className="navbar-header">

                <a className="navbar-brand" href="#">
                {this.props.text}
            </a></div>


        </div>;
    }
}

export default PageHeaderComponent;