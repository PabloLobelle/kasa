import React from 'react';
import { useParams } from 'react-router-dom';
import dataFile from '../data/housings.json';
import Header from '../components/Header';
import Dropdown from '../components/Dropdown';
import Slider from '../components/Slider';
import Error from '../pages/Error'
import '../style/housing.css'

function Housing() {
  const { id } = useParams();
  const house = dataFile.find((item) => item.id === id);
  if (house === undefined){
    return (<Error />)
  }
  const { title, description, host: { name, picture} , rating, location, equipments, tags} = house;
  
  return (
    <div className='Housing'>
      <Header />
      <main className='sectionHousing'>
        <Slider />
        <div className='content'>
          <div className='titleTagContainer'>
            <div className='titleContainer'>
            <h1>{title}</h1>
              <div>{location}</div>
            </div>

            <div className='tagPosition'>
              {tags.map((tag) => {
						  return <div key={`${tag}`} className='tagContainer'><span className='tagText'>{tag}</span></div>;
              })}
            </div>
          </div>

          <div className='ownerRatingContainer'>
            <div className='ownerContainer'>
              <div className='ownerName'>{name}</div>
              <img src={picture} alt={name} className='ownerPicture'/>
            </div> 

            <div className='ratingContainer'>
              {rating === "1" && ( 
                <>
                <i className="fa-solid fa-star orange"></i>
                <i className="fa-solid fa-star grey"></i>
                <i className="fa-solid fa-star grey"></i>
                <i className="fa-solid fa-star grey"></i>
                <i className="fa-solid fa-star grey"></i>
                </>
              )}

              {rating === "2" && ( 
                <>
                <i className="fa-solid fa-star orange"></i>
                <i className="fa-solid fa-star orange"></i>
                <i className="fa-solid fa-star grey"></i>
                <i className="fa-solid fa-star grey"></i>
                <i className="fa-solid fa-star grey"></i>
                </>
              )}

              {rating === "3" && (
                <>
                <i className="fa-solid fa-star orange"></i>
                <i className="fa-solid fa-star orange"></i>
                <i className="fa-solid fa-star orange"></i>
                <i className="fa-solid fa-star grey"></i>
                <i className="fa-solid fa-star grey"></i>
                </>
              )}
          
              {rating === "4" && (
                <>
                <i className="fa-solid fa-star orange"></i>
                <i className="fa-solid fa-star orange"></i>
                <i className="fa-solid fa-star orange"></i>
                <i className="fa-solid fa-star orange"></i>
                <i className="fa-solid fa-star grey"></i>
                </>
              )}

              {rating === "5" && (
                <>
                <i className="fa-solid fa-star orange"></i>
                <i className="fa-solid fa-star orange"></i>
                <i className="fa-solid fa-star orange"></i>
                <i className="fa-solid fa-star orange"></i>
                <i className="fa-solid fa-star orange"></i>
                </>
              )}
            </div>
          </div>
        </div>

        <div className='dropContainer'>
          <div className='descriptionContainer'>
            <Dropdown title='description'
            content={description}
            />
          </div>
          <div className='equipementContainer'>
            <Dropdown title='equipements'
              content={
                <ul>
                  {equipments.map((equipment) => {
                  return <li key={`${equipment}`}>{equipment}</li>;
                  })}
                </ul>
              }
            />
          </div>
        </div>
      </main>
      
    </div>
  );
}

export default Housing;