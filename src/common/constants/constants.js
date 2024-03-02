
export const navLinks = [
    {
        title: "home",
        link: "/"
    },
    {
        title: "about us",
        link: "/about",
    },
    {
        title: "conference",
        link: "#",
        moreLinks: [
            {
                title: "organizers",
                link: "/organizers",
                hr: true
            },
            {
                title: "advisory board",
                link: "/advisoryBoard",
                hr: true
            },
            {
                title: "Important dates",
                link: "/importantDates",
                hr: false
            },
        ]
    },
    {
        title: "Registration",
        link: "/registration",
    },
    {
        title: "paper submission",
        link: "#",
        moreLinks: [
            {
                title: "submission links",
                link: "https://docs.google.com/forms/d/1-nWzaZVDC7RaaGWpGmzI0XJjjGVsXdQ-2LbB5b5WIJ4/viewform?edit_requested=true",
                hr: true,
                external: true
            },
            {
                title: "call for paper",
                link: "/callForPapers",
                hr: true
            },
            {
                title: "submission guidelines",
                link: "/submissionGuidelines",
                hr: false
            },
        ]
    },
    {
        title: "Contact us",
        link: "/contact"
    },
]

export const aboutUsData = [
    {
        title: "About the Conference",
        desc: "National Conference on Interdisciplinary Perspectives of Emerging Trends in Computing (NCIPETC 2024). NCIPETC 2024 aims to provide an excellent forum for uniting academicians and experts from industries to share knowledge and research in the field of computing. The conference also serves as  a dynamic platform for researchers, scientists, academicians and students to exchange their ideas in all aspects of computing including emerging technologies, methodologies and applications. Concepts and products that develop new ideas or theories addressing societal challenges, promoting sustainability and contributing to the advancement of science, engineering, healthcare, business and other domains are encouraged. All the selected papers will be published in conference proceedings. A few selected papers accepted after peer review  will be published in an indexed journal.",
        img: "/images/aboutconf.png",
        reverse: false
    },
    {
        title: "about carmel college of engineering & technology",
        desc: "Carmel College of Engineering & Technology (CCET) is owned and managed by St. Joseph's Carmel Educational & Charitable Trust of CMI. CCET is a self-financing college approved by AICTE and affiliated to APJ Abdul Kalam Technological University, Kerala which offers 4 year B.Tech degree courses in Civil Engineering, Mechanical Engineering, Electrical and Electronics Engineering and Computer Science and Engineering.",
        img: "/images/aboutclg.png",
        reverse: true
    },
    {
        title: "About department",
        desc: "The Department of CSE in Carmel College of Engineering and Technology was established in 2017 with a maximum intake of 60 students per year. Department plays a key role to enhance the learning and technical competence of students in the field of Computer Science & Engineering. Workshops and hands-on sessions are conducted on a regular basis. The Department frequently conducts seminars and invited talks with the support of experienced resource persons from the industry and well known academic institutions. Department has signed MoU with various IT legends and International Universities.",
        img: "/images/dep.png",
        reverse: false
    }
]

export const orgCommitte = {
    coordinators: [
        {
            id: 1,
            name: "Dr M. S. Sujithra",
            desgn: "Assistant Professor",
            dep: " Department of CSE, CCET",
            img: "/committe/sujithra_ms.jpg"
        },
        {
            id: 2,
            name: "Ms V. L. Divya",
            desgn: "Assistant Professor",
            dep: " Department of CSE, CCET",
            img: "/committe/divya.jpg"
        },
    ],
    members: [
        {
            id: 1,
            name: "Dr Reji R",
            desgn: "Associate Professor",
            dep: " Department of CSE, CCET",
            img: "/committe/reji.jpg"
        },
        {
            id: 2,
            name: "Mr Arun P. Kuttappan",
            desgn: "Assistant Professor",
            dep: " Department of CSE, CCET",
            img: "/committe/arun_k.jpg"
        },
        {
            id: 3,
            name: "Ms Josemary A",
            desgn: "Assistant Professor",
            dep: " Department of CSE, CCET",
            img: "/committe/josemary.jpg"
        },
        {
            id: 4,
            name: "Ms Sreeja Nair M. P",
            desgn: "Assistant Professor",
            dep: " Department of CSE, CCET",
            img: "/committe/sreeja.jpg"
        },
        {
            id: 5,
            name: "Ms Aparna A. S",
            desgn: "Assistant Professor",
            dep: " Department of CSE, CCET",
            img: "/committe/aparna_a_s.jpg"
        },
        {
            id: 6,
            name: "Ms Preethy Prabhakar",
            desgn: "Assistant Professor",
            dep: " Department of CSE, CCET",
            img: "/committe/preethy.jpg"
        },
        {
            id: 7,
            name: "Dr Remya R",
            desgn: "Assistant Professor",
            dep: " Department of CSE, CCET",
            img: "/committe/remya.jpg"
        },
        {
            id: 8,
            name: "Ms Vani V. Prakash",
            desgn: "Assistant Professor",
            dep: " Department of CSE, CCET",
            img: "/committe/vani.jpg"
        },
        {
            id: 9,
            name: "Ms Anusmitha A",
            desgn: "Assistant Professor",
            dep: " Department of CSE, CCET",
            img: "/committe/Anusmitha_A.jpg"
        },
    ]
}

export const advisors = [
    {
        id: 1,
        name: "Prof. Dr. P. Sojan Lal",
        desgn: "Dean School of Computing and Strategic Planning",
        dep: "Adi Shankara Insitute of Engineering & Technology (ASIET), Kalady",
        // qualfs: "M.Tech, MBA (UK), DBA(USA),I ENG(UK), Ph.D, FIE(India)",
        // desgn: "Professor",
    },
    {
        id: 2,
        name: "Prof. Dr.Subhasri Duttagupta",
        desgn: "Professor",
        dep: " Department of Computer Science and Engineering",
        clg1: "School of Computing, Amritapuri",
        more:true
    },
    {
        id: 3,
        name: "Prof. Dr. Preetha Mathew K",
        desgn: "Professor",
        dep: " Department of Computer Science and Engineering",
        clg1:"Cochin University College of Engineering, Kuttanad",
        more: true
    },
    {
        id: 4,
        name: "Prof. Dr. Susan Jacob",
        desgn: "Professor and Head",
        dep: " Department of Civil Engineering",
        clg1: "Carmel College of Engineering and Technology, Punnapra, Alappuzha",
        more: true
    },
    {
        id: 5,
        name: "Prof. Dr. Jayaprasad G",
        desgn: "Professor and Head",
        dep: " Department of Mechanical Engineering",
        clg1: "Carmel College of Engineering and Technology, Punnapra, Alappuzha",
        more: true
    },
    {
        id: 6,
        name: "Dr. G Muruganath",
        desgn: "Professor and Head",
        dep: "Department of Electrical and Electronics Engineering",
        clg1: "Ahalia School of Engineering & Technology, Palakkad",
        more: true
    },
    {
        id: 10,
        name: "Dr. Deepthi Sasidharan",
        desgn: "Associate Professor,",
        dep: "Department of Information Technology",
        clg1: "Government Engineering College, Barton Hill, Thiruvananthapuram",
        more: true
    },
    {
        id: 7,
        name: "Dr. Salaji S",
        desgn: "Associate Professor,",
        dep: " Department of Mechanical Engineering",
        clg1: "Cochin University College of Engineering, Kuttanad",
        more:true
    },
    {
        id: 8,
        name: "Prof. Sarath K. S",
        desgn: "Head,",
        dep: " Department of Electrical and Electronics Engineering",
        clg1: "Carmel College of Engineering and Technology, Punnapra, Alappuzha",
        more: true
    },
    {
        id: 9,
        name: "Prof. Syam Gopi",
        desgn: "Associate Professor,",
        dep: "Department of Computer Science and Engineering",
        clg1: "Amal Jyothi College of Engineering, Kanjirappally",
        more: true
    },
    {
        id: 11,
        name: "Dr. Esther Daniel",
        desgn: "Associate Professor,",
        dep: "Department of Computer Science and Engineering",
        clg1: "Karunya Institue of Technology and Science, Coimbatore",
        more: true
    },
]

export const topics = [
    {
        title: "next generation networks",
        odd: true
    },
    {
        title: "neural networks",
        odd: false
    },
    {
        title: "network security",
        odd: true
    },
    {
        title: "ethical hacking",
        odd: false
    },
    {
        title: "distributed systems and parallel processing",
        odd: true
    },
    {
        title: "artificial intelligence",
        odd: false
    },
    {
        title: "image processing",
        odd: true
    },
    {
        title: "bigdata analytics",
        odd: false
    },
    {
        title: "internet of things",
        odd: true
    },
    {
        title: "cyber security",
        odd: false
    },
    {
        title: "machince learning",
        odd: true
    },
    {
        title: "block chain",
        odd: false
    },
    {
        title: "ubiquitous computing",
        odd: true
    },
]

export const authorGuidelines = [
    "Paper submissions should be in MS-Word / PDF",
    "Papers submitted to NCIPETC24 should be original and not published or submitted to any other conference / journal",
    "Papers must be clearly presented in English language",
    "Submissions will be selected based on their originality, timeliness, significance, relevance, and clarity of presentation."
]

export const status = [
    "Accepted",
    "May be accepted with Minor/Major changes",
    "Rejected"
]

export const documents = [
    "Final camera ready paper (It should be in editable format either word or latex file) ",
    "Copyright agreement form (It should be duly signed by the corresponding author with date).",
    "Payment Proof (Anyone of the author can pay - Registration fee per paper only) "
]

export const committe = [
    {
        id: 1,
        name: "REV. Fr Thomas Choolaparampil CMI",
        desgn: "Chairman, CCET",
        img: "/committe/fr_thomas.svg",
        role: "chief Patron"
    },
    {
        id: 1,
        name: "REV. Fr Justin Alukkal CMI",
        desgn: "Director, CCET",
        img: "/committe/fr_justin.svg",
        role: "patron"
    },
    {
        id: 2,
        name: "Dr Paul K. Mathew",
        desgn: "Principal, CCET",
        img: "/committe/paul_k_mathew.svg",
        role: "patron"
    },
    {
        id: 1,
        name: "Prof. Anoop R. S",
        desgn: "Head, Department of CSE, CCET",
        img: "/committe/anoop_rs.svg",
        role: "convener"
    },
]

export const whocanApply = [
    {
        title: "UG/PG students",
        fee: 1000
    },
    {
        title: "research scholars",
        fee: 2000
    },
    {
        title: "Academicians/Professionals",
        fee: 2500
    },
    {
        title: "attendees",
        fee: 500
    },
    {
        title: "accompanying co-author",
        fee: 250
    }
]
