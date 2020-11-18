marked.setOptions({
  breaks: true });


const renderer = new marked.Renderer();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: placeholder };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      markdown: e.target.value });

  }
  render() {
    return (
      React.createElement("div", null,
      React.createElement("h1", { className: "title" }, "Simple React Markdown Previewer"),
      React.createElement("div", { className: "AppWrap" },
      React.createElement("div", { className: "EditorWrap" },
      React.createElement(Toolbar, { text: "Editor" }),
      React.createElement(Editor, { markdown: this.state.markdown, onChange: this.handleChange })),

      React.createElement("div", { className: "PreviewWrap" },
      React.createElement(Toolbar, { text: "Preview" }),
      React.createElement(Preview, { markdown: this.state.markdown })))));




  }}


const Toolbar = props => {
  return (
    React.createElement("div", { className: "toolbar" },
    props.text));


};

const Editor = props => {
  return (
    React.createElement("textarea", {
      id: "editor",
      value: props.markdown,
      onChange: props.onChange,
      type: "text" }));


};

const Preview = props => {
  return (
    React.createElement("div", {
      id: "preview",
      dangerouslySetInnerHTML: {
        __html: marked(
        props.markdown,
        { renderer: renderer }) } }));




};

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;

const rootElement = document.getElementById("root");
ReactDOM.render(React.createElement(App, null), rootElement);