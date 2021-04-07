import { useState } from 'react';
import './App.css';
import { addPost } from './api/fire';

function App() {

  const [username, setUserName] = useState('');
  const [body, setBody] = useState('');
  const [title, setTitle] = useState('');
  const [userId, setUserId] = useState(2);

  const handleSubmit = () => {
    addPost(userId, username, title, body)
  }
  return (
    <div className="App">
      <label>Username</label>
      <input onChange={e => setUserName(e.target.value)}/>
      <label>Title</label>
      <input onChange={e => setTitle(e.target.value)}/>
      <label>Body</label>
      <input onChange={e => setBody(e.target.value)}/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
