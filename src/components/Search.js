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
    <form style={{display: "flex", justifyContent: "center", alignItems: "center"}} onSubmit={this.handleWordFormSubmit}>
      <div style={{ height: 40}}>
        <input
          style={{ height: "40px", fontSize: "16px"}}
          name="subreddit"
          value={this.state.userInput}
          onChange={this.onInputChange}
          placeholder="movies"
        />
        <button
          style={{ height: "40px"}}
          disabled={!this.state.userInput}
        >
        Find Subreddits
      </button>
    </div>
    </form>
  )}
}