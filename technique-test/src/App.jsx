import './App.css'
import { useCatImage } from './hooks/useCatImage.js'
import { useCatFact } from './hooks/useCatFact.js'
import { Otro } from './Componente/Otro.jsx'

// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}$?fontSize=50&fontColor=red&json=true`

export function App () {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })
   
  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1>App de Gatos</h1>

      <button onClick={handleClick}> Get new fact </button> 

      {fact && <p>{fact}</p>} {/* esto es un renderizado condicional */}
      {imageUrl && <img src={imageUrl} alt={`Image extracted using first three words for ${fact}`} />}    

      <Otro />
      <Otro />
      <Otro />
      
    </main>
  )
}
