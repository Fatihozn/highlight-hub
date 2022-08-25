import React from 'react'

export const HighLight = ({ cumle, text }) => {
  const light = (cumle, text) => {
    text = text.toLowerCase()
    const splitedCumle = cumle.split('')
    const lowerCaseSplitedCumle = cumle.toLowerCase().split('')
    let enter = true
    const indexArray = []
    let htmlText = ''

    for (let i = 0; i < lowerCaseSplitedCumle.length; i++) {
      enter = true
      for (let j = 0; j < text.length; j++) {
        if (lowerCaseSplitedCumle[i + j] !== text[j]) {
          enter = false
          break
        }
      }
      if (enter) {
        for (let j = 0; j < text.length; j++) {
          indexArray.push(i + j)
        }
      }
    }

    for (let i = 0; i < splitedCumle.length; i++) {
      if (indexArray.includes(i)) {
        htmlText += `<span style="background-color: yellow">${splitedCumle[i]}</span>`
      } else {
        htmlText += splitedCumle[i]
      }
    }
    return { __html: htmlText }
  }

  return <div dangerouslySetInnerHTML={light(cumle, text)} />
}
