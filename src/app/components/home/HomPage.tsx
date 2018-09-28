import * as React from 'react';
import { Link } from 'office-ui-fabric-react/lib/Link';

class Home extends React.Component {

    public render() {
        return (
            <div className="jumbotron" >
                <h1>Partner Administration</h1>
                <p>Enable every Partner to achieve more...</p>
                <Link href="about" >Learn more</Link>
            </div >
        );
    }
}

export default Home;
