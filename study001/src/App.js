import './App.css';
import './Custom.css';
import'./Custom';
import Custom from './Custom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
    <div>그러니까 여기에 뭘쓰면</div>
    <h1>이미 App-header에 적용되어있는 Default Style이</h1>
    <h2>적용되어 나온다는 것이다.</h2>
      </header>
      
    <Custom></Custom>
    
    </div>
  );
}

export default App;
