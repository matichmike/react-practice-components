import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className='ui container comments'>
      <CommentDetail />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));

//semantic-ui.com cdn (.min)
// faker js