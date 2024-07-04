import { CCarousel, CCarouselCaption, CCarouselItem, CImage } from '@coreui/react';
import React from 'react';
import '@coreui/coreui/dist/css/coreui.min.css'

const Header = () => {
    return (
        <div>
            <CCarousel controls indicators dark >
  <CCarouselItem>
    <CImage className="d-block" src="https://i.ibb.co/tC4GRRx/william-hook-9e9-PD9bl-Ato-unsplash.jpg" alt="slide 1" />
    <CCarouselCaption className="d-none d-md-block">
      <h5>First slide label</h5>
      <p>Some representative placeholder content for the first slide.</p>
    </CCarouselCaption>
  </CCarouselItem>
  <CCarouselItem>
    <CImage className='d-block' src="https://i.ibb.co/QQ56LZF/maxim-hopman-Hin-rzh-Od-Ws-unsplash.jpg" alt="slide 2" />
    <CCarouselCaption className="d-none d-md-block">
      <h5>Second slide label</h5>
      <p>Some representative placeholder content for the first slide.</p>
    </CCarouselCaption>
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block" src="https://i.ibb.co/pzvnHQw/przemyslaw-marczynski-q-JVG1f-YFib4-unsplash.jpg" alt="slide 3" />
    <CCarouselCaption className="d-none d-md-block">
      <h5>Third slide label</h5>
      <p>Some representative placeholder content for the first slide.</p>
    </CCarouselCaption>
  </CCarouselItem>
</CCarousel>
        </div>
    );
};

export default Header;