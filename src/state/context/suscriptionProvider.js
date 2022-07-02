import { createContext, useState } from 'react'

export const SuscriptionContext = createContext()

const standardPlan = {
  name: 'Plan Estándar',
  price: 29,
  description: 'Un plan con todo lo necesario para mantenerte informado',
  details: [
    'Navegación sin límite',
    'Noticias exclusivas cada semana.',
    'Guarda tus noticias favoritas',
  ],
  otherPlanName: 'Plan Premium',
}

const premiumPlan = {
  name: 'Plan Premium',
  price: 59,
  description: 'Un plan para amantes de la noticias en caliente y exclusivas.',
  details: [
    'Navegación sin límite',
    'Noticias exclusivas en caliente.',
    'Guarda tus noticias favoritas',
    'Sin publicidad',
  ],
  otherPlanName: 'Plan Estandar',
}

export const SuscriptionProvider = (props) => {
  const [currentUserPlan, setCurrentUserPlan] = useState(
    JSON.parse(localStorage.getItem('currentUserPlan')) || null
  )
  const [suscription, setSuscription] = useState(
    JSON.parse(localStorage.getItem('suscription')) || standardPlan
  )

  const changePlan = () => {
    if (suscription?.name === 'Plan Estándar') {
      setSuscription(premiumPlan)
      localStorage.setItem('suscription', JSON.stringify(premiumPlan))
    } else if (suscription?.name === 'Plan Premium') {
      setSuscription(standardPlan)
      localStorage.setItem('suscription', JSON.stringify(standardPlan))
    }
  }

  const updateCurrentUserPlan = () => {
    setCurrentUserPlan(suscription)
    localStorage.setItem('currentUserPlan', JSON.stringify(suscription))
  }

  return (
    <SuscriptionContext.Provider
      value={{
        changePlan,
        suscription,
        currentUserPlan,
        updateCurrentUserPlan,
      }}
    >
      {props.children}
    </SuscriptionContext.Provider>
  )
}
