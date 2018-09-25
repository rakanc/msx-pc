import * as React from "react";
import { Link } from "react-router-dom";
import './header.css';

interface IProps {
  userName: string;
  userEmail: string;
}

const Header: React.SFC<IProps> = (props: IProps) => {
  return (
    <div className="topnav">
      <a className="LoggedInUser">
        {props.userName}
        <br />
        <small>{props.userEmail}</small>
      </a>
      <Link to="/" className="active">
        MSX - PC
      </Link>
      <Link to="/partners" className="active">
        Partners
      </Link>
      <Link to="/appsource" className="active">
        AppSource
      </Link>
      <Link to="/about" className="active">
        About
      </Link>
    </div>
  );
};

export default Header;
