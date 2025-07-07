import React from "react";

export default function SearchFilterBar() {
    return (
        <section className="w-full rounded-xl bg-white dark:bg-slate-900 shadow p-4 mb-6 flex flex-col sm:flex-row gap-3 items-center">
            <div className="flex w-full sm:w-auto flex-1 items-center gap-2">
                <input
                    type="text"
                    placeholder="Search officials, bills, or topics..."
                    className="flex-1 rounded-full border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-5 py-3 text-base text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-sm hover:border-blue-400"
                />
                <button className="rounded-full bg-blue-600 text-white px-6 py-3 font-semibold hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all shadow-md">
                    Search
                </button>
            </div>
            <select className="rounded-full border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-4 py-3 text-base text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>All Types</option>
                <option>Officials</option>
                <option>Bills</option>
            </select>
        </section>
    );
}