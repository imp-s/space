import React, {useEffect} from 'react';
import 'ol/ol.css';
import './style.scss';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import ImpsLogo from '../../assets/images/imps-logo.png';
import {fromLonLat} from 'ol/proj';
import coordinates from '../../utils/map/mapCoordinates';

export default function SpaceMap() {
  useEffect(() => {
    const animTime = 3000;
    const thisView = new View({
      center: [0, 0],
      zoom: 3,
    });

    new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new XYZ({
            url: 'https://assets.imps.com.br/space/celestial/xyz/{x}-{y}-{z}.jpg',
          }),
        }),
      ],
      view: thisView,
    });

    coordinates.map(async (obj, i) => {
      return setTimeout(() => {
        console.log(i);

        thisView.animate(
          {
            duration: animTime,
            zoom: 3,
          },
          {
            center: fromLonLat([obj['lat'], obj['lng']]),
            duration: animTime,
            zoom: obj['zoom'] - 5 || 4,
          }
        );
      }, i * (animTime * 3));
    });
  });

  return (
    <div id='map'>
      <img src={ImpsLogo} className='imps-logo' alt='IMPS' />
      <div className='nasa-copyright'>Image Credit: NASA's Scientific Visualization Studio</div>
    </div>
  );
}
