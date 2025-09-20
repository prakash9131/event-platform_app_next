"use server";

import { connectToDatabase } from '@/lib/database';
import Category from '@/lib/database/models/category.model';
import Event from '@/lib/database/models/event.model';
import User from '@/lib/database/models/user.model';

// Available images for variety
const availableImages = [
  "/assets/images/test.png",
  "/assets/images/test-2.png", 
  "/assets/images/event1.png",
  "/assets/images/event2.png",
  "/assets/images/event3.png",
  "/assets/images/event4.png",
  "/assets/images/event5.png"
];

// Simple events that don't require external services
const simpleEvents = [
  {
    title: "Coding for Kids Bootcamp",
    description: "Learn programming fundamentals in a fun, interactive environment designed for young minds.",
    location: "Online",
    imageUrl: availableImages[0],
    startDateTime: new Date('2024-11-18T09:00:00'),
    endDateTime: new Date('2024-11-18T17:00:00'),
    price: "10",
    isFree: false,
    url: "https://example.com",
    categoryName: "Online Workshop"
  },
  {
    title: "Dog Lovers' Winter Walk",
    description: "Join fellow dog enthusiasts for a scenic winter walk through the park.",
    location: "Central Park",
    imageUrl: availableImages[1], 
    startDateTime: new Date('2024-12-09T03:00:00'),
    endDateTime: new Date('2024-12-09T05:00:00'),
    price: "0",
    isFree: true,
    url: "",
    categoryName: "Social Event"
  },
  {
    title: "Book Lovers' Book Swap",
    description: "Bring your favorite books and discover new ones in our community book exchange.",
    location: "Community Center",
    imageUrl: availableImages[2],
    startDateTime: new Date('2024-12-03T10:00:00'),
    endDateTime: new Date('2024-12-03T12:00:00'),
    price: "0",
    isFree: true,
    url: "",
    categoryName: "Social Event"
  },
  {
    title: "Winter Photography Walk",
    description: "Capture the beauty of winter landscapes with professional photography tips.",
    location: "Mountain Trail",
    imageUrl: availableImages[3],
    startDateTime: new Date('2024-12-02T02:00:00'),
    endDateTime: new Date('2024-12-02T06:00:00'),
    price: "30",
    isFree: false,
    url: "https://example.com",
    categoryName: "Photography"
  },
  {
    title: "Sunday Farmers Market & Craft Fair",
    description: "Fresh local produce, handmade crafts, and community vendors.",
    location: "Town Square",
    imageUrl: availableImages[4],
    startDateTime: new Date('2024-11-17T15:00:00'),
    endDateTime: new Date('2024-11-17T19:00:00'),
    price: "0",
    isFree: true,
    url: "",
    categoryName: "Food & Drink"
  },
  {
    title: "Blockchain for Beginners",
    description: "Learn the basics of blockchain technology and cryptocurrency in this online workshop.",
    location: "Online",
    imageUrl: availableImages[5],
    startDateTime: new Date('2024-11-23T18:00:00'),
    endDateTime: new Date('2024-11-23T20:00:00'),
    price: "0",
    isFree: true,
    url: "https://zoom.us/example",
    categoryName: "Online Workshop"
  },
  {
    title: "Salsa Dance Workshop",
    description: "Learn the basics of salsa dancing with professional instructors.",
    location: "Dance Studio",
    imageUrl: availableImages[6],
    startDateTime: new Date('2024-11-17T12:30:00'),
    endDateTime: new Date('2024-11-17T14:30:00'),
    price: "15",
    isFree: false,
    url: "",
    categoryName: "Dance Class"
  },
  {
    title: "Tech Innovators Meetup",
    description: "Network with fellow tech professionals and entrepreneurs.",
    location: "Innovation Hub",
    imageUrl: availableImages[0],
    startDateTime: new Date('2024-11-28T11:00:00'),
    endDateTime: new Date('2024-11-28T13:00:00'),
    price: "20",
    isFree: false,
    url: "",
    categoryName: "Networking"
  },
  {
    title: "Winter Wellness Yoga Retreat",
    description: "Rejuvenate your mind and body with our comprehensive wellness retreat.",
    location: "Wellness Center",
    imageUrl: availableImages[1],
    startDateTime: new Date('2024-12-08T01:00:00'),
    endDateTime: new Date('2024-12-08T17:00:00'),
    price: "300",
    isFree: false,
    url: "https://example.com",
    categoryName: "Health & Wellness"
  },
  {
    title: "Street Food Festival",
    description: "Experience the best street food from around the world in one place.",
    location: "Downtown Plaza",
    imageUrl: availableImages[2],
    startDateTime: new Date('2024-12-05T17:00:00'),
    endDateTime: new Date('2024-12-05T21:00:00'),
    price: "0",
    isFree: true,
    url: "",
    categoryName: "Food & Drink"
  },
  {
    title: "Virtual AI Conference",
    description: "Explore the latest developments in artificial intelligence and machine learning.",
    location: "Online",
    imageUrl: availableImages[3],
    startDateTime: new Date('2024-11-15T15:00:00'),
    endDateTime: new Date('2024-11-15T19:00:00'),
    price: "50",
    isFree: false,
    url: "https://zoom.us/example",
    categoryName: "Online Workshop"
  },
  {
    title: "Comic Con Extravaganza",
    description: "The ultimate celebration of comics, movies, and pop culture.",
    location: "Convention Center",
    imageUrl: availableImages[4],
    startDateTime: new Date('2024-11-20T14:00:00'),
    endDateTime: new Date('2024-11-20T22:00:00'),
    price: "200",
    isFree: false,
    url: "https://example.com",
    categoryName: "Convention"
  }
];

