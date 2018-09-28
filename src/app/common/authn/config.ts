export class AdalConfig {
  public static get getAdalConfig(): any {
    return {
      tenant: "microsoft.onmicrosoft.com",
      // tslint:disable-next-line:object-literal-sort-keys
      clientId: "88843e2a-7c59-4a0b-a073-84b9568f4869",
      redirectUri: window.location.origin + "/",
      postLogoutRedirectUri: window.location.origin + "/"
    };
  }
}
