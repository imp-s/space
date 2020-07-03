import React, {useState} from 'react';
import Map from './components/map';

export default function App() {
  const [coordinates] = useState([{id: 1, name: 'Jupiter', x: 0, y: 0, z: 0}]);

  return <Map coordinates={coordinates} />;
}
