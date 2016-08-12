import React from 'react';
import ReactDOM from 'react-dom';

const Home = React.createClass({
    render: () => {
        return <div>Home</div>;
    }
});

ReactDOM.render(<Home />, document.getElementById('content'));
