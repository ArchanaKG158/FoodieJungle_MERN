import React from 'react'
import Layout from '../components/Layout/Layout'
import { Link } from 'react-router-dom'
import Restaurant from '../Images/banner.jpeg'
import "../styles/HomeStyle.css"

const Home = () => {
    return (
        <Layout>
           <div className='home'  style={{backgroundImage: `url(${Restaurant})`}}> 
           <div className='headContainer'>
                   <h1>Foddie Jungle</h1>
                   <p>Best Food in India</p>
                   {/* <Link  to="/menu">

                   </Link> */}
                   <button>
                   <Link to='/Signin'> Order Now</Link>
                   
                   </button>
           </div>
           </div>
        </Layout>

    )
}

export default Home