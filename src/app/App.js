import logo from './logo.svg';
import './App.css';
import { PostForm, Posts } from '../components/components';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <PostForm />
      <hr />
      <Posts />
    </div>
  );
}

export default App;