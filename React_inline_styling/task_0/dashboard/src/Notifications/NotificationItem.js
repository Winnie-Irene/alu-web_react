import React, { memo } from 'react';
import './Notifications.css';
import PropTypes from 'prop-types';

const NotificationItem = ({ type, html, value, markAsRead }) => {
    return (
        <li
            data-notification-type={ type } dangerouslySetInnerHTML={ html }
            onClick={markAsRead}
        >{ value }</li>
    );
};

NotificationItem.propTypes = {
    html: PropTypes.shape({ __html: PropTypes.string }),
    value: PropTypes.string,
    type: PropTypes.string.isRequired
};

NotificationItem.defaultProps = {
    type: 'default',
}

export default memo(NotificationItem);