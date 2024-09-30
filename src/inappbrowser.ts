const iab = (browser) => `<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>In-app browser</title>
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
			<h2>You are viewing this page in the ${browser} browser</h2>
			<p>To continue, please open <code>https://rooster.gbgk.be</code> in Safari (or if you are using Android, in Chrome)</p>

			<div class="buttonrow">
				<a href="x-safari-https://rooster.gbgk.be" class="primary-link" target="_blank">Open in Safari</a>
			</div>
		</main>
	</body>
</html>
`;

export default iab;
