export default function FilterSidebar() {
  return (
    <aside className="w-64 bg-white rounded-xl p-4 border h-fit">
      <h3 className="font-semibold mb-4">Filter</h3>

      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium">Location</label>
          <input
            className="mt-1 w-full border rounded-md px-2 py-1 text-sm"
            placeholder="Search location..."
          />
        </div>

        <div>
          <label className="text-sm font-medium">Category</label>
          <select className="mt-1 w-full border rounded-md px-2 py-1 text-sm">
            <option>All</option>
            <option>Electronics</option>
            <option>Wallet</option>
            <option>Phone</option>
          </select>
        </div>
      </div>
    </aside>
  );
}
