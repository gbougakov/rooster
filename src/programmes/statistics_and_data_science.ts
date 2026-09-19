// Master of Statistics and Data Science (on campus), 2026–2027 entrants or later.
// All profiles, stages 1 and 2. Retrieved 2026-09-19.
// Source: https://onderwijsaanbod.kuleuven.be/opleidingen/e/SC_58938898?faseIds=1%2C2
// Empty teacher lists indicate that no instructors are listed in the catalogue.
const subjects = [
  // Teaching-activity codes used by TimeEdit differ from the parent course codes.
  // Verified in the source catalogue's activity sets on 2026-09-20.
  {
    ectsCode: 'D0M62A',
    subjectName: 'Multivariate Statistics',
    teachers: ['M.Meulders'],
  },
  {
    ectsCode: 'G0A21A',
    subjectName: 'Statistical Software',
    teachers: ['A.Carbonez', 'M.Luyts'],
  },
  {
    ectsCode: 'G0Z53A',
    subjectName: 'Data Management',
    teachers: ['J.Van den Bussche'],
  },
  {
    ectsCode: 'D0C15A',
    subjectName: 'Macro-finance',
    teachers: ['H.Dewachter'],
  },
  {
    ectsCode: 'D0C41A',
    subjectName: 'Machine Learning and Econometrics for causal Inference',
    teachers: ['J.Beyhum'],
  },
  {
    ectsCode: 'D0M09A',
    subjectName: 'Economics of European Integration',
    teachers: ['C.Pröbsting'],
  },
  {
    ectsCode: 'D0M61B',
    subjectName: 'Advanced Econometrics',
    teachers: ['J.Beyhum'],
  },
  {
    ectsCode: 'D0M62C',
    subjectName: 'Multivariate Statistics',
    teachers: ['M.Meulders'],
  },
  {
    ectsCode: 'D0M63B',
    subjectName: 'Advanced Time Series Analysis',
    teachers: ['C.Croux'],
  },
  {
    ectsCode: 'D0N23B',
    subjectName: 'Statistical Modelling',
    teachers: ['G.Claeskens'],
  },
  {
    ectsCode: 'D0R14A',
    subjectName: 'Market Response Models',
    teachers: ['M.Dekimpe'],
  },
  {
    ectsCode: 'D0R18A',
    subjectName: 'Project Management and Scheduling',
    teachers: ['E.Demeulemeester', 'H.Vermuyten'],
  },
  {
    ectsCode: 'D0R19A',
    subjectName: 'Simulation Theory and Applications',
    teachers: ['W.Verbeke', 'I.Van Nieuwenhuyse'],
  },
  {
    ectsCode: 'D0S06B',
    subjectName: 'Advanced Analytics in a Big Data World',
    teachers: ['S.vanden Broucke'],
  },
  {
    ectsCode: 'D0S91A',
    subjectName: 'Advanced Applied Econometrics',
    teachers: ['D.Czarnitzki'],
  },
  {
    ectsCode: 'F0TU1A',
    subjectName: 'Methods of Corpus Linguistics',
    teachers: ['D.Speelman'],
  },
  {
    ectsCode: 'G00C8A',
    subjectName: 'Text Mining',
    teachers: ['M.Luyts'],
  },
  {
    ectsCode: 'G00L3A',
    subjectName: 'Research Project 1',
    teachers: ['J.Segers'],
  },
  {
    ectsCode: 'G00L4A',
    subjectName: 'Research Project 2',
    teachers: ['J.Segers'],
  },
  {
    ectsCode: 'G00Q6A',
    subjectName: 'Concepts of Time-to-event Data Analysis',
    teachers: ['I.Van Keilegom'],
  },
  {
    ectsCode: 'G00Q7A',
    subjectName: 'Advanced Time-to-event Data Analysis',
    teachers: ['I.Van Keilegom'],
  },
  {
    ectsCode: 'G00Q8A',
    subjectName: 'Rank-based Methods and Resampling',
    teachers: [],
  },
  {
    ectsCode: 'G00Q9A',
    subjectName: 'Internship, Semester 1',
    teachers: ['I.Van Keilegom'],
  },
  {
    ectsCode: 'G00R0A',
    subjectName: 'Internship, Semester 2',
    teachers: ['I.Van Keilegom'],
  },
  {
    ectsCode: 'G00R1A',
    subjectName: 'Epidemiology DL',
    teachers: ['L.Casas Ruiz'],
  },
  {
    ectsCode: 'G00R2A',
    subjectName: 'Extreme Value Analysis',
    teachers: ['J.Segers'],
  },
  {
    ectsCode: 'G0A16A',
    subjectName: 'Master\'s Thesis',
    teachers: ['J.Segers'],
  },
  {
    ectsCode: 'G0A17A',
    subjectName: 'Fundamental Concepts of Statistics',
    teachers: ['J.Segers'],
  },
  {
    ectsCode: 'G0A18A',
    subjectName: 'Generalized Linear Models',
    teachers: ['A.Alonso Abad'],
  },
  {
    ectsCode: 'G0A21C',
    subjectName: 'Statistical Software',
    teachers: ['A.Carbonez', 'M.Luyts'],
  },
  {
    ectsCode: 'G0A23B',
    subjectName: 'Nonparametric Smoothing',
    teachers: [],
  },
  {
    ectsCode: 'G0A35A',
    subjectName: 'Longitudinal Data Analysis',
    teachers: ['G.Verbeke', 'G.Molenberghs'],
  },
  {
    ectsCode: 'G0A62B',
    subjectName: 'Bayesian Data Analysis II',
    teachers: [],
  },
  {
    ectsCode: 'G0A63B',
    subjectName: 'Optimization and Numerical Methods',
    teachers: ['G.Molenberghs', 'F.Tuerlinckx'],
  },
  {
    ectsCode: 'G0A66A',
    subjectName: 'Survey Methodology',
    teachers: ['C.Meeusen'],
  },
  {
    ectsCode: 'G0B13A',
    subjectName: 'Advanced Statistical Methods',
    teachers: ['S.Van Aelst'],
  },
  {
    ectsCode: 'G0B16A',
    subjectName: 'Robust Statistics',
    teachers: ['M.Hubert', 'S.Van Aelst'],
  },
  {
    ectsCode: 'G0B65B',
    subjectName: 'Structural Equations',
    teachers: ['B.Meuleman'],
  },
  {
    ectsCode: 'G0B66A',
    subjectName: 'Statistical Consulting',
    teachers: ['G.Molenberghs', 'M.Luyts', 'G.Verbeke'],
  },
  {
    ectsCode: 'G0B68A',
    subjectName: 'Experimental Design',
    teachers: ['P.Goos', 'A.Strouwen'],
  },
  {
    ectsCode: 'G0B69A',
    subjectName: 'Concepts of Clinical Trials',
    teachers: ['F.Beckers', 'F.Tibaldi'],
  },
  {
    ectsCode: 'G0B70A',
    subjectName: 'Chemometrics',
    teachers: ['W.Saeys'],
  },
  {
    ectsCode: 'G0B72A',
    subjectName: 'Sampling Theory',
    teachers: ['G.Molenberghs'],
  },
  {
    ectsCode: 'G0B74A',
    subjectName: 'Concepts of Bayesian Data Analysis',
    teachers: ['C.Faes'],
  },
  {
    ectsCode: 'G0B75A',
    subjectName: 'Meta Analysis',
    teachers: ['W.Van Den Noortgate'],
  },
  {
    ectsCode: 'G0B76A',
    subjectName: 'Concepts of Multilevel, Longitudinal and Mixed Models',
    teachers: ['G.Verbeke'],
  },
  {
    ectsCode: 'G0M78A',
    subjectName: 'Clinical Trials DL',
    teachers: [],
  },
  {
    ectsCode: 'G0M80C',
    subjectName: 'Modelling Infectious Diseases DL',
    teachers: [],
  },
  {
    ectsCode: 'G0P63B',
    subjectName: 'Probability and Measure',
    teachers: ['A.Wennman'],
  },
  {
    ectsCode: 'G0P65C',
    subjectName: 'Stochastic Models',
    teachers: ['J.De Spiegeleer'],
  },
  {
    ectsCode: 'G0Q20A',
    subjectName: 'Fundamentals of Financial Mathematics',
    teachers: ['W.Schoutens'],
  },
  {
    ectsCode: 'G0R44A',
    subjectName: 'Science Communication and Outreach',
    teachers: ['K.Kolenberg'],
  },
  {
    ectsCode: 'G0R50A',
    subjectName: 'Science and Sustainability: a Socio-Ecological Approach',
    teachers: ['G.Ceulemans', 'K.Biedenkopf', 'M.Craps', 'N.Severijns', 'M.Smet'],
  },
  {
    ectsCode: 'G0R72A',
    subjectName: 'Data Visualization in Data Science',
    teachers: ['J.Aerts'],
  },
  {
    ectsCode: 'G0U73A',
    subjectName: 'Official Statistics',
    teachers: ['G.Molenberghs', 'R.Beerten', 'A.Deceulaer'],
  },
  {
    ectsCode: 'G0U74A',
    subjectName: 'Internship',
    teachers: ['A.Carbonez'],
  },
  {
    ectsCode: 'G0U81B',
    subjectName: 'Analysis of Sequencing Data DL',
    teachers: [],
  },
  {
    ectsCode: 'G0U82B',
    subjectName: 'Analysis of High Dimensional Omics Data DL',
    teachers: [],
  },
  {
    ectsCode: 'G0V98A',
    subjectName: 'Advanced Topics in Clinical Trials DL',
    teachers: [],
  },
  {
    ectsCode: 'G0V99A',
    subjectName: 'Environmental Epidemiology DL',
    teachers: [],
  },
  {
    ectsCode: 'G0W01A',
    subjectName: 'Computer Intensive Methods DL',
    teachers: [],
  },
  {
    ectsCode: 'G0W02C',
    subjectName: 'Spatial Epidemiology DL',
    teachers: [],
  },
  {
    ectsCode: 'G0W03A',
    subjectName: 'Microbial Risk Assessment DL',
    teachers: [],
  },
  {
    ectsCode: 'G0W06B',
    subjectName: 'Analysis of Protein Expression DL',
    teachers: [],
  },
  {
    ectsCode: 'G0W10A',
    subjectName: 'Log Linear Analysis, Latent Class Analysis and Logistic Regression',
    teachers: ['F.De Keulenaer'],
  },
  {
    ectsCode: 'G0Z39B',
    subjectName: 'Machine Learning Operations (MLOps) for Data Science',
    teachers: ['M.Luyts', 'J.De Spiegeleer'],
  },
  {
    ectsCode: 'G0Z50A',
    subjectName: 'Linear Models',
    teachers: ['A.Alonso Abad', 'T.Neyens'],
  },
  {
    ectsCode: 'G0Z53C',
    subjectName: 'Data Management',
    teachers: ['J.Van den Bussche'],
  },
  {
    ectsCode: 'G0Z54A',
    subjectName: 'Short Internship, Semester 1',
    teachers: ['I.Van Keilegom'],
  },
  {
    ectsCode: 'G0Z78A',
    subjectName: 'Short Internship, Semester 2',
    teachers: ['I.Van Keilegom'],
  },
  {
    ectsCode: 'G9X29A',
    subjectName: 'Data Mining and Neural Networks',
    teachers: ['J.Suykens'],
  },
  {
    ectsCode: 'H00Y2A',
    subjectName: 'Privacy and Big Data',
    teachers: ['R.Galvez Vizcaino'],
  },
  {
    ectsCode: 'H01F5A',
    subjectName: 'Probabilistisch ontwerpen',
    teachers: ['E.Reynders'],
  },
  {
    ectsCode: 'H02C1A',
    subjectName: 'Machine Learning and Inductive Inference',
    teachers: ['H.Blockeel'],
  },
  {
    ectsCode: 'H02D1A',
    subjectName: 'Genetic Algorithms and Evolutionary Computing',
    teachers: ['N.Vannieuwenhoven'],
  },
  {
    ectsCode: 'H02D2A',
    subjectName: 'Uncertainty in Artificial Intelligence',
    teachers: ['L.De Raedt', 'T.De Laet'],
  },
  {
    ectsCode: 'H02D3A',
    subjectName: 'Support Vector Machines: Methods and Applications',
    teachers: ['J.Suykens'],
  },
  {
    ectsCode: 'H02H4A',
    subjectName: 'Multi-Agent Systems',
    teachers: ['J.Joubert'],
  },
  {
    ectsCode: 'H02H6B',
    subjectName: 'Bio-informatics',
    teachers: ['Y.Moreau'],
  },
  {
    ectsCode: 'H03E3A',
    subjectName: 'Optimization',
    teachers: ['P.Patrinos'],
  },
  {
    ectsCode: 'H03F7A',
    subjectName: 'Wavelets with Applications in Signal and Image Processing',
    teachers: ['D.Huybrechs'],
  },
  {
    ectsCode: 'H03I2A',
    subjectName: 'Biomedical Data Processing',
    teachers: ['M.De Vos', 'A.Bertrand'],
  },
  {
    ectsCode: 'H05I7A',
    subjectName: 'Stochastic Signal and System Analysis',
    teachers: ['H.Van hamme'],
  },
  {
    ectsCode: 'H09J2A',
    subjectName: 'Image Analysis and Understanding',
    teachers: ['T.Tuytelaars', 'M.Proesmans'],
  },
  {
    ectsCode: 'H0T26A',
    subjectName: 'Analysis of Large Scale Social Networks',
    teachers: ['B.Thijs'],
  },
  {
    ectsCode: 'I0K61A',
    subjectName: 'Geospatial Technologies',
    teachers: ['S.Lhermitte'],
  },
  {
    ectsCode: 'I0N62B',
    subjectName: 'Geographic Information Systems',
    teachers: ['S.Lhermitte'],
  },
  {
    ectsCode: 'I0O15A',
    subjectName: 'Bioinformatics',
    teachers: ['V.van Noort', 'R.Jelier'],
  },
  {
    ectsCode: 'P0Q45A',
    subjectName: 'Quantitative Psychology',
    teachers: ['W.Vanpaemel'],
  },
  {
    ectsCode: 'P0T59A',
    subjectName: 'Human Brain Imaging: Methods for Research',
    teachers: ['A.Costantino', 'H.Op de Beeck', 'C.Nakatani'],
  },
  {
    ectsCode: 'P0Y20A',
    subjectName: 'Educational Measurement and Effectiveness',
    teachers: ['R.Janssen', 'K.Aesaert', 'E.Pools'],
  },
];

export default subjects;
