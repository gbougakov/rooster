const subjects = [
  {
    ectsCode: 'D0E54A',
    subjectName: 'Short Mobility Economics and Business (Bachelor)',
    teachers: ['J.Van Biesebroeck', 'S.Steijleman', 'V.Geers'],
  },
  {
    ectsCode: 'D0E59A',
    subjectName: 'Internship Bachelor',
    teachers: ['K.Antonio', 'S.Hoofdt'],
  },
  {
    ectsCode: 'D0E60A',
    subjectName: 'Internship Bachelor',
    teachers: ['K.Antonio', 'S.Hoofdt'],
  },
  {
    ectsCode: 'D0S32A',
    subjectName: 'Short Mobility Economics and Business (Bachelor)',
    teachers: ['J.Van Biesebroeck', 'S.Steijleman', 'V.Geers'],
  },
  {
    ectsCode: 'HBA01H',
    subjectName: 'International Business',
    teachers: ['A.Sels', 'A.Slangen'],
  },
  {
    ectsCode: 'HBA02C',
    subjectName: 'Financial Institutions and Markets',
    teachers: ['A.Praet', 'C.Mertens', 'P.Paepen', 'S.Van Cutsem'],
  },
  {
    ectsCode: 'HBA02H',
    subjectName: 'European Institutions',
    teachers: ['A.Pauwels'],
  },
  {
    ectsCode: 'HBA03C',
    subjectName: 'Management',
    teachers: ['A.Van Rossem', 'F.Wijen'],
  },
  {
    ectsCode: 'HBA05C',
    subjectName: 'Research Methods 1',
    teachers: ['K.Goeman', 'L.Catalano', 'M.François', 'T.ILIOPOULOS'],
  },
  {
    ectsCode: 'HBA07H',
    subjectName: 'Microeconomics for Business',
    teachers: ['A.De Ridder', 'K.Testaert', 'L.Uzueva', 'N.Rogge', 'R.Berlinschi', 'S.Ghiotto'],
  },
  {
    ectsCode: 'HBA08C',
    subjectName: 'Introduction to Law',
    teachers: ['B.Devolder', 'B.Keirsbilck', 'C.Hiessl'],
  },
  {
    ectsCode: 'HBA08H',
    subjectName: 'Psychology',
    teachers: ['F.Germeys'],
  },
  {
    ectsCode: 'HBA09H',
    subjectName: 'Descriptive Statistics and Probability for Business',
    teachers: ['C.Mertens', 'E.Boeckx', 'G.Dierckx', 'J.Hendrickx', 'L.Wouters'],
  },
  {
    ectsCode: 'HBA10C',
    subjectName: 'Strategic Management',
    teachers: ['A.Van Rossem'],
  },
  {
    ectsCode: 'HBA10H',
    subjectName: 'Financial Statement Analysis',
    teachers: ['A.Liss'],
  },
  {
    ectsCode: 'HBA11A',
    subjectName: 'Dutch 1',
    teachers: ['M.Hulselmans'],
  },
  {
    ectsCode: 'HBA11C',
    subjectName: 'Personnel and Organization',
    teachers: ['R.Caers'],
  },
  {
    ectsCode: 'HBA12A',
    subjectName: 'Dutch 2',
    teachers: ['I.Verhoeven'],
  },
  {
    ectsCode: 'HBA12C',
    subjectName: 'Marketing',
    teachers: ['A.Fairchild', 'I.Roozen'],
  },
  {
    ectsCode: 'HBA12H',
    subjectName: 'Data and Programming Skills',
    teachers: ['T.Verbeke'],
  },
  {
    ectsCode: 'HBA13A',
    subjectName: 'Dutch 3',
    teachers: ['I.Verhoeven'],
  },
  {
    ectsCode: 'HBA13H',
    subjectName: 'Business Plan',
    teachers: ['I.Claes'],
  },
  {
    ectsCode: 'HBA14C',
    subjectName: 'Research Methods 2',
    teachers: ['A.Fairchild', 'P.Teirlinck'],
  },
  {
    ectsCode: 'HBA14H',
    subjectName: 'Service Learning and Social Entrepreneurship',
    teachers: ['I.Molderez'],
  },
  {
    ectsCode: 'HBA15A',
    subjectName: 'Economic Sociology',
    teachers: ['S.Adriaenssens'],
  },
  {
    ectsCode: 'HBA15C',
    subjectName: 'Introduction to Methods in Operational Research',
    teachers: ['D.De Bock'],
  },
  {
    ectsCode: 'HBA15H',
    subjectName: 'Basic Principles of Sustainable and Responsible Economy and Business',
    teachers: ['J.Eyckmans', 'M.Janssens', 'Y.Nauwelaerts'],
  },
  {
    ectsCode: 'HBA16A',
    subjectName: 'English 1',
    teachers: ['E.Pierseaux', 'J.Roelans', 'M.Hulselmans', 'N.Goossens', 'S.Hendrickx'],
  },
  {
    ectsCode: 'HBA16C',
    subjectName: 'Macro-economics and Economic Policy',
    teachers: ['T.Verbeke'],
  },
  {
    ectsCode: 'HBA16H',
    subjectName: 'Professional Development: Business Game',
    teachers: ['B.Cassiman', 'H.De Groote', 'V.Ghijselinck'],
  },
  {
    ectsCode: 'HBA17C',
    subjectName: 'Management Accounting',
    teachers: ['A.Hoppe', 'A.Reheul'],
  },
  {
    ectsCode: 'HBA17H',
    subjectName: 'Management Accounting',
    teachers: ['A.Hoppe', 'A.Reheul'],
  },
  {
    ectsCode: 'HBA18C',
    subjectName: 'Corporate Finance',
    teachers: ['A.Praet'],
  },
  {
    ectsCode: 'HBA19C',
    subjectName: 'Operational Management',
    teachers: ['L.De Boeck'],
  },
  {
    ectsCode: 'HBA20C',
    subjectName: 'Entrepreneurship and Business Planning',
    teachers: ['G.Van Den Eede'],
  },
  {
    ectsCode: 'HBA21C',
    subjectName: 'Principles of Taxation',
    teachers: [],
  },
  {
    ectsCode: 'HBA22C',
    subjectName: 'ICT Management',
    teachers: ['E.Serral Asensio'],
  },
  {
    ectsCode: 'HBA23C',
    subjectName: 'Project Management',
    teachers: ['B.Vromans', 'P.Teirlinck'],
  },
  {
    ectsCode: 'HBA27C',
    subjectName: 'Statistical Modelling',
    teachers: ['M.Meulders'],
  },
  {
    ectsCode: 'HBA28C',
    subjectName: 'Economics and Ethics',
    teachers: ['F.Depoortere'],
  },
  {
    ectsCode: 'HBA30C',
    subjectName: 'French 1',
    teachers: ['H.Cornelus', 'M.Baetens'],
  },
  {
    ectsCode: 'HBA31A',
    subjectName: 'German 1',
    teachers: ['J.Roelans'],
  },
  {
    ectsCode: 'HBA31C',
    subjectName: 'French 1 (advanced)',
    teachers: ['J.Hengels'],
  },
  {
    ectsCode: 'HBA32A',
    subjectName: 'German 2',
    teachers: ['J.Roelans'],
  },
  {
    ectsCode: 'HBA32C',
    subjectName: 'French 2',
    teachers: ['H.Cornelus', 'J.Hengels', 'M.Baetens'],
  },
  {
    ectsCode: 'HBA33A',
    subjectName: 'German 3',
    teachers: ['J.Roelans'],
  },
  {
    ectsCode: 'HBA33C',
    subjectName: 'French 2 (advanced)',
    teachers: ['H.Cornelus', 'J.Hengels'],
  },
  {
    ectsCode: 'HBA34C',
    subjectName: 'French 3',
    teachers: ['H.Cornelus', 'M.Baetens'],
  },
  {
    ectsCode: 'HBA35C',
    subjectName: 'French 3 (advanced)',
    teachers: ['J.Hengels'],
  },
  {
    ectsCode: 'HBA36C',
    subjectName: 'Business Project',
    teachers: ['K.Pattyn'],
  },
  {
    ectsCode: 'HBA37C',
    subjectName: 'Career Development',
    teachers: ['A.Van Nuffel', 'D.Arijs', 'K.Van Winkel'],
  },
  {
    ectsCode: 'HBA39C',
    subjectName: 'Financial Accounting A',
    teachers: ['A.De Winter', 'H.De Groote', 'R.Kuzina', 'S.Kerremans', 'S.Vergauwe', 'V.Ghijselinck'],
  },
  {
    ectsCode: 'HBA40C',
    subjectName: 'Financial Accounting B',
    teachers: ['A.De Winter', 'A.Dongo', 'H.De Groote', 'R.Kuzina', 'S.Kerremans', 'S.Vergauwe', 'V.Ghijselinck'],
  },
  {
    ectsCode: 'HBA41C',
    subjectName: 'Mathematics for Business A',
    teachers: ['A.Maes', 'B.Vancraeynest', 'E.Boeckx', 'L.Dillen', 'L.Wouters'],
  },
  {
    ectsCode: 'HBA42C',
    subjectName: 'Mathematics for Business B',
    teachers: ['A.Maes', 'B.Vancraeynest', 'C.Mertens', 'E.Boeckx', 'L.Dillen', 'L.Wouters'],
  },
  {
    ectsCode: 'HBA45C',
    subjectName: 'Dutch 1 (advanced)',
    teachers: ['I.Verhoeven'],
  },
  {
    ectsCode: 'HBA46C',
    subjectName: 'Dutch 2 (advanced)',
    teachers: ['I.Verhoeven'],
  },
  {
    ectsCode: 'HBA47C',
    subjectName: 'Dutch 3 (advanced)',
    teachers: ['I.Verhoeven'],
  },
  {
    ectsCode: 'HBA48C',
    subjectName: 'The Origins and Development of European Integration',
    teachers: ['Y.Segers'],
  },
  {
    ectsCode: 'HBA49C',
    subjectName: 'Economics of the Single Market',
    teachers: ['E.Poelmans'],
  },
  {
    ectsCode: 'HBA50C',
    subjectName: 'Economics of Monetary Integration',
    teachers: ['R.Berlinschi'],
  },
  {
    ectsCode: 'HBA52A',
    subjectName: 'Philosophy',
    teachers: ['I.Verhoeven'],
  },
  {
    ectsCode: 'HBA54C',
    subjectName: 'English 2',
    teachers: ['E.Pierseaux', 'J.Roelans', 'M.Hulselmans', 'N.Goossens', 'S.Hendrickx'],
  },
  {
    ectsCode: 'HBA65A',
    subjectName: 'Spanish 1',
    teachers: ['F.Vanoverberghe'],
  },
  {
    ectsCode: 'HBA66A',
    subjectName: 'Spanish 2',
    teachers: ['F.Vanoverberghe'],
  },
  {
    ectsCode: 'HBA67A',
    subjectName: 'Spanish 3',
    teachers: ['F.Vanoverberghe'],
  },
  {
    ectsCode: 'HBA69A',
    subjectName: 'Inferential Statistics for Business',
    teachers: ['L.Wouters', 'S.Van Gulck'],
  },
  {
    ectsCode: 'HBA83B',
    subjectName: 'International Economics',
    teachers: ['K.De Bruyne'],
  },
  {
    ectsCode: 'HBA86B',
    subjectName: 'Quantitative Research Project',
    teachers: ['M.Meulders'],
  },
  {
    ectsCode: 'HBH85E',
    subjectName: 'Management humain (UC Louvain)',
    teachers: ['T.Verbeke'],
  },
  {
    ectsCode: 'HBH86E',
    subjectName: 'Marketing (UC Louvain)',
    teachers: ['T.Verbeke'],
  },
  {
    ectsCode: 'HBM20C',
    subjectName: 'Environmental Economics (MPM)',
    teachers: ['S.Rousseau'],
  },
];

export default subjects;
