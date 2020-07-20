import React from 'react';
import {render} from 'react-dom';
import Map from "./components/map";

const App : React.FC = () => {

  return <Map />;
}

render(<App />, document.getElementById('root'));
