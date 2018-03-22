import { connect } from "react-redux";
import Layout from "../components/Layout";
import getLanguageState from "../selectors";

const mapStateToProps = state => ({
  language: getLanguageState(state),
});
export default connect(mapStateToProps)(Layout);
