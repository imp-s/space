import React, {useEffect} from 'react';
import 'ol/ol.css';
import './style.scss';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';

export default function SpaceMap() {
  useEffect(() => {
    new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new XYZ({
            url: 'https://assets.imps.com.br/space/celestial/xyz/{x}-{y}-{z}.jpg',
          }),
        }),
      ],
      view: new View({
        center: [0, 0],
        zoom: 3,
      }),
    });
  });

  return (
    <div id='map'>
      <img src='' alt='IMPS' />
      <div class='nasa-copyright'>Image Credit: NASA's Scientific Visualization Studio</div>
    </div>
  );
}
