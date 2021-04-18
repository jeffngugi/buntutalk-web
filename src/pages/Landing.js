import React from 'react'
import { Link } from 'react-router-dom'
import Accordion from '../components/Accordion/Accordion'
import {StyledLink, Button, ContainerFluid, H1, H4, P1, H3,List, ListItem, NavLink, H2} from '../Styles';



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
                            <P1 color='black'>More</P1>
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
                         
                         
                        <Button>Get Matched to a therapist</Button>
                    </div>
                </div>
               
                </ContainerFluid>
                   
            </section>
        )
    }

   const renderSubscribe = ()=>{
       return(
           <div className='container'>
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
        {renderAsked()}
        {renderSubscribe()}
        </>
    )
}

export default Landing
