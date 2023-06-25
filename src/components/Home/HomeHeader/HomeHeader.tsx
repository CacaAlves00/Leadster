"use client"

import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import HomeHeaderAside from '../HomeHeaderAside/HomeHeaderAside'
import { HeaderStyled } from './styles'

function HomeHeader() {
  return (
    <HeaderStyled>
      <Image
        src='/imgs/logo.png'
        width={100}
        height={100}
        alt='Logo'
      />

      <HomeHeaderAside />
    </HeaderStyled>
  )
}

export default HomeHeader