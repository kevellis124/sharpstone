import React from 'react';
import './SiteHeader.css';
import { Button } from './Button';

import {ReactComponent as RockSvg} from './rock.svg';

import PropTypes from 'prop-types';

const SiteHeader = ({ user }) => {
    return (
        <header>
            <div className="wrapper">
                <div>
                    <RockSvg className='ico' width='32px'/>
                    <h1>SharpStone</h1>
                </div>
                <div>
                    {user ? (
                    <Button size="small" onClick={() => {}} label="Log out" />
                    ) : (
                    <>
                        <Button size="small" onClick={() => {}} label="Log in" />
                        <Button primary size="small" onClick={() => {}} label="Sign up" />
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