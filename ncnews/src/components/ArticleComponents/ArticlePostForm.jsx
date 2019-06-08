import React, { Component } from 'react';

export default class ArticlePostForm extends Component {
  state = {
    titleInput: null,
    bodyInput: null,
    topicInput: null,
    err: null
  };
  render() {
    console.log(this.props.topicsArray);
    return (
      <div >
        <form
          onSubmit={event => {
            event.preventDefault();
            this.props.handleSubmit(this.state);
          }}
         
        >
          <label>
            <div >
              <input
                required={true}
                onChange={this.updateTitleInput}
                type="text"
                placeholder="title"
              />
            </div>
          </label>
          <br />
          <label>
            <div>
              <textarea
                required={true}
                onChange={this.updateBodyInput}
                type="text"
                placeholder="body"
              />
            </div>
          </label>
          <br />
          <label>
            <select
              required={true}
              onChange={this.updateTopicInput}>

              {this.props.topicsArray.data.topics.map((topic, i) => {
                  console.log(topic);
                    return <option>{topic.slug}</option>
                })}
              
                                    
            </select>
          </label>
          <br />
          <button>Post Article</button>
        </form>
      </div>
    );
  }
  updateTitleInput = event => {
    this.setState({ titleInput: event.target.value });
  };

  updateBodyInput = event => {
    this.setState({ bodyInput: event.target.value });
  };

  updateTopicInput = event => {
    this.setState({ topicInput: event.target.value });
  };
}