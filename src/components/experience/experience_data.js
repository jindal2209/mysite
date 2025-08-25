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
          "Developed and deployed an AI-powered automated calling system for live order and non live support, reducing support dependency and operational costs by integrating decision trees and real-time system actions.",
          "Built a real-time AI system using LLMs to detect fraud and operational issues in rider-customer calls, saving ₹1 cr/month by proactively identifying fraud, reducing order cancellations, and accelerating support resolution.",
          "Accomplished 50% reduction in avg API latency, by migrating rider support flows from a monolith to a microservice and optimizing CPU and memory usage.",
          "Worked on Zomato weather service. Built the service from scratch. weatherunion.com is powered using this service.",
          "Optimized rider gig flows to reduce churn and effectively manage rider availability during peak and non-peak times.",
          "Led the team in developing and optimizing new features for the Fleet Coach App, migrating all product-related flows to a separate microservice with zero downtime."
        ]
      },
      {
        name: "Software Engineer Intern",
        duration: {
          start_date: new Date(2022, 10),
          end_date: new Date(2023, 3)
        },
        description: [
          "Worked on automating support tickets based on rider history, which helped reduce number of agents and eventually saved costs (₹60 lakhs annually).",
          "Worked on Fleet Coach App. Was a founding member of this application. The applications aims to provide assistance to fleet coaches over mobile to view data of rider and connect with them and eventually reduce rider churn.",
          "Worked on Delivery Logistics Order Service",
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
          'Slashed 90% unnecessary warehouse crowd by implementing a custom calendar for warehouse scheduling.',
          'Reduced 70% of manual installation process by implementing automated integration of customer’s Shopify stores with Shiprocket’s application.'
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
