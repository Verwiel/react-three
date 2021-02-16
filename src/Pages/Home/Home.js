import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <ul>
                <li><Link to='/cubes'>Cubes</Link></li>
                <li><Link to='/shoe'>Shoe</Link></li>
            </ul>
        </div>
    )
}

export default Home
