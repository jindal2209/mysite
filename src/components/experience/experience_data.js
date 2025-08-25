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
        name: "Software Engineer - II",
        duration: {
          start_date: new Date(2025, 6),
          end_date: new Date()
        },
        description: [
          "Working on rider scoring and medal system based on performance, offering riders clear visibility into their work and motivating them to improve with extra benefits tied to their medal status."
        ]
      },
      {
        name: "Software Engineer - I",
        duration: {
          start_date: new Date(2023, 4),
          end_date: new Date(2025, 5)
        },
        description: [
          "Worked on Fleet Coach App. Lead the team and implemented new product features and optimized them. Migrated all flows related to this app to a separate microservice with 0 downtime.",
          "Worked on Zomato weather service. Built the service from scratch. weatherunion.com is powered using this service.",
          "Working on migration of rider support flows from monolith to microservice. Optimizing service to reduce CPU and memory util. Working on fraud detection during live order using AI prompt engineering.",
          "Working on rider gigs related flows to optimize rider churn and rider availability."
        ]
      },
      {
        name: "Software Engineer Intern",
        duration: {
          start_date: new Date(2022, 10),
          end_date: new Date(2023, 3)
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
