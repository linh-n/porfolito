import { connect } from "react-redux";

import Gallery from "../components/Gallery";
import getPhotosState from "../selectors";

const mapStateToProps = state => ({
  photos: getPhotosState(state),
});
export default connect(mapStateToProps)(Gallery);
