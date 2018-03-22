import { connect } from "react-redux";
import { setLocale } from "../reducer";

import Header from "../components/Header";
import getLocaleState from "../selectors";

const mapStateToProps = state => ({
  currentLocale: getLocaleState(state),
});
const mapDispatchToProps = dispatch => ({
  handleChangeLocale: lang => dispatch(setLocale(lang)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
