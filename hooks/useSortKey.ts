import React, { useState } from 'react'

export default function useSortKey() {
  const [sortKey, setsortKey] = useState('id')

  const changeSort = () => {
    setsortKey('name')
    console.log('sortType')
  }
  return [sortKey, changeSort]
}
