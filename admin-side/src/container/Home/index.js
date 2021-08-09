import React from 'react'
import Layout from '../../components/Layout'
import {Container, Jumbotron } from 'react-bootstrap';
import   './style.css'
/**
* @author
* @function Home
**/

const Home = (props) => {
  return(
    <Layout>
      
         <Container style={{marginTop:'5rem'}} className="text-center" text>
         <h1 className="heading-text">hello from admin dash</h1>
         </Container>
      
    </Layout>
   )

 }

export default Home