import ical from 'ical.js';
import bbaSubjects from './programmes/bba';
import webpage from './webpage';

export default {
	async fetch(request, env, ctx): Promise<Response> {
		const url = new URL(request.url);
		if (url.pathname === '/') {
			return new Response(
				webpage,
				{
					headers: {
						'Content-Type': 'text/html',
					},
				}
			);
		} else if (url.pathname === '/calendar') {
			const calendarURL = url.searchParams.get('url');

			if (!calendarURL?.startsWith('https://cloud.timeedit.net/be_kuleuven/')) {
				return new Response(`Invalid URL`, {
					headers: {
						'Content-Type': 'text/html',
					},
				});
			}

			const icsData = await fetch(calendarURL!).then((res) => res.text());
			console.log(icsData);
			const jcalData = ical.parse(icsData);
			const comp = new ical.Component(jcalData);
			const vevents = comp.getAllSubcomponents('vevent');

			comp.updatePropertyWithValue('SUMMARY', 'Lessons Schedule');
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
				} else {
					event.description = `Cannot find teachers for ECTS code ${ectsCode}. Please email rooster@gbgk.me to let me know.

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
