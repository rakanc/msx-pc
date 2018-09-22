import * as React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {

    public render() {
        return (
            <div className="jumbotron" >
                <h1>Partner Administration</h1>
                <p>Enable every Partner to achieve more...</p>
                <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
            </div >
        );
    }
}

export default Home;
