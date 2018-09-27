import { compose, withHandlers, withState, withPropsOnChange } from 'recompose';

import DraggableCard from './draggable-card';

export default compose(
  withState('position', 'setPosition', null),
  withState('resetPosition', 'setResetPosition', false),
  withState('animateOutRight', 'setAnimateOutRight', false),
  withState('animateOutLeft', 'setAnimateOutLeft', false),
  withState('removeCard', 'setRemoveCard', false),
  withHandlers({
    slideRight: ({ setAnimateOutRight, onSwipeRight, setRemoveCard }) => (item) => {
      setAnimateOutRight(true);
      item && onSwipeRight(item);
      setTimeout(() => {
        setRemoveCard(true);
      }, 300);
    },
    slideLeft: ({ setAnimateOutLeft, onSwipeLeft, setRemoveCard }) => (item) => {
      setAnimateOutLeft(true);
      item && onSwipeLeft(item);
      setTimeout(() => {
        setRemoveCard(true);
      }, 300);
    },
  }),
  withHandlers({
    onDragStop: ({
      setResetPosition,
      setPosition,
      item,
      slideRight,
      slideLeft,
    }) => (e, data) => {
      if (data.lastX > -120 && data.lastX < 120) {
        setResetPosition(true);
        setTimeout(() => {
          setResetPosition(false);
          setPosition({ x: 0, y: 0 });
          setPosition(null);
        }, 300);
        return;
      }

      if (data.lastX > 120) {
        slideRight(item);
        return;
      }
      if (data.lastX < -120) {
        slideLeft(item);
      }
    },
  }),
  withPropsOnChange(['forceSlideRight', 'forceSlideLeft'], ({ slideRight, slideLeft, forceSlideRight, forceSlideLeft }) => {
    if (forceSlideRight) {
      return slideRight();
    }
    if (forceSlideLeft) {
      return slideLeft();
    }
  }),
)(DraggableCard);
