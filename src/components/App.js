import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    const imagesWithoutAlt = Array.from(document.querySelectorAll('.App img')).filter(img => !img.hasAttribute('alt'));
    
    return (
      <div className="App">
        {/* Your code here */}
        {imagesWithoutAlt.map((img, index) => (
          <img key={index} src={img.src} />
        ))}
        <img src="https://via.placeholder.com/150" alt="Placeholder" />
        <img src="https://via.placeholder.com/150" alt="Placeholder 1" />
        <img src="https://via.placeholder.com/150" />
      </div>
    );
  }
}

export default App;