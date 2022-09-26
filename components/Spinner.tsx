import React from 'react'

export default function Spinner() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="relative">
        <div className="absolute h-12 w-12 rounded-full border-8 border-solid border-gray-200"></div>
        <div className="absolute h-12 w-12 animate-spin rounded-full border-8 border-solid border-purple-500 border-t-transparent"></div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  )
}
