import Image from 'next/image'
import React from 'react'
import searchIcon from '../assets/magnifying-glass.svg'

type SearchBarProps = {
  setSearchKey: (value: string) => void
}

export default function SearchBar({ setSearchKey }: SearchBarProps) {
  return (
    <div className="mb-5">
      <div className="relative flex items-center">
        <div className="absolute my-auto h-6 w-6 pt-1 pl-2">
          <Image src={searchIcon} alt="search" layout="responsive" />
        </div>
        <input
          onChange={(e) => setSearchKey(e.target.value)}
          className="h-10 w-full rounded-lg pl-4 text-center"
          placeholder="Search"
        />
      </div>
    </div>
  )
}
