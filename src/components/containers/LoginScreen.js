import LoginScreen from '../ui/LoginScreen';
import { connect } from 'react-redux';
// import { loginRequest } from '../../actions/index';
// import { bindActionCreators } from 'redux';
// import ActionCreators from '../../actions/index';
import loginRequest from '../../actions/login-user';

const mapStatetoProps = state => ({
  userData: state.storedUserData
});

const mapDispatchToProps = dispatch => ({
  loginUser({email, password}) {
    const payload = {email, password};
    dispatch(
      loginRequest(payload)
    );
  }
});

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(ActionCreators, dispatch);
// }


export default connect(mapStatetoProps, mapDispatchToProps)(LoginScreen);
