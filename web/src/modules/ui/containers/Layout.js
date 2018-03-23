import { connect } from "react-redux";
import Layout from "../components/Layout";
import { getLocaleState, getLayoutBackgroundState } from "../selectors";

const mapStateToProps = state => ({
  language: getLocaleState(state),
  background: getLayoutBackgroundState(state),
});
export default connect(mapStateToProps)(Layout);
