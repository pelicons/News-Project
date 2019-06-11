import React, { Component } from 'react';
import GoToPage from '../GoToPage';

class TopicsMenuCard extends Component {

    render() {
        return (
            <div>
                <form>
                    <label>Topics List</label>
                    <select onChange={GoToPage(event.target.value)}>
                        <option selected> Please select one</option>
                        {this.props.topics.map((topic) => {
                            console.log(topic.slug);
                            return <option value={`/topics/${topic.slug}`}>{topic.slug}</option>
                        })}
                    </select>

                </form>
            </div>
        );
    }
}

export default TopicsMenuCard;


