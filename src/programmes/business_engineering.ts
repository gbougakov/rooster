const subjects = [
  {
    ectsCode: 'HBA12C',
    subjectName: 'Marketing',
    teachers: ['I.Roozen', 'A.Fairchild']
  },
  {
    ectsCode: 'HBE01E',
    subjectName: 'Mathematics for Business Engineers I',
    teachers: ['A.Maes', 'E.Boeckx', 'J.Ramos González']
  },
  {
    ectsCode: 'HBE01U',
    subjectName: 'Economics I',
    teachers: []
  },
  {
    ectsCode: 'HBE20E',
    subjectName: 'Financial Accounting A (BBEng)',
    teachers: ['S.Vergauwe', 'H.De Groote', 'V.Ghijselinck']
  },
  {
    ectsCode: 'HBE26U',
    subjectName: 'Global Economic History',
    teachers: []
  },
  {
    ectsCode: 'HBA08C',
    subjectName: 'Introduction to Law',
    teachers: ['B.Keirsbilck', 'B.Devolder', 'C.Hiessl']
  },
  {
    ectsCode: 'HBE02E',
    subjectName: 'Mathematics for Business Engineers II',
    teachers: ['W.Goemans', 'A.Maes', 'J.Ramos González', 'S.Van Gulck']
  },
  {
    ectsCode: 'HBE02U',
    subjectName: 'Economics II',
    teachers: []
  },
  {
    ectsCode: 'HBE03U',
    subjectName: 'Introduction to Financial Markets',
    teachers: []
  },
  {
    ectsCode: 'HBE04U',
    subjectName: 'Foundations of Business Information Management',
    teachers: []
  },
  {
    ectsCode: 'HBE21E',
    subjectName: 'Financial Accounting B (BBEng)',
    teachers: ['S.Vergauwe', 'H.De Groote', 'A.Dongo', 'V.Ghijselinck']
  },
  {
    ectsCode: 'HBA10H',
    subjectName: 'Financial Statement Analysis',
    teachers: ['A.Liss']
  },
  {
    ectsCode: 'HBE05U',
    subjectName: 'Microeconomics',
    teachers: []
  },
  {
    ectsCode: 'HBE08E',
    subjectName: 'Probability Theory and Descriptive Statistics',
    teachers: ['S.Van Gulck']
  },
  {
    ectsCode: 'HBE24U',
    subjectName: 'Conceptual Physics with Technical Applications',
    teachers: []
  },
  {
    ectsCode: 'HBN64B',
    subjectName: 'Software Development',
    teachers: ['W.Laurier']
  },
  {
    ectsCode: 'HBE06E',
    subjectName: 'Production and Logistics Management',
    teachers: ['L.De Boeck', 'J.Belien']
  },
  {
    ectsCode: 'HBE06U',
    subjectName: 'Human Resource Management',
    teachers: []
  },
  {
    ectsCode: 'HBE07E',
    subjectName: 'Linear Optimisation',
    teachers: ['J.Belien']
  },
  {
    ectsCode: 'HBE07U',
    subjectName: 'Geopolitics',
    teachers: []
  },
  {
    ectsCode: 'HBE09E',
    subjectName: 'Statistics for Data Science',
    teachers: ['F.Van den Bossche', 'J.Hendrickx']
  },
  {
    ectsCode: 'HBE25U',
    subjectName: 'Electronic Circuits, Systems and Data Processing',
    teachers: []
  },
  {
    ectsCode: 'HBE10U',
    subjectName: 'Ethics and the Economy',
    teachers: []
  },
  {
    ectsCode: 'HBE15E',
    subjectName: 'Econometrics',
    teachers: ['J.Hendrickx']
  },
  {
    ectsCode: 'HBN63B',
    subjectName: 'Business Information Systems',
    teachers: ['S.Poelmans', 'E.Serral Asensio']
  },
  {
    ectsCode: 'HBA17C',
    subjectName: 'Management Accounting',
    teachers: ['A.Hoppe', 'A.Reheul']
  },
  {
    ectsCode: 'HBE08U',
    subjectName: 'Corporate Finance',
    teachers: []
  },
  {
    ectsCode: 'HBE13E',
    subjectName: 'Operations Research',
    teachers: ['L.De Boeck', 'J.Belien', 'H.Vermuyten']
  },
  {
    ectsCode: 'HBE18E',
    subjectName: 'Materials: Properties, Selection and Sustainability',
    teachers: ['K.Van Acker', 'A.Malfliet']
  },
  {
    ectsCode: 'HBE05E',
    subjectName: 'Macroeconomics',
    teachers: ['T.Verbeke']
  },
  {
    ectsCode: 'HBE22E',
    subjectName: 'Macroeconomics (BBEng)',
    teachers: ['T.Verbeke', 'R.Berlinschi']
  },
  {
    ectsCode: 'HBA16A',
    subjectName: 'English 1',
    teachers: ['M.Hulselmans', 'N.Goossens', 'S.Hendrickx', 'E.Pierseaux', 'J.Roelans']
  },
  {
    ectsCode: 'HBA54C',
    subjectName: 'English 2',
    teachers: ['M.Hulselmans', 'N.Goossens', 'S.Hendrickx', 'E.Pierseaux', 'J.Roelans']
  },
  {
    ectsCode: 'HBA30C',
    subjectName: 'French 1',
    teachers: ['M.Baetens', 'H.Cornelus']
  },
  {
    ectsCode: 'HBA31C',
    subjectName: 'French 1 (advanced)',
    teachers: ['J.Hengels']
  },
  {
    ectsCode: 'HBA32C',
    subjectName: 'French 2',
    teachers: ['M.Baetens', 'H.Cornelus', 'J.Hengels']
  },
  {
    ectsCode: 'HBA33C',
    subjectName: 'French 2 (advanced)',
    teachers: ['J.Hengels', 'H.Cornelus']
  },
  {
    ectsCode: 'HBA34C',
    subjectName: 'French 3',
    teachers: ['M.Baetens', 'H.Cornelus']
  },
  {
    ectsCode: 'HBA35C',
    subjectName: 'French 3 (advanced)',
    teachers: ['J.Hengels']
  },
  {
    ectsCode: 'HBA31A',
    subjectName: 'German 1',
    teachers: ['J.Roelans']
  },
  {
    ectsCode: 'HBA32A',
    subjectName: 'German 2',
    teachers: ['J.Roelans']
  },
  {
    ectsCode: 'HBA33A',
    subjectName: 'German 3',
    teachers: ['J.Roelans']
  },
  {
    ectsCode: 'HBA11A',
    subjectName: 'Dutch 1',
    teachers: ['M.Hulselmans']
  },
  {
    ectsCode: 'HBA45C',
    subjectName: 'Dutch 1 (advanced)',
    teachers: ['I.Verhoeven']
  },
  {
    ectsCode: 'HBA12A',
    subjectName: 'Dutch 2',
    teachers: ['I.Verhoeven']
  },
  {
    ectsCode: 'HBA46C',
    subjectName: 'Dutch 2 (advanced)',
    teachers: ['I.Verhoeven']
  },
  {
    ectsCode: 'HBA13A',
    subjectName: 'Dutch 3',
    teachers: ['I.Verhoeven']
  },
  {
    ectsCode: 'HBA47C',
    subjectName: 'Dutch 3 (advanced)',
    teachers: ['I.Verhoeven']
  },
  {
    ectsCode: 'HBA65A',
    subjectName: 'Spanish 1',
    teachers: ['F.Vanoverberghe']
  },
  {
    ectsCode: 'HBA66A',
    subjectName: 'Spanish 2',
    teachers: ['F.Vanoverberghe']
  },
  {
    ectsCode: 'HBA67A',
    subjectName: 'Spanish 3',
    teachers: ['F.Vanoverberghe']
  },
  {
    ectsCode: 'HBE09U',
    subjectName: 'Management and Strategy',
    teachers: []
  },
  {
    ectsCode: 'HBE12E',
    subjectName: 'Business Project',
    teachers: ['K.Pattyn']
  },
  {
    ectsCode: 'D0I62A',
    subjectName: 'Principles of Database Management',
    teachers: ['M.Reusens']
  },
  {
    ectsCode: 'HMH79A',
    subjectName: 'Systems Development and -Economics',
    teachers: ['Y.Wautelet']
  },
  {
    ectsCode: 'HBA49C',
    subjectName: 'Economics of the Single Market',
    teachers: ['E.Poelmans']
  },
  {
    ectsCode: 'D0E32A',
    subjectName: 'Introduction to the Economics of Development',
    teachers: ['L.Heath Milsom']
  },
  {
    ectsCode: 'D0T31A',
    subjectName: 'Industrial Organisation: Theory and Applications',
    teachers: ['J.Seldeslachts']
  },
  {
    ectsCode: 'D0E35A',
    subjectName: 'Labour Economics',
    teachers: ['H.Zillessen']
  },
  {
    ectsCode: 'D0T32A',
    subjectName: 'Economics of Innovation and Intellectual Property',
    teachers: ['D.Czarnitzki', 'M.Pellens']
  },
  {
    ectsCode: 'HBE15U',
    subjectName: 'Seminar in Economic History',
    teachers: []
  },
  {
    ectsCode: 'HBE17U',
    subjectName: 'Public Policy Seminar',
    teachers: []
  },
  {
    ectsCode: 'HBE16U',
    subjectName: 'International Economics',
    teachers: []
  },
  {
    ectsCode: 'HBE18U',
    subjectName: 'Public Economics',
    teachers: []
  },
  {
    ectsCode: 'HBN10T',
    subjectName: 'European Economics',
    teachers: []
  },
  {
    ectsCode: 'HBA01H',
    subjectName: 'International Business',
    teachers: ['A.Sels', 'A.Slangen']
  },
  {
    ectsCode: 'HBA02H',
    subjectName: 'European Institutions',
    teachers: ['A.Pauwels']
  },
  {
    ectsCode: 'HBA20C',
    subjectName: 'Entrepreneurship and Business Planning',
    teachers: ['G.Van Den Eede']
  },
  {
    ectsCode: 'HBA50C',
    subjectName: 'Economics of Monetary Integration',
    teachers: ['R.Berlinschi']
  },
  {
    ectsCode: 'HBA08H',
    subjectName: 'Psychology',
    teachers: ['F.Germeys']
  },
  {
    ectsCode: 'HBA15A',
    subjectName: 'Economic Sociology',
    teachers: ['S.Adriaenssens']
  },
  {
    ectsCode: 'HBA23C',
    subjectName: 'Project Management',
    teachers: ['P.Teirlinck', 'B.Vromans']
  },
  {
    ectsCode: 'HBA28C',
    subjectName: 'Economics and Ethics',
    teachers: ['F.Depoortere']
  },
  {
    ectsCode: 'HBA48C',
    subjectName: 'The Origins and Development of European Integration',
    teachers: ['Y.Segers']
  },
  {
    ectsCode: 'HBA52A',
    subjectName: 'Philosophy',
    teachers: ['I.Verhoeven']
  },
  {
    ectsCode: 'HBA13H',
    subjectName: 'Business Plan',
    teachers: ['I.Claes']
  },
  {
    ectsCode: 'HBH04H',
    subjectName: 'Europese instellingen',
    teachers: ['A.Pauwels']
  },
  {
    ectsCode: 'HBH71E',
    subjectName: 'Ondernemerschap en business planning',
    teachers: ['I.Claes']
  },
  {
    ectsCode: 'HBH22E',
    subjectName: 'Internationale economie',
    teachers: ['K.De Bruyne']
  },
  {
    ectsCode: 'HBH78E',
    subjectName: 'Maatschappelijk verantwoord ondernemen',
    teachers: ['I.Molderez']
  },
  {
    ectsCode: 'D0R13A',
    subjectName: 'Consumer Behaviour',
    teachers: ['B.De Langhe']
  },
  {
    ectsCode: 'D0R17A',
    subjectName: 'Supply Chain Management',
    teachers: ['M.Udenio Castro']
  },
  {
    ectsCode: 'D0T27A',
    subjectName: 'Capital Investment Policy',
    teachers: ['F.Hoffmann', 'M.Mariathasan']
  },
  {
    ectsCode: 'D0T33A',
    subjectName: 'Organizational Behaviour',
    teachers: ['N.Dries']
  },
  {
    ectsCode: 'E0H48A',
    subjectName: 'Systems Thinking in Biotech Development',
    teachers: ['N.Vandaele', 'C.Decouttere', 'J.Neyts']
  },
  {
    ectsCode: 'HBE20U',
    subjectName: 'Corporate Communication and Public Relations',
    teachers: []
  },
  {
    ectsCode: 'HBE19U',
    subjectName: 'Intercultural Communication',
    teachers: []
  },
  {
    ectsCode: 'HBE21U',
    subjectName: 'International Communications',
    teachers: []
  },
  {
    ectsCode: 'HBE27U',
    subjectName: 'Sociology of Markets and Organizations',
    teachers: []
  },
  {
    ectsCode: 'HBE22U',
    subjectName: 'Sociologie',
    teachers: []
  },
  {
    ectsCode: 'HBN09T',
    subjectName: 'Théorie des jeux',
    teachers: []
  },
  {
    ectsCode: 'HBE23U',
    subjectName: 'Economie publique',
    teachers: []
  },
  {
    ectsCode: 'HBN11T',
    subjectName: 'Questions spéciales de droit économique',
    teachers: []
  },
  {
    ectsCode: 'D0E59A',
    subjectName: 'Internship Bachelor',
    teachers: ['K.Antonio', 'S.Hoofdt']
  },
  {
    ectsCode: 'D0E54A',
    subjectName: 'Short Mobility Economics and Business (Bachelor)',
    teachers: ['J.Van Biesebroeck', 'V.Geers', 'S.Steijleman']
  },
  {
    ectsCode: 'D0E60A',
    subjectName: 'Internship Bachelor',
    teachers: ['K.Antonio', 'S.Hoofdt']
  },
  {
    ectsCode: 'D0S32A',
    subjectName: 'Short Mobility Economics and Business (Bachelor)',
    teachers: ['J.Van Biesebroeck', 'V.Geers', 'S.Steijleman']
  }
];

export default subjects;