import React from 'react';

function HeroBanner({ data }) {
    console.log("data.heroBannerData: ", data.heroBannerData);  // Logging data to see its structure

    if (!data.heroBannerData) return null;

    // Extract the metafield value using the namespace and key
    const heroBanner = data.heroBannerData['imageUrl'];
    
    // Log extracted value for debugging
    console.log('Extracted Hero Banner Value:', heroBanner);

    if (!heroBanner) {
        console.error('Hero banner data not found.');
        return null;
    }

    // Example static title and subtitle
    const title = 'Default Title';
    const subtitle = 'Default Subtitle';

    return (
        <section className="hero-banner">
            {heroBanner && (
                <img src={heroBanner} alt={title} className="hero-banner-image" />
            )}
            <div className="hero-banner-content">
                <h1>{title}</h1>
                <p>{subtitle}</p>
            </div>
        </section>
    );
}

export default HeroBanner;