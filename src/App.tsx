import { useState } from 'react';
import './App.css'
import Tracks from './Tracks.tsx';
import List from './List.tsx';

function App() {
 const [circuit] = useState(Tracks);
  return <main>
    <section className="container">
      <div className="title">
        <h2>F1 Tracks</h2>
        <div className="title-underline"></div>
      </div>

      <div className="tours">
        <List circuit={circuit} />
      </div>
    </section>
  </main>;  
}

export default App
