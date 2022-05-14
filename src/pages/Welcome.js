import { Fragment } from 'react';

import { Route } from 'react-router-dom';

const Welcome = () => {
    return (
        <Fragment>
            <h1>Welcome Page</h1>  
            <Route path="/welcome/user">
                <h2>Nice to see you again!</h2>
            </Route>
        </Fragment>

    )
}

export default Welcome;