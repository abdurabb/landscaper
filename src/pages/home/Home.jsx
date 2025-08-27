import React from 'react'
import Banner from '../../components/home/Banner'
import PopularProjects from '../../components/home/PopularProjects'
import PopularMachineries from '../../components/home/PopularMachineries'
import PopularMachineriesForStore from '../../components/home/PopularMachineriesForSale'
import PopularTreeForSale from '../../components/home/PopularTreeForSale'
import PopularAgro from '../../components/home/PopularAgro'
import ShowPostCard from '../../components/home/ShowPostCard'


function Home() {
  return (
    <>
      <Banner />
      <PopularProjects />
      <PopularMachineries />
      <PopularMachineriesForStore />
      <PopularTreeForSale />
      <PopularAgro />
      <ShowPostCard />
    </>
  )
}

export default Home