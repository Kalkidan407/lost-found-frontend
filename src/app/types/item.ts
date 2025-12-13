// types/item.ts
export interface Item {
  id: number;
  name: string;
  categoryName: string;
  locationName: string;
  reportedBy: string;
  timeAgo: string;
  photoUrl?: string;
  isVerified: boolean;
}
