import LoginScreen from '../ui/LoginScreen';
import { connect } from 'react-redux';
import { loginRequest } from '../../actions/index';

const mapStatetoProps = state => ({
  userData: state.storedUserData
});

const mapDispatchToProps = dispatch => ({
  loginUser({email, password}) {
    console.log(email, password);
    dispatch(
      loginRequest(email, password)
    );
  }
});

export default connect(mapStatetoProps, mapDispatchToProps)(LoginScreen);
