import * as React from "react";
import { AdalService } from "./common/authn/adalSvc";
import Header from "./common/header/header";
import { Fabric } from 'office-ui-fabric-react/lib/Fabric'

declare let module: any;
export interface AppProps {
  history?: any;
}

class App extends React.Component<AppProps> {
  public userName = "";
  public userEmail = "";

  constructor(props: AppProps) {
    super(props);
  }
  
  public componentWillMount() {
    const adalSvc = new AdalService();

    adalSvc.handleCallback();

    if (!adalSvc.isAuthenticated) {
      adalSvc.login();
    } else {
      this.userName = adalSvc.userInfo.profile.name;
      this.userEmail = adalSvc.userInfo.userName;
    }
  }
  public render() {
    
    return (
      <Fabric className="App">
            <Header userName={this.userName} userEmail={this.userEmail} history={this.props.history}/>
        </Fabric>

    );
  }
}

export default App;

if (module.hot) {
  module.hot.accept();
}
