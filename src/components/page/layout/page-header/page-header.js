import React from 'react';
import NavListComponent from '../../../navigation/nav-list/nav-list';
import './page-header.scss';

class PageHeaderComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render(){


        return <div className="navbar navbar-default">
            <div className="navbar-header">

                <a className="navbar-brand" href="#">
                    {this.props.text}
            </a>
            </div>
            <NavListComponent navs={this.props.mainMenuItems}/>

        </div>;
    }
}
PageHeaderComponent.propTypes = {
    text:React.PropTypes.string,
    mainMenuItems:React.PropTypes.array

};
PageHeaderComponent.defaultProps = {
    text: "App Name",
    mainMenuItems:[]
};

export default PageHeaderComponent;