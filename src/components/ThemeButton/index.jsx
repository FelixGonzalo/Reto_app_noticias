import { useContext } from 'react';
import { themeContent } from '../../state/context/themeProvider';
import styles from './themeButton.module.css';

const ThemeButton = () => {

	const { theme, setTheme } = useContext(themeContent);

	const toggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	}

	return(
		<button className={styles.themeButton} onClick={toggleTheme}>
			{theme === 'light' ? '🌙' : '🌞'}
		</button>
	);
}

export default ThemeButton