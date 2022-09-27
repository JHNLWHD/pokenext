import Image from 'next/image'
import React from 'react'
import searchIcon from '../assets/magnifying-glass.svg'

export default function SearchBar() {
  return (
    <div className="container px-10">
      <div className="relative flex items-center">
        <div className="absolute my-auto h-6 w-6 pt-1 pl-2">
          <Image src={searchIcon} alt="search" layout="responsive" />
        </div>
        <input
          className="h-10 w-full rounded-lg pl-4 text-center"
          placeholder="Search"
        />
      </div>
    </div>
  )
}
