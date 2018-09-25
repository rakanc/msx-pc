import 'expose-loader?AuthenticationContext!../../../../node_modules/adal-angular/lib/adal.js';
import { AdalConfig } from './config';

const createAuthContextFn: adal.AuthenticationContextStatic = AuthenticationContext;

export class AdalService {
  private context: adal.AuthenticationContext;

  constructor() {
    this.context = new createAuthContextFn(AdalConfig.getAdalConfig);
  }
  public login() {
    this.context.login();
  }

  public logout() {
    this.context.logOut();
  }

  public handleCallback() {
    this.context.handleWindowCallback();
  }

  public get userInfo() {
    return this.context.getCachedUser();
  }

  public get accessToken() {
    return this.context.getCachedToken(AdalConfig.getAdalConfig.clientId);
  }

  public get isAuthenticated() {
    return this.userInfo && this.accessToken;
  }

}
