import { ListingData } from '../types';

export const LISTING_DATA: ListingData = {
  id: "condostay-candolim-goa-101",
  title: "Romantic, elevated 1BHK CondoStay | Candolim GOA",
  rating: 4.95,
  reviewCount: 19,
  isSuperhost: true,
  location: "Candolim, Goa, India",
  city: "Candolim",
  state: "Goa",
  country: "India",
  lat: 15.5177,
  lng: 73.7626,
  currency: "INR",
  currencySymbol: "₹",
  pricePerNight: 3697,
  weeklyDiscountPct: 10,
  cleaningFee: 1200,
  serviceFee: 2100,
  host: {
    name: "Himalaya Stays",
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=300&q=80",
    isSuperhost: true,
    joinedDate: "Superhost · 4 years hosting",
    responseRate: "100%",
    responseTime: "within an hour",
    about: "We curate premium holiday stays across Goa focused on comfort, high-speed connectivity, and warm hospitality. Dedicated to providing guests with memorable coastal retreats.",
    cohosts: [
      { name: "Aman", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80" },
      { name: "Priya", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80" },
      { name: "Rahul", avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=150&q=80" }
    ]
  },
  guestCapacity: {
    maxGuests: 2,
    bedrooms: 1,
    beds: 1,
    baths: 1
  },
  photos: [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
      caption: "Spacious open-plan living room with warm mood lighting and plush sofas",
      category: "Living room"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      caption: "Private balcony lounge with wicker armchairs overlooking lush tropical greenery",
      category: "Outdoors"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
      caption: "Private jacuzzi tub on the upper terrace level",
      category: "Outdoors"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
      caption: "Master bedroom suite featuring a queen bed, ambient lights, and hardwood wardrobe",
      category: "Bedroom 1"
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      caption: "Modern gated community exterior architecture in Candolim",
      category: "Exterior"
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80",
      caption: "Fully equipped modern kitchen with microwave, stove, and tea/coffee station",
      category: "Kitchen"
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
      caption: "En-suite bathroom with rain shower and complimentary organic bath products",
      category: "Bathroom"
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80",
      caption: "Resort-style outdoor swimming pool shared within the gated community",
      category: "Pool"
    },
    {
      id: 9,
      url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      caption: "Cozy reading corner with high-speed WiFi setup",
      category: "Living room"
    },
    {
      id: 10,
      url: "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1200&q=80",
      caption: "Sunset view from the private balcony dining area",
      category: "Outdoors"
    }
  ],
  roomSections: [
    {
      id: "living-room",
      title: "Living room",
      category: "Living room",
      amenities: "Sofa · Air conditioning · Ceiling fan · TV"
    },
    {
      id: "outdoors",
      title: "Outdoors",
      category: "Outdoors",
      amenities: "Private balcony · Jacuzzi · Outdoor seating"
    },
    {
      id: "bedroom-1",
      title: "Bedroom",
      category: "Bedroom 1",
      amenities: "Queen bed · Wardrobe · Room-darkening shades"
    },
    {
      id: "kitchen",
      title: "Full kitchen",
      category: "Kitchen",
      amenities: "Refrigerator · Microwave · Stove · Kettle"
    },
    {
      id: "bathroom",
      title: "Bathroom",
      category: "Bathroom",
      amenities: "Rain shower · Hot water · Hair dryer"
    },
    {
      id: "exterior",
      title: "Exterior",
      category: "Exterior",
      amenities: "Gated community · Private entrance"
    },
    {
      id: "pool",
      title: "Pool",
      category: "Pool",
      amenities: "Shared pool · Sun loungers"
    }
  ],
  highlights: [
    {
      icon: "Key",
      title: "Self check-in",
      desc: "Check yourself in easily with the keypad."
    },
    {
      icon: "Award",
      title: "Himalaya Stays is a Superhost",
      desc: "Superhosts are experienced, highly rated Hosts who are committed to providing great stays for guests."
    },
    {
      icon: "Calendar",
      title: "Free cancellation before 10 Sep",
      desc: "Cancel up to 5 days before check-in for a full refund."
    }
  ],
  description: `Welcome to CondoStay, a tranquil retreat for 2 in the heart of Candolim, Goa. Nestled in a secured gated community, this 1BHK apartment combines luxury comfort with modern amenities, perfect for a peaceful getaway or remote work.

Highlights include a private balcony, access to a pristine swimming pool, high-speed Wi-Fi, fully functional kitchen, and close proximity to Candolim Beach, top-tier beach shacks, and vibrant nightlife. Enjoy your mornings with fresh coastal breeze and evenings in total comfort!`,
  amenityCategories: [
    {
      category: "Popular Amenities",
      items: ["Kitchen", "Free parking on premises", "Pool", "Wifi (100 Mbps)", "Dedicated workspace", "TV with standard cable", "Air conditioning", "Patio or balcony"]
    },
    {
      category: "Bathroom & Laundry",
      items: ["Hot water", "Rain shower", "Washing machine", "Hangers", "Bed linens", "Iron & ironing board", "Hair dryer", "Towels & soaps"]
    },
    {
      category: "Bedroom & Comfort",
      items: ["1 Queen sized bed", "Extra pillows & blankets", "Room-darkening shades", "Clothes storage wardrobe"]
    },
    {
      category: "Heating & Cooling",
      items: ["Split air conditioning", "Ceiling fan"]
    },
    {
      category: "Home Safety",
      items: ["Security cameras on property", "Fire extinguisher", "First aid kit", "24/7 Gated Security"]
    },
    {
      category: "Kitchen & Dining",
      items: ["Refrigerator", "Microwave", "Cooking basics (pots & pans)", "Dishes and silverware", "Stove top", "Hot water kettle"]
    },
    {
      category: "Location Features",
      items: ["Beach access (5 mins walk)", "Private entrance", "Resort community access"]
    },
    {
      category: "Outdoor & Wellness",
      items: ["Outdoor swimming pool", "Balcony seating", "Sun loungers by pool"]
    }
  ],
  nearbyAttractions: [
    { name: "Candolim Beach", distance: "0.8 km", time: "5 min walk", type: "Beach & Water Sports" },
    { name: "Fort Aguada", distance: "3.5 km", time: "8 min drive", type: "Historical Landmark" },
    { name: "Calangute Beach", distance: "4.2 km", time: "10 min drive", type: "Shopping & Dining" },
    { name: "Dabolim International Airport", distance: "36 km", time: "45 min drive", type: "Transit Hub" }
  ],
  categoryRatings: {
    cleanliness: 5.0,
    accuracy: 5.0,
    checkIn: 5.0,
    communication: 5.0,
    location: 5.0,
    value: 4.9
  },
  reviews: [
    {
      id: 1,
      author: "Afnan",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
      date: "September 2025",
      rating: 5,
      tag: "Cleanliness",
      location: "Bengaluru, India",
      yearsOnAirbnb: "3 years on Airbnb",
      text: "Extremely clean and beautifully designed apartment! The host was super responsive and helpful throughout our stay. Location is top-notch, walking distance to Candolim beach!"
    },
    {
      id: 2,
      author: "Rohan",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      date: "August 2025",
      rating: 5,
      tag: "Accuracy",
      location: "Mumbai, India",
      yearsOnAirbnb: "5 years on Airbnb",
      text: "Awesome stay! The jacuzzi and pool were well maintained. Everything matches the photos exactly. Will definitely book again when visiting Goa!"
    },
    {
      id: 3,
      author: "Farzan",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
      date: "August 2025",
      rating: 5,
      tag: "Check-in",
      location: "Delhi, India",
      yearsOnAirbnb: "2 years on Airbnb",
      text: "Smooth self check-in experience. High-speed WiFi worked flawlessly for my remote work days. Himalaya Stays team is very professional."
    },
    {
      id: 4,
      author: "Julian",
      avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=150&q=80",
      date: "July 2025",
      rating: 5,
      tag: "Location",
      location: "London, UK",
      yearsOnAirbnb: "6 years on Airbnb",
      text: "Great location in Candolim! Peaceful gated property yet very close to all restaurants and beach shacks. 10/10 stay."
    },
    {
      id: 5,
      author: "Pranav J",
      avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=150&q=80",
      date: "June 2025",
      rating: 4.9,
      tag: "Communication",
      location: "Pune, India",
      yearsOnAirbnb: "4 years on Airbnb",
      text: "Loved the interior decor and kitchen setup. We prepared breakfast every morning on the balcony. Himalaya Stays host team responds instantly."
    },
    {
      id: 6,
      author: "Kunal",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80",
      date: "May 2025",
      rating: 5,
      tag: "Cleanliness",
      location: "Hyderabad, India",
      yearsOnAirbnb: "1 year on Airbnb",
      text: "A true guest favorite home! The bed was super comfortable and the AC cooled the room in minutes. Highly recommended for couples!"
    }
  ]
};
