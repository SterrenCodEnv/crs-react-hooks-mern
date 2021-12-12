import React from 'react';
import PropTypes from 'prop-types';

const FirstApp = ({portMessage, portNumber}) => {

    const title = 'Data:'
    const data = {
        firstName: 'Juan',
        lasName: 'Sterren',
        email: 'sterrenjuanignacio@gmail.com',
        age: 30,
        job: 'Software Developer'
    }

    return (
        <>
            <h2>{title}</h2>
            <pre>{JSON.stringify(data, null, 4)}</pre>
            <p>{portMessage} {portNumber}</p>
        </>
    );
}

FirstApp.propTypes = {
    portMessage: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    portNumber: 3000
}

export default FirstApp;