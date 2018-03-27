import { connect } from "react-redux";

import Gallery from "../components/Gallery";
import { getPhotosState, isViewingPhotoState } from "../selectors";

const mapStateToProps = state => ({
  photos: getPhotosState(state),
  hidden: isViewingPhotoState(state),
});
export default connect(mapStateToProps)(Gallery);
