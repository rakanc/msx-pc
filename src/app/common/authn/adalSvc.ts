import { AdalConfig } from './config';
import 'expose-loader?AuthenticationContext!../../../../node_modules/adal-angular/lib/adal.js';
import { injectable } from 'inversify';
import "reflect-metadata";

const createAuthContextFn: adal.AuthenticationContextStatic = AuthenticationContext;

@injectable()
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
