import React from 'react';
import CarouselObsah from './CarouselObsah';

const Carousel = () => {  
  return ( <div className="carousel">
				<div className="flicker">
					<ul>
						  <CarouselObsah />
						  <CarouselObsah />
						  <CarouselObsah />
					</ul>
			   </div>
			</div>
		 );
};

export default Carousel;