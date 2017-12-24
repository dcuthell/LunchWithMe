import LoginScreen from '../ui/LoginScreen';
import { connect } from 'react-redux';
import { loginRequest } from '../../actions';

const mapStatetoProps = state => ({
  userData: state.storedUserData
});

const mapDispatchToProps = dispatch => ({
  loginUser({email, password}) {
    dispatch(
      loginUser(email, password) //changed but didnt fix
    );
  }
});

export default connect(mapStatetoProps, mapDispatchToProps)(LoginScreen);
