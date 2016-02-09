import React from 'react';
import {render} from 'react-dom';
import PageHeaderComponent from './components/page/layout/page-header/page-header';
import PageFooterComponent from './components/page/layout/page-footer/page-footer';
import './assets/styles/bootstrap/bootstrap.scss';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            headerNavItems: [
                {
                    id:"0",
                    href: "/",
                    linkText: "Home"
                },
                {
                    id:"1",
                    href: "/Transactions",
                    linkText: "Transactions"
                },
                {
                    id:"2",
                    href: "/Profile",
                    linkText: "Your Profile"
                }
            ]
        };
    }
    render() {

        return <div>
            <PageHeaderComponent text="React Boilerplate" mainMenuItems={this.state.headerNavItems}></PageHeaderComponent>
            <PageFooterComponent twitterHandle="@Tedscape"/>


        </div>;
    }

}

render(<App />, document.getElementById('app'));