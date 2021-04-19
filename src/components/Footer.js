import React from 'react'
import {ContainerFluid, H3, StyledLink} from '../Styles'

const Footer = () => {
    return (
        <ContainerFluid bgcolor='rgba(0,255,0,0.2)'>
               <div className='container'>
                <div className='row'>
                    <div className='col-sm-3'>
                    <img src={`/images/logo.png`} className='img-fluid' style={{height:'2rem', marginBottom:'2px'}}/>
                        <H3>Social Links</H3>
                        <StyledLink>Unlimited Messaging Therapy</StyledLink><br />
                        <StyledLink>Buntutalk for Business</StyledLink><br />
                        <StyledLink to='/assessment'>Assessments</StyledLink><br />
                        <StyledLink>Depression Test</StyledLink><br />
                        <StyledLink>Anxiety Test</StyledLink><br />
                    </div>
                    <div className='col-sm-3'>
                        <H3>About</H3>
                        <StyledLink to='/careers'>Careers</StyledLink><br />
                        <StyledLink>Join our network</StyledLink><br />
                        <StyledLink to='/blogs'>Blog</StyledLink><br />
                        <StyledLink>Privacy policy</StyledLink><br />
                        <StyledLink to='/terms'>Terms of use</StyledLink><br />
                        <StyledLink to='/faqs'>FAQs</StyledLink><br />
                    </div>
                    <div className='col-sm-3'></div>
                    <div className='col-sm-3'>
                    <H3>Useful Links</H3>
                        <StyledLink to='/registration'>Join our network</StyledLink><br />
                        <StyledLink>What is online therapy</StyledLink><br />
                        <StyledLink>Anxiety therapy</StyledLink><br />
                        <StyledLink>Online counseling</StyledLink><br />
                        <StyledLink to='/reviews'>Reviews</StyledLink><br />
                    </div>
                </div>
               </div>
            </ContainerFluid>
    )
}

export default Footer
