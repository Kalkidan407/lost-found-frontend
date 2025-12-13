import ItemCard from "@/Components/ItemCards";

export default function ItemGrid() {
  return (
    <div className="flex-1">
      <h2 className="text-xl font-semibold mb-4">Lost Items</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ItemCard
          title="Black Wallet"
          category="Accessories"
          location="4 Kilo"
          reportedBy="Alice"
          timeAgo="2 hours ago"
          imageUrl="/wallet.jpg"
          isVerified={false}
        />
      </div>
    </div>
  );
}
