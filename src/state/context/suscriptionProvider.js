import { createContext, useState } from "react";

export const SuscriptionContext = createContext();

const standardPlan = {
	name: "Plan Estándar",
	price: 29,
	description: "Estandar descripcion",
	details : ["Estandar detalle 1", "Estandar detalle 2"],
	otherPlanName: "Plan Premium"
}

const premiumPlan  = {
	name: "Plan Premium",
	price: 59,
	description: "Premium descripcion",
	details : ["Premium detalle 1", "Premium detalle 2", "Premium detalle 3", "Premium detalle 4"],
	otherPlanName: "Plan Estandar"
}
export const SuscriptionProvider = (props) => {

	// const [isSuscription, setIsSuscription] = useState(false);
	const [suscription, setSuscription] = useState(JSON.parse(localStorage.getItem("suscription")) ||
	standardPlan);

	const changePlan = () => {
		if (suscription?.name === 'Plan Estándar') {
			setSuscription(premiumPlan);
			localStorage.setItem('suscription', JSON.stringify(premiumPlan));

		}else if (suscription?.name === 'Plan Premium'){
			setSuscription(standardPlan);
			localStorage.setItem('suscription', JSON.stringify(standardPlan));
    }
  }

	return (
		<SuscriptionContext.Provider 
			value={{
				changePlan,
				suscription
			}}
		>
			{props.children}
		</SuscriptionContext.Provider>
	)
}