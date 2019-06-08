import React, { Component } from 'react';
import { postNewTopic, getTopics } from '../../api';
import Error from '../Error'





class PostTopicsComponent extends Component {

    state = {
        topics: [],
        button: false,
        slug: "hello",
        description: "mate",
        button: false,
        err: null
      };

      componentDidMount() {
            this.setState({ topics: this.props.importedTopics }).catch(({ response }) => {
            const errorstatus = response.status;
            const errormessage = response.data.msg;
            const err = { errorstatus, errormessage };
            this.setState({ err });
          });
        }

      componentDidUpdate(prevProps, prevState) {
        if (prevState.topics.length !== this.state.topics.length) {
          getTopics().then((topics) => {
              console.log(topics);
            this.setState({ topics  });
          });
        }
      }

    render() {
      const { err } = this.state;
        if (err) {
            return <Error err={err} />;
          }
      
        return (
            <div>
                  {this.props.currentUserLogin !== null && (
          <button onClick={() => this.showTopicForm(this.state.button)}>
            Add Topic
          </button>
        )}
        </div>
           
    
        )}

        
    
    showTopicForm(bool) {
        let newBool = bool;
        if (bool === true) newBool = false;
        if (bool === false) newBool = true; 
        this.setState({ button: newBool });
      }


      handleSubmit = (event) => {
        event.preventDefault();
        const { slug, description } = this.state;
        const newTopic = { slug, description };
        postNewTopic(newTopic)
          .then(newTopic => {
            console.log(newTopic);
            this.setState({
                topics: [...this.state.topics, newTopic]
              })
          
          })
          .catch(({ response }) => {
            const errorstatus = response.status;
            const errormessage = response.data.msg;
            const err = { errorstatus, errormessage };
            this.setState({ err });
          });
      };
}

export default PostTopicsComponent;