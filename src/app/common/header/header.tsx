import * as React from "react";
import { Link } from 'office-ui-fabric-react/lib/Link';
import './header.css';

interface HeaderProps {
  userName: string;
  userEmail: string;
}

const Header: React.SFC<HeaderProps> = (props: HeaderProps) => {
  return (
    <div className="topnav">
      <a className="LoggedInUser">
        {props.userName}
        <br />
        <small>{props.userEmail}</small>
      </a>
      <Link href="/" className="active">
        MSX - PC
      </Link>
      <Link href="/partners" className="active">
        Partners
      </Link>
      <Link href="/appsource" className="active">
        AppSource
      </Link>
      <Link href="/about" className="active">
        About
      </Link>
    </div>
  );
};

export default Header;
