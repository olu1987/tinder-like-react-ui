import { compose } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import WorkerCardList from './worker-cards-stack';

import { likeWorker, dislikeWorker } from '../../actions/user';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ likeWorker, dislikeWorker }, dispatch);
}


const mapStateToProps = state => ({
  ...state,
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(WorkerCardList);