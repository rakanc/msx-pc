import * as React from "react";
import IframeComm from "react-iframe-comm";

const AppSourceFrame = ({ }) => {

  const payLoad = {
    hostData: {
      accessToken: '123ueoau890243',
      context: {
        flightCode: '123',
        groupId: 'UserGroup123'
      },
      correlationId: '45b081e2-01b5-4d79-8036-bb2c8759c21f',
      firstName: 'Rajagopal',
      getAppsEndpoint: 'https://biazure-int-edog-redirect.analysis-df.windows.net/v1.0/AppSource/applications',
      lastName: 'Kamchi',
      workEmail: 'rakanc@microsoft.com'
    },
    msgType: 'loadMarketplace'
  };

  const attributes = {
    height: '600px',
    src: 'https://appgallery.spza-staging.net/embed/en-US/marketplace/?embedHost=dynamics-365&showPrivateApps=false',
    width: '1100px',
  };

  const postMessageData = payLoad;

  const onReceiveMessage = (rx) => {
    // console.log("onReceiveMessage", JSON.stringify(rx));
  };

  const onReady = () => {
    // console.log("onReady here");
  };


  return (
    <IframeComm
      attributes={attributes}
      postMessageData={postMessageData}
      handleReady={onReady}
      handleReceiveMessage={onReceiveMessage}
    />
  );
};

export default AppSourceFrame;
