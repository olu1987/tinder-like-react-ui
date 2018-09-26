import React from 'react';
import PropTypes from 'prop-types';
import Draggable from 'react-draggable';

import './draggable-card.css';

const DraggableCard = ({ 
  name,
  imageSrc,
  onDragStart,
  onDragStop,
  position,
  resetPosition,
  animateOutRight,
  animateOutLeft,
  removeCard,
}) => {
  const imageStyle = {
    backgroundImage: `url(${imageSrc})`,

  }
  return (
    !removeCard &&
    <Draggable
      onStart={onDragStart}
      onStop={onDragStop}
      axis="x"
      position={position}
    >
      <div className={`card 
        ${resetPosition ? 'reset' : ''}
        ${animateOutRight ? 'animate-out-right' : ''}
        ${animateOutLeft ? 'animate-out-left' : ''}`
      }>
        <div className="image" style={imageStyle} />
        <h2>{name}</h2>
      </div>
    </Draggable>
  );
};

DraggableCard.propTypes = {
  name: PropTypes.string,
  imageSrc: PropTypes.string,
  onDragStart: PropTypes.func,
  onDragStop: PropTypes.func,
  position: PropTypes.objectOf(PropTypes.any),
  animateOutRight: PropTypes.bool,
  animateOutLeft: PropTypes.bool,
  resetPosition: PropTypes.bool,
};

DraggableCard.defaultProps = {
  name: '',
  imageSrc: '',
  onDragStart: () => {},
  onDragStop: () => {},
  position: null,
  animateOutRight: false,
  animateOutLeft: false,
  resetPosition: false,
};

export default DraggableCard;
