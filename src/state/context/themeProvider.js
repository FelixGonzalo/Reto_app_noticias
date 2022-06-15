import { createContext, useEffect, useState } from "react";
export const themeContent = createContext();

export const ThemeProvider = (props) => {

	const [theme, setTheme] = useState();

	const toggleTheme = (mode) => {
		if (mode === "dark") {
			document.documentElement.classList.remove("light");
			document.documentElement.classList.add("dark");
			localStorage.setItem("theme", "dark");
			setTheme("dark");
		} else {
			document.documentElement.classList.remove("dark");
			document.documentElement.classList.add("light");
			localStorage.setItem("theme", "light");
			setTheme("light");
		}
	}

	// FIRST RENDER
	useEffect(() => {
		const theme = localStorage.getItem("theme");
		//LOCAL STORAGE
		if (theme === "dark") {
			toggleTheme("dark");
		}else if (theme === "light") {
			toggleTheme("light");
		} 
		// DEFAULT USER PREFERENCE
		else if (window.matchMedia(("(prefers-color-scheme: dark)").toString()).matches) {
			toggleTheme("dark");
		} else {
			toggleTheme("light");
		}
	}, []);

	// CHANGE THEME MODE USER PREFERENCE
	useEffect(() => {
		window.matchMedia
		(("(prefers-color-scheme: dark)").toString()).addEventListener('change',(e) => {
			if (e.matches) {
				toggleTheme("dark");
			} else {
				toggleTheme("light");
			}
		});
		// CLEAN UP
		return () => {
			window.matchMedia
			(("(prefers-color-scheme: dark)").toString()).removeEventListener('change',(e) => {
				if (e.matches) {
					toggleTheme("dark");
				} else {
					toggleTheme("light");
				}
			});
		}

	}, []);


	return (
		<themeContent.Provider 
			value={{
				toggleTheme,
				theme,
			}}
		>
			{props.children}
		</themeContent.Provider>
	)
}