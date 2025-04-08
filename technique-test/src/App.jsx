import { useEffect, useState } from 'react'
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}$?fontSize=50&fontColor=red&json=true`

export function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  const getRandomFact = () => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      // el data devuelve todo el objeto (todo el texto que se muestra al acceder al link de la API) y en data accedemos al "fact"
      .then(data => {
        const { fact } = data
        setFact(fact)
      })
  }

  // IMPORTANTE al escribir el useEffect, siempre escribir en la función, primero los [], ya que si se olvida, se tendrá un loop infinito.
  // entonces quedaría: useEffect(()=>{},[])
  
  // Lo ideal es que un useEffect tenga solamente una responsabilidad
  // Este useEffect es para recuperar la cita al cargar la página
  useEffect(getRandomFact, [])

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
        console.log(response)
      })
  }, [fact])

  const handleClick = () => {
    getRandomFact()
  }

  return (
    <main>
      <h1>App de Gatos</h1>
      <section>
        {fact && <p>{fact}</p>} {/* esto es un renderizado condicional */}
      </section>
      <button onClick={handleClick}> Get new fact </button>      
      {imageUrl && <img src={imageUrl} alt={`Image extracted using the first three words for ${fact}`} />}    
      
    </main>
  )
}
