import React, { Component } from 'react';



class SortComponent extends Component {
    state = {
        sort_by: ''
    }


    render() { //{() => this.showTopicForm(this.state.button)}
        return (
            <div>
                <button value="created_at" onClick={this.updateSortState}>Created At</button>
                <button value="votes" onClick={ this.updateSortState }>Votes</button>
                <button value="comment_count" onClick={this.updateSortState}>Comment Count</button>
            </div>


        )
    }

    updateSortState = (event) => {
        this.setState({ sort_by: event.target.value })
    }


    componentDidUpdate(prevProps, prevState) {
        if (this.state.sort_by !== prevState.sort_by) {
                    
        this.props.SortedArticles(this.state.sort_by)
                }
    }
    


    
}


export default SortComponent;