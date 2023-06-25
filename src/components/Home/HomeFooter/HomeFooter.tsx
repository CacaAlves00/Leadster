"use client"

import React from 'react'
import { Column, FooterList, FooterStyled, List, ListItem } from './styles'
import Image from 'next/image'

function HomeFooter() {
  return (
    <FooterStyled>
      <div>
        <Image
          src='/imgs/logo.png'
          width={100}
          height={100}
          alt='Logo'
        />
        <span>Transformando visitantes em clientes.</span>
      </div>

      <FooterList>
        <Column>
          <List>
            <ListItem>Links Principais</ListItem>
            <ListItem>Home</ListItem>
            <ListItem>Ferramenta</ListItem>
            <ListItem>Preços</ListItem>
            <ListItem>Contato</ListItem>
          </List>
        </Column>
        <Column>
          <List>
            <ListItem>Cases</ListItem>
            <ListItem>Geração de Leads B2B</ListItem>
            <ListItem>Geração de Leads em Software</ListItem>
            <ListItem>Geração de Leads em Imobiliária</ListItem>
            <ListItem>Cases de sucesso</ListItem>
          </List>
        </Column>
        <Column>
          <List>
            <ListItem>Materiais</ListItem>
            <ListItem>Blog</ListItem>
            <ListItem>Parceria com Agências</ListItem>
            <ListItem>Guia definitivo do marketing</ListItem>
            <ListItem>Materiais gratuitos</ListItem>
          </List>
        </Column>
        <Column>
          <List>
            <ListItem>Siga a Leadster</ListItem>
            <ListItem>
              <Image
                src={'/imgs/logo-linkedin.svg'}
                alt={'Comparison'}
                width={50}
                height={50}
              />
              <Image
                src={'/imgs/logo-facebook.svg'}
                alt={'Comparison'}
                width={50}
                height={50}
              />
              <Image
                src={'/imgs/logo-instagram.svg'}
                alt={'Comparison'}
                width={50}
                height={50}
              />
            </ListItem>
            <ListItem>E-mail: contato@leadster.com.br</ListItem>
            <ListItem>Telefone: (42) 98828-9851</ListItem>
          </List>
        </Column>
      </FooterList>

      <div className='footer-bottom'>
        <div>
          <span>Copyright © 2015 - 2022 Todos os direitos reservados</span>
          <span>Leadster</span>
        </div>

        <div>
          <span>Rua José Loureiro, 464, Centro - Curitiba PR - CEP: 80010-000</span>
          <span>Termos de uso</span>
        </div>
      </div>

    </FooterStyled>
  )
}

export default HomeFooter