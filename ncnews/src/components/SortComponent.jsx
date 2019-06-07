import React, { Component } from 'react';



class SortComponent extends Component {
    state = {
        sort_by: ''
    }


    render() {
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


        this.props.SortedArticles(this.state.sort_by)


    }
}


export default SortComponent;