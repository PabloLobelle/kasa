import PropTypes from 'prop-types'
import React from 'react';

function Card ({ cover, title, description }) {
	return (
		<div className="houseCard">
			<img src={cover} alt={description} className='houseImage' />
			<h2 className="houseTitle">{title}</h2>
		</div>
	);
};

Card.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
}
 
export default Card