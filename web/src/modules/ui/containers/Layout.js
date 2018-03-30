import { connect } from "react-redux";
import Layout from "../components/Layout";
import { getLocaleState, getLayoutBackgroundState, getCurrentLocaleMessages } from "../selectors";

const mapStateToProps = state => ({
  locale: getLocaleState(state),
  background: getLayoutBackgroundState(state),
  messages: getCurrentLocaleMessages(state),
});
export default connect(mapStateToProps)(Layout);
