import React from 'react';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: props.userInput ? props.userInput : ''
    };
  }

  onInputChange = (e) => {
    const userInput = e.target.value;
    this.setState(() => ({ userInput }));
  };

  handleWordFormSubmit = (e) => {
    e.preventDefault();
    this.props.history.push(`/r/${this.state.userInput}`);
  };

  render() {
  return (
    <form style={{ display: "flex", justifyContent: "center", alignItems: "center" }} onSubmit={this.handleWordFormSubmit}>
      <div style={{ backgroundColor: "#DAE0E6", padding: ".3em", display: "flex", flex: 1, textAlign: "center", boxShadow: "0 8px 6px -8px #999" }}>
      <div style={{ height: 40, backgroundColor: "#DAE0E6", padding: "0 22%", display: "flex", flex: 1 }}>
        <input
          style={{ fontSize: "1em", borderRadius: 0, borderColor: "#e0e0e0", borderWidth: "1px 0 1px 1px", borderStyle: "solid", paddingLeft: 16, flex: 2 }}
          name="subreddit"
          value={this.state.userInput}
          onChange={this.onInputChange}
          placeholder="search subreddits"
        />
        <button
          style={{ fontWeight: 100, fontSize: ".9em", borderRadius: 0, color: "#fff", backgroundColor: "#444", paddingLeft: 20, paddingRight: 20  }}
          disabled={!this.state.userInput}
        >
          &#10233;
        </button>
      </div>
      </div>
    </form>
  )}
}