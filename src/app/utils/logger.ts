import { AppInsights } from "applicationinsights-js";

export class Logger {

  public static logEvent(name: string, properties?: any, measurements?: any) {
    Logger.init();
    AppInsights.trackEvent(name, properties, measurements);
  }

  public static init() {
    
    if (!AppInsights.config) {
      AppInsights.downloadAndSetup(Logger.config);
    }
  }

  public static logPageView(name?: string, url?: string, properties?: any,
    measurements?: any, duration?: number) {
    Logger.init();
    AppInsights.trackPageView(name, url, properties, measurements, duration);
  }

  private static config: Microsoft.ApplicationInsights.IConfig = {
    instrumentationKey: '86805683-24cc-4531-ab83-15fdeab58d2a'
  };

}
