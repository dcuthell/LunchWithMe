import SignupScreen from '../ui/SignupScreen';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionCreators from '../../actions/index';

const mapStatetoProps = state => ({
  userData: state.storedUserData
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}


export default connect(mapStatetoProps, mapDispatchToProps)(SignupScreen);
