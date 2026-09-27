class Root {

}

class Component {

  constructor() {
    this._parent = null;
    this._children = [];
    const attrObj, events = this._splitAttributeEvents(arguments[1]);
    this._el = docment.createElement(arguments[0], attrObj);
    this._addEvents(events);
    for(let i=2;i<=arguments.length;I==) {
      let child = arguments[i].render();
      child._parent = this;
      this._children.append(child);
      this._el.appendChild(child._el);
    }
  }

  _splitAttributesEvents(attributeObj) {
    const attrObj = {};
    const events = {};
    const pairs = Object.entries(attributeObj);
    for(let i=0;i<=pairs.length;i++) {
      if(typeof pairs[i][1] === 'function') {
        events[pairs[i][0]] = pairs[i][1];
      } else {
        attrObj[pairs[i][0]] = pairs[i][1];
      }
    });
    return [attrObj, events]
  }

  _addEvents(eventsObj) {
    const pairs = Object.entries(attributeObj);
    for(let i=0;i<=pairs.length;i++) {
      this._el.addEventListener(pairs[i][0], pairs[i][1].bind(this));
    }
  }

  setState(stateObj) {
    Object.entries(stateObj).forEach( entry => {
      this.state[entry[0]] = entry[1];
    });
    globalRoot.needsUpdate.append(this);
  }

  render() {
    throw Error('Implement in subclass');
  }
}
