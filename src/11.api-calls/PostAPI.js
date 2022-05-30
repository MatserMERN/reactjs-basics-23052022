import React, { Component } from 'react'
import axios from 'axios'

export class PostAPI extends Component {
    constructor(){
        super()

        this.state = {
            posts: []
        }
    }

    componentDidMount(){
        // fetch("https://jsonplaceholder.typicode.com/posts")
        // .then(response => response.json())
        // .then(data => this.setState({posts: data}))

        axios("https://jsonplaceholder.typicode.com/posts")
        .then(response => this.setState({posts: response.data}))
    }
  render() {
    return (
      <React.Fragment>
          <h1>Post Data</h1>
              {
                  this.state.posts.map(post => (
                      <ul key={post.id}>
                          <li><strong>Id</strong>: {post.id}</li>
                          <li><strong>Title</strong>: {post.title}</li>
                          <li><strong>Body</strong>: {post.body}</li>
                      </ul>
                  ))
              }
      </React.Fragment>
    )
  }
}

export default PostAPI