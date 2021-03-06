function Node(data) {
  this.data = data;
  this.out = new Map();
  this.key = data.id || data.name;
  this.ui = null;
}
Node.prototype.render = function(oldState, newState) {
  const Component = this.data.component;
  const props = this.data.getProps(oldState, newState);
  this.ui = <Component key={this.key} {...props} />;
};
Node.prototype.to = function(node, condition) {
  this.out.set(node, condition);
};
function Graph(items) {
  this.nodes = {};
  this.components = [];
  items.forEach(data => {
    if (typeof this.nodes[data.name] === "undefined") {
      this.nodes[data.name] = [new Node(data)];
    } else {
      this.nodes[data.name].push(new Node(data));
    }
  });
}
Graph.prototype.getNode = function(name, index = 0) {
  return this.nodes[name][index];
};
Graph.prototype.runChanges = function({ oldState, newState, changes }) {
  Object.keys(changes).forEach(name => {
    this.nodes[name].forEach(node => {
      node.out.forEach((condition, outNode) => {
        newState = condition(oldState, newState);
        outNode.render(oldState, newState);
      });
      node.render(oldState, newState);
    });
  });
  const components = [];
  Object.keys(newState).forEach(name => {
    this.nodes[name].forEach(node => {
      components.push(node.ui);
    });
  });
  this.components = components;
  return newState;
};
Graph.prototype.ui = function() {
  return this.components;
};
export default Graph;
