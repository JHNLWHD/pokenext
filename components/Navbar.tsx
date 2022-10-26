import Image from 'next/image'
import React, { useContext } from 'react'
import logo from '../assets/logo.svg'
import alphaSort from '../assets/alpha-sort.svg'
import numSort from '../assets/num-sort.svg'
import { AppContext } from '../context/AppContext'

export default function Navbar() {
  const { nameSort, setNameSort } = useContext(AppContext)

  const imgSrc =
    nameSort !== true ? (
      <Image src={alphaSort} alt="sort icon" layout="responsive" />
    ) : (
      <Image src={numSort} alt="sort icon" layout="responsive" />
    )

  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="flex pl-4">
          <div className="h-10 w-10">
            <Image src={logo} alt="logo" layout="responsive" />
          </div>
          <div className="pl-4 text-4xl font-extrabold">Pokédex</div>
        </div>
        <div
          onClick={() => setNameSort(!nameSort)}
          className="mr-6 h-10 w-10 hover:cursor-pointer"
        >
          {imgSrc}
        </div>
      </div>
    </div>
  )
}
