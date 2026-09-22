const locationsByRoomCode: Record<string, string> = {
	'200L.00.0006': 'Aula 00.06 — Auditoria L, Celestijnenlaan 200L, 3001 Heverlee',
	'200K.00.0006': 'Aula 00.06 — Auditoria K, Celestijnenlaan 200K, 3001 Heverlee',
	'ONL.00.0001': 'Online',
	'200D.05.0011': 'Aula 05.11 — Instituut Natuurkunde Navorsing, Celestijnenlaan 200D, 3001 Heverlee',
	'AV.91.0012': 'Aula 91.12 — Auditoriacomplex, Parkstraat 49, 3000 Leuven',
	'ELEC.00.0054': 'Auditorium R (00.54) — Elektrotechnisch Instituut, Kasteelpark Arenberg 10, 3001 Heverlee',
	'200C.01.0005': 'Aula C (01.05) — Kandidatuur Natuurkunde, Celestijnenlaan 200C, 3001 Heverlee',
	'MTM.00.0013': 'Aula 00.13 — Materiaalkunde, Kasteelpark Arenberg 44, 3001 Heverlee',
	'200G.00.0006': 'Aula 00.06 — Kandidatuur Scheikunde, Celestijnenlaan 200G, 3001 Heverlee',
	'MTM.00.0039': 'Aula 00.39 — Materiaalkunde, Kasteelpark Arenberg 44, 3001 Heverlee',
	'VHI.01.0024': 'ICTS PC room F1 (01.24, 31 PCs) — Van Den Heuvelinstituut, Dekenstraat 2, 3000 Leuven',
	'VHI.01.0025': 'ICTS PC room G1 (01.25, 31 PCs) — Van Den Heuvelinstituut, Dekenstraat 2, 3000 Leuven',
	'200K.00.0007': 'Aula 00.07 — Auditoria K, Celestijnenlaan 200K, 3001 Heverlee',
	'MSI1.91.0019': 'Aula 91.19 — Mgr. Sencie Instituut, Erasmusplein 2, 3000 Leuven',
	'200C.01.0006': 'Aula D (01.06) — Kandidatuur Natuurkunde, Celestijnenlaan 200C, 3001 Heverlee',
	'200L.00.0007': 'Aula 00.07 — Auditoria L, Celestijnenlaan 200L, 3001 Heverlee',
	'MSI1.01.0028': 'Aula 01.28 — Mgr. Sencie Instituut, Erasmusplein 2, 3000 Leuven',
};

/**
 * Replaces TimeEdit's terse room code with a KULAG-derived, map-friendly label.
 * Unknown locations are deliberately left untouched.
 */
export function formatLocation(location: string): string {
	const normalizedLocation = location.trim().replace(/\s+/g, ' ').toUpperCase();

	for (const [roomCode, formattedLocation] of Object.entries(locationsByRoomCode)) {
		if (normalizedLocation.endsWith(roomCode)) {
			return formattedLocation;
		}
	}

	return location;
}
