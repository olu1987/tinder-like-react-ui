import React from 'react';
import PropTypes from 'prop-types';

import DraggableCards from '../../components/draggable-cards';

const UserCardList = ({
 userReducer,
}) => (
  <DraggableCards
    items={userReducer ? userReducer.users : []}
  />
);

UserCardList.propTypes = {
  userReducer: PropTypes.objectOf(PropTypes.any),
};

UserCardList.defaultProps = {
  userReducer: {},
};

export default UserCardList;