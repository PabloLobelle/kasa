import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import dataFile from '../data/housings.json';
import Card from './Card';
import '../style/gallery.css'

function Gallery() {
  const [houses, setHouses] = useState ([]);

  useEffect(() => {
    const passData = async () => {
      setHouses(dataFile);
    }; passData();
  }, []);

  return (
    <div className='Gallery'>
      <div className='galleryContainer'>
        {houses.map (house => (
          <Link key = {house.id} to={`/Housing/${house.id}`} className='thumb'>
            <Card
						  key={house.id}  
						  title={house.title}
						  cover={house.cover}
              description={house.description}
					/>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Gallery;