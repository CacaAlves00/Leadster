"use client"

import Image, { ImageLoaderProps } from 'next/image'
import React, { useEffect, useState } from 'react'
import { DivStyled } from './styles'
import { Video } from '@prisma/client'

type VideoProps = {
    video: Video
}

const imageLoader = ({ src, width, quality }: ImageLoaderProps) => {
    return `/api/images/${src}`
}

function Video({ video }: VideoProps) {

    return (
        <DivStyled>
            <Image
                src={'/' + video.imagePath}
                alt={video.title}
                width={100}
                height={100}
            />
            <span>{video.title}</span>
        </DivStyled>
    )
}

export default Video