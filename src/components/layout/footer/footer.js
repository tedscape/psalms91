import React from 'react';

class FooterComponent extends React.Component{
    render(){
        return <footer className="footer navbar navbar-fixed-bottom navbar-default">
            <div className= "container">
                    <div className="text-center navbar-text">
                        @{this.props.brandName}
                    </div>
            </div>
        </footer>
    }
}

export default FooterComponent;