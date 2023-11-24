import './ProjectCarousel.css';
import ArticleCardOne from '../ArticleCards/ArticleCardOne/ArticleCardOne';
import { articleInfo } from './ArticleData';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReactComponent as LeftArrowSVG } from "../ArrowJsx/SVGs/leftArrow.svg";
import { ReactComponent as RightArrowSVG } from "../ArrowJsx/SVGs/rightArrow.svg";



function ProjectCarousel() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: <LeftArrowSVG className="leftContainer"/>,
      nextArrow: <RightArrowSVG className="leftContainer"/>,
    };
  
    return (
      <div className="project-parent">
        <div className='project-card'>
          <Slider {...settings}>
            {articleInfo.map((article, index) => (
              <ArticleCardOne key={index} {...article}></ArticleCardOne>
            ))}
          </Slider>
        </div>
      </div>
    );
  }

export default ProjectCarousel;
