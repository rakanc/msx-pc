import * as React from "react";
import { AdalService } from "./common/authn/adalSvc";
import Header from "./common/header/header";

declare let module: any;
export interface AppProps {
  match?: any;
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
    const { match } = this.props;
    // tslint:disable-next-line:no-console
    console.log("Path: " + match.path);
    // tslint:disable-next-line:no-console
    console.log("Url: " + match.url);
    return (
      <div className="container-fluid">
        <Header userName={this.userName} userEmail={this.userEmail} />
      </div>
    );
  }
}

export default App;

if (module.hot) {
  module.hot.accept();
}
