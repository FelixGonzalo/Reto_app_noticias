import { createContext, useEffect, useState } from "react";

export const themeContent = createContext();

export const ThemeProvider = (props) => {

	const [theme, setTheme] = useState(null);
	
	useEffect(() => {
		if (theme === "dark") {
			document.documentElement.classList.remove("light");
			document.documentElement.classList.add("dark");
			localStorage.setItem("theme", "dark");
			setTheme("dark");
		} else if (theme === "light") {
			document.documentElement.classList.remove("dark");
			document.documentElement.classList.add("light");
			localStorage.setItem("theme", "light");
			setTheme("light");
		}
	}, [theme]);
		

	useEffect(() => {
		const themeLocal = localStorage.getItem("theme");
		//LOCAL STORAGE VERIFICATION THEME
		if (themeLocal === "dark") {
			setTheme("dark");
		}else if (themeLocal === "light") {
			setTheme("light");
		} 
		// DEFAULT THEME USER PREFERENCE SYSTEM
		else if (window.matchMedia(("(prefers-color-scheme: dark)").toString()).matches) {
			setTheme("dark");
		} else {
			setTheme("light");
		}
	}, []);


	// CHANGE THEME MODE USER PREFERENCE
	useEffect(() => {
		window.matchMedia
		(("(prefers-color-scheme: dark)").toString()).addEventListener('change',(e) => {
			if (e.matches) {
				setTheme("dark");
			} else {
				setTheme("light");
			}
		});
	//	CLEAN UP
		return () => {
			window.matchMedia
			(("(prefers-color-scheme: dark)").toString()).removeEventListener('change',(e) => {
				if (e.matches) {
					setTheme("dark");
				} else {
					setTheme("light");
				}
			});
		}
	}, []);


	return (
		<themeContent.Provider 
			value={{
				setTheme,
				theme,
			}}
		>
			{props.children}
		</themeContent.Provider>
	)
}