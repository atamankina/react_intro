import './App.css';

  const quote = "Der Winter naht.";
  const character = "Ned Stark";
  const isEpic = true;

  const quoteStyle = {
    fontStyle: 'italic',
    color: '#f89a03ff',
    fontSize: '1.5em',
    marginBottom: '10px',
    borderLeft: '4px solid #f89a03ff',
    paddingLeft: '15px'
  };

  const characterStyle = {
    fontSize: '0.8em',
    color: '#434343ff',
    marginTop: '5px',
    display: 'block'
  };

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Game of Thrones Zitat-Generator</h1>
        <p>Ein Ort für Weisheit (und Sarkasmus) aus Westeros.</p>
      </header>
      <main>
        <blockquote style={quoteStyle}>
          "{quote}"
        </blockquote>
      </main>
      <footer style={characterStyle}>
        - {character}
        {isEpic && <span style={{ marginLeft: '10px' }}>🌟</span>}
      </footer>
    </div>
  );
}

export default App;
