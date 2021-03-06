import SwiperScreen from '../ui/SwiperScreen';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionCreators from '../../actions/index';


const mapStatetoProps = state => (state);

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}


export default connect(mapStatetoProps, mapDispatchToProps)(SwiperScreen);
