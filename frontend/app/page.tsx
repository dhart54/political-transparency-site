"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Search,
    DollarSign,
    Users,
    TrendingUp,
    BarChart2,
    UserCircle2,
} from "lucide-react";

const NAV_LINKS = [
    { name: "Home", href: "/" },
    { name: "Officials", href: "/officials" },
    { name: "Bills", href: "/bills" },
    { name: "Compare", href: "/compare" },
    { name: "About", href: "/about" },
];

const INDUSTRIES = [
    { name: "Pharmaceuticals", value: 875, color: "bg-blue-500" },
    { name: "Oil & Gas", value: 826, color: "bg-green-500" },
    { name: "Technology", value: 687, color: "bg-purple-500" },
    { name: "Finance", value: 186, color: "bg-orange-400" },
];

export default function Page() {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [animateBars, setAnimateBars] = useState(false);
    const maxValue = Math.max(...INDUSTRIES.map(i => i.value));

    useEffect(() => {
        // Trigger bar animation when Top Industries section appears
        const onScroll = () => {
            const el = document.getElementById("top-industries");
            if (el) {
                const rect = el.getBoundingClientRect();
                if (rect.top < window.innerHeight - 100) {
                    setAnimateBars(true);
                    window.removeEventListener("scroll", onScroll);
                }
            }
        };
        window.addEventListener("scroll", onScroll);
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 flex flex-col">
            {/* HEADER/NAV - Minimal, clean, small logo + nav, modern spacing */}
            <header className="w-full bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800 sticky top-0 z-40">
                <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
                    <Link href="/" className="flex items-center gap-2 font-bold text-blue-700 text-lg">
                        <span className="bg-blue-100 text-blue-700 rounded-full p-1"><UserCircle2 className="w-5 h-5" /></span>
                        LobbyPulse
                    </Link>
                    <nav className="hidden md:flex gap-6 text-slate-700 dark:text-slate-200 text-sm font-medium">
                        {NAV_LINKS.map((link) => (
                            <Link key={link.name} href={link.href} className="hover:text-blue-600 transition-colors px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-400">
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                    <button className="md:hidden p-2" onClick={() => setMobileMenu(!mobileMenu)} aria-label="Open menu">
                        <span className="block w-6 h-0.5 bg-slate-700 mb-1" />
                        <span className="block w-6 h-0.5 bg-slate-700 mb-1" />
                        <span className="block w-6 h-0.5 bg-slate-700" />
                    </button>
                </div>
                {mobileMenu && (
                    <div className="md:hidden bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 px-4 pb-4">
                        <nav className="flex flex-col gap-2 mt-2">
                            {NAV_LINKS.map((link) => (
                                <Link key={link.name} href={link.href} className="hover:text-blue-600 transition-colors px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-400">
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                    </div>
                )}
            </header>

            {/* HERO SECTION - increased bottom margin for spacing */}
            <section className="relative bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 text-white py-20 overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative max-w-6xl mx-auto px-4 text-center">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                        Follow the Money.<br />
                        <span className="text-blue-200">Track the Influence.</span>
                    </h1>
                    <p className="text-xl sm:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                        Discover how lobbying, campaign donations, and special interests shape policy in Washington.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-10 py-4 text-lg">
                            Track Influence Now
                        </Button>
                        <Button size="lg" variant="outline" className="border border-blue-200 text-blue-600 bg-white hover:bg-blue-50 font-semibold px-10 py-4 text-lg">
                            See the Money Flow
                        </Button>
                    </div>
                </div>
            </section>

            {/* METRICS DISPLAY - add mt-8 for vertical spacing, tighten card spacing, bolder label */}
            <section className="py-8 bg-white dark:bg-slate-950 mt-8">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 border border-blue-200 dark:border-blue-700 flex flex-col items-center">
                            <DollarSign className="w-7 h-7 mb-1 text-blue-600 dark:text-blue-400" />
                            <div className="text-4xl font-extrabold text-blue-600 dark:text-blue-400 mb-1">$4.2B</div>
                            <div className="text-lg font-bold text-slate-700 dark:text-slate-300 mb-1">Lobbying Spend</div>
                            <div className="text-sm text-slate-600 dark:text-slate-400">This year alone</div>
                        </div>
                        <div className="text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 border border-green-200 dark:border-green-700 flex flex-col items-center">
                            <Users className="w-7 h-7 mb-1 text-green-600 dark:text-green-400" />
                            <div className="text-4xl font-extrabold text-green-600 dark:text-green-400 mb-1">12,000+</div>
                            <div className="text-lg font-bold text-slate-700 dark:text-slate-300 mb-1">Active Lobbyists</div>
                            <div className="text-sm text-slate-600 dark:text-slate-400">Registered in DC</div>
                        </div>
                        <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 border border-purple-200 dark:border-purple-700 flex flex-col items-center">
                            <TrendingUp className="w-7 h-7 mb-1 text-purple-600 dark:text-purple-400" />
                            <div className="text-4xl font-extrabold text-purple-600 dark:text-purple-400 mb-1">$14.4B</div>
                            <div className="text-lg font-bold text-slate-700 dark:text-slate-300 mb-1">Campaign Donations</div>
                            <div className="text-sm text-slate-600 dark:text-slate-400">2024 cycle</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* TOP INDUSTRIES CHART - align values right, animate bars */}
            <section id="top-industries" className="py-8 bg-slate-50 dark:bg-slate-900">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="rounded-xl bg-white dark:bg-slate-800 shadow-lg p-6">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">Top Industries by Lobbying Spend</h2>
                        <div className="space-y-5">
                            {INDUSTRIES.map((ind) => (
                                <div key={ind.name} className="flex items-center gap-4">
                                    <div className="w-40 font-bold text-slate-700 dark:text-slate-200 text-base">{ind.name}</div>
                                    <div className="flex-1 relative">
                                        <div
                                            className={`h-5 rounded-full ${ind.color} transition-all duration-1000`}
                                            style={{
                                                width: animateBars ? `${Math.round((ind.value / maxValue) * 100)}%` : 0,
                                                minWidth: 40,
                                            }}
                                        ></div>
                                    </div>
                                    <div className="font-extrabold text-lg text-slate-900 dark:text-white text-right ml-4" style={{ minWidth: 80 }}>${ind.value}M</div>
                                </div>
                            ))}
                        </div>
                        <div className="text-xs text-slate-400 text-right mt-3">Data from 2023 lobbying disclosures</div>
                    </div>
                </div>
            </section>

            {/* SEARCH & OFFICIALS TABLE (refined Shine a Light style, modern, minimal) */}
            <section className="py-12 bg-slate-50 dark:bg-slate-900">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">Find the Story Behind the Numbers</h2>
                    <div className="flex gap-2 items-center mb-8">
                        <Input
                            placeholder="Search officials, bills, or topics..."
                            className="flex-1 rounded-full px-6 py-3 text-base bg-slate-50 focus:ring-2 focus:ring-blue-200 border border-slate-200 dark:bg-slate-900 dark:border-slate-800 dark:text-white"
                        />
                        <Button
                            className="rounded-full px-6 py-3 text-base bg-blue-600 text-white font-semibold shadow hover:bg-blue-700"
                        >
                            Search
                        </Button>
                        <select className="rounded-full px-4 py-3 text-base border border-slate-200 dark:bg-slate-900 dark:text-white dark:border-slate-800">
                            <option>All Types</option>
                            <option>Officials</option>
                            <option>Bills</option>
                            <option>Industries</option>
                        </select>
                    </div>
                </div>
                <div className="max-w-5xl mx-auto px-4">
                    <div className="overflow-x-auto shadow-lg rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
                        <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-800">
                            <thead>
                                <tr className="bg-slate-50 dark:bg-slate-800">
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Name</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Position</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Party</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">State</th>
                                    <th className="px-6 py-4"></th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                {[
                                    { name: "Jane Doe", position: "Senator", party: "Independent", state: "CA" },
                                    { name: "John Smith", position: "Representative", party: "Democrat", state: "NY" },
                                    { name: "Alex Lee", position: "Governor", party: "Republican", state: "TX" },
                                    { name: "Maria Garcia", position: "Mayor", party: "Democrat", state: "FL" },
                                ].map((official, idx) => (
                                    <tr
                                        key={official.name}
                                        className={
                                            `transition-colors cursor-pointer ` +
                                            (idx % 2 === 0
                                                ? "bg-white dark:bg-slate-950"
                                                : "bg-slate-50 dark:bg-slate-900")
                                        }
                                    >
                                        <td className="px-6 py-4 whitespace-nowrap font-bold text-lg text-slate-900 dark:text-white">{official.name}</td>
                                        <td className="px-6 py-4 whitespace-nowrap font-medium text-base text-slate-700 dark:text-slate-300">{official.position}</td>
                                        <td className="px-6 py-4 whitespace-nowrap font-medium text-base text-slate-700 dark:text-slate-300">{official.party}</td>
                                        <td className="px-6 py-4 whitespace-nowrap font-medium text-base text-slate-700 dark:text-slate-300">{official.state}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right">
                                            <Button
                                                size="sm"
                                                variant="outline"
                                                className="rounded-full px-5 py-2 text-base font-semibold border-blue-200 text-blue-600 hover:bg-blue-50"
                                            >
                                                Follow
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* MONEY & INFLUENCE SECTION (revamped, merged best of both) */}
            <section className="py-12 bg-white dark:bg-slate-950">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">Money & Influence</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            Explore how money influences politics and how politicians' wealth evolves over time.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                        {/* Who's Buying Influence? */}
                        <div className="flex flex-col shadow-md rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 py-8 px-6 min-h-[360px] hover:shadow-lg transition-shadow">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-600">
                                    <svg xmlns='http://www.w3.org/2000/svg' className='w-6 h-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8c-1.657 0-3 1.343-3 3 0 1.657 1.343 3 3 3s3-1.343 3-3c0-1.657-1.343-3-3-3zm0 0V4m0 7v9' />
                                    </svg>
                                </span>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Who's Buying Influence?</h3>
                            </div>
                            <ul className="flex-1 text-sm space-y-4 mb-6">
                                <li className="flex justify-between items-center">
                                    <span className="font-medium text-slate-800 dark:text-slate-200">Sen. Mitch McConnell (R-KY)</span>
                                    <span className="font-mono font-bold text-green-600 hover:scale-105 transition-transform cursor-default">$3.5M</span>
                                </li>
                                <li className="flex justify-between items-center">
                                    <span className="font-medium text-slate-800 dark:text-slate-200">Sen. Chuck Schumer (D-NY)</span>
                                    <span className="font-mono font-bold text-green-600 hover:scale-105 transition-transform cursor-default">$2.8M</span>
                                </li>
                                <li className="flex justify-between items-center">
                                    <span className="font-medium text-slate-800 dark:text-slate-200">Rep. Kevin McCarthy (R-CA)</span>
                                    <span className="font-mono font-bold text-green-600 hover:scale-105 transition-transform cursor-default">$2.1M</span>
                                </li>
                            </ul>
                            <a href="#" className="mt-auto text-green-700 font-semibold text-sm hover:text-green-800 hover:underline focus:outline-none focus:ring-2 focus:ring-green-400 rounded transition">View All Recipients →</a>
                        </div>
                        {/* How Their Wealth is Changing */}
                        <div className="flex flex-col shadow-md rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 py-8 px-6 min-h-[360px] hover:shadow-lg transition-shadow">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600">
                                    <svg xmlns='http://www.w3.org/2000/svg' className='w-6 h-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 17l6-6 4 4 8-8' />
                                    </svg>
                                </span>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">How Their Wealth is Changing</h3>
                            </div>
                            <ul className="flex-1 text-sm space-y-4 mb-6">
                                <li className="flex justify-between items-center">
                                    <span className="font-medium text-slate-800 dark:text-slate-200">Sen. Dianne Feinstein (D-CA)</span>
                                    <span className="font-mono font-bold text-green-600 hover:scale-105 transition-transform cursor-default">+$5.4M</span>
                                </li>
                                <li className="flex justify-between items-center">
                                    <span className="font-medium text-slate-800 dark:text-slate-200">Rep. Nancy Pelosi (D-CA)</span>
                                    <span className="font-mono font-bold text-green-600 hover:scale-105 transition-transform cursor-default">+$3.1M</span>
                                </li>
                                <li className="flex justify-between items-center">
                                    <span className="font-medium text-slate-800 dark:text-slate-200">Sen. Rick Scott (R-FL)</span>
                                    <span className="font-mono font-bold text-red-500 hover:scale-105 transition-transform cursor-default">-$2.3M</span>
                                </li>
                            </ul>
                            <a href="#" className="mt-auto text-blue-700 font-semibold text-sm hover:text-blue-800 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400 rounded transition">Track All Changes →</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* POLICY IN ACTION SECTION (refined, merged best of both) */}
            <section className="py-12 bg-slate-50 dark:bg-slate-900">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Policy in Action</h2>
                        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                            Close votes and the lobbying efforts that shaped them
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Recent Bills */}
                        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-md border border-slate-200 dark:border-slate-700 p-6 hover:shadow-lg transition-shadow">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 text-purple-600">
                                    <svg xmlns='http://www.w3.org/2000/svg' className='w-5 h-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' />
                                    </svg>
                                </span>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Recent Bills</h3>
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                                Key legislation and their narrow vote margins
                            </p>
                            <ul className="space-y-3 mb-6">
                                <li className="flex justify-between items-center">
                                    <span className="text-sm font-medium text-slate-800 dark:text-slate-200">Infrastructure Bill</span>
                                    <span className="font-mono font-bold text-purple-600">51-49</span>
                                </li>
                                <li className="flex justify-between items-center">
                                    <span className="text-sm font-medium text-slate-800 dark:text-slate-200">Climate Package</span>
                                    <span className="font-mono font-bold text-purple-600">50-50</span>
                                </li>
                                <li className="flex justify-between items-center">
                                    <span className="text-sm font-medium text-slate-800 dark:text-slate-200">Tax Reform</span>
                                    <span className="font-mono font-bold text-purple-600">52-48</span>
                                </li>
                            </ul>
                            <a href="#" className="text-purple-600 font-semibold text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-purple-400 rounded transition">View All Bills →</a>
                        </div>

                        {/* Committee Activity */}
                        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-md border border-slate-200 dark:border-slate-700 p-6 hover:shadow-lg transition-shadow">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600">
                                    <svg xmlns='http://www.w3.org/2000/svg' className='w-5 h-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' />
                                    </svg>
                                </span>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Committee Activity</h3>
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                                Where the real policy decisions happen
                            </p>
                            <ul className="space-y-3 mb-6">
                                <li className="flex justify-between items-center">
                                    <div>
                                        <span className="text-sm font-bold text-slate-800 dark:text-slate-200">Finance Committee</span>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">Tax policy oversight</p>
                                    </div>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">12 hearings</span>
                                </li>
                                <li className="flex justify-between items-center">
                                    <div>
                                        <span className="text-sm font-bold text-slate-800 dark:text-slate-200">Energy Committee</span>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">Climate & infrastructure</p>
                                    </div>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">8 hearings</span>
                                </li>
                                <li className="flex justify-between items-center">
                                    <div>
                                        <span className="text-sm font-bold text-slate-800 dark:text-slate-200">Health Committee</span>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">Healthcare reform</p>
                                    </div>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">15 hearings</span>
                                </li>
                            </ul>
                            <a href="#" className="text-blue-600 font-semibold text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400 rounded transition">See Committees →</a>
                        </div>

                        {/* Policy Impact */}
                        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-md border border-slate-200 dark:border-slate-700 p-6 hover:shadow-lg transition-shadow">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-orange-100 text-orange-600">
                                    <svg xmlns='http://www.w3.org/2000/svg' className='w-5 h-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' />
                                    </svg>
                                </span>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Policy Impact</h3>
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                                How legislation affects different industries
                            </p>
                            <ul className="space-y-3 mb-6">
                                <li className="flex justify-between items-center">
                                    <span className="text-sm font-medium text-slate-800 dark:text-slate-200">Healthcare</span>
                                    <span className="font-mono font-semibold text-orange-600">$90M</span>
                                </li>
                                <li className="flex justify-between items-center">
                                    <span className="text-sm font-medium text-slate-800 dark:text-slate-200">Energy</span>
                                    <span className="font-mono font-semibold text-orange-600">$45M</span>
                                </li>
                                <li className="flex justify-between items-center">
                                    <span className="text-sm font-medium text-slate-800 dark:text-slate-200">Finance</span>
                                    <span className="font-mono font-semibold text-orange-600">$120M</span>
                                </li>
                            </ul>
                            <a href="#" className="text-orange-600 font-semibold text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-orange-400 rounded transition">See Full Impact Analysis →</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHAT'S HAPPENING NOW SECTION (refined, merged best of both) */}
            <section className="py-12 bg-white dark:bg-slate-950">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">What's Happening Now</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            The latest moves in money and power
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {/* News Card 1 */}
                        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-md border border-slate-200 dark:border-slate-700 p-6 hover:shadow-lg transition-shadow">
                            <div className="flex justify-between items-start mb-3">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                                    Lobbying
                                </span>
                                <span className="text-xs text-slate-500 dark:text-slate-400">2 hours ago</span>
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 leading-tight">
                                Big Pharma Spends Record $45M on Drug Pricing Bill
                            </h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                                Pharmaceutical companies ramp up lobbying efforts as Congress considers price controls on prescription drugs.
                            </p>
                            <a href="#" className="text-blue-600 font-semibold text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400 rounded transition">Read Analysis →</a>
                        </div>

                        {/* News Card 2 */}
                        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-md border border-slate-200 dark:border-slate-700 p-6 hover:shadow-lg transition-shadow">
                            <div className="flex justify-between items-start mb-3">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                                    Campaign Finance
                                </span>
                                <span className="text-xs text-slate-500 dark:text-slate-400">4 hours ago</span>
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 leading-tight">
                                Tech Giants Pour $12M into Midterm Elections
                            </h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                                Silicon Valley companies increase political spending ahead of November elections, focusing on tech regulation.
                            </p>
                            <a href="#" className="text-blue-600 font-semibold text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400 rounded transition">Read Analysis →</a>
                        </div>

                        {/* News Card 3 */}
                        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-md border border-slate-200 dark:border-slate-700 p-6 hover:shadow-lg transition-shadow">
                            <div className="flex justify-between items-start mb-3">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                                    Legislation
                                </span>
                                <span className="text-xs text-slate-500 dark:text-slate-400">6 hours ago</span>
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 leading-tight">
                                Climate Bill Passes by Single Vote in Senate
                            </h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                                Historic climate legislation narrowly passes after intense lobbying from both environmental and fossil fuel groups.
                            </p>
                            <a href="#" className="text-blue-600 font-semibold text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400 rounded transition">Read Analysis →</a>
                        </div>

                        {/* News Card 4 */}
                        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-md border border-slate-200 dark:border-slate-700 p-6 hover:shadow-lg transition-shadow">
                            <div className="flex justify-between items-start mb-3">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">
                                    Wealth Tracking
                                </span>
                                <span className="text-xs text-slate-500 dark:text-slate-400">8 hours ago</span>
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 leading-tight">
                                Senator's Net Worth Jumps $2.3M After Tech Vote
                            </h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                                Financial disclosure reveals significant stock gains following controversial technology regulation vote.
                            </p>
                            <a href="#" className="text-blue-600 font-semibold text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400 rounded transition">Read Analysis →</a>
                        </div>
                    </div>
                    <div className="text-center">
                        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all">
                            View All Updates
                        </Button>
                    </div>
                </div>
            </section>

            {/* FOOTER SECTION (refined, merged best of both) */}
            <footer className="bg-slate-800 dark:bg-slate-900 text-white">
                <div className="max-w-6xl mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {/* Brand & Mission */}
                        <div className="md:col-span-2">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-lg">L</span>
                                </div>
                                <span className="text-xl font-bold text-white">LobbyPulse</span>
                            </div>
                            <p className="text-slate-300 mb-4 leading-relaxed">
                                Empowering citizens with transparent access to political data. Because democracy works best when everyone can see how it works.
                            </p>
                            <div className="flex items-center gap-4">
                                <a href="#" className="text-slate-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-slate-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                    </svg>
                                </a>
                                <a href="#" className="text-slate-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-slate-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Explore Links */}
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-4">Explore</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-slate-300 hover:text-white transition-colors py-1 px-2 rounded hover:bg-slate-800 block">
                                        Politicians
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-slate-300 hover:text-white transition-colors py-1 px-2 rounded hover:bg-slate-800 block">
                                        Bills
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-slate-300 hover:text-white transition-colors py-1 px-2 rounded hover:bg-slate-800 block">
                                        Industries
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-slate-300 hover:text-white transition-colors py-1 px-2 rounded hover:bg-slate-800 block">
                                        Donors
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* About Links */}
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-4">About</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-slate-300 hover:text-white transition-colors py-1 px-2 rounded hover:bg-slate-800 block">
                                        Our Mission
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-slate-300 hover:text-white transition-colors py-1 px-2 rounded hover:bg-slate-800 block">
                                        Data Sources
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-slate-300 hover:text-white transition-colors py-1 px-2 rounded hover:bg-slate-800 block">
                                        Methodology
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-slate-300 hover:text-white transition-colors py-1 px-2 rounded hover:bg-slate-800 block">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Separator */}
                    <div className="border-t border-slate-800 mt-8 pt-8">
                        <p className="text-slate-400 text-center">
                            © 2024 LobbyPulse. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
