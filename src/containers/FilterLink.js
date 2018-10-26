import {connect} from 'react-redux';
import {set_visibility_filter} from "../actions";
import Link from '../components/Link';

const mapStateToProps = (state, ownProps) => ({
    active: state.visibilityFilter === ownProps.filter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(set_visibility_filter(ownProps.filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(Link)