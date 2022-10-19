import {useState, useEffect} from "react";
import dataFile from "../data/housings.json";

function Gallery() {
  const [houses, setHouses] = useState ([]);

  useEffect(() => {
    const passData = async () => {
      setHouses(dataFile);
    }; passData();
  }, []);

  return (
    <div className="Gallery">
      <section>
        {houses.map (house => (
          <div key = {house.id} className='thumb'>
            {house.title} {house.cover}
          </div>
        ))}
      </section>
    </div>
  );
}

export default Gallery;