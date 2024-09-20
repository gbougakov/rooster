import ical from 'ical.js';
import bbaSubjects from './programmes/bba.mjs';

export default {
	async fetch(request, env, ctx): Promise<Response> {
		const url = new URL(request.url).searchParams.get('url');
		const icsData = await fetch(url!).then((res) => res.text());
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
	},
} satisfies ExportedHandler<Env>;
