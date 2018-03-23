import { connect } from "react-redux";
import { setLocale } from "../reducer";

import Sidebar from "../components/Sidebar";
import { getLocaleState } from "../selectors";

const mapStateToProps = state => ({
  currentLocale: getLocaleState(state),
});
const mapDispatchToProps = dispatch => ({
  handleChangeLocale: lang => dispatch(setLocale(lang)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
