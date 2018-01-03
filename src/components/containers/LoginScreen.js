import LoginScreen from '../ui/LoginScreen';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionCreators from '../../actions/index';
// import { loginRequest } from '../../actions';

const mapStatetoProps = state => ({
  userData: state.storedUserData
});

// const mapDispatchToProps = dispatch => ({
//   loginUser({email, password}) {
//     const payload = {email, password};
//     dispatch(
//       loginRequest(payload)
//     );
//   }
// });

function mapDispatchToProps(dispatch) {
  const boop = bindActionCreators(ActionCreators, dispatch);
  console.log(boop);
  return boop;
}


export default connect(mapStatetoProps, mapDispatchToProps)(LoginScreen);