export async function seedSimpleEvents() {
  try {
    await connectToDatabase();
    
    // Get all existing categories
    const categories = await Category.find({});
    const categoryMap: { [key: string]: string } = {};
    categories.forEach(cat => {
      categoryMap[cat.name] = cat._id.toString();
    });
    
    // Create a sample user if none exists
    let sampleUser = await User.findOne({});
    if (!sampleUser) {
      sampleUser = await User.create({
        clerkId: 'sample_user_123',
        email: 'sample@example.com',
        username: 'sampleuser',
        firstName: 'John',
        lastName: 'Doe',
        photo: '/assets/images/placeholder.png'
      });
    }
    
    // Clear existing events
    await Event.deleteMany({});
    
    // Create events for all categories
    const allEvents = [...simpleEvents];
    
    // Add events for categories that don't have any from Evently
    const eventlyCategoryNames = simpleEvents.map(e => e.categoryName);
    const missingCategories = categories.filter(cat => !eventlyCategoryNames.includes(cat.name));
    
    missingCategories.forEach((category, index) => {
      allEvents.push({
        title: `${category.name} Workshop`,
        description: `Learn and explore ${category.name.toLowerCase()} in this comprehensive workshop.`,
        location: "Community Center",
        imageUrl: availableImages[index % availableImages.length],
        startDateTime: new Date(Date.now() + (index + 1) * 24 * 60 * 60 * 1000),
        endDateTime: new Date(Date.now() + (index + 1) * 24 * 60 * 60 * 1000 + 2 * 60 * 60 * 1000),
        price: index % 3 === 0 ? "0" : (index * 5 + 10).toString(),
        isFree: index % 3 === 0,
        url: index % 2 === 0 ? "https://example.com" : "",
        categoryName: category.name
      });
    });
    
    // Create events
    const eventDocuments = allEvents.map(event => ({
      title: event.title,
      description: event.description,
      location: event.location,
      imageUrl: event.imageUrl,
      startDateTime: event.startDateTime,
      endDateTime: event.endDateTime,
      price: event.price,
      isFree: event.isFree,
      url: event.url,
      category: categoryMap[event.categoryName],
      organizer: sampleUser._id,
      createdAt: new Date()
    }));
    
    const insertedEvents = await Event.insertMany(eventDocuments);
    console.log(`Created ${insertedEvents.length} events for ${categories.length} categories`);
    
    return { 
      success: true, 
      message: `Successfully created ${insertedEvents.length} events covering all ${categories.length} categories` 
    };
    
  } catch (error) {
    console.error('Error seeding events:', error);
    return { 
      success: false, 
      error: 'Failed to seed events' 
    };
  }
}
