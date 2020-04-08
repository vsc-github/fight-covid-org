import React from 'react';
import Carousel from 'nuka-carousel';

import './news-carousel-styles.css';

export default class extends React.Component {
    render() {
        return (<div className="news-carousel">
            <Carousel
                autoplay={true}
                wrapAround={true}
                renderBottomCenterControls={({ currentSlide }) => null}
                renderCenterLeftControls={({ previousSlide }) => (
                    <button onClick={previousSlide} className="lefter">
                        <img src="https://res.cloudinary.com/diknntl0x/image/upload/v1586361513/left_d0mywy.svg" ></img>
                    </button>
                )}
                renderCenterRightControls={({ nextSlide }) => (
                    <button onClick={nextSlide} className="righter">
                        <img src="https://res.cloudinary.com/diknntl0x/image/upload/v1586361506/right_xyopyq.svg" ></img>
                    </button>
                )}

            >

                <a href="https://www.cnbc.com/2020/03/30/coronavirus-job-losses-could-total-47-million-unemployment-rate-of-32percent-fed-says.html" target="_blank" className="slide">
                    <img src="https://res.cloudinary.com/diknntl0x/image/upload/v1586361387/articles/article1_aa4hhy.jpg" />
                    <div className="content">
                        <div className="headline">1 Million Bangladeshi Garment Workers Lose Jobs Amid COVID-19 Economic Fallout</div>
                        <div className="cta">Read full article</div>
                    </div>

                </a>
                <a href="http://www.rfi.fr/en/international/20200404-modi-morale-boost-for-indians-in-lockdown-government-seeks-exit-strategy-post-covid-19" className="slide">
                    <img src="http://s.rfi.fr/media/display/e2b926a6-759e-11ea-8483-005056bf87d6/w:980/p:16x9/c400eee7-73ea-4d14-8f21-0cd8e61b6170.webp" />
                    <div className="content">
                        <div className="headline">India's government discusses end of lockdown as millions struggle to find food</div>
                        <div className="cta">Read full article</div>
                    </div>

                </a>
                <a href="https://www.vox.com/policy-and-politics/2020/3/24/21191075/coronavirus-recession-worker-layoffs-unemployment-economy-restaurants-stimulus-bill" target="_blank" className="slide">
                    <img src="https://res.cloudinary.com/diknntl0x/image/upload/v1586366002/articles/article2_b73cy2.jpg" />
                    <div className="content">
                        <div className="headline">How the coronavirus crisis will hit American workers</div>
                        <div className="cta">Read full article</div>
                    </div>

                </a>
                <a href="https://www.cnbc.com/2020/03/30/coronavirus-job-losses-could-total-47-million-unemployment-rate-of-32percent-fed-says.html" className="slide">
                    <img src="https://image.cnbcfm.com/api/v1/image/106463599-1585313141720gettyimages-1208303635.jpeg?v=1585313207&w=740&h=416" />
                    <div className="content">
                        <div className="headline">Coronavirus job losses could total 47 million, unemployment rate may hit 32%, Fed estimates</div>
                        <div className="cta">Read full article</div>
                    </div>

                </a>
                {/* <div className="slide">
                    <img src="https://res.cloudinary.com/diknntl0x/image/upload/v1586361387/articles/article1_aa4hhy.jpg" />
                    <div className="content">
                        <div className="headline">1 Million Bangladeshi Garment Workers Lose Jobs Amid COVID-19 Economic Fallout</div>
                        <div className="cta">Read full article</div>
                    </div>

                </div> */}


            </Carousel>
        </div>
        );
    }
}