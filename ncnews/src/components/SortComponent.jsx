import React, { Component } from 'react';



class SortComponent extends Component {
    state = {
        sort_by: ''
    }
    // showMenu(event) {
    //     event.preventDefault();
    //     this.setState({
    //         sort_by: 'created_at'
    //     })
    // }

    render() {
        return (
            <div>
                <button value="created_at" onClick={this.updateSortState}>Created At</button>
                <button value="author" onClick={this.updateSortState}>Author</button>
                <button value="comment_count" onClick={this.updateSortState}>Comment Count</button>
            </div>


        )
    }
    
    updateSortState = (event) => {

        this.setState({ sort_by: event.target.value })

        console.log(this.state.sort_by, 'HHHHHHHHHHHHHHHHHH');
        this.props.SortedArticles(this.state.sort_by)
        

    }
}


export default SortComponent;