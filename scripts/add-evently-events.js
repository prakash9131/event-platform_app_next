// Script to add the exact 12 events from Evently website
// Run this in your browser console on your localhost:3000 page

const eventlyEvents = [
  {
    title: "Coding for Kids Bootcamp",
    description: "Learn programming fundamentals in a fun, interactive environment designed for young minds.",
    location: "Online",
    imageUrl: "/assets/images/placeholder.png",
    startDateTime: "2024-11-18T09:00:00",
    endDateTime: "2024-11-18T17:00:00",
    price: "10",
    isFree: false,
    url: "https://example.com",
    categoryName: "Online Workshop"
  },
  {
    title: "Dog Lovers' Winter Walk",
    description: "Join fellow dog enthusiasts for a scenic winter walk through the park.",
    location: "Central Park",
    imageUrl: "/assets/images/placeholder.png", 
    startDateTime: "2024-12-09T03:00:00",
    endDateTime: "2024-12-09T05:00:00",
    price: "0",
    isFree: true,
    url: "",
    categoryName: "Social Event"
  },
  {
    title: "Book Lovers' Book Swap",
    description: "Bring your favorite books and discover new ones in our community book exchange.",
    location: "Community Center",
    imageUrl: "/assets/images/placeholder.png",
    startDateTime: "2024-12-03T10:00:00",
    endDateTime: "2024-12-03T12:00:00",
    price: "0",
    isFree: true,
    url: "",
    categoryName: "Social Event"
  },
  {
    title: "Winter Photography Walk",
    description: "Capture the beauty of winter landscapes with professional photography tips.",
    location: "Mountain Trail",
    imageUrl: "/assets/images/placeholder.png",
    startDateTime: "2024-12-02T02:00:00",
    endDateTime: "2024-12-02T06:00:00",
    price: "30",
    isFree: false,
    url: "https://example.com",
    categoryName: "Photography"
  },
  {
    title: "Sunday Farmers Market & Craft Fair",
    description: "Fresh local produce, handmade crafts, and community vendors.",
    location: "Town Square",
    imageUrl: "/assets/images/placeholder.png",
    startDateTime: "2024-11-17T15:00:00",
    endDateTime: "2024-11-17T19:00:00",
    price: "0",
    isFree: true,
    url: "",
    categoryName: "Food & Drink"
  },
  {
    title: "Blockchain for Beginners",
    description: "Learn the basics of blockchain technology and cryptocurrency in this online workshop.",
    location: "Online",
    imageUrl: "/assets/images/placeholder.png",
    startDateTime: "2024-11-23T18:00:00",
    endDateTime: "2024-11-23T20:00:00",
    price: "0",
    isFree: true,
    url: "https://zoom.us/example",
    categoryName: "Online Workshop"
  },
  {
    title: "Salsa Dance Workshop",
    description: "Learn the basics of salsa dancing with professional instructors.",
    location: "Dance Studio",
    imageUrl: "/assets/images/placeholder.png",
    startDateTime: "2024-11-17T12:30:00",
    endDateTime: "2024-11-17T14:30:00",
    price: "15",
    isFree: false,
    url: "",
    categoryName: "Dance Class"
  },
  {
    title: "Tech Innovators Meetup",
    description: "Network with fellow tech professionals and entrepreneurs.",
    location: "Innovation Hub",
    imageUrl: "/assets/images/placeholder.png",
    startDateTime: "2024-11-28T11:00:00",
    endDateTime: "2024-11-28T13:00:00",
    price: "20",
    isFree: false,
    url: "",
    categoryName: "Networking"
  },
  {
    title: "Winter Wellness Yoga Retreat",
    description: "Rejuvenate your mind and body with our comprehensive wellness retreat.",
    location: "Wellness Center",
    imageUrl: "/assets/images/placeholder.png",
    startDateTime: "2024-12-08T01:00:00",
    endDateTime: "2024-12-08T17:00:00",
    price: "300",
    isFree: false,
    url: "https://example.com",
    categoryName: "Health & Wellness"
  },
  {
    title: "Street Food Festival",
    description: "Experience the best street food from around the world in one place.",
    location: "Downtown Plaza",
    imageUrl: "/assets/images/placeholder.png",
    startDateTime: "2024-12-05T17:00:00",
    endDateTime: "2024-12-05T21:00:00",
    price: "0",
    isFree: true,
    url: "",
    categoryName: "Food & Drink"
  },
  {
    title: "Virtual AI Conference",
    description: "Explore the latest developments in artificial intelligence and machine learning.",
    location: "Online",
    imageUrl: "/assets/images/placeholder.png",
    startDateTime: "2024-11-15T15:00:00",
    endDateTime: "2024-11-15T19:00:00",
    price: "50",
    isFree: false,
    url: "https://zoom.us/example",
    categoryName: "Online Workshop"
  },
  {
    title: "Comic Con Extravaganza",
    description: "The ultimate celebration of comics, movies, and pop culture.",
    location: "Convention Center",
    imageUrl: "/assets/images/placeholder.png",
    startDateTime: "2024-11-20T14:00:00",
    endDateTime: "2024-11-20T22:00:00",
    price: "200",
    isFree: false,
    url: "https://example.com",
    categoryName: "Convention"
  }
];

console.log('Evently Events Data:');
console.log(JSON.stringify(eventlyEvents, null, 2));

console.log('\nTo add these events to your database:');
console.log('1. First, create the categories by going to Create Event page');
console.log('2. In the category dropdown, add these categories:');
const uniqueCategories = [...new Set(eventlyEvents.map(event => event.categoryName))];
uniqueCategories.forEach((category, index) => {
  console.log(`   ${index + 1}. ${category}`);
});

console.log('\n3. Then create events manually using the Create Event form');
console.log('4. Use the event data above to fill in the details');
