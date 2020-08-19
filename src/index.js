import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';

const App = () => {
  return (
    <div className='ui container comments'>
      <CommentDetail 
      author="Sam" 
      timeAgo="Today at 4:45PM" 
      content="What a post" 
      avatar={faker.image.avatar()}
      />
      <CommentDetail 
      author="Alex" 
      timeAgo="Today at 2:45AM" 
      content="Wow" 
      avatar={faker.image.avatar()}
      />
      <CommentDetail 
      author="Jane" 
      timeAgo="Today at 3:50PM" 
      content="Noooice" 
      avatar={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));

//semantic-ui.com cdn (.min)
// faker js