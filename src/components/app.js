import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionsCreators';
import Main from './main';

function mapStateToProps(state) {
  return {
    clubs: state.clubs,
    selectedClub: state.selectedClub
  };
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispachToProps)(Main);

export default App;
