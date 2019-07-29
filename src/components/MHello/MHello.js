import React, {Component, Fragment} from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import Typography from '@material-ui/core/Typography';

class MHello extends Component {
    constructor(props) {
        super(props);
        this.date = props.date;
        this.state = {};
    }

    render(props) {
        return (
            <Fragment>

                <Grid container >
                    <Button variant="contained" color="primary">
                        Welcome Material UI
                    </Button>

                    <Typography display="block" variant="h1">
                        This is a heading 1
                    </Typography>

                </Grid>


            </Fragment>
        );
    }
}

export default MHello;