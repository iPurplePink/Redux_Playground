import View from "./View";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getPlanetsEpic } from "../../store/modules/Fetch/fetch.actions";
import { setIsLoggedIn } from "../../store/modules/Home/home.actions";

function mapDispatchToProps(dispatch) {
  console.log("dispatch", dispatch);
  return {
    ...dispatch,
    services: bindActionCreators({ getPlanetsEpic, setIsLoggedIn }, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(View);
