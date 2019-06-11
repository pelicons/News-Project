import React, { Component } from 'react';
import GoToPage from '../GoToPage';

class TopicsMenuCard extends Component {
    state = {
        topics: this.props.topics
    }

    render() {
        return (
            <div>
                <form>
                    <label>Topics List</label>
                    <select onChange={(event) => { GoToPage(event.target.value) }}>
                        <option selected> Please select one</option>
                        {this.props.topics.map((topic) => {
                            return <option value={`/topics/${topic.slug}`}>{topic.slug}</option>
                        })}
                    </select>

                </form>
            </div>
        );
    }
}

export default TopicsMenuCard;


