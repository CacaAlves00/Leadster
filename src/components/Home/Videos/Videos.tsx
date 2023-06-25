"use client"

import React, { useEffect, useState } from 'react'
import VideosFilters, { Category, OrderBy } from '../VideosFilters/VideosFilters'
import { SectionStyled } from './styles'
import VideosPagination from '../VideosPagination/VideosPagination'
import { Video } from '@prisma/client'
import VideoComp from '../Video/Video'

type VideosProps = {
  videos: Video[]
}

function Videos({ videos }: VideosProps) {

  const [pageSelected, setPageSelected] = useState<number>(1)
  const [categorySelected, setCategorySelected] = useState<Category>('Agências')
  const [orderBy, setOrderBy] = useState<OrderBy>('Data de publicação')

  return (
    <SectionStyled>

      <VideosFilters
        selectedCategory={categorySelected}
        setSelectCategory={setCategorySelected}
        setOrderBy={setOrderBy}
        orderBy={orderBy}
      />

      <div className='videos-container'>

        {
          videos
            .filter(video => video.categoryName === categorySelected)
            .slice(5 * pageSelected, 5 * pageSelected + 5)
            .sort((v1, v2) => {
              if (orderBy === 'Data de publicação') {
                const date1 = v1.publicationDate ? new Date(v1.publicationDate).getTime() : Number.MIN_VALUE;
                const date2 = v2.publicationDate ? new Date(v2.publicationDate).getTime() : Number.MIN_VALUE;

                if (orderBy === 'Data de publicação')
                  return date1 - date2;
                else
                  return v1.title < v2.title ? -1 : 1;

              }
              else
                return v1.title < v2.title ? -1 : 1
            })
            .map(video => (
              <VideoComp video={video} key={video.id} />
            ))
        }
      </div>

      <VideosPagination
        setSelectedPage={setPageSelected}
        selectedPage={pageSelected}
      />

    </SectionStyled>
  )
}

export default Videos