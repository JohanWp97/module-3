import { useState, useEffect } from 'react'
import { getRandomFact } from '../services/facts'

export function useCatFact () {
  const [fact, setFact] = useState()

  const refreshFact = () => {
    getRandomFact().then(newFact => setFact(newFact))
  }

  // IMPORTANTE al escribir el useEffect, siempre escribir en la función, primero los [], ya que si se olvida, se tendrá un loop infinito.
  // entonces quedaría: useEffect(()=>{},[])
    
  // Lo ideal es que un useEffect tenga solamente una responsabilidad
  // Este useEffect es para recuperar la cita al cargar la página
  useEffect(refreshFact, [])

  return { fact, refreshFact }
}
