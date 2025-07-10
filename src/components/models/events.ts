export interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  type: 'conference' | 'workshop' | 'hackathon';
  image: string;
  description: string;
  capacity: number;
  registrationLink: string;
  schedule: {
    time: string;
    activity: string;
  }[];
  speakers?: {
    name: string;
    role: string;
    image: string;
  }[];
  highlights: string[];
}

export const events: Event[] = [
  {
    id: 1,
    title: "AI Research Symposium 2024",
    date: "March 15, 2024",
    time: "9:00 AM - 6:00 PM",
    location: "UFPE Main Auditorium",
    type: "conference",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
    description: "Join us for a day of cutting-edge AI research presentations and discussions with leading researchers.",
    capacity: 300,
    registrationLink: "#",
    schedule: [
      { time: "9:00 AM", activity: "Opening Ceremony" },
      { time: "10:00 AM", activity: "Keynote Speech" },
      { time: "12:00 PM", activity: "Lunch Break" },
      { time: "2:00 PM", activity: "Research Presentations" },
      { time: "5:00 PM", activity: "Panel Discussion" }
    ],
    speakers: [
      {
        name: "Dr. Maria Santos",
        role: "AI Research Director",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400"
      },
      {
        name: "Prof. João Silva",
        role: "Machine Learning Expert",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
      }
    ],
    highlights: [
      "Latest AI Research Trends",
      "Networking Opportunities",
      "Interactive Q&A Sessions",
      "Research Paper Presentations"
    ]
  },
  {
    id: 2,
    title: "Deep Learning Workshop",
    date: "April 5, 2024",
    time: "2:00 PM - 6:00 PM",
    location: "CIn Building, Room 301",
    type: "workshop",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",
    description: "Hands-on workshop covering advanced deep learning techniques and practical implementations.",
    capacity: 50,
    registrationLink: "#",
    schedule: [
      { time: "2:00 PM", activity: "Introduction to Deep Learning" },
      { time: "3:00 PM", activity: "Hands-on Training" },
      { time: "4:30 PM", activity: "Project Implementation" },
      { time: "5:30 PM", activity: "Q&A Session" }
    ],
    highlights: [
      "Practical Exercises",
      "Code Examples",
      "Take-home Projects",
      "Certificate of Completion"
    ]
  },
  {
    id: 3,
    title: "AI Innovation Hackathon",
    date: "May 20-22, 2024",
    time: "All day",
    location: "Porto Digital",
    type: "hackathon",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800",
    description: "48-hour hackathon focused on developing innovative AI solutions for real-world challenges.",
    capacity: 100,
    registrationLink: "#",
    schedule: [
      { time: "Day 1", activity: "Team Formation & Problem Statement" },
      { time: "Day 2", activity: "Development & Mentoring" },
      { time: "Day 3", activity: "Final Presentations & Awards" }
    ],
    highlights: [
      "Cash Prizes",
      "Industry Mentorship",
      "Networking Events",
      "Project Showcase"
    ]
  }
];