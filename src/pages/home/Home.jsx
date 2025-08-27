import React from 'react'
import Banner from '../../components/home/Banner'
import PopularProjects from '../../components/home/PopularProjects'
import PopularMachineries from '../../components/home/PopularMachineries'
import PopularMachineriesForStore from '../../components/home/PopularMachineriesForSale'
import PopularTreeForSale from '../../components/home/PopularTreeForSale'
import PopularAgro from '../../components/home/PopularAgro'


function Home() {
  return (
    <>
      <Banner />
      <PopularProjects />
      <PopularMachineries />
      <PopularMachineriesForStore />
      <PopularTreeForSale />
      <PopularAgro />
    </>
  )
}

export default Home