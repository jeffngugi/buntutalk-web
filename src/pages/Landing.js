import React from 'react'
import { Link } from 'react-router-dom'
import {StyledLink, Button, ContainerFluid, H1, H4, P1, H3,List, ListItem} from '../Styles';



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
                    <div className='container h-100' >
                    <div className='row h-100' >
                    <div className='col-sm-6 align-self-center '>
                            
                            <H1 color='#329200'>You deserve</H1>
                            <H4 color='white'>to be Happy</H4>
                            <P1 color='black'>More</P1>
                            
                            <StyledLink to='/start'>
                                Get Started
                            </StyledLink>
                            
                        </div>
                        <div className='col-sm-6 d-flex h-100 ustify-content-center align-items-center' >
                            
                            <img src={`/images/conversation2.png`} className='img-fluid '/>
                        </div>
                        </div>
                    </div>


                </div>
            </section>
        )
    }

    const renderIcons = ()=>{
        return(
            <section>
                <ContainerFluid bgcolor='white'>
                <div className='container'>
                
                    <Button>Jeff ngugi</Button>
                </div>
                </ContainerFluid>
            </section>
        )
    }


    const renderCallTA = ()=>{
        return(
            <section>
                <ContainerFluid bgcolor='rgba(0,255,0,0.2)'>
                <div className='container'>
                
                <div className='row'>
                        <List className="navbar-nav list-group-horizontal">
                            <ListItem className="nav-item">
                            <H3>Licensed</H3>
                            </ListItem>
                            <ListItem className="nav-item">
                            <H3>Experienced</H3>
                            </ListItem>
                            <ListItem className="nav-item">
                            <H3>Verified</H3>
                            </ListItem>
                         </List>       
                         <H1>Meet our professional counselors that you can trust</H1> 
                         <StyledLink to='/start'>
                                Get Started
                            </StyledLink>                 
                    </div>
                </div>
               
                </ContainerFluid>
                   
            </section>
        )
    }

    const renderFooter = ()=>{
        return(
            <ContainerFluid bgcolor='rgba(0,255,0,0.2)'>
                sdjhsjdshdhsjdh
            </ContainerFluid>
        )
    }
    return (
        <>
        {renderHero()}
        {renderIcons()}
        {renderCallTA()}
        {renderFooter()}
        </>
    )
}

export default Landing
