const subjects = [
	{
		ectsCode: 'HBA41C',
		subjectName: 'Mathematics for Business A',
		teachers: [
			{
				name: 'A. Maes',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00007066',
			},
			{
				name: 'E. Boeckx',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00008440',
			},
			{
				name: 'L. Egholm',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00173268',
			},
			{
				name: 'J. Ramos González',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00174089',
			},
			{
				name: 'B. Vancraeynest',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00114668',
			},
		],
	},
	{
		ectsCode: 'HBA16A',
		subjectName: 'English 1',
		teachers: [
			{
				name: 'M. Hulselmans',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00071205',
			},
			{
				name: 'J. Roelans',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00006278',
			},
			{
				name: 'N. Goossens',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00151853',
			},
			{
				name: 'S. Hendrickx',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00127921',
			},
			{
				name: 'E. Pierseaux',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00142414',
			},
		],
	},
	{
		ectsCode: 'HBA02C',
		subjectName: 'Financial Institutions and Markets',
		teachers: [
			{
				name: 'A. Praet',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00003263',
			},
			{
				name: 'P. Paepen',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00086011',
			},
			{
				name: 'A. Praet',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00003263',
			},
			{
				name: 'W. Creemers',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00079362',
			},
			{
				name: 'D. van Hemert',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00141160',
			},
		],
	},
	{
		ectsCode: 'HBA03C',
		subjectName: 'Management',
		teachers: [
			{
				name: 'A. Van Rossem',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00071019',
			},
			{
				name: 'F. Wijen',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00161738',
			},
		],
	},
	{
		ectsCode: 'HBA05C',
		subjectName: 'Research Methods 1',
		teachers: [
			{
				name: 'K. Goeman',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00071407',
			},
		],
	},
	{
		ectsCode: 'HBA39C',
		subjectName: 'Financial Accounting A',
		teachers: [
			{
				name: 'S. Vergauwe',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00060778',
			},
			{
				name: 'H. De Groote',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00071024',
			},
			{
				name: 'V. Ghijselinck',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00057509',
			},
			{
				name: 'S. Vergauwe',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00060778',
			},
		],
	},
	{
		ectsCode: 'HBA07H',
		subjectName: 'Microeconomics for Business',
		teachers: [
			{
				name: 'N. Rogge',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00049838',
			},
			{
				name: 'R. Berlinschi',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00065253',
			},
			{
				name: 'A. De Ridder',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00071730',
			},
			{
				name: 'N. Rogge',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00049838',
			},
		],
	},
	{
		ectsCode: 'HBA52A',
		subjectName: 'Philosophy',
		teachers: [
			{
				name: 'I. Verhoeven',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00071206',
			},
			{
				name: 'M. Corner',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00054695',
			},
			{
				name: 'I. Verhoeven',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00071206',
			},
		],
	},
	{
		ectsCode: 'HBA42C',
		subjectName: 'Mathematics for Business B',
		teachers: [
			{
				name: 'A. Maes',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00007066',
			},
			{
				name: 'E. Boeckx',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00008440',
			},
			{
				name: 'L. Egholm',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00173268',
			},
			{
				name: 'J. Ramos González',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00174089',
			},
			{
				name: 'B. Vancraeynest',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00114668',
			},
		],
	},
	{
		ectsCode: 'HBA54C',
		subjectName: 'English 2',
		teachers: [
			{
				name: 'M. Hulselmans',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00071205',
			},
			{
				name: 'J. Roelans',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00006278',
			},
			{
				name: 'S. Hendrickx',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00127921',
			},
			{
				name: 'E. Pierseaux',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00142414',
			},
		],
	},
	{
		ectsCode: 'HBA08C',
		subjectName: 'Introduction to Law',
		teachers: [
			{
				name: 'B. Keirsbilck',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00046802',
			},
			{
				name: 'L. Drechsler',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00157945',
			},
		],
	},
	{
		ectsCode: 'HBA40C',
		subjectName: 'Financial Accounting B',
		teachers: [
			{
				name: 'S. Vergauwe',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00060778',
			},
			{
				name: 'H. De Groote',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00071024',
			},
			{
				name: 'V. Ghijselinck',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00057509',
			},
			{
				name: 'A. Dongo',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00170047',
			},
		],
	},
	{
		ectsCode: 'HBA08H',
		subjectName: 'Psychology',
		teachers: [
			{
				name: 'F. Germeys',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00004477',
			},
		],
	},
	{
		ectsCode: 'HBA09H',
		subjectName: 'Descriptive Statistics and Probability for Business',
		teachers: [
			{
				name: 'G. Dierckx',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00022902',
			},
			{
				name: 'J. Hendrickx',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00009966',
			},
			{
				name: 'E. Boeckx',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00008440',
			},
			{
				name: 'L. Egholm',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00173268',
			},
			{
				name: 'J. Ramos González',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00174089',
			},
		],
	},
	{
		ectsCode: 'HBA69A',
		subjectName: 'Statistics for Business 2',
		teachers: [
			{
				name: 'S. Van Gulck',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00011459',
			},
			{
				name: 'W. Goemans',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00071316',
			},
			{
				name: 'S. Van Gulck',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00011459',
			},
			{
				name: 'L. Egholm',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00173268',
			},
		],
	},
	{
		ectsCode: 'HBA11C',
		subjectName: 'Personnel and Organization',
		teachers: [
			{
				name: 'R. Caers',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00071390',
			},
		],
	},
	{
		ectsCode: 'HBA12C',
		subjectName: 'Marketing',
		teachers: [
			{
				name: 'I. Roozen',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00054633',
			},
			{
				name: 'A. Fairchild',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00071469',
			},
		],
	},
	{
		ectsCode: 'HBA14C',
		subjectName: 'Research Methods 2',
		teachers: [
			{
				name: 'P. Teirlinck',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00073713',
			},
			{
				name: 'A. Fairchild',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00071469',
			},
		],
	},
	{
		ectsCode: 'HBA19C',
		subjectName: 'Operational Management',
		teachers: [
			{
				name: 'L. De Boeck',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00002623',
			},
			{
				name: 'H. Vermuyten',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00100400',
			},
		],
	},
	{
		ectsCode: 'HBA10H',
		subjectName: 'Financial Statement Analysis',
		teachers: [
			{
				name: 'A. Liss',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00170046',
			},
		],
	},
	{
		ectsCode: 'HBA15A',
		subjectName: 'Economic Sociology',
		teachers: [
			{
				name: 'S. Adriaenssens',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00002299',
			},
			{
				name: 'T. Soare',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00141718',
			},
		],
	},
	{
		ectsCode: 'HBA10C',
		subjectName: 'Strategic Management',
		teachers: [
			{
				name: 'A. Van Rossem',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00071019',
			},
		],
	},
	{
		ectsCode: 'HBA16C',
		subjectName: 'Macro-economics and Economic Policy',
		teachers: [
			{
				name: 'T. Verbeke',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00063587',
			},
		],
	},
	{
		ectsCode: 'HBA15C',
		subjectName: 'Introduction to Methods in Operational Research',
		teachers: [
			{
				name: 'D. De Bock',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00002527',
			},
			{
				name: 'D. De Bock',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00002527',
			},
		],
	},
	{
		ectsCode: 'HBA12H',
		subjectName: 'Data and Programming Skills',
		teachers: [
			{
				name: 'T. Verbeke',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00063587',
			},
		],
	},
	{
		ectsCode: 'HBA11H',
		subjectName: 'Management Project 2',
		teachers: [
			{
				name: 'D. De Vos',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00134191',
			},
			{
				name: 'A. Reheul',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00071629',
			},
		],
	},
	{
		ectsCode: 'HBA20C',
		subjectName: 'Entrepreneurship and Business Planning',
		teachers: [
			{
				name: 'G. Van Den Eede',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00052301',
			},
		],
	},
	{
		ectsCode: 'HBA01H',
		subjectName: 'International Business',
		teachers: [
			{
				name: 'A. Sels',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00010555',
			},
		],
	},
	{
		ectsCode: 'HBA02H',
		subjectName: 'European Institutions',
		teachers: [
			{
				name: 'A. Pauwels',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00071248',
			},
		],
	},
	{
		ectsCode: 'HBA18C',
		subjectName: 'Corporate Finance',
		teachers: [
			{
				name: 'A. Praet',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00003263',
			},
		],
	},
	{
		ectsCode: 'HBA83B',
		subjectName: 'International Economics',
		teachers: [
			{
				name: 'K. De Bruyne',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00003221',
			},
			{
				name: 'F. Saerens',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00158583',
			},
		],
	},
	{
		ectsCode: 'HBA17C',
		subjectName: 'Management Accounting',
		teachers: [
			{
				name: 'A. Hoppe',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00145072',
			},
		],
	},
	{
		ectsCode: 'HBA21C',
		subjectName: 'Principles of Taxation',
		teachers: [
			{
				name: 'F. Debelva',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00085844',
			},
		],
	},
	{
		ectsCode: 'HBA22C',
		subjectName: 'ICT Management',
		teachers: [
			{
				name: 'E. Serral Asensio',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00095631',
			},
		],
	},
	{
		ectsCode: 'HBA28C',
		subjectName: 'Economics and Ethics',
		teachers: [
			{
				name: 'F. Depoortere',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00043493',
			},
		],
	},
	{
		ectsCode: 'HBA27C',
		subjectName: 'Research Methods 3',
		teachers: [
			{
				name: 'M. Meulders',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00010822',
			},
		],
	},
	{
		ectsCode: 'HBA34C',
		subjectName: 'French 3',
		teachers: [
			{
				name: 'M. Baetens',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00121626',
			},
			{
				name: 'H. Cornelus',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00166807',
			},
		],
	},
	{
		ectsCode: 'HBA35C',
		subjectName: 'French 3 (Advanced)',
		teachers: [
			{
				name: 'J. Hengels',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00069664',
			},
		],
	},
	{
		ectsCode: 'HBA33A',
		subjectName: 'German 3',
		teachers: [
			{
				name: 'J. Roelans',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00006278',
			},
		],
	},
	{
		ectsCode: 'HBA13A',
		subjectName: 'Dutch 3',
		teachers: [
			{
				name: 'I. Verhoeven',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00071206',
			},
		],
	},
	{
		ectsCode: 'HBA47C',
		subjectName: 'Dutch 3 (Advanced)',
		teachers: [
			{
				name: 'I. Verhoeven',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00071206',
			},
		],
	},
	{
		ectsCode: 'HBA67A',
		subjectName: 'Spanish 3',
		teachers: [
			{
				name: 'F. Vanoverberghe',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00062644',
			},
			{
				name: 'E. Snauwaert',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00012658',
			},
			{
				name: 'F. Vanoverberghe',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00062644',
			},
		],
	},
	{
		ectsCode: 'D0E54A',
		subjectName: 'Short Mobility Economics and Business (Bachelor)',
		teachers: [
			{
				name: 'V. Geers',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00066249',
			},
			{
				name: 'S. Steijleman',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00071727',
			},
		],
	},
	{
		ectsCode: 'D0S32A',
		subjectName: 'Short Mobility Economics and Business (Bachelor)',
		teachers: [
			{
				name: 'V. Geers',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00066249',
			},
			{
				name: 'S. Steijleman',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00071727',
			},
		],
	},
	{
		ectsCode: 'HBA08A',
		subjectName: 'Corporate Law and Accounting',
		teachers: [
			{
				name: 'A. Liss',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00170046',
			},
		],
	},
	{
		ectsCode: 'HBA04C',
		subjectName: 'Management Project 1',
		teachers: [
			{
				name: 'P. Vanmol',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00071303',
			},
			{
				name: 'A. De Moor',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00069591',
			},
			{
				name: 'I. Verhoeven',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00071206',
			},
			{
				name: 'S. Kerremans',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00071054',
			},
			{
				name: 'P. Vanmol',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00071303',
			},
			{
				name: 'A. De Winter',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00073767',
			},
			{
				name: 'E. Boerboom',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00140272',
			},
			{
				name: 'J. Colebunders',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00126413',
			},
			{
				name: 'K. Van Winkel',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00071673',
			},
			{
				name: 'E. van Stee',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00067732',
			},
		],
	},
	{
		ectsCode: 'HBA09C',
		subjectName: 'Financial Statement Analysis',
		teachers: [
			{
				name: 'A. Liss',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00170046',
			},
		],
	},
	{
		ectsCode: 'HBA43C',
		subjectName: 'Managerial Economics A',
		teachers: [
			{
				name: 'N. Rogge',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00049838',
			},
			{
				name: 'R. Berlinschi',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00065253',
			},
			{
				name: 'A. De Ridder',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00071730',
			},
		],
	},
	{
		ectsCode: 'HBA44C',
		subjectName: 'Managerial Economics B',
		teachers: [
			{
				name: 'N. Rogge',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00049838',
			},
			{
				name: 'R. Berlinschi',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00065253',
			},
			{
				name: 'A. De Ridder',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00071730',
			},
			{
				name: 'N. Rogge',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00049838',
			},
		],
	},
	{
		ectsCode: 'HBA59A',
		subjectName: 'Psychology',
		teachers: [
			{
				name: 'F. Germeys',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00004477',
			},
		],
	},
	{
		ectsCode: 'HBA68A',
		subjectName: 'Statistics for Business 1',
		teachers: [
			{
				name: 'G. Dierckx',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00022902',
			},
			{
				name: 'J. Hendrickx',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00009966',
			},
			{
				name: 'E. Boeckx',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00008440',
			},
			{
				name: 'L. Egholm',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00173268',
			},
			{
				name: 'J. Ramos González',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00174089',
			},
		],
	},
	{
		ectsCode: 'HBA36C',
		subjectName: 'Business Project',
		teachers: [
			{
				name: 'K. Pattyn',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00071022',
			},
		],
	},
	{
		ectsCode: 'HBA37C',
		subjectName: 'Career Development',
		teachers: [
			{
				name: 'D. Arijs',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00071050',
			},
			{
				name: 'C. Claeys',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00015275',
			},
			{
				name: 'M. Hulselmans',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00071205',
			},
			{
				name: 'A. Van Nuffel',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00071249',
			},
			{
				name: 'K. Van Winkel',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00071673',
			},
		],
	},
	{
		ectsCode: 'HBA30C',
		subjectName: 'French 1',
		teachers: [
			{
				name: 'L. Loonbeek',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00071405',
			},
			{
				name: 'H. Cornelus',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00166807',
			},
			{
				name: 'J. Hengels',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00069664',
			},
		],
	},
	{
		ectsCode: 'HBA31C',
		subjectName: 'French 1 (Advanced)',
		teachers: [
			{
				name: 'J. Hengels',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00069664',
			},
		],
	},
	{
		ectsCode: 'HBA32C',
		subjectName: 'French 2',
		teachers: [
			{
				name: 'M. Baetens',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00121626',
			},
			{
				name: 'H. Cornelus',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00166807',
			},
			{
				name: 'J. Hengels',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00069664',
			},
		],
	},
	{
		ectsCode: 'HBA33C',
		subjectName: 'French 2 (Advanced)',
		teachers: [
			{
				name: 'J. Hengels',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00069664',
			},
			{
				name: 'H. Cornelus',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00166807',
			},
		],
	},
	{
		ectsCode: 'HBA34C',
		subjectName: 'French 3',
		teachers: [
			{
				name: 'M. Baetens',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00121626',
			},
			{
				name: 'H. Cornelus',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00166807',
			},
		],
	},
	{
		ectsCode: 'HBA35C',
		subjectName: 'French 3 (Advanced)',
		teachers: [
			{
				name: 'J. Hengels',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00069664',
			},
		],
	},
	{
		ectsCode: 'HBA31A',
		subjectName: 'German 1',
		teachers: [
			{
				name: 'J. Roelans',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00006278',
			},
		],
	},
	{
		ectsCode: 'HBA32A',
		subjectName: 'German 2',
		teachers: [
			{
				name: 'J. Roelans',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00006278',
			},
		],
	},
	{
		ectsCode: 'HBA33A',
		subjectName: 'German 3',
		teachers: [
			{
				name: 'J. Roelans',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00006278',
			},
		],
	},
	{
		ectsCode: 'HBA11A',
		subjectName: 'Dutch 1',
		teachers: [
			{
				name: 'M. Hulselmans',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00071205',
			},
		],
	},
	{
		ectsCode: 'HBA45C',
		subjectName: 'Dutch 1 (Advanced)',
		teachers: [
			{
				name: 'I. Verhoeven',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00071206',
			},
		],
	},
	{
		ectsCode: 'HBA12A',
		subjectName: 'Dutch 2',
		teachers: [
			{
				name: 'I. Verhoeven',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00071206',
			},
		],
	},
	{
		ectsCode: 'HBA46C',
		subjectName: 'Dutch 2 (Advanced)',
		teachers: [
			{
				name: 'I. Verhoeven',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00071206',
			},
		],
	},
	{
		ectsCode: 'HBA13A',
		subjectName: 'Dutch 3',
		teachers: [
			{
				name: 'I. Verhoeven',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00071206',
			},
		],
	},
	{
		ectsCode: 'HBA47C',
		subjectName: 'Dutch 3 (Advanced)',
		teachers: [
			{
				name: 'I. Verhoeven',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00071206',
			},
		],
	},
	{
		ectsCode: 'HBA65A',
		subjectName: 'Spanish 1',
		teachers: [
			{
				name: 'F. Vanoverberghe',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00062644',
			},
			{
				name: 'E. Snauwaert',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00012658',
			},
			{
				name: 'F. Vanoverberghe',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00062644',
			},
		],
	},
	{
		ectsCode: 'HBA66A',
		subjectName: 'Spanish 2',
		teachers: [
			{
				name: 'F. Vanoverberghe',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00062644',
			},
			{
				name: 'E. Snauwaert',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00012658',
			},
			{
				name: 'F. Vanoverberghe',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00062644',
			},
		],
	},
	{
		ectsCode: 'HBA67A',
		subjectName: 'Spanish 3',
		teachers: [
			{
				name: 'F. Vanoverberghe',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00062644',
			},
			{
				name: 'E. Snauwaert',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00012658',
			},
			{
				name: 'F. Vanoverberghe',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00062644',
			},
		],
	},
	{
		ectsCode: 'D0E54A',
		subjectName: 'Short Mobility Economics and Business (Bachelor)',
		teachers: [
			{
				name: 'V. Geers',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00066249',
			},
			{
				name: 'S. Steijleman',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00071727',
			},
		],
	},
	{
		ectsCode: 'D0S32A',
		subjectName: 'Short Mobility Economics and Business (Bachelor)',
		teachers: [
			{
				name: 'V. Geers',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00066249',
			},
			{
				name: 'S. Steijleman',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00071727',
			},
		],
	},
	{
		ectsCode: 'HBA23C',
		subjectName: 'Project Management',
		teachers: [
			{
				name: 'P. Teirlinck',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00073713',
			},
			{
				name: 'B. Vromans',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00120579',
			},
		],
	},
	{
		ectsCode: 'HBA38C',
		subjectName: 'Management Game',
		teachers: [
			{
				name: 'A. Van Nuffel',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00071249',
			},
			{
				name: 'H. De Groote',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00071024',
			},
			{
				name: 'A. Van Nuffel',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00071249',
			},
		],
	},
	{
		ectsCode: 'HBA13H',
		subjectName: 'Business Plan',
		teachers: [
			{
				name: 'I. Claes',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00071387',
			},
		],
	},
	{
		ectsCode: 'HBA14H',
		subjectName: 'Service Learning and Social Entrepreneurship',
		teachers: [
			{
				name: 'I. Molderez',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00071060',
			},
		],
	},
	{
		ectsCode: 'D0E59A',
		subjectName: 'Internship Project (Bachelor)',
		teachers: [
			{
				name: 'S. Hoofdt',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00071021',
			},
		],
	},
	{
		ectsCode: 'D0E54A',
		subjectName: 'Short Mobility Economics and Business (Bachelor)',
		teachers: [
			{
				name: 'V. Geers',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00066249',
			},
			{
				name: 'S. Steijleman',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00071727',
			},
		],
	},
	{
		ectsCode: 'D0E60A',
		subjectName: 'Internship Project (Bachelor)',
		teachers: [
			{
				name: 'S. Hoofdt',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00071021',
			},
		],
	},
	{
		ectsCode: 'D0S32A',
		subjectName: 'Short Mobility Economics and Business (Bachelor)',
		teachers: [
			{
				name: 'V. Geers',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00066249',
			},
			{
				name: 'S. Steijleman',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00071727',
			},
		],
	},
	{
		ectsCode: 'HBA48C',
		subjectName: 'The Origins and Development of European Integration',
		teachers: [
			{
				name: 'Y. Segers',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00010462',
			},
		],
	},
	{
		ectsCode: 'HBA50C',
		subjectName: 'Economics of Monetary Integration',
		teachers: [
			{
				name: 'M. Maes',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00071299',
			},
		],
	},
	{
		ectsCode: 'HBA49C',
		subjectName: 'Economics of the Single Market',
		teachers: [
			{
				name: 'E. Poelmans',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00034997',
			},
		],
	},
	{
		ectsCode: 'D0E54A',
		subjectName: 'Short Mobility Economics and Business (Bachelor)',
		teachers: [
			{
				name: 'V. Geers',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00066249',
			},
			{
				name: 'S. Steijleman',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00071727',
			},
		],
	},
	{
		ectsCode: 'D0S32A',
		subjectName: 'Short Mobility Economics and Business (Bachelor)',
		teachers: [
			{
				name: 'V. Geers',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00066249',
			},
			{
				name: 'S. Steijleman',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00071727',
			},
		],
	},
	{
		ectsCode: 'D0E59A',
		subjectName: 'Internship Project (Bachelor)',
		teachers: [
			{
				name: 'S. Hoofdt',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00071021',
			},
		],
	},
	{
		ectsCode: 'D0E60A',
		subjectName: 'Internship Project (Bachelor)',
		teachers: [
			{
				name: 'S. Hoofdt',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00071021',
			},
		],
	},
	{
		ectsCode: 'HBH86E',
		subjectName: 'Marketing (USL)',
		teachers: [
			{
				name: 'T. Verbeke',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00063587',
			},
			{
				name: 'T. Verbeke',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00063587',
			},
		],
	},
	{
		ectsCode: 'HBH85E',
		subjectName: 'Management humain (USL)',
		teachers: [
			{
				name: 'T. Verbeke',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00063587',
			},
			{
				name: 'T. Verbeke',
				profile: 'http://www.kuleuven.be/wieiswie/en/person/00063587',
			},
		],
	},
];

export default subjects;
