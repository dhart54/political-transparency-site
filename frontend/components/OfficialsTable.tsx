import { useState } from "react";

type Official = {
    name: string;
    position: string;
    party: string;
    state: string;
};

const officials: Official[] = [
    { name: "Jane Doe", position: "Senator", party: "Independent", state: "CA" },
    { name: "John Smith", position: "Representative", party: "Democrat", state: "NY" },
    { name: "Alex Lee", position: "Governor", party: "Republican", state: "TX" },
    { name: "Maria Garcia", position: "Mayor", party: "Democrat", state: "FL" },
];

export default function OfficialsTable() {
    // For future interactivity, e.g., row click
    const [hoveredRow, setHoveredRow] = useState<number | null>(null);

    return (
        <section className="w-full rounded-xl bg-white dark:bg-slate-900 shadow p-4 mb-6 overflow-x-auto">
            <table className="min-w-full text-center">
                <thead>
                    <tr className="border-b border-slate-200 dark:border-slate-700">
                        <th className="py-3 px-4 text-slate-700 dark:text-slate-200 font-semibold">Name</th>
                        <th className="py-3 px-4 text-slate-700 dark:text-slate-200 font-semibold">Position</th>
                        <th className="py-3 px-4 text-slate-700 dark:text-slate-200 font-semibold">Party</th>
                        <th className="py-3 px-4 text-slate-700 dark:text-slate-200 font-semibold">State</th>
                    </tr>
                </thead>
                <tbody>
                    {officials.map((official, idx) => (
                        <tr
                            key={official.name}
                            className={`transition cursor-pointer ${hoveredRow === idx
                                    ? "bg-blue-50 dark:bg-blue-900/40"
                                    : "hover:bg-blue-50 dark:hover:bg-blue-900/40"
                                }`}
                            onMouseEnter={() => setHoveredRow(idx)}
                            onMouseLeave={() => setHoveredRow(null)}
                        >
                            <td className="py-3 px-4 font-medium text-slate-900 dark:text-white">{official.name}</td>
                            <td className="py-3 px-4 text-slate-700 dark:text-slate-200">{official.position}</td>
                            <td className="py-3 px-4 text-slate-700 dark:text-slate-200">{official.party}</td>
                            <td className="py-3 px-4 text-slate-700 dark:text-slate-200">{official.state}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}