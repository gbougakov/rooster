const webpage = `<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Rooster</title>
		<style>
			html {
				font-family: sans-serif;
				font-size: 16px;
			}

			body {
				padding: 20px;
				font-size: 18px;
			}

			#tutorialVideo {
				visibility: hidden;

				position: fixed;
				top: 0;
				left: 0;
				width: 10;
				height: 10;
			}

			main {
				margin: auto;
				width: 100%;
				max-width: 500px;
			}

			.button {
				background-color: #007bff;
				color: white;
				border: none;
				padding: 10px 15px;
				border-radius: 20px;
				cursor: pointer;
				display: flex;
				align-items: center;
				justify-content: center;
				gap: 10px;
				font-weight: 500;
				font-size: 16px;
			}

			#loketlink {
				appearance: none;
				font-size: 16px;
				text-decoration: none;
				color: black;
				background-color: #fff;
				border: solid 1px #ccc;
				padding: 10px 15px;
				border-radius: 20px;
				cursor: pointer;
				display: flex;
				align-items: center;
				justify-content: center;
				gap: 10px;
				font-weight: 500;
			}

			.primary-link {
				appearance: none;
				font-size: 16px;
				text-decoration: none;
				background-color: #007bff;
				color: white;
				padding: 10px 15px;
				border-radius: 20px;
				cursor: pointer;
				display: flex;
				align-items: center;
				justify-content: center;
				gap: 10px;
				font-weight: 500;
			}

			.buttonrow {
				display: flex;
				flex-direction: row;
				gap: 10px;
			}
		</style>
	</head>
	<body>
		<main id="step1">
			<h1>Rooster</h1>
			<p>This tool allows you to easily view your schedule in your calendar, with all information presented clearly.</p>
			<details>
				<summary><b>But doesn't KU Loket already support this?</b></summary>
				<p>Yes, but it jams everything into the event title. This tool cleans the data app, so it's easily digestable</p>
				<p><img src="https://assets-cdn.gbgk.net/rooster-event-demo.png" style="width: 100%"/></p>
			</details>

			<h2>Setup</h2>
			<p>Setting up the calendar is very simple and takes about 2 minutes.</p>

			<h3>Step 1. Copy link from KU Loket</h3>

			<p>To set up calendar sync, please copy the personal URL provided by KU Loket.</p>
			<div class="buttonrow">
				<button id="tutorial" class="button">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="icon icon-tabler icon-tabler-player-play-filled"
						width="16"
						height="16"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="#ffffff"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path stroke="none" d="M0 0h24v24H0z" fill="none" />
						<path
							d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z"
							stroke-width="0"
							fill="currentColor"
						/>
					</svg>
					<span>Show me how</span>
				</button>

				<a href="https://kuloket.be" id="loketlink" target="_blank">Open KU Loket</a>
			</div>
			<h3 style="margin-top: 30px">Step 2. Paste the link here</h3>
			<p>After that, press the button below to create your calendar. If you see a popup with options, tap "paste"</p>
			<button class="button" id="continue">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="icon icon-tabler icons-tabler-outline icon-tabler-clipboard"
				>
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
					<path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
				</svg>

				<span>Paste and continue</span>
			</button>

			<p style="font-size: 14px; margin-top: 30px">If you have any questions or feedback, email <a href="mailto:rooster@gbgk.me">rooster@gbgk.me</a>. Made by <a href="https://gbgk.me?ref=rooster">George Bougakov</a></p>
		</main>

		<main id="step2" style="display: none">
			<h2>Done!</h2>
			<p>Your calendar is now ready. Here is how to add it to your favourite calendar app</p>

			<h3>Apple Calendar (iOS, iPadOS, macOS)</h3>
			<p>Tap the button below to add your schedule to Apple Calendar</p>
			<div class="buttonrow">
				<a class="primary-link" href="webcal://localhost:8000/calendar.ics" id="webcal-link"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="icon icon-tabler icons-tabler-outline icon-tabler-calendar-plus"
					>
						<path stroke="none" d="M0 0h24v24H0z" fill="none" />
						<path d="M12.5 21h-6.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v5" />
						<path d="M16 3v4" />
						<path d="M8 3v4" />
						<path d="M4 11h16" />
						<path d="M16 19h6" />
						<path d="M19 16v6" /></svg><span>Add to Apple Calendar</span></a>
			</div>

			<h3 style="margin-top: 30px">Google Calendar</h3>

			<p>Click the button below to add your schedule to Google Calendar (works better on desktop)</p>

			<div class="buttonrow">
				<a class="primary-link" href="https://calendar.google.com/calendar/render?cid=http://localhost:8000/calendar.ics" id="gcal-link"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="icon icon-tabler icons-tabler-outline icon-tabler-calendar-plus"
					>
						<path stroke="none" d="M0 0h24v24H0z" fill="none" />
						<path d="M12.5 21h-6.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v5" />
						<path d="M16 3v4" />
						<path d="M8 3v4" />
						<path d="M4 11h16" />
						<path d="M16 19h6" />
						<path d="M19 16v6" /></svg><span>Add to Google Calendar</span></a>
			</div>

			<h3 style="margin-top: 30px">Other</h3>

			<p>For other calendar apps, please use the following calendar URL (ICS) to add your schedule</p>

			<p><code id="webcal-manual-link" style="word-break: break-all;">http://localhost:8000/calendar.ics</code></p>

			<p style="font-size: 14px; margin-top: 30px">If you have any questions or feedback, email <a href="mailto:rooster@gbgk.me">rooster@gbgk.me</a>. Made by <a href="https://gbgk.me?ref=rooster">George Bougakov</a></p>
		</main>
		<video id="tutorialVideo" src="https://assets-cdn.gbgk.net/rooster_guide.mp4" controls muted playsinline loop></video>

		<script>
			const video = document.getElementById('tutorialVideo');

			document.getElementById('tutorial').addEventListener('click', function () {
				video.play();
				try {
					video.webkitSetPresentationMode('picture-in-picture');
				} catch (e) {
					console.error('Failed to enter picture-in-picture mode: ', e);
				}
				try {
					video.requestPictureInPicture();
				} catch (e) {
					console.error('Failed to enter picture-in-picture mode (Chrome): ', e);
				}
			});

			document.getElementById('continue').addEventListener('click', async function () {
				// Read clipboard for URL
				try {
					const text = await navigator.clipboard.readText();
					console.log(text);

					if (text.includes('https://cloud.timeedit.net/be_kuleuven/')) {
						// Redirect to calendar creation
						document.getElementById('step2').style.display = 'block';
						document.getElementById('step1').style.display = 'none';
						document.getElementById('webcal-link').href = \`webcal://\${window.location.host}/calendar?url=\${encodeURIComponent(text)}\`;
						document.getElementById('webcal-manual-link').innerHTML = \`webcal://\${window.location.host}/calendar?url=\${encodeURIComponent(text)}\`;
						document.getElementById('gcal-link').href = \`https://calendar.google.com/calendar/render?cid=\${encodeURIComponent(\`webcal://\${window.location.host}/calendar?url=\${encodeURIComponent(text)}\`)}\`;
					} else {
						alert('Please follow the instructions and copy the link from KU Loket');
					}
				} catch (err) {
					console.error('Failed to read clipboard contents: ', err);
					alert("Something went wrong, please make sure that you allowed clipboard access, or tapped \\"Paste\\" in the popup");
				}


				//document.getElementById('step2').style.display = 'block';
			});
		</script>
	</body>
</html>
`;

export default webpage;
