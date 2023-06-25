"use client"

import React from 'react'
import styled from 'styled-components'
import { AsideStyled } from './styles'
import Image from 'next/image'

function HomeHeaderAside() {
    return (
        <AsideStyled>
            <button className='button'>WEBINAR EXCLUSIVOS</button>
            <h2>
                Menos Conversinha,
                <span>
                    Mais Conversão
                    <Image
                        src='/imgs/asset-header.png'
                        width={100}
                        height={100}
                        alt='Logo'
                    />
                    <span>
                        {'#2c82fb-> #1f76f0 (-45%)'}
                    </span>
                </span>
            </h2>

            <span>
                Conheça estratégias que <span>mudaram o jogo</span> e como
                aplicá-las no seu negócio
            </span>
        </AsideStyled>
    )
}

export default HomeHeaderAside