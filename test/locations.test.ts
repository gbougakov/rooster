import { describe, expect, it } from 'vitest';
import { formatLocation } from '../src/locations';

describe('formatLocation', () => {
	it('formats every known TimeEdit room code', () => {
		const knownLocations = [
			['aula 200L.00.0006', 'Aula 00.06 — Auditoria L, Celestijnenlaan 200L, 3001 Heverlee'],
			['aula 200K.00.0006', 'Aula 00.06 — Auditoria K, Celestijnenlaan 200K, 3001 Heverlee'],
			['Online ONL.00.0001', 'Online'],
			['aula 200D.05.0011', 'Aula 05.11 — Instituut Natuurkunde Navorsing, Celestijnenlaan 200D, 3001 Heverlee'],
			['aula AV.91.0012', 'Aula 91.12 — Auditoriacomplex, Parkstraat 49, 3000 Leuven'],
			['aula R ELEC.00.0054', 'Auditorium R (00.54) — Elektrotechnisch Instituut, Kasteelpark Arenberg 10, 3001 Heverlee'],
			['aula C 200C.01.0005', 'Aula C (01.05) — Kandidatuur Natuurkunde, Celestijnenlaan 200C, 3001 Heverlee'],
			['aula MTM.00.0013', 'Aula 00.13 — Materiaalkunde, Kasteelpark Arenberg 44, 3001 Heverlee'],
			['aula 200G.00.0006', 'Aula 00.06 — Kandidatuur Scheikunde, Celestijnenlaan 200G, 3001 Heverlee'],
			['aula MTM.00.0039', 'Aula 00.39 — Materiaalkunde, Kasteelpark Arenberg 44, 3001 Heverlee'],
			['ICTS PC-klas F1 (31pc) VHI.01.0024', 'ICTS PC room F1 (01.24, 31 PCs) — Van Den Heuvelinstituut, Dekenstraat 2, 3000 Leuven'],
			['ICTS PC-klas G1 (31pc) VHI.01.0025', 'ICTS PC room G1 (01.25, 31 PCs) — Van Den Heuvelinstituut, Dekenstraat 2, 3000 Leuven'],
			['aula 200K.00.0007', 'Aula 00.07 — Auditoria K, Celestijnenlaan 200K, 3001 Heverlee'],
			['aula MSI1.91.0019', 'Aula 91.19 — Mgr. Sencie Instituut, Erasmusplein 2, 3000 Leuven'],
			['aula D 200C.01.0006', 'Aula D (01.06) — Kandidatuur Natuurkunde, Celestijnenlaan 200C, 3001 Heverlee'],
			['aula 200L.00.0007', 'Aula 00.07 — Auditoria L, Celestijnenlaan 200L, 3001 Heverlee'],
			['aula MSI1.01.0028', 'Aula 01.28 — Mgr. Sencie Instituut, Erasmusplein 2, 3000 Leuven'],
		] as const;

		for (const [input, expected] of knownLocations) {
			expect(formatLocation(input)).toBe(expected);
		}
	});

	it('matches room codes despite case and extra whitespace', () => {
		expect(formatLocation('  aula r   elec.00.0054  ')).toBe(
			'Auditorium R (00.54) — Elektrotechnisch Instituut, Kasteelpark Arenberg 10, 3001 Heverlee',
		);
	});

	it('turns the TimeEdit online pseudo-room into a useful label', () => {
		expect(formatLocation('Online ONL.00.0001')).toBe('Online');
	});

	it('preserves unknown locations exactly', () => {
		const location = 'Somewhere else ABC.01.0001';
		expect(formatLocation(location)).toBe(location);
	});
});
