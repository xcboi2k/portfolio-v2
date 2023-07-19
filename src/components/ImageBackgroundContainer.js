import React from 'react'

const ImageBackgroundContainer = ({ children, imageUrl }) => {
    const containerStyle = {
        backgroundImage: `url(${imageUrl})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return <div className="flex flex-col items-center justify-center h-screen bg-cover bg-center" style={containerStyle}>{children}</div>;
}

export default ImageBackgroundContainer