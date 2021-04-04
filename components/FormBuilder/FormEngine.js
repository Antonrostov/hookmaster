export default {
  render(config, oldState, newState) {
    if (!oldState["check_3"] && newState["check_3"]) {
      delete newState["check_1"];
      delete newState["check_2"];
    } else if (
      oldState["check_3"] &&
      (newState["check_1"] || newState["check_2"])
    ) {
      delete newState["check_3"];
    }
    return newState;
  }
};
