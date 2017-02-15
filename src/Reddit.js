import React from 'react';

class Reddit extends React.Component {
    constructor() {
        super();
        this.state = {
            data: null
        };
    }

    componentDidMount() {

        var sub = this.props.params.subreddit;

        fetch(`https://www.reddit.com/r/${sub}.json`)
        .then(r => r.json())
        .then(
            data => {
                this.setState({data: data})
            }
        )
    }
    render() {
        return (
            <div>
                {JSON.stringify(this.state.data, null, 4)}
            </div>
        )
    }
}

export default Reddit;
