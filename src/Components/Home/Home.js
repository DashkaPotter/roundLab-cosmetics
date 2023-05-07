import { dataHome } from './dataHome';
import { useState } from 'react';
import circle from './Group.svg';
import bannerGirl from './girls.svg'
import buble from'./buble-girl.svg'
import {BsChevronCompactLeft,BsChevronCompactRight,BsSuitHeart} from 'react-icons/bs';
import {BiLeaf} from 'react-icons/bi';
import {GiSpotedFlower} from 'react-icons/gi'
import { useNavigate } from 'react-router';
// import figma from './blob.svg';

const Home =() => {
    const [bestProducts , setProducts] = useState(0);
    const {review,img} = dataHome[bestProducts];

    const nextSlide = () => {
        setProducts((bestProducts =>{
            bestProducts++;
            if(bestProducts >dataHome.length -1){
                bestProducts=0;
            }
            return bestProducts;
        }))
    }
    const prevSlide = () => {
        setProducts((bestProducts =>{
            bestProducts--;
            if(bestProducts < 0){
                return dataHome.length -1
            }
            return bestProducts;
        }))
    }
    const navigateShop = useNavigate()

    return(
        <div>
            <div className='banner'>
                

            <div className='round-title'>
            <h2 className='better'>Better Skin</h2>
            <h2 className='better'>Better Round </h2>
            <div className='home-par'>
            <p >Everyday strength that changes</p>
            <p >
                the skin and the world
            </p>
            <div className='shop'>
                <button className='shopNow' onClick={() => navigateShop('/products')}> Shop Now</button>
            </div>
            </div>
            </div>

            <div className='girls-div'>
                <img src={bannerGirl} className="girls" alt="models" width="700px" />
                </div>

            </div>

            <div className='about'>
            <div className='circles'>
                <img className='circle-girl' src={buble} alt="circles" width="550px"/>
            </div>
            
            <div className='div-about-par'>
            
            <p className='about-par' >
                <div className='span-est'>
                    <span className='about-mini-par'>
                    ROUND LAB is a Korean beauty brand that focuses on helping consumers 
                alleviate daily fatigue and stress-worn skin through high-quality skin care products.
                
                    </span>
                </div>
                
                ROUND LAB is on a constant search for fresh, raw materials to formulate
                the best Korean skincare products that will improve your skin conditions, 
                regardless of skin type and age.
                Catering to different skincare needs, ROUND LAB launches different ROUND projects to spread
                and convey stories that go beyond skin-deep beauty through their unique skincare line. 
                Each skincare project represents sentiments that are felt and shared among many people.
                </p>
                </div>
                
                
            </div>
            
            <div className='why'>
                <p className='why-text'>Why Round Lab?</p>
            </div>

            <div className='ipad-wrapper'>
            <div className='div-wrapper-tabs'>
            <div className='wrapper'>
                    <div className='wrapper-card' >
                    <div className='icon-leaf'><BiLeaf/></div>
                        <h2 className='wrapper-title'>
                        Round lab,selects raw materials.
                        </h2>
                        
                        <p className='wrapper-text'>
                        Deep sea ocean water of Ulleung-island untouched by people.Birch tree sap grown from cool and refreshing Inje.
                        Mugwort grew up in Geomun-island where the clean sea breeze blows.
                        Soybean grown in Jeongseon,where the dawn is cold and clear
                        </p>
                    </div>
                    <div className='wrapper-card' >
                        <div className='icon-leaf'><GiSpotedFlower/></div>
                        <h2 className='wrapper-title skin'>
                        Round Lab,stressing over your skin.
                        </h2>
                        <p className='wrapper-text'>
                        {/* Is not there a special cosmetic product that your skin wants? */}
                        Round Lab wants healthy ingredients to come into full contact with the skin and puts down complex  ingredients
                        and considers formulations and ingredients that can contain the effect.
                        </p>
                    </div>
                    <div className='wrapper-card' >
                    <div className='icon-leaf'><BsSuitHeart/></div>
                        <h2 className='wrapper-title'>
                        Round Lab,aim for better value.
                        </h2>
                        <p className='wrapper-text'>
                        Use of recyclable paper packaging materials. 
                        Printed using eco-friendly soy ink.
                        {/* Providing activities and donations within the community. */}
                        Round Lab is not just making cosmetics ,but is taking important steps to make our world more beautiful.
                        </p>
                    </div>
                    </div>
            </div>
            
                    <div className='slider-wrap'>
                    <div className='girl-slider'>
                    
                    <div className="slider ">
                <img className='beauty-product' src={img} alt="beauty-product" width="500px" height="500px"/>
                <div className='prev'>
                <BsChevronCompactLeft  onClick={prevSlide} size={34}/>
            </div>
            <div className='next'>
                <BsChevronCompactRight  onClick={nextSlide} size={34}/>
            </div>
            <div className='review'>
                <p className='review-par'>{review}</p>
            </div>
            
                </div>
                <div className='circle-girl'>
                        <img className='girl-buble' src={circle} alt="firstgirl" width='550px'/>
                    </div>
                        
                    </div>
                    </div>
            </div>
            
                    
                    
            
                    

        </div>
    )
}
export default Home;