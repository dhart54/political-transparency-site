import React from "react";

export default function TrendsPanel() {
    return (
        <section className="w-full rounded-xl bg-white dark:bg-slate-900 shadow p-4 mb-6 flex flex-col items-center justify-center min-h-[120px]">
            <span className="inline-block mb-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs font-semibold tracking-wide uppercase shadow-sm">
                Coming Soon
            </span>
            <div className="text-lg font-semibold text-slate-900 dark:text-white mb-1 text-center">Trend Analysis</div>
            <div className="text-slate-500 dark:text-slate-300 text-center max-w-md">
                This section will soon feature interactive data visualizations and analytics. Stay tuned for powerful insights!
            </div>
        </section>
    );
}