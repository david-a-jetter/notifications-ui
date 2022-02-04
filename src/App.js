import logo from './logo.svg';
import './App.css';
import NotificationService from './notifications/service'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        Your funding opportunity notifications
      </header>
      <div className="App-body">
        <NotificationService/>
      </div>
    </div>
  );
}

export default App;
