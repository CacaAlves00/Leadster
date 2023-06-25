"use client"

import React, { useEffect } from 'react'
import { SectionStyled } from './styles'


const categories = [
    'Agências', 'Chatbot', 'Marketing digital',
    'Geração de leads', 'Mídia paga'
] as const

export type Category = typeof categories[number]

const orderByValues = ['Data de publicação', 'Ordem alfabética'] as const

export type OrderBy = typeof orderByValues[number]

type VideosFiltersProps = {
    selectedCategory: Category
    setSelectCategory: React.Dispatch<React.SetStateAction<Category>>
    orderBy: OrderBy
    setOrderBy: React.Dispatch<React.SetStateAction<OrderBy>>
}

function VideosFilters({
    setSelectCategory, selectedCategory, orderBy, setOrderBy }
    : VideosFiltersProps) {

    return (
        <SectionStyled>
            {
                categories.map(category => (
                    <button
                        key={category}
                        className={`button ${selectedCategory === category && 'selected'}`}
                        onClick={() => setSelectCategory(category)}
                    >
                        {category}
                    </button>
                ))
            }

            <div>
                <label htmlFor='order-by'>Ordenar por</label>
                <select
                    id='order-by'
                    value={orderBy}
                    onChange={e => setOrderBy(e.target.value as OrderBy)}
                >
                    {
                        orderByValues.map(item => (
                            <option
                                key={item}
                                value={item}>
                                {item}
                            </option>
                        ))
                    }
                </select>
            </div>
        </SectionStyled>
    )
}

export default VideosFilters