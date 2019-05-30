    
import { connect } from 'react-redux';
import Characters from '../components/Characters';
import { getCharacters } from '../selectors/characterSelectors';
import { action_getCharacters } from '../actions/characterActions';


const mapStateToProps = state => {
 
  return {
    characters: getCharacters(state)
  };
};

const mapDispatchToProps = (dispatch) => ({
  loadCharacters() {
    dispatch(action_getCharacters());
  }
});




export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Characters);

//when characts componnet did mount, call this.props.action_getCharactesr?