'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// These two containers are siblings in the DOM
var appRoot = document.getElementById('app-root');
var modalRoot = document.getElementById('modal-root');

var Modal = function (_React$Component) {
  _inherits(Modal, _React$Component);

  function Modal(props) {
    _classCallCheck(this, Modal);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.el = document.createElement('div');
    return _this;
  }

  Modal.prototype.componentDidMount = function componentDidMount() {
    modalRoot.appendChild(this.el);
  };

  Modal.prototype.componentWillUnmount = function componentWillUnmount() {
    modalRoot.removeChild(this.el);
  };

  Modal.prototype.render = function render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  };

  return Modal;
}(React.Component);

var Parent = function (_React$Component2) {
  _inherits(Parent, _React$Component2);

  function Parent(props) {
    _classCallCheck(this, Parent);

    var _this2 = _possibleConstructorReturn(this, _React$Component2.call(this, props));

    _this2.state = { clicks: 0 };
    _this2.handleClick = _this2.handleClick.bind(_this2);
    return _this2;
  }

  Parent.prototype.handleClick = function handleClick() {
    // This will fire when the button in Child is clicked,
    // updating Parent's state, even though button
    // is not direct descendant in the DOM.
    this.setState(function (prevState) {
      return {
        clicks: prevState.clicks + 1
      };
    });
  };

  Parent.prototype.render = function render() {
    return React.createElement(
      'div',
      { onClick: this.handleClick },
      React.createElement(
        'p',
        null,
        'Number of clicks: ',
        this.state.clicks
      ),
      React.createElement(
        'p',
        null,
        'Open up the browser DevTools to observe that the button is not a child of the div with the onClick handler.'
      ),
      React.createElement(
        Modal,
        null,
        React.createElement(Child, null)
      )
    );
  };

  return Parent;
}(React.Component);

function Child() {
  // The click event on this button will bubble up to parent,
  // because there is no 'onClick' attribute defined
  return React.createElement(
    'div',
    { className: 'modal' },
    React.createElement(
      'button',
      null,
      'Click'
    )
  );
}

ReactDOM.render(React.createElement(Parent, null), appRoot);