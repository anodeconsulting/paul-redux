export default function users(state = {}, action) {
  let new_state;
  // console.log(state);
  // console.log(action);
  switch (action.type) {
    case "USERS_FETCH_LIST":
      new_state = JSON.parse(JSON.stringify(state));
      return new_state;

    case "changeLanguage":
      new_state = JSON.parse(JSON.stringify(state));
      new_state.id = action.id ? action.id : "es-ES";
      return new_state;

    default:
      // no action passed so show default state
      return state;
  }
}
