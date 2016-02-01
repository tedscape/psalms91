import React from 'react';
import {render} from 'react-dom';
import HeaderComponent from './components/layout/header-description/header';
import FooterComponent from './components/layout/footer/footer';
import 'css!sass!./assets/styles/bootstrap/bootstrap.scss';


class App extends React.Component {
    render() {
        return <div>
            <HeaderComponent text="ReactJS boilerplate"
                             description="This boilerplate consist of the setup React, Redux, Babel, Webpack etc and can be used as a base for other apps."></HeaderComponent>
            <FooterComponent />
        </div>;
    }
}

render(<App />, document.getElementById('app'));