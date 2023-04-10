import React from 'react'
import Who from './Who/Who'
import Hero from './Hero/Hero'
import Works from './Works/Works'
import Contract from './Contract/Contract'
function Home() {
  return (
    <div className="container">
      <Hero></Hero>
      <Who></Who>
      <Works></Works>
      <Contract></Contract>
    </div>
  )
}

export default Home