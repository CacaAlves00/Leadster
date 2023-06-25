"use client"

import Image from 'next/image'
import React from 'react'
import { SectionStyled } from './styles'

function DemoPropaganda() {
  return (
    <SectionStyled>
      <Image
        src={'/imgs/comparativo_img_CTA.png'}
        alt={'Comparison'}
        width={400}
        height={400}
      />

      <div className='propaganda'>
        <div className='heading'>
          <h2>Pronto para triplicar sua <span>Geração de Leads ?</span></h2>
          <h3>Criação e ativação em <span>4 minutos</span></h3>
        </div>

        <div className='buttons'>
          <button className='button'>
            VER DEMONSTRAÇÃO
          </button>

          <Image
            src={'/imgs/selo_RD.png'}
            alt={'Comparison'}
            width={200}
            height={100}
          />
        </div>

        <div className='payment'>
          <div>

            <Image
              className='icon'
              src={'/imgs/no-card-dark.webp'}
              alt={'Comparison'}
              width={100}
              height={100}
            />
            <span>Não é necessário Cartão de Crédito</span>
          </div>
          <div>

            <Image
              className='icon rating'
              src={'/imgs/rating.webp'}
              alt={'Comparison'}
              width={100}
              height={100}
            />
            <span>4.9/5 média de satisfação</span>
          </div>
        </div>
      </div>
    </SectionStyled>
  )
}

export default DemoPropaganda