import React from 'react'
import { Link } from 'react-router-dom'
import Accordion from '../components/Accordion/Accordion'
import {MyDiv, Button, ContainerFluid, H1, H4, P1, H3,List, ListItem, NavLink, H2} from '../Styles';



const Landing = () => {
    const Faqs = [
        {
            title:"What is BuntuTalk",
            content:"Buntu talk is a platform to connect pychiatriest with persons who may need their help"
        },
        {
            title:"Jeff ngugi",
            content:"jeff ngugi mwathi"
        },
        {
            title:"Jeff ngugi",
            content:"jeff ngugi mwathi"
        },
        {
            title:"Jeff ngugi",
            content:"jeff ngugi mwathi"
        },
    ]
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
                            <NavLink bgcolor='#329200' color='white' bghover='transparent' >Get Started</NavLink>
                            
                        </div>
                        <div className='col-sm-6 d-flex h-100 justify-content-center align-items-center' >
                            
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
                
                    <H3>ICONS???</H3>
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
                            <H4>Licensed</H4>
                            </ListItem>
                            <ListItem className="nav-item">
                            <H4>Experienced</H4>
                            </ListItem>
                            <ListItem className="nav-item">
                            <H4>Verified</H4>
                            </ListItem>
                         </List>       
                         <H1>Meet our professional counselors that you can trust</H1> 
                         
                         
                        <Button>Get Matched to a therapist</Button>
                    </div>
                </div>
               
                </ContainerFluid>
                   
            </section>
        )
    }

    const renderTestimonials = ()=>{
        return(
            <div className='container' style={{paddingTop:"20px",paddingBottom:"20px",}}>
                
                <H2>Testimonials</H2>
                
            </div>
        )
    }

    const renderHowItWorks = ()=>{
        return(
            <ContainerFluid bgcolor='rgba(0,255,0,0.2)'>
                <div className='container'>
                    <H3>How Therapy Works on BuntuTalk</H3>
                    <div className='row py-3'>
                        <div className='col-sm-6'>
                            <H4>Getting Started</H4>
                        </div>
                        <div className='col-sm-6'><H4>During Therapy</H4></div>
                    </div>
                </div>
            </ContainerFluid>
        )
    }


    const renderBUntuVsT = ()=>{
        return(
            <div className='container d-flex justify-content-center' style={{paddingTop:"20px",paddingBottom:"20px",}}>
                <H4>BuntuTalk vs Traditional Counselling </H4>

            </div>
        )
    }

   const renderSubscribe = ()=>{
       return(
           <div className='container' style={{paddingTop:"25px",paddingBottom:"25px",}}>
               <div className='d-flex justify-content-around align-items-center '>
                    <img src={`/images/logo.png`}  />
                    <H1>Subscribe</H1>
               </div>
           </div>
       )
   }

   const renderAsked = ()=>{
       return(
           <section>
           <ContainerFluid bgcolor='rgba(0,255,0,0.2)'>
               <div className='container'>
                    <div className='row'>
                        <div className='col my-auto d-flex'>
                        <div>
                        <H3>Frequenty Asked Quenstions</H3>
                       {
                           Faqs.map((data, index)=>(
                            <Accordion
                            title={data.title}
                            content={data.content}  />
                           ))
                       }
                        </div>
                       
                        </div>
                    </div>
                    <div className='d-flex justify-content-center'>
                    <NavLink bgcolor='#329200' color='white' bghover='transparent' chover='#329200'>Get Started</NavLink>
                    </div>
               </div>

           </ContainerFluid>
           </section>
       )
   }
    return (
        <>
        {renderHero()}
        {renderIcons()}
        {renderCallTA()}
        {renderTestimonials()}
        {renderHowItWorks()}
        {renderBUntuVsT()   }
        {renderAsked()}
        {renderSubscribe()}
        </>
    )
}

export default Landing
