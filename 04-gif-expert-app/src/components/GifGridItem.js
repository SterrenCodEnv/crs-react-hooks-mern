import React from 'react';
import PropTypes from 'prop-types';
const heroImages = require.context('../../assets/images', true);

export const GifGridItem = ({ title, url }) => {
  return (
    <div className='card animate__animated animate__fadeIn'>
      <img src={heroImages(`./${url}.jpg`)} alt={title}></img>
      <p>{title}</p>
    </div>
  );
};

GifGridItem.propTypes = {
  title: PropTypes.string.isRequired,
};
