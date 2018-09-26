import { compose, withHandlers, withState } from 'recompose';
import DraggableCard from './draggable-card';


export default compose(
 withState('position', 'setPosition', null),
 withState('resetPosition', 'setResetPosition', false),
 withState('animateOutRight', 'setAnimateOutRight', false),
 withState('animateOutLeft', 'setAnimateOutLeft', false),
 withState('removeCard', 'setRemoveCard', false),
 withHandlers({
    onDragStop: ({ setRemoveCard, setResetPosition, setPosition, setAnimateOutRight, setAnimateOutLeft }) => (e, data) => {
      if (data.lastX > -120 && data.lastX < 120) {
        setResetPosition(true);
        setTimeout(() => {
          setResetPosition(false);
          setPosition({ x: 0, y: 0 });
          setPosition(null);
        }, 300);
        return;
      }
      const removeCard = () => setTimeout(() => {
        setRemoveCard(true);
      }, 300);

      if (data.lastX > 120) {
        setAnimateOutRight(true);
        removeCard();
        return;
      }
      
      if (data.lastX < -120) {
        setAnimateOutLeft(true);
        removeCard();
      }
    },
  }),
)(DraggableCard);