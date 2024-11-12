
export const McqQuestions = [
    {
        // 1
        Question:'What does WHMIS stand for?',
        Options:[
            'Workplace Hazardous Material Information System',
            'Workplace Health Management Information System',
            'Workplace Hazardous Material Identification Standards',
        ],
        Answer:'Workplace Hazardous Material Information System',
        Check:'',
    },
    {
        // 2
        Question:'What is the primary purpose of WHMIS?',
        Options:[
            'To provide job opportunities for forklift operators',
            'To prevent workplace injuries and promote safe handling of hazardous materials',
            'To certify workers in hazardous materials management',
            'To standardize safety equipment in the workplace'
        ],
        Answer:'To prevent workplace injuries and promote safe handling of hazardous materials',
        Check:'',
    },
    {
        // 3
        Question:'Which document provides details on safe handling, storage, and emergency measures for hazardous materials?',
        Options:[
            'Incident Report',
            'Safety Data Sheet (SDS)',
            'Work Schedule',
        ],
        Answer:'Safety Data Sheet (SDS)',Check:'',
    },
    {
        // 4
        Question:' Which of the following are key components of WHMIS?',
        Options:[
            'WHMIS labels and pictograms only',
            'Safety Data Sheets (SDS) only',
            'WHMIS labels, pictograms, and SDS',
            'Training requirements only',
        ],
        Answer:'WHMIS labels, pictograms, and SDS',Check:'',
    },
    {
        // 5
        Question:'True or False: If a material is unlabeled, it is safe to assume it is not hazardous.',
        Options:[
            'True',
            'False',
        ],
        Answer:'False',Check:'',
    },
    {
        // 6
        Question:' What should you do if hazardous materials come into contact with your skin?',
        Options:[
            'Continue working and wash at the end of your shift',
            'Wash immediately with water and seek medical attention if needed',
            'Wipe it off with a cloth',
        ],
        Answer:'Wash immediately with water and seek medical attention if needed',Check:'',
    },
    {
        // 7
        Question:'What is the first thing you should do in case of a spill involving hazardous materials?',
        Options:[
            'Attempt to clean it up immediately without protective equipment',
            'Evacuate the area and report the spill to a supervisor',
            'Ignore it and wait for another person to handle it',
        ],
        Answer:'Evacuate the area and report the spill to a supervisor',Check:'',
    },
    {
        // 8
        Question:'Which of the following PPE (Personal Protective Equipment) might be required when handling hazardous materials?',
        Options:[
            'Safety goggles',
            'Gloves',
            'Both safety goggles and gloves',
            'None'
        ],
        Answer:'Both safety goggles and gloves',Check:'',
    },{
        // 9
        Question:'If you improperly handle a substance with this corrosive pictogram, what could happen?',
        Options:[
            'The substance might catch fire immediately',
            'You could suffer skin burns or eye damage, and it could corrode metal surfaces',
            'You might develop flu-like symptoms',
            'It could freeze on contact with skin'
        ],
        Answer:'You could suffer skin burns or eye damage, and it could corrode metal surfaces',Check:'',
    },{
        // 10
        Question:'If you need to protect your hands from chemicals, which type of PPE should you use?',
        Options:[
            'Earplugs',
            'Chemical-resistant gloves',
            'Safety googles',
            'Steel-toed boots'
        ],
        Answer:'Chemical-resistant gloves',Check:'',
    },
];


export const pictograms = [
    {
        name:'Flammable',
        iconSource:"/whmis-quiz/Icons/2.png",Check:'',
    },{
        name:'Environmental Hazard',
        iconSource:"/whmis-quiz/Icons/9.png",Check:'',
    },{
        name:'Oxidizing Material',
        iconSource:"/whmis-quiz/Icons/3.png",Check:'',
    },{
        name:'Acute Toxicity or Fatal Poisonous',
        iconSource:"/whmis-quiz/Icons/6.png",Check:'',
    },{
        name:'Corrosive Material',
        iconSource:"/whmis-quiz/Icons/5.png",Check:'',
    },{
        name:'Explosive Hazard ',
        iconSource:"/whmis-quiz/Icons/1.png",Check:'',
    },{
        name:'Health Hazard',
        iconSource:"/whmis-quiz/Icons/7.png",Check:'',
    },{
        name:'Bio Hazardous Infectious Materials',
        iconSource:"/whmis-quiz/Icons/10.png",Check:'',
    },
]