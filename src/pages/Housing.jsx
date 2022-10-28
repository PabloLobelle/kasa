import React from 'react';
import { useParams } from 'react-router-dom';
import dataFile from '../data/housings.json';
import Header from '../components/Header';
import Dropdown from '../components/Dropdown';
import Slider from '../components/Slider';
import '../style/housing.css'

function Housing() {
  const { id } = useParams()
  const house = dataFile.find((item) => item.id === id);
  const { title, description, host: { name, picture} , rating, location, equipments, tags} = house;

  return (
    <div className='Housing'>
      <Header />
      <section className='sectionHousing'>
        <Slider />
        
        <div className='content'>
          <div className='ownerName'>{name}</div>
          <img src={picture} alt={name} className='ownerPicture'/>

          <div className='ratingContainer'>
            {rating === "1" && ( 
              <>
              <i class="fa-solid fa-star orange"></i>
              <i class="fa-solid fa-star grey"></i>
              <i class="fa-solid fa-star grey"></i>
              <i class="fa-solid fa-star grey"></i>
              <i class="fa-solid fa-star grey"></i>
              </>
            )}

            {rating === "2" && ( 
              <>
              <i class="fa-solid fa-star orange"></i>
              <i class="fa-solid fa-star orange"></i>
              <i class="fa-solid fa-star grey"></i>
              <i class="fa-solid fa-star grey"></i>
              <i class="fa-solid fa-star grey"></i>
              </>
            )}

            {rating === "3" && (
              <>
              <i class="fa-solid fa-star orange"></i>
              <i class="fa-solid fa-star orange"></i>
              <i class="fa-solid fa-star orange"></i>
              <i class="fa-solid fa-star grey"></i>
              <i class="fa-solid fa-star grey"></i>
              </>
            )}
          
            {rating === "4" && (
              <>
              <i class="fa-solid fa-star orange"></i>
              <i class="fa-solid fa-star orange"></i>
              <i class="fa-solid fa-star orange"></i>
              <i class="fa-solid fa-star orange"></i>
              <i class="fa-solid fa-star grey"></i>
              </>
            )}

            {rating === "5" && (
              <>
              <i class="fa-solid fa-star orange"></i>
              <i class="fa-solid fa-star orange"></i>
              <i class="fa-solid fa-star orange"></i>
              <i class="fa-solid fa-star orange"></i>
              <i class="fa-solid fa-star orange"></i>
              </>
            )}
            
          </div>

          <div className='titleContainer'>
            <h1>{title}</h1>
            <div>{location}</div>
          </div>

          <div className='descriptionContainer'>
            <Dropdown title='description'
            content={description}
            />
          </div>
          <div className='equipementContainer'>
            <Dropdown title='equipments'
              content={
                <ul>
                  {equipments.map((equipment) => {
                  return <li key={`${equipment}`}>{equipment}</li>;
                  })}
                </ul>
              }
            />
          </div>

          <div className='tagPosition'>
            {tags.map((tag) => {
						return <div key={`${tag}`} className='tagContainer'><span className='tagText'>{tag}</span></div>;
            })}
          </div>
        </div>
      </section>
      
    </div>
  );
}

export default Housing;