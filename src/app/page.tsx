import Navbar from "@/Components/Navbar";
import ItemGrid from "@/Components/ItemGrid";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-10">
        {/* Hero / Search */}
        <div className="mb-10 rounded-xl bg-emerald-600 p-8 text-zinc-100">
          <h1 className="text-2xl font-bold">
            Find lost items around you
          </h1>
          <p className="mt-2 text-sm text-emerald-100">
            Search by location, category, or keyword
          </p>

          <div className="mt-6 flex">
            <input
              type="text"
              placeholder="Search by place (e.g. 4 Kilo, Mama's Kitchen)"
              className="w-full rounded-l-lg px-4 py-3 text-black outline-none  bg-white"
            />
            <button className="rounded-r-lg bg-black px-6 py-3 text-white">
              Search
            </button>
          </div>
        </div>

        {/* Items */}
        <ItemGrid />
      </main>
    </>
  );
}
