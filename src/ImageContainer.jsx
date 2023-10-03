import React from 'react';

const ImageContainer = ({ image }) => {
    const noImage = <img src="https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg?w=740" alt="" />
    return (
        <div className='shadow-2xl p-2 rounded-2xl'>
            {
                image.image ? <img src={image.image} alt="" /> : noImage
            }
            <p className='mt-10 text-center'>{image.description}</p>
        </div>
    );
};

export default ImageContainer;