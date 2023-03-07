import React from 'react'




export const getNews = async (url: string) => {
    const response = await fetch(url)
    const json = await response.json()
    return json
}
