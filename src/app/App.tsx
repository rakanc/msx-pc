import * as React from 'react';
// import AppRouter from '../routes';
import Header from './common/header/header';

declare let module: any;

class App extends React.Component {
    public render() {
        return (
            <div className="container-fluid">
                <Header />
            </div>
        );
    }
}

export default App;

if (module.hot) {
    module.hot.accept();
}
