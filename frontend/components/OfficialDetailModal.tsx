import React from "react";

export default function OfficialDetailModal() {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 dark:bg-black/60 backdrop-blur-sm">
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg p-6 w-full max-w-md">
                <div className="text-lg font-bold text-slate-900 dark:text-white mb-2">Official Details</div>
                <div className="text-slate-500 dark:text-slate-300 mb-4">This is a placeholder for the official detail modal. In the future, this will show more information about a selected official.</div>
                <button className="mt-2 px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition">Close</button>
            </div>
        </div>
    );
}