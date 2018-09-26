import { compose, withState, withProps, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import UserCardList from './user-card-list';

const mapStateToProps = state => ({
  ...state,
});

export default compose(
  connect(
    mapStateToProps,
    null,
  ),
)(UserCardList);