import React, {Component, Fragment} from 'react';
import Button from 'react-bootstrap/Button'

import Alert from 'react-bootstrap/Alert'

class Hello extends Component {
    constructor(props) {
        super(props);
        this.date = props.date;
        this.state = {};
    }

    render(props) {
        return (
            <Fragment>

                <div className="row mt-4 ml-4 mr-4">
                    <div className="col-6">
                        <Alert variant="success">
                            <Alert.Heading>
                                The Date today
                                is: {this.props.date}
                            </Alert.Heading>
                        </Alert>
                        <Button variant="primary">Hello
                            Primary
                            Button</Button>
                    </div>

                    <div className="col-6">
                        <Alert variant="success">
                            <Alert.Heading>
                                The Date today
                                is: {this.props.date}
                            </Alert.Heading>
                        </Alert>
                        <Button variant="danger">Hello
                            Primary
                            Button</Button>
                    </div>
                </div>


            </Fragment>
        );
    }
}

export default Hello;