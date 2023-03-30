import React, { Component, ReactDOM } from 'react';
import logo1 from './slide1.png';
import logo2 from './slide2.png';
import logo3 from './slide3.png';
import logo4 from './slide4.png';
import logo5 from './slide5.png';
import 'react-slideshow-image/dist/styles.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Carousel from 'react-bootstrap/Carousel';
import './Banner.css';
import { Link } from "react-router-dom";

const fadeImages = [logo1, logo2, logo3, logo4, logo5];

export class Banner extends Component {
	render() {
		const Button = (props) => {
			return (
				<Button>
					<i class='fas fa-chevron-left'></i>
				</Button>
			);
		};

		return (
			<div className='slide-container'>
				<Carousel autoPlay infiniteLoop>
					<Carousel.Item>
						<div className='each-fade'>
                            <Link to="/Baby"> 
							<div className='image-container'>
								<img src={fadeImages[0]} />
							</div>
                            </Link>
						</div>
					</Carousel.Item>
					<Carousel.Item>
						<div className='each-fade'>
                            <Link to="/christmas">
							<div className='image-container'>
								<img src={fadeImages[1]} />
							</div>
                            </Link>
						</div>
					</Carousel.Item>
					<Carousel.Item>
						<div className='each-fade'>
                            <Link to="/wedding">
							<div className='image-container'>
								<img src={fadeImages[2]} />
							</div>
                            </Link>
						</div>
					</Carousel.Item>
                    <Carousel.Item>
						<div className='each-fade'>
                            <Link to="/forher">
							<div className='image-container'>
								<img src={fadeImages[3]} />
							</div>
                            </Link>
						</div>
					</Carousel.Item>
                    <Carousel.Item>
						<div className='each-fade'>
                            <Link to="/forhim">
							<div className='image-container'>
								<img src={fadeImages[4]} />
							</div>
                            </Link>
						</div>
					</Carousel.Item>
				</Carousel>
			</div>
		);
	}
}

export default Banner;