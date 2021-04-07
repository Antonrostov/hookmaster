export default {
  render(config, oldState, newState) {
    const changedNodes = Object.keys(newState);
    const [state, components] = config.runChanges({
      oldState,
      newState,
      changedNodes
    });
    return [state, components];
  }
};
