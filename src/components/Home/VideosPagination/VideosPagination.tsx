"use client"

import React from 'react'
import { StyledSection } from './styles'

type VideosPaginationProps = {
  setSelectedPage: React.Dispatch<React.SetStateAction<number>>
  selectedPage: number
}

function VideosPagination({ setSelectedPage, selectedPage }: VideosPaginationProps) {

  const pagesNumber = [1, 2, 3, 4]

  return (
    <StyledSection>
      <span>
        Página
      </span>
      {

        pagesNumber.map(number => (
          <span key={number}
          className={`pag-number ${selectedPage === number && 'selected'}`} 
          onClick={() => setSelectedPage(number)}>
            {number}
          </span>
      ))
      }
    </StyledSection>
  )
}

export default VideosPagination