import React, { Component } from 'react';



class SortComponent extends Component {
    state = {
        sort_by: ''
    }


    render() { //{() => this.showTopicForm(this.state.button)}
        return (
            <div>
                <select onChange={this.updateSortState}>
                    <option value="created_at" >Created At</option>
                    <option value="votes" >Votes</option>
                    <option value="comment_count" >Comment Count</option>
                </select>
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