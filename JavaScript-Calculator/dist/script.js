function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}class App extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "handleClick",







    buttonName => {
      let currentNumber = this.state.currentNumber;
      let operatorFlag = this.state.operatorFlag;
      switch (true) {
        case buttonName === '0' ||
        buttonName === '1' ||
        buttonName === '2' ||
        buttonName === '3' ||
        buttonName === '4' ||
        buttonName === '5' ||
        buttonName === '6' ||
        buttonName === '7' ||
        buttonName === '8' ||
        buttonName === '9':
          if (this.state.currentNumber !== '0') {
            currentNumber += buttonName;
            operatorFlag = false;
          } else {
            currentNumber = buttonName;
          }
          break;
        case buttonName === 'AC':
          currentNumber = '0';
          this.setState({ decimalFlag: false });
          break;
        case buttonName === '+' ||
        buttonName === '*' ||
        buttonName === '-' ||
        buttonName === '/':
          if (!this.state.operatorFlag) {
            currentNumber += buttonName;
            operatorFlag = true;
            this.setState({ decimalFlag: false });
          } else if (buttonName === '-') {
            currentNumber += buttonName;
          } else if (currentNumber.endsWith('-')) {
            const newNumber = currentNumber.slice(0, currentNumber.length - 2);
            currentNumber = newNumber;
            currentNumber += buttonName;
          }
          break;
        case buttonName === '.':
          if (!this.state.decimalFlag) {
            currentNumber += '.';
            this.setState({ decimalFlag: true });
          }
          break;
        case buttonName === '=':
          currentNumber = eval(currentNumber);
          operatorFlag = false;
          this.setState({ decimalFlag: true });}

      this.setState({ operatorFlag });
      this.setState({ currentNumber });
    });this.state = { currentNumber: '0', operatorFlag: false, decimalFlag: false };}

  render() {
    return (
      React.createElement("div", null,
      React.createElement("div", { className: "calc-wrapper" },
      React.createElement(Screen, { currentNumber: this.state.currentNumber }),
      React.createElement("div", { className: "row" },
      React.createElement(Button, { id: "clear", name: "AC", handleClick: this.handleClick })),

      React.createElement("div", { className: "row" },
      React.createElement(Button, { id: "seven", name: "7", handleClick: this.handleClick }),
      React.createElement(Button, { id: "eight", name: "8", handleClick: this.handleClick }),
      React.createElement(Button, { id: "nine", name: "9", handleClick: this.handleClick }),
      React.createElement(Button, { id: "divide", name: "/", handleClick: this.handleClick })),

      React.createElement("div", { className: "row" },
      React.createElement(Button, { id: "four", name: "4", handleClick: this.handleClick }),
      React.createElement(Button, { id: "five", name: "5", handleClick: this.handleClick }),
      React.createElement(Button, { id: "six", name: "6", handleClick: this.handleClick }),
      React.createElement(Button, { id: "multiply", name: "*", handleClick: this.handleClick })),

      React.createElement("div", { className: "row" },
      React.createElement(Button, { id: "one", name: "1", handleClick: this.handleClick }),
      React.createElement(Button, { id: "two", name: "2", handleClick: this.handleClick }),
      React.createElement(Button, { id: "three", name: "3", handleClick: this.handleClick }),
      React.createElement(Button, { id: "subtract", name: "-", handleClick: this.handleClick })),

      React.createElement("div", { className: "row" },
      React.createElement(Button, { id: "zero", name: "0", handleClick: this.handleClick }),
      React.createElement(Button, { id: "decimal", name: ".", handleClick: this.handleClick }),
      React.createElement(Button, { id: "equals", name: "=", handleClick: this.handleClick }),
      React.createElement(Button, { id: "add", name: "+", handleClick: this.handleClick })))));




  }}


// Screen
class Screen extends React.Component {
  render() {
    return (
      React.createElement("div", { id: "display" },
      this.props.currentNumber));


  }}


// Button
class Button extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "runParentHandleClick",
    () => {
      this.props.handleClick(this.props.name);
    });}
  render() {
    return (
      React.createElement("button", { id: this.props.id, className: "button-wrapper", onClick: this.runParentHandleClick }, this.props.name));

  }}


// Render to DOM
ReactDOM.render(
React.createElement(App, null),
document.getElementById('root'));