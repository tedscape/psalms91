import React from 'react';

class FooterComponent extends React.Component{
    render(){
        return <footer className="footer navbar navbar-fixed-bottom navbar-default">
            <div className= "container text-center ">
                    <div className="navbar-text col col-xs-12">
                        {this.props.twitterHandle}
                    </div>
            </div>
        </footer>
    }
}

export default FooterComponent;