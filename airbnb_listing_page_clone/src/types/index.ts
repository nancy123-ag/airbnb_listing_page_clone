export type PhotoCategory =
  | 'Living room'
  | 'Bedroom 1'
  | 'Bedroom 2'
  | 'Outdoors'
  | 'Kitchen'
  | 'Bathroom'
  | 'Exterior'
  | 'Amenities'
  | 'Pool';

export interface Photo {
  id: number;
  url: string;
  caption: string;
  category: PhotoCategory;
}

/** Room section used by Photo Tour (thumbnail strip + amenity line). */
export interface RoomSection {
  id: string;
  title: string;
  category: PhotoCategory;
  amenities: string;
}

export interface Host {
  name: string;
  avatar: string;
  isSuperhost: boolean;
  joinedDate: string;
  responseRate: string;
  responseTime: string;
  about: string;
  cohosts: { name: string; avatar: string }[];
}

export interface GuestCapacity {
  maxGuests: number;
  bedrooms: number;
  beds: number;
  baths: number;
}

export interface Highlight {
  icon: string;
  title: string;
  desc: string;
}

export interface AmenityCategory {
  category: string;
  items: string[];
}

export interface NearbyAttraction {
  name: string;
  distance: string;
  time: string;
  type: string;
}

export interface Review {
  id: number;
  author: string;
  avatar: string;
  date: string;
  rating: number;
  tag: string;
  text: string;
  location?: string;
  yearsOnAirbnb?: string;
}

export interface ListingData {
  id: string;
  title: string;
  rating: number;
  reviewCount: number;
  isSuperhost: boolean;
  location: string;
  city: string;
  state: string;
  country: string;
  lat: number;
  lng: number;
  host: Host;
  guestCapacity: GuestCapacity;
  pricePerNight: number;
  weeklyDiscountPct: number;
  cleaningFee: number;
  serviceFee: number;
  currency: string;
  currencySymbol: string;
  photos: Photo[];
  roomSections: RoomSection[];
  highlights: Highlight[];
  description: string;
  amenityCategories: AmenityCategory[];
  nearbyAttractions: NearbyAttraction[];
  reviews: Review[];
  categoryRatings: {
    cleanliness: number;
    accuracy: number;
    checkIn: number;
    communication: number;
    location: number;
    value: number;
  };
}

export interface Wishlist {
  id: string;
  name: string;
  count: number;
  saved: boolean;
}
