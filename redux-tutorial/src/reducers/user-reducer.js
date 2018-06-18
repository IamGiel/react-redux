export default

function userReducer(state = "", { type, payload }) {
  //es6 object destructor here
  switch (type) {
    case "updateUser":
      return payload.user;
    default:
  }
  return state;
}