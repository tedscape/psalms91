import React from 'react';
import './nav-list.scss';

class NavListComponent extends React.Component {

    constructor(props) {
        super(props);
    }



    render(){
        return <div className="nav navbar-nav">

            {this.props.navs.map(function (item) {

              return  <li key={item.id} role="presentation"><a href='#'>{item.linkText}</a></li>
            }.bind(this))}

        </div>

    }
}
NavListComponent.propTypes = {
    navs: React.PropTypes.array

};
NavListComponent.defaultProps = {
    navs: [
        {
            href:"/home",
            linkText:"Home"
        },
        {
            href:"/messages",
            linkText:"Messages"
        }

    ]
};
NavListComponent.componentWillMount = function(){
    alert('here');
};

export default NavListComponent;