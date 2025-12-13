import Navbar from "@/Components/Navbar";
import ItemGrid from "@/Components/ItemGrid";
import { Item } from "./types/item";
import FilterSidebar from "@/Components/FilterSidebar";
import { SearchIcon } from "lucide-react";

// const items = await fetch("/api/items").then(res => res.json());


const mockItems: Item[] = [
  {
    id: 1,
    name: "Black Wallet",
    categoryName: "Accessories",
    locationName: "4 Kilo",
    reportedBy: "Alice",
    timeAgo: "Now",
    photoUrl: "/images/wallet.jpg",
    isVerified: false,
  },
   {
    id: 2,
    name: "iPhone 21 mobile ",
    categoryName: "Accessories",
    locationName: "Mexico",
    reportedBy: "Abebe",
    timeAgo: "2 months ago",
    photoUrl: "/images/iPhone.jpg",
    isVerified: false,
  },
   {
    id: 3,
    name: "iPhone 21 mobile ",
    categoryName: "Accessories",
    locationName: "Mexico",
    reportedBy: "Abebe",
    timeAgo: "2 days ago",
    photoUrl: "/images/wallet.jpg",
    isVerified: false,
  },
   {
    id: 4,
    name: "iPhone 21 mobile ",
    categoryName: "Accessories",
    locationName: "Mexico",
    reportedBy: "Abebe",
    timeAgo: "5 days ago",
    photoUrl: "/images/wallet.jpg",
    isVerified: false,
  },
   {
    id: 5,
    name: "iPhone 21 mobile ",
    categoryName: "Accessories",
    locationName: "Mexico",
    reportedBy: "Abebe",
    timeAgo: "2 days ago",
    photoUrl: "/images/iPhone.jpg",
    isVerified: false,
  },
   {
    id: 6,
    name: "iPhone 21 mobile ",
    categoryName: "Accessories",
    locationName: "Mexico",
    reportedBy: "Abebe",
    timeAgo: "20 minuit ago",
    photoUrl: "/images/wallet.jpg",
    isVerified: false,
  },
];



export default function HomePage() {
  return (
    <>
      
      
  
      <main className="mx-auto max-w-7xl px-6 py-10">
   
        <div className="mb-10 rounded-xl bg-emerald-600 p-8 text-zinc-100">
          <h1 className="text-2xl font-bold">
            Find lost items around you
          </h1>
          <p className="mt-2 text-sm text-emerald-100">
            Search by location, category, or keyword
          </p>

          <div className="mt-6 flex bg-white rounded-xl pr-6">
            <input
              type="text"
              placeholder="Search by place (e.g. 4 Kilo, Mama's Kitchen)"
              className="w-full rounded-l-lg px-4 py-3 text-black outline-none  "
            />
           <SearchIcon className="align-center item-center justify-center m-auto text-zinc-600"/>
          </div>
        </div>

      <ItemGrid items={mockItems} />
     
      </main>
    </>
  );
}
