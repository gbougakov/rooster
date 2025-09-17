import ical from 'ical.js';
import bbaSubjects from './programmes/bba';
import businessEngineeringSubjects from './programmes/business_engineering';
import webpage from './webpage';
import iab from './inappbrowser';

const specialLectureKeywords = {
	'weblecture': 'Online Lecture',
	'workshop': 'Workshop',
	'guest lecture': 'Guest Lecture',
	'kick-off': 'Kick-off',
	'kick off': 'Kick-off',
	'matchmaking': 'Matchmaking',
	'coaching': 'Coaching',
	'final exam': 'Exam',
	'mandatory test': 'Test',
	'presentation': 'Presentation',
	'practical lecture': 'Practice',
	'tutorial': 'Tutorial',
	'werkcollege': 'Tutorial',
	'hoorcollege': 'Lecture'
};

export default {
	async fetch(request, env, ctx): Promise<Response> {
		const url = new URL(request.url);
		if (url.pathname === '/') {
			if (request.headers.get('User-Agent')?.includes('Instagram')) {
				return new Response(iab("Instagram"), {
					headers: {
						'Content-Type': 'text/html',
					},
				});
			}

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

			// Combine subjects from all programmes
			const allSubjects = [...bbaSubjects, ...businessEngineeringSubjects];

			vevents.forEach((vevent) => {
				const event = new ical.Event(vevent);

				const ectsCode = event.summary.split(' ')[0];

				const subject = allSubjects.find((subject) => subject.ectsCode === ectsCode.toUpperCase());

				const originalSummary = event.summary;

				event.summary = subject ? subject.subjectName : originalSummary.split(',')[0].split(' ')[1];

				event.uid = event.uid.replace('@timeedit.com', '@rooster.gbgk.me')

				for (const [keyword, text] of Object.entries(specialLectureKeywords)) {
					if (originalSummary.toLowerCase().includes(keyword)) {
						event.summary += ` (${text})`;
						break;
					}
				}

				if (subject) {
					event.description = `Teachers: ${subject.teachers.join(', ')}

Original Summary:
${originalSummary}

Feed version: 2`;
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
		} else if (url.pathname === '/inappbrowser') {
			return new Response(iab("in-app"), {
				headers: {
					'Content-Type': 'text/html',
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
