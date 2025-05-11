import MyView from './view';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome to my first react App</p>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact me</li>
          </ul>
        </nav>
        
      </header>
      <MyView />
    </div>
  );
}

export default App;
