export const data = [
  {
    company_name: 'Zomato',
    logo_path: "/zomato.jpg",
    location: "Gurugram, Haryana, India · On-site",
    total_duration: {
      start_date: new Date(2022, 10),
      end_date: new Date()
    },
    positions: [
      {
        name: "Software Engineer - I",
        duration: {
          start_date: new Date(2023, 4),
          end_date: new Date()
        },
        description: [
          "Working on Fleet Coach App. Leading the team and implementing new product features and optimizing them."
        ]
      },
      {
        name: "Software Engineer Intern",
        duration: {
          start_date: new Date(2022, 10),
          end_date: new Date(2022, 3)
        },
        description: [
          "Worked on Delivery Logistics Order Service",
          "Worked on automating support tickets based on rider history, which helped reduce number of agents and eventually saved cost.",
          "Worked on Fleet Coach App. Was a founding member of this application. The applications aims to provide assistance to fleet coaches over mobile to view data of rider and connect with them and eventually reduce rider churn."
        ]
      }
    ],
  },
  {
    company_name: 'Shiprocket',
    logo_path: "/shiprocket.jpg",
    location: "Gurugram, Haryana, India · Remote",
    total_duration: {
      start_date: new Date(2022, 0),
      end_date: new Date(2022, 1)
    },
    positions: [
      {
        name: "Software Engineer Intern",
        duration: {
          start_date: new Date(2022, 0),
          end_date: new Date(2022, 1)
        },
        description: [
          'Implemented custom calendar for scheduling slots which will remove the unnecessary crowd at the warehouses by 90% and help control the number of employees at warehouses.',
          'Worked on automated integration of customer’s shopify stores with shiprocket application which will remove the manual installation process by 70% and reduce workload on sales team by 50%'
        ]
      }
    ],
  },
  {
    company_name: 'Corefactors',
    logo_path: "/corefactors.jpg",
    location: "Banglore, Karnataka, India · Remote",
    total_duration: {
      start_date: new Date(2021, 7),
      end_date: new Date(2021, 9)
    },
    positions: [
      {
        name: "Junior Associate Enginner Intern",
        duration: {
          start_date: new Date(2021, 7),
          end_date: new Date(2022, 9)
        },
        description: [
          'Worked with team on design and development of Customer relationship management Teleduce built using Django.',
          'Implemented UI based feature to make application more interactive which increased customer base by 10%.',
          'Developed a customer portal application from which customer can raise tickets and connect with the agent to resolve issues which reduced the manual work by 20%',
          'Got to learn about Django, cloud infrastructure, CI/CD pipelines, and lead management in CRMs.'
        ]
      }
    ],
  },
];
