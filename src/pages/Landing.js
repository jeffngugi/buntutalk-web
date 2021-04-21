import React from 'react'
import { Link } from 'react-router-dom'
import Accordion from '../components/Accordion/Accordion'
import {UL, Button, ContainerFluid, H1,H2, H4, LI, H3,List, ListItem, NavLink, P3, StyledLink} from '../Styles';
import { Faqs,BuntuvsOther  } from '../utils/datas';



const Landing = () => {
   
    const renderHero = ()=>{
        return(
            <section className='hero'> 
                <div className='container-fluid' style={{

                    backgroundImage: "url(/images/hero.jpg)",
                    backgroundPosition:'center',
                    backgroundSize:'cover',
                    backgroundRepeat:'no-repeat',
                    height:'48vh',
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
                
                    <H3 className='text-center'>ICONS???</H3>
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
                    <div className='col-sm-12'>
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
                         <H1 color='#329200'>Meet our professional counselors that you can trust</H1> 
                         
                         
                        <Button>Get Matched to a therapist</Button>
                        </div>
                    </div>
                </div>
               
                </ContainerFluid>
                   
            </section>
        )
    }

    const renderTestimonials = ()=>{
        return(
            <div className='container' style={{paddingTop:"20px",paddingBottom:"20px",}}>
                
                <H3 color='#329200' className='text-center mb-4'>Testimonials</H3>
                <div className='row '>
                <div className='col-sm-4 text-center'>
                <img src={`/images/user1.jpeg`}  width='80' height='80'/>
                    <P3>
                                    "The biggest achievement I've made is, truly, fighting for myself. Through working with Aiko and taking the time to discuss various issues with her, I've become a bigger advocate for myself, and I'm so proud of that."
                                    </P3>
                    </div><div className='col-sm-4 text-center'>
                    <img src={`/images/user1.jpeg`}  width='80' height='80'/>
                    <P3>
                                    "The biggest achievement I've made is, truly, fighting for myself. Through working with Aiko and taking the time to discuss various issues with her, I've become a bigger advocate for myself, and I'm so proud of that."
                                    </P3>
                    </div><div className='col-sm-4 text-center'>
                    <img src={`/images/user1.jpeg`}  width='80' height='80'/>
                    <P3>
                                    "The biggest achievement I've made is, truly, fighting for myself. Through working with Aiko and taking the time to discuss various issues with her, I've become a bigger advocate for myself, and I'm so proud of that."
                                    </P3>
                    </div>
                    
                    
                </div>
                <P3 className='text-center'>Jeer</P3>
            </div>
        )
    }

    const renderHowItWorks = ()=>{
        return(
            <ContainerFluid bgcolor='rgba(0,255,0,0.2)'>
                <div className='container text-center'>
                    <div className='my-1' >
                    <H3 className='' color='#329200'>How Therapy Works on BuntuTalk</H3>
                    </div>
                    
                    <div className='row'>
                        <div className='col-sm-6 d-flex justify-content-center '>
                            <div>
                            <H4 >Getting Started</H4>
                          <div className='row'>
                            <div className='col-6'>1</div>
                            <div className='col-6'>2</div>
                            <div className='col-6'>3</div>
                            <div className='col-6'>4</div>
                          </div>
                            </div>
                            
                        </div>
                        <div className='col-sm-6 d-flex justify-content-center '>
                            <div>
                            <H4 >During Therapy</H4>
                            <div className='row'>
                            <div className='col-6'>1</div>
                            <div className='col-6'>2</div>
                            <div className='col-6'>3</div>
                            <div className='col-6'>4</div>
                          </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </ContainerFluid>
        )
    }


    const renderBUntuVsT = ()=>{
        return(
            <div className='container text-center' style={{paddingTop:"20px",paddingBottom:"20px",}}>
                
                <H3 color='#329200'>BuntuTalk vs Traditional Counselling </H3>
                <div className='table-responsive-sm'>
                    <table className='table table-bordered'>
                    <thead>
                    <tr>
                        <th scope="col">BuntuTalk</th>
                        <th scope="col">Traditional</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            BuntuvsOther.map((data, index)=>(
                                <tr>
                                <td>{data.buntu}</td>
                                <td>{data.traditional}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                    </table>
                </div>
               
                
                
            </div>
        )
    }

   const renderSubscribe = ()=>{
       return(
           <div className='container' style={{paddingTop:"25px",paddingBottom:"25px",}}>
               <div className='row'>
               <div className='col-sm-12 d-flex justify-content-around align-items-center '>
                    <img src={`/icons/mail.png`} height='80' />
                    <H2>Subscribe</H2>
               </div>
               </div>
               
           </div>
       )
   }

   const renderAsked = ()=>{
       return(
           <section>
           <ContainerFluid bgcolor='rgba(0,255,0,0.2)'>
               <div className='container text-center'>
                    <div className='row'>
                        <div className='col my-auto d-flex'>
                        <div>
                        <H3 color='#329200'>Frequenty Asked Quenstions</H3>
                       {
                           Faqs.map((data, index)=>(
                            <Accordion
                            title={data.question}
                            content={data.answer}  />
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
