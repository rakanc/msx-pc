import * as React from "react";
import { CommandBar } from 'office-ui-fabric-react/lib/CommandBar';
import './header.css';

interface HeaderProps {
  userName: string;
  userEmail: string;
  history?: any;
}

const Header: React.SFC<HeaderProps> = (props: HeaderProps) => {

  const getItems = () => {
    return [
      {
        iconProps: {
          iconName: 'Home'
        },
        key: 'home',
        name: 'MSX - PC',
        onClick: () => props.history.push('/home')
      },
      {
        iconProps: {
          iconName: 'PartyLeader',
          style: {
            color: 'salmon'
          }
        },
        key: 'Partners',
        name: 'Partners',
        onClick: () => props.history.push('/partners')
      },
      {
        iconProps: {
          iconName: 'MasterDatabase'
        },
        key: 'AppSource',
        name: 'AppSource',
        onClick: () => props.history.push('/appsource')
      },
      {
        iconProps: {
          iconName: 'Help'
        },
        key: 'About',
        name: 'About',
        onClick: () => props.history.push('/about')
      }
    ];
  }
  const  getFarItems = () => {
    return [
      {
        disabled: true,
        iconProps: {
          iconName: 'Contact'
        },
        key: 'loggedinuser',
        name: props.userName
      }
    ];
  };
  return (
    <div>
        <CommandBar
          items={getItems()}
          farItems={getFarItems()}
          ariaLabel={'Use left and right arrow keys to navigate between commands'}
        />
      </div>
  );
};

export default Header;
