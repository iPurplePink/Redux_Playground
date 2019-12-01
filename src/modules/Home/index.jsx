import View from "./View";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setIsLoggedIn } from "../../store/modules/Home/home.actions";

// function mapStateToProps(state) {
//   return {
//     isLoggedIn: state.home.isLoggedIn
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     services: bindActionCreators({
//       setIsLoggedIn
//     })
//   };
// }

const mapStateToProps = state => ({
  isLoggedIn: state.home.isLoggedIn
});

const mapDispatchToProps = dispatch => ({
  services: bindActionCreators({ setIsLoggedIn }, dispatch),
  dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(View);
