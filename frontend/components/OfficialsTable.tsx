import { useState } from "react";
import { ChevronRight, UserCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    const [hoveredRow, setHoveredRow] = useState<number | null>(null);
    const [following, setFollowing] = useState<boolean[]>(() => officials.map(() => false));

    const toggleFollow = (idx: number) => {
        setFollowing(f => f.map((val, i) => (i === idx ? !val : val)));
    };

    return (
        <section className="w-full rounded-xl bg-white dark:bg-slate-900 shadow p-4 mb-6 overflow-x-auto">
            <table className="min-w-full text-center">
                <thead>
                    <tr className="border-b border-slate-200 dark:border-slate-700">
                        <th className="py-3 px-4 text-slate-700 dark:text-slate-200 font-semibold">Name</th>
                        <th className="py-3 px-4 text-slate-700 dark:text-slate-200 font-semibold">Position</th>
                        <th className="py-3 px-4 text-slate-700 dark:text-slate-200 font-semibold">Party</th>
                        <th className="py-3 px-4 text-slate-700 dark:text-slate-200 font-semibold">State</th>
                        <th className="py-3 px-4"></th>
                        <th className="py-3 px-4"></th>
                    </tr>
                </thead>
                <tbody>
                    {officials.map((official, idx) => (
                        <tr
                            key={official.name}
                            tabIndex={0}
                            aria-label={`View details for ${official.name}`}
                            className={`transition cursor-pointer outline-none ${hoveredRow === idx
                                ? "bg-blue-50 dark:bg-blue-900/40"
                                : "hover:bg-blue-50 dark:hover:bg-blue-900/40"
                                } focus:ring-2 focus:ring-blue-400`}
                            onMouseEnter={() => setHoveredRow(idx)}
                            onMouseLeave={() => setHoveredRow(null)}
                        >
                            <td className="py-3 px-4 font-medium text-slate-900 dark:text-white flex items-center gap-2 justify-center">
                                <UserCircle2 className="h-6 w-6 text-blue-300 dark:text-blue-700 mr-1" aria-hidden="true" />
                                {official.name}
                            </td>
                            <td className="py-3 px-4 text-slate-700 dark:text-slate-200">{official.position}</td>
                            <td className="py-3 px-4 text-slate-700 dark:text-slate-200">{official.party}</td>
                            <td className="py-3 px-4 text-slate-700 dark:text-slate-200">{official.state}</td>
                            <td className="py-3 px-4 text-right">
                                <ChevronRight className="h-5 w-5 text-slate-300 group-hover:text-blue-500 transition-colors" aria-hidden="true" />
                            </td>
                            <td className="py-3 px-4 text-right">
                                <Button
                                    size="sm"
                                    variant={following[idx] ? "default" : "outline"}
                                    className={following[idx] ? "bg-blue-600 text-white hover:bg-blue-700" : "border-blue-600 text-blue-600 hover:bg-blue-50"}
                                    onClick={e => { e.stopPropagation(); toggleFollow(idx); }}
                                    aria-pressed={following[idx]}
                                >
                                    {following[idx] ? "Following" : "Follow"}
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}