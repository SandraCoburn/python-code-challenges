import React, { Component } from 'react';

class Button extends Component {
  constructor() {
    this.state = {
      likes: 100,
      isLiked: true,
    };
  }
  handleLikes() {
    let toggleLikes = !this.state.isLiked;
    if (this.state.isLiked) {
      this.setState((prev) => {
        return { likes: prev.likes + 1, isLiked: toggleLikes };
      });
    } else {
      this.setState((prev) => prev.likes - 1);
    }
  }
  render() {
    return (
      <div>
        <button onClick={this.handleLikes}>Likes | {this.state.likes}</button>
      </div>
    );
  }
}
export default Button;
