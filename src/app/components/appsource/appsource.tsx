import * as React from 'react';
import './appsource.css';
import AppSourceFrame from './iframe';

class Appsource extends React.Component {

  public componentDidMount() {

    this.msgHandler = this.msgHandler.bind(this);
    this.showRxMessage = this.showRxMessage.bind(this);
    window.addEventListener('message', this.msgHandler);


  }
  public showRxMessage = (rxPl: any) => {
    if (rxPl && rxPl.msgType && rxPl.data) {
      const pl = rxPl.data;
      let displayMsg = 'The recieved Payload for [\"';
      displayMsg += rxPl.msgType + '\"]:\n ' + JSON.stringify(pl);
      alert(displayMsg);
    }

  }
  public msgHandler(e: any) {
    
    if (!e.data) {
      return;
    }
    console.log(' Got event ' + JSON.stringify(e));
    this.showRxMessage(e.data);
    // const msgType = e.data.MsgType;
    // switch (msgType)
    // {
    //     case 'UpdateURL':
    //     break;
    //     case 'acquireApp':
    //     break;
    //     case 'CLOSESAASMARKETPLACE':
    //     break;
    //     case 'REQUESTTOKEN':
    //     break;
    //     case 'RENEWTOKEN':
    //     break;
    //     default:
    //     break;

    // }
    // if (e.data.url !== this.props.content) {
    //   console.info(e.data.url);
    //   return;
    // }
    // switch (e.data.type) {
    //   case 'height':
    //     this.maxScrollTop = e.data.value - this.container.offsetHeight;
    //     this.received = true;
    //     break;
    //   case 'scrollTop':
    //     this.props.saveScroll(e.data.value);
    //     break;
    // }
  }


  public render() {
    return (
      <AppSourceFrame />
    );
  }
}

export default Appsource;
