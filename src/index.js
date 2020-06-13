import React from 'react';
import ReactDom from 'react-dom';
import App from './App.js';
function Home(){
  return(
    <div>
      <App />
    </div>
  );
}
ReactDom.render(<Home />,document.getElementById('root'));
