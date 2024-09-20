import ical from 'ical.js';
import bbaSubjects from './programmes/bba.mjs';

export default {
	async fetch(request, env, ctx): Promise<Response> {
		const url = new URL(request.url);
		if (url.pathname === '/') {
			return new Response(
				`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Rooster</title>
</head>
<body>
  <p>Better UI coming soon</p>

  <form id="calform">
    <label for="url">Calendar URI:</label>
    <input type="url" name="url" id="url" required>
    <button type="submit">Get calendar</button>
  </form>

	<script>
		document.getElementById('calform').addEventListener('submit', (e) => {
			e.preventDefault();
			const url = document.getElementById('url').value;
			window.location.href = 'webcal://' + window.location.host + '/calendar?url=' + encodeURIComponent(url);
		});
		</script>
</body>
</html>`,
				{
					headers: {
						'Content-Type': 'text/html',
					},
				}
			);
		} else if (url.pathname === '/calendar') {
			const calendarURL = url.searchParams.get('url');
			const icsData = await fetch(calendarURL!).then((res) => res.text());
			console.log(icsData);
			const jcalData = ical.parse(icsData);
			const comp = new ical.Component(jcalData);
			const vevents = comp.getAllSubcomponents('vevent');

			comp.updatePropertyWithValue('SUMMARY', 'Lessons Schedule');
			// X-WR-CALNAME
			comp.updatePropertyWithValue('X-WR-CALNAME', 'Lessons Schedule');

			vevents.forEach((vevent) => {
				const event = new ical.Event(vevent);

				const ectsCode = event.summary.split(' ')[0];

				const subject = bbaSubjects.find((subject) => subject.ectsCode === ectsCode.toUpperCase());

				const originalSummary = event.summary;

				event.summary = subject ? subject.subjectName : originalSummary.split(',')[0].split(' ')[1];

				if (subject) {
					event.description = `${subject.teachers.map((teacher) => `${teacher.name}\n${teacher.profile}`).join('\n\n')}

Original Summary:
${originalSummary}`;
				}
			});

			const newJcalData = comp.toString();

			return new Response(newJcalData, {
				headers: {
					'Content-Type': 'text/calendar',
				},
			});
		}

		return new Response(`404`, {
			headers: {
				'Content-Type': 'text/html',
			},
		});
	},
} satisfies ExportedHandler<Env>;
