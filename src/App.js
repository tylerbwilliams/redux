
import './App.css';

import CounterView from './components/CounterView';
import CounterUpdate from './components/CounterUpdate';
import CounterControl from './components/CounterControl';
import ThemeControl from './components/ThemeControl';

function App() {
  return (
    <div className="App">
      <h1>My Counter Application</h1>
      <CounterView />
      <CounterUpdate />
      <CounterControl />
      <ThemeControl />
    </div>
  );
}

export default App;
