import React from 'react';
import {render} from 'react-dom';
import PageHeaderComponent from './components/page/layout/page-header/page-header';
import PageFooterComponent from './components/page/layout/page-footer/page-footer';
import './assets/styles/bootstrap/bootstrap.scss';


class App extends React.Component {
    render() {
        return <div>
            <PageHeaderComponent text="ReactJS boilerplate"></PageHeaderComponent>
            <PageFooterComponent twitterHandle="@Tedscape"/>
        </div>;
    }
}

render(<App />, document.getElementById('app'));