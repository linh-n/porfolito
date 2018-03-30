import { connect } from "react-redux";
import { setLocale } from "../reducer";

import Sidebar from "../components/Sidebar";
import { getLocaleState, getAvailableLocalesState } from "../selectors";

const mapStateToProps = state => ({
  currentLocale: getLocaleState(state),
  availableLocales: getAvailableLocalesState(state),
  location: state.router.location,
});
const mapDispatchToProps = dispatch => ({
  handleChangeLocale: lang => dispatch(setLocale(lang)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
