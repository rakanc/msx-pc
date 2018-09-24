import * as React from 'react';
// import AppRouter from '../routes';
import Header from './common/header/header';

declare let module: any;
export interface IProps {
  match?: any;
}

class App extends React.Component<IProps> {

    public render() {
      const { match } = this.props
    // tslint:disable-next-line:no-console
    console.log('Path: ' + match.path);
    // tslint:disable-next-line:no-console
    console.log('Url: ' + match.url);
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
