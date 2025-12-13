"use client";

import { useState } from "react";

export default function ReportItemPage() {
  const [form, setForm] = useState({
    name: "",
    description: "",
    categoryId: "",
    locationId: "",
    photoUrl: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // later: connect to API
    console.log("Report item:", form);
  }

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-start py-12 px-4">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-sm p-8">
        <h1 className="text-2xl font-semibold mb-6 text-center">
          Report Lost Item
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Item Name */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Item Name
            </label>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Black Wallet"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Description
            </label>
            <textarea
              name="description"
              rows={3}
              value={form.description}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Leather wallet found near library"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Category
            </label>
            <select
              name="categoryId"
              value={form.categoryId}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2"
            >
              <option value="">Select category</option>
              <option value="1">Wallet</option>
              <option value="2">Phone</option>
              <option value="3">Electronics</option>
            </select>
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Location Found
            </label>
            <select
              name="locationId"
              value={form.locationId}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2"
            >
              <option value="">Select location</option>
              <option value="1">4 Kilo</option>
              <option value="2">Library</option>
              <option value="3">Campus Gate</option>
            </select>
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Image URL (optional)
            </label>
            <input
              type="text"
              name="photoUrl"
              value={form.photoUrl}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2"
              placeholder="https://example.com/item.jpg"
            />
          </div>

         
          <button
            type="submit"
            className="w-full bg-emerald-600 text-white py-2 rounded-lg font-medium hover:bg-emerald-700 transition"
          >
            Submit Report
          </button>
        </form>
      </div>
    </div>
  );
}
