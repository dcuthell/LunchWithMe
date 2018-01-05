import MapScreen from '../ui/MapScreen';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionCreators from '../../actions/index';

import getUserCoords from '../../selectors/userCoords';


const mapStatetoProps = state => {
  return { userCoords: getUserCoords(state) };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}


export default connect(mapStatetoProps, mapDispatchToProps)(MapScreen);
