import { useEffect, useState } from 'react'
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}$?fontSize=50&fontColor=red&json=true`

export function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  // IMPORTANTE al escribir el useEffect, siempre escribir en la función, primero los [], ya que si se olvida, se tendrá un loop infinito.
  // entonces quedaría: useEffect(()=>{},[])
  
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      // el data devuelve todo el objeto (todo el texto que se muestra al acceder al link de la API) y en data accedemos al "fact"
      .then(data => {
        const { fact } = data
        setFact(fact)

        // el split permite dividir una cadena de texto a partir del token separador que se le proporcione. Para encontrar el sprint, poner en google "mdn separate string by token"
        const threeFirstWords = fact.split(' ', 3).join(' ') // el slice es para llamar las tres primera palabras de la frase aleatoria. Y el join las junta en una cadena de texto
        // alternatica para hacer lo de la línea anterior: fact.split(' ', 3).join(' ')

        fetch(`https://cataas.com/cat/says/${threeFirstWords}$?fontSize=50&fontColor=red&json=true`)
          .then(res => res.json())
          .then(response => {
            const { url } = response
            setImageUrl(url)
            console.log(response)
          })
      })
  }, [])

  return (
    <main>
      <h1>App de Gatos</h1>
      <section>
        {fact && <p>{fact}</p>} {/* esto es un renderizado condicional */}
      </section>
      
      {imageUrl && <img src={imageUrl} alt={`Image extracted using the first three words for ${fact}`} />}    
      
    </main>
  )
}
