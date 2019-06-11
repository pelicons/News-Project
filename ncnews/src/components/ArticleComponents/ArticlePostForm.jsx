import React, { Component } from 'react';
import './ArticlesList.css'

export default class ArticlePostForm extends Component {
  state = {
    titleInput: null,
    bodyInput: null,
    topicInput: null,
    err: null
  };
  render() {

    return (
      <div >
        <form id="write-title"
          onSubmit={event => {
            event.preventDefault();
            this.props.handleSubmit(this.state);
          }}

        >
          <label>
            <div >
              <input

                required={true}
                name="titleInput"
                onChange={this.updateInputs}
                type="text"
                placeholder="title"
              />
            </div>
          </label>
          <br />
          <label>
            <div id="write-body">
              <textarea

                required={true}
                name="bodyInput"
                onChange={this.updateInputs}
                type="text"
                placeholder="body"
              />
            </div>
          </label>
          <br />
          <label>
            <select
              required={true}
              name="topicInput"
              onChange={this.updateInputs}>

              {this.props.topicsArray.data.topics.map((topic, i) => {
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
  updateInputs = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

}