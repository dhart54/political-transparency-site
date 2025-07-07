import { Users, FileText, DollarSign, Eye } from "lucide-react";

const stats = [
    { label: "Total Officials", value: 128, icon: Users },
    { label: "Bills Tracked", value: 342, icon: FileText },
    { label: "Lobbying Spend ($M)", value: 95, icon: DollarSign },
    { label: "Active Watchlists", value: 7, icon: Eye },
];

export default function OverviewSummary() {
    return (
        <section className="w-full rounded-xl bg-white dark:bg-slate-900 shadow p-6 mb-6 flex flex-wrap gap-6 justify-between">
            {stats.map((stat) => (
                <div key={stat.label} className="flex-1 min-w-[120px] flex flex-col items-center">
                    <div className="mb-2 flex items-center justify-center">
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900">
                            <stat.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                        </span>
                    </div>
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-700 dark:text-blue-400 mb-1">
                        {stat.value}
                    </div>
                    <div className="text-sm text-slate-500 dark:text-slate-300">{stat.label}</div>
                </div>
            ))}
        </section>
    );
}