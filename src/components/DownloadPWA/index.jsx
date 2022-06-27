import { useEffect, useState } from 'react'

const DownloadPWA = () => {
	const [isReadyForInstall, setIsReadyForInstall] = useState(false);

	useEffect(() => {
		window.addEventListener("beforeinstallprompt", (event) => {
			console.log("👍", "beforeinstallprompt", event);
			window.deferredPrompt = event;
			setIsReadyForInstall(true);
		});
	}, []);

	async function download() {
		const promptEvent = window.deferredPrompt;
		if (!promptEvent) {
			console.log("oops, no prompt event guardado en window");
			return;
		}
		promptEvent.prompt();
		const result = await promptEvent.userChoice;
		console.log("👍", "userChoice", result);
		// Reset the deferred prompt variable, since
		// prompt() can only be called once.
		window.deferredPrompt = null;
		// Hide the install button.
		setIsReadyForInstall(false);
	}

	return (
		<div>
			<p>PWA</p>
			{isReadyForInstall && (
				<button onClick={download}>
					Descargar App
				</button>
			)}
		</div>
	)
}

export default DownloadPWA