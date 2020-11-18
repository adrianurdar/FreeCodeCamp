function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const data = [
{ id: 'HEATER 1', letter: 'Q', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' },
{ id: 'HEATER 2', letter: 'W', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' },
{ id: 'HEATER 3', letter: 'E', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' },
{ id: 'HEATER 4', letter: 'A', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' },
{ id: 'HEATER 6', letter: 'S', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' },
{ id: 'DSC OH', letter: 'D', src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' },
{ id: 'KICK N HAT', letter: 'Z', src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' },
{ id: 'RP4 KICK', letter: 'X', src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' },
{ id: 'CEV HH', letter: 'C', src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' }];


class DrumPad extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "handleKeyDown",










    e => {
      if (e.keyCode === this.props.letter.charCodeAt()) {
        this.audio.play();
        this.audio.currentTime = 0;
        this.props.handleDisplay(this.props.id);
      }
    });_defineProperty(this, "handleClick",

    () => {
      this.audio.play();
      this.audio.currentTime = 0;
      this.props.handleDisplay(this.props.id);
    });}componentDidMount() {document.addEventListener('keydown', this.handleKeyDown);window.focus();}componentWillUnmount() {document.removeEventListener('keydown', this.handleKeyDown);}

  render() {
    return (
      React.createElement("div", {
        className: "drum-pad",
        id: this.props.id,
        onClick: this.handleClick },

      React.createElement("h1", null, this.props.letter),
      React.createElement("audio", {
        ref: ref => this.audio = ref,
        className: "clip",
        src: this.props.src,
        id: this.props.letter })));



  }}


class App extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "handleDisplay",





    display => this.setState({ display }));this.state = { display: 'Click or press a key' };}

  render() {
    return (
      React.createElement("div", { id: "drum-machine" },
      React.createElement("div", { id: "display" }, this.state.display),
      React.createElement("div", { id: "drum-pads" },
      data.map((d) =>
      React.createElement(DrumPad, {
        id: d.id,
        letter: d.letter,
        src: d.src,
        handleDisplay: this.handleDisplay })))));





  }}


ReactDOM.render(
React.createElement(App, null),
document.getElementById('root'));