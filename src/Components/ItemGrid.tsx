// Components/ItemGrid.tsx
import ItemCard from "@/Components/ItemCards";
import { Item } from "@/app/types/item";

interface ItemGridProps {
  items: Item[];
}

export default function ItemGrid({ items }: ItemGridProps) {
  return (
    <div className="flex-1">
      <h2 className="text-xl font-semibold mb-4">Lost Items</h2>

      {items.length === 0 ? (
        <p className="text-gray-500">No items found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <ItemCard
            id={item.id}
              key={item.id}
              title={item.name}
              category={item.categoryName}
              location={item.locationName}
              reportedBy={item.reportedBy}
              timeAgo={item.timeAgo}
              imageUrl={item.photoUrl || "/placeholder.jpg"}
              isVerified={item.isVerified}
            />
          ))}
        </div>
      )}
    </div>
  );
}
