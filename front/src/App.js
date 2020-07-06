import React, { Component } from "react";

class App extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    fetch("http://192.168.64.28/api")
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          posts: data,
        })
      )
      .catch((error) => console.log("Error: ", error));
  }
  render() {
    const { posts } = this.state;
    console.log(posts);
    return (
      <div className="main-content">
        <h1 className="masthead">Express React</h1>

        <div className="posts">
          {posts.map((post) => (<h2 key={post.id}>{post.title}</h2>))}
        </div>
      </div>
    );
  }
}

export default App;
