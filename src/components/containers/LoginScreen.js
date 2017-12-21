import LoginScreen from '../ui/LoginScreen';
import { connect } from 'react-redux';
import { loginRequest } from '../../actions';

const mapStatetoProps = state => ({
  userData: state.storedUserData
});

const mapDispatchToProps = dispatch => ({
  loginUser({email, password}) {
    dispatch(
      loginRequest(email, password)
    );
  }
});

export default connect(mapStatetoProps, mapDispatchToProps)(LoginScreen);
