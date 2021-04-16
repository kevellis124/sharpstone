import React from 'react';
import './SiteHeader.css';
import { Button } from './Button';

import {ReactComponent as RockSvg} from './rock.svg';

import PropTypes from 'prop-types';

const SiteHeader = ({ user }) => {
    return (
        <header>
            <div className="wrapper">
                <RockSvg width='100px'/>
                <h1>SharpStone</h1>
                <div>
                    {user ? (
                    <Button size="small" onClick={onLogout} label="Log out" />
                    ) : (
                    <>
                        <Button size="small" onClick={onLogin} label="Log in" />
                        <Button primary size="small" onClick={onCreateAccount} label="Sign up" />
                    </>
                    )}
                </div>
            </div>
        </header>
    );
}

SiteHeader.propTypes = {
    user: PropTypes.shape({}),
};

SiteHeader.defaultProps = {
    user: null,
};

export default SiteHeader;