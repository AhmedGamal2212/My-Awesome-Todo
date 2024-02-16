import React from 'react';
import { BASE_URL } from '../../constants';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <div className='buttons'>
            <Link
                className='button is-primary'
                to={`./tasks`}
            >
                Visit Home Page
            </Link>
            <Link
                className='button is-danger'
                to={`./tasks/1`}
            >
                Visit Single Task Page
            </Link>
        </div>
    );
};

export default Landing;
