import React, { Component } from 'react';

export default class App extends Component {

  constructor() {
    super();
    this.state = {posts: []};
  }

  componentDidMount() {
    fetch("https://www.reddit.com/r/news/.json").then((res) => {
      res.json().then((feed) => this.setState({posts: feed.data.children}))
    })
  }

  render() {
    return (
      <Feed posts={this.state.posts} />
    );
  }

}

class Feed extends Component {
  render() {
    return (
      <div>
        {this.props.posts.map((post, key)=>{
          return <FeedItem key={key} {...post.data} />
        })}
      </div>
    );
  }
}

class FeedItem extends Component {
  render() {
    return (
      <div>
        <div>{this.props.title}</div>
        <div>{this.props.url}</div>
      </div>
    );
  }
}
