import React from 'react';

export default class Search extends React.Component {
  constructor(props) {
    console.log('props', props);
    super(props);
    this.state = {
      userInput: props.userInput ? props.userInput : ''
    };
  }

  onInputChange = (e) => {
    const userInput = e.target.value;
    this.setState(()=> ({ userInput }))
  };

  handleWordFormSubmit = (e) => {
    e.preventDefault();
    this.props.history.push(`/r/${this.state.userInput}`);
  };

  render() {
  return (
    <form onSubmit={this.handleWordFormSubmit}>
      <div>
        <input
          name="subreddit"
          value={this.state.userInput}
          onChange={this.onInputChange}
          placeholder="movies"
        />
      </div>
      <div>
      <button
        disabled={!this.state.userInput}
      >
        Find Subreddits
      </button>
    </div>
    </form>
  )}
}