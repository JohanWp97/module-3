import { useEffect, useState } from 'react'

// const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

// Esto es una Custom Hook. 
// No puede estar dentro de un if, o un while y siempre debe estar llamado dentro del cuerpo del componente.
export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()

  // useEffect para recuperar la imagen cada vez que tenemos una vita nueva
  useEffect(() => {
    if (!fact) return
    
    // el split permite dividir una cadena de texto a partir del token separador que se le proporcione. Para encontrar el sprint, poner en google "mdn separate string by token"
    const threeFirstWords = fact.split(' ', 3).join(' ') // el slice es para llamar las tres primera palabras de la frase aleatoria. Y el join las junta en una cadena de texto
    // alternatica para hacer lo de la línea anterior: fact.split(' ', 3).join(' ')

    fetch(`https://cataas.com/cat/says/${threeFirstWords}$?fontSize=50&fontColor=red&json=true`)
      .then(res => res.json())
      .then(response => {
        const { url } = response
        setImageUrl(url)
      })
  }, [fact])

  return { imageUrl }
}
