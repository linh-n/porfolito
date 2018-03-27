import { connect } from "react-redux";
import { setLayoutBackground } from "modules/ui/reducer";
import { getLocaleState } from "modules/ui/selectors";
import { closeViewingPhoto } from "../reducer";
import { getViewingPhotoState } from "../selectors";
import ViewPhoto from "../components/ViewPhoto";

const mapStateToProps = state => ({
  photo: getViewingPhotoState(state),
  currentLocale: getLocaleState(state),
});
const mapDispatchToProps = dispatch => ({
  setLayoutBackground: src => dispatch(setLayoutBackground(src)),
  handleClose: () => dispatch(closeViewingPhoto()),
});
export default connect(mapStateToProps, mapDispatchToProps)(ViewPhoto);
