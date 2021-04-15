import React from 'react'
import { Link } from 'react-router-dom'
import {StyledLink, Button, OverlayDiv} from '../Styles';



const Landing = () => {
    const renderHero = ()=>{
        return(
            <section className='hero'> 
                <div className='container-fluid' style={{

                    backgroundImage: "url(/images/hero.jpg)",
                    backgroundPosition:'center',
                    backgroundSize:'cover',
                    backgroundRepeat:'no-repeat',
                    height:'45vh',
                }}>
                    <div className='container'>
                    <div className='row'>
                    <div className='col-sm-6 slider-text align-self-center'>
                            
                            <p className='h2'>You deserve</p>
                            <p className=''>be Happy</p>
                            <p>More</p>
                            
                            <StyledLink to='/start'>
                                Get Started
                            </StyledLink>
                            
                        </div>
                        <div className='col-sm-6'>
                            <img src={`/images/conversation2.png`} className='img-fluid '/>
                        </div>
                        </div>
                    </div>
                    

                </div>
            </section>
        )
    }

    const renderCallTA = ()=>{
        return(
            <section>
                <div className='container'>
                    Jeff ngugi
                    <Button>Jeff ngugi</Button>
                </div>
            </section>
        )
    }
    return (
        <>
        {renderHero()}
        {renderCallTA()}
        </>
    )
}

export default Landing
