import React from 'react';
import PropTypes from 'prop-types';

const Link = ({active, children, onClick}) => (
    <button disabled={active}
            onClick={onClick}>
        {children}
    </button>
);

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
};

export default Link