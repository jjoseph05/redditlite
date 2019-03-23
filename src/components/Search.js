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
      <div style={{ height: 40,  height: "5em", backgroundColor: "lavender", padding: "2.4em", borderRadius: 5}}>
        <input
          style={{ height: "100%", fontSize: "16px", borderBottomLeftRadius: "1em", borderBottomLeftRadius: "1em", paddingLeft: 16}}
          name="subreddit"
          value={this.state.userInput}
          onChange={this.onInputChange}
          placeholder="movies"
        />
        <button
          style={{ height: "100%", paddingBottom: 1, paddingTop: 4, border: "1px solid lavendar", borderBottomRightRadius: "1em", borderTopRightRadius: "1em", paddingRight: 1}}
          disabled={!this.state.userInput}
        >
          Find Subreddits
        </button>
      </div>
    </form>
  )}
}