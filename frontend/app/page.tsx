'use client';

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Search,
    DollarSign,
    Menu,
    X,
    Lightbulb,
    FileText,
    Users,
    Eye,
    ChevronRight,
    UserCircle2,
    ArrowUp,
    ArrowDown,
} from "lucide-react";
import OverviewSummary from "../components/OverviewSummary";
import SearchFilterBar from "../components/SearchFilterBar";
import OfficialsTable from "../components/OfficialsTable";
import TrendsPanel from "../components/TrendsPanel";

export default function Page() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // --- HERO SECTION ---
    return (
        <div className="min-h-screen bg-white dark:bg-slate-950">
            {/* Navigation */}
            <nav className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                                    <Lightbulb className="h-5 w-5 text-white" />
                                </div>
                            </div>
                            <div className="ml-3">
                                <span className="text-xl font-bold text-slate-900 dark:text-white">Shine a Light</span>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-8">
                                <Link href="/" className="text-slate-900 dark:text-white hover:text-blue-600 px-3 py-2 text-sm font-semibold transition-colors duration-200">Home</Link>
                                <Link href="/officials" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 px-3 py-2 text-sm font-medium transition-colors duration-200">Officials</Link>
                                <Link href="/bills" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 px-3 py-2 text-sm font-medium transition-colors duration-200">Bills</Link>
                                <Link href="/compare" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 px-3 py-2 text-sm font-medium transition-colors duration-200">Compare</Link>
                                <Link href="/about" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 px-3 py-2 text-sm font-medium transition-colors duration-200">About</Link>
                            </div>
                        </div>
                        <div className="md:hidden">
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="hover:bg-slate-100"
                            >
                                <span className="sr-only">Open main menu</span>
                                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </Button>
                        </div>
                    </div>
                    {isMobileMenuOpen && (
                        <div className="md:hidden border-t border-slate-200 py-4">
                            <div className="flex flex-col space-y-2">
                                <Link href="/" className="text-slate-900 hover:text-blue-600 px-3 py-2 text-sm font-semibold transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                                <Link href="/officials" className="text-slate-600 hover:text-slate-900 px-3 py-2 text-sm font-medium transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Officials</Link>
                                <Link href="/bills" className="text-slate-600 hover:text-slate-900 px-3 py-2 text-sm font-medium transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Bills</Link>
                                <Link href="/compare" className="text-slate-600 hover:text-slate-900 px-3 py-2 text-sm font-medium transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Compare</Link>
                                <Link href="/about" className="text-slate-600 hover:text-slate-900 px-3 py-2 text-sm font-medium transition-colors" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
                            </div>
                        </div>
                    )}
                </div>
            </nav>

            {/* HERO + METRICS + CHART */}
            <section className="pt-8 pb-4 sm:pt-10 sm:pb-6 bg-white dark:bg-slate-950">
                <div className="max-w-5xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                    {/* Hero Text */}
                    <div className="flex-1 flex flex-col items-start">
                        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white leading-tight tracking-tight mb-2">
                            Follow the Money.<br />
                            <span className="block text-blue-700 dark:text-blue-400">See Who Holds the Power.</span>
                        </h1>
                        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mb-4 max-w-lg">
                            Track campaign donations, lobbying influence, and the decisions that shape your life. Because democracy works best when citizens know who's pulling the strings.
                        </p>
                        <div className="flex gap-3 mb-6">
                            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 text-base font-semibold rounded-lg shadow transition-all duration-200">
                                Track Influence Now
                            </Button>
                            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-2 text-base font-medium rounded-lg transition-all duration-200">
                                See the Money Flow
                            </Button>
                        </div>
                        {/* Key Metrics */}
                        <div className="flex gap-8 mt-2 mb-6 w-full justify-between">
                            <div className="flex flex-col items-center flex-1">
                                <DollarSign className="h-7 w-7 text-blue-600 mb-1" />
                                <div className="text-2xl font-extrabold text-blue-700 dark:text-blue-400">$14.4B</div>
                                <div className="text-xs text-slate-500 dark:text-slate-300">Total Lobbying (2023)</div>
                            </div>
                            <div className="flex flex-col items-center flex-1">
                                <Users className="h-7 w-7 text-blue-600 mb-1" />
                                <div className="text-2xl font-extrabold text-blue-700 dark:text-blue-400">11,832</div>
                                <div className="text-xs text-slate-500 dark:text-slate-300">Active Lobbyists</div>
                            </div>
                            <div className="flex flex-col items-center flex-1">
                                <FileText className="h-7 w-7 text-blue-600 mb-1" />
                                <div className="text-2xl font-extrabold text-blue-700 dark:text-blue-400">$8.9B</div>
                                <div className="text-xs text-slate-500 dark:text-slate-300">Campaign Donations</div>
                            </div>
                        </div>
                    </div>
                    {/* Top Industries Chart Card */}
                    <div className="flex-1 flex justify-center w-full max-w-sm">
                        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-6 border border-slate-200 w-full">
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Top Industries by Lobbying Spend</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between text-sm">
                                    <span>Pharmaceuticals</span>
                                    <span className="font-bold">$375M</span>
                                </div>
                                <div className="w-full h-2 bg-blue-100 rounded-full mb-2">
                                    <div className="h-2 bg-blue-600 rounded-full" style={{ width: "90%" }}></div>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span>Oil & Gas</span>
                                    <span className="font-bold">$288M</span>
                                </div>
                                <div className="w-full h-2 bg-green-100 rounded-full mb-2">
                                    <div className="h-2 bg-green-500 rounded-full" style={{ width: "70%" }}></div>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span>Technology</span>
                                    <span className="font-bold">$267M</span>
                                </div>
                                <div className="w-full h-2 bg-purple-100 rounded-full mb-2">
                                    <div className="h-2 bg-purple-500 rounded-full" style={{ width: "65%" }}></div>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span>Finance</span>
                                    <span className="font-bold">$189M</span>
                                </div>
                                <div className="w-full h-2 bg-orange-100 rounded-full mb-2">
                                    <div className="h-2 bg-orange-400 rounded-full" style={{ width: "40%" }}></div>
                                </div>
                            </div>
                            <div className="text-xs text-slate-400 mt-2">Data from 2023 lobbying disclosures</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SEARCH BAR (with heading above) */}
            <section className="py-4 bg-white dark:bg-slate-950">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">Find the Story Behind the Numbers</h2>
                    <SearchFilterBar />
                </div>
            </section>

            {/* OFFICIALS TABLE */}
            <section className="py-4 bg-white dark:bg-slate-950">
                <div className="max-w-5xl mx-auto px-4">
                    <OfficialsTable />
                </div>
            </section>

            {/* TRENDS (muted) */}
            <section className="py-4 bg-white dark:bg-slate-950">
                <div className="max-w-3xl mx-auto px-4">
                    <div className="opacity-60 pointer-events-none select-none">
                        <TrendsPanel />
                    </div>
                </div>
            </section>

            {/* MONEY & INFLUENCE SECTION */}
            <section className="py-12 bg-slate-50/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2">Money & Influence</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">Who's funding campaigns and how their wealth is changing</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Who's Buying Influence */}
                        <Card className="border border-slate-200 hover:shadow-lg transition-all duration-300 bg-white">
                            <CardHeader className="pb-4">
                                <div className="flex items-center space-x-3 mb-2">
                                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                        <DollarSign className="h-6 w-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <CardTitle className="text-xl font-bold text-slate-900">Who's Buying Influence?</CardTitle>
                                        <CardDescription className="text-slate-600">Top campaign contributors this cycle</CardDescription>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <span className="font-medium text-slate-700">Sen. Mitch McConnell (R-KY)</span>
                                        <span className="font-bold text-blue-700">$3.5M</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="font-medium text-slate-700">Sen. Chuck Schumer (D-NY)</span>
                                        <span className="font-bold text-blue-700">$2.8M</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="font-medium text-slate-700">Rep. Kevin McCarthy (R-CA)</span>
                                        <span className="font-bold text-blue-700">$2.1M</span>
                                    </div>
                                </div>
                                <Button variant="ghost" className="w-full mt-4 text-blue-600 hover:text-blue-700 hover:bg-blue-50">View All Recipients →</Button>
                            </CardContent>
                        </Card>
                        {/* How Their Wealth is Changing */}
                        <Card className="border border-slate-200 hover:shadow-lg transition-all duration-300 bg-white">
                            <CardHeader className="pb-4">
                                <div className="flex items-center space-x-3 mb-2">
                                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                                        <ArrowUp className="h-6 w-6 text-emerald-600" />
                                    </div>
                                    <div>
                                        <CardTitle className="text-xl font-bold text-slate-900">How Their Wealth is Changing</CardTitle>
                                        <CardDescription className="text-slate-600">Notable net worth changes in 2023</CardDescription>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <span className="font-medium text-slate-700">Sen. Dianne Feinstein (D-CA)</span>
                                        <span className="font-bold text-emerald-700">+$5.4M</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="font-medium text-slate-700">Rep. Nancy Pelosi (D-CA)</span>
                                        <span className="font-bold text-emerald-700">+$3.1M</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="font-medium text-slate-700">Sen. Rick Scott (R-FL)</span>
                                        <span className="font-bold text-red-600">-$2.3M</span>
                                    </div>
                                </div>
                                <Button variant="ghost" className="w-full mt-4 text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50">Track All Changes →</Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* POLICY IN ACTION SECTION */}
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2">Policy in Action</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">Close votes and the lobbying efforts that shaped them</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Close Votes That Shaped Policy */}
                        <Card className="border border-slate-200 hover:shadow-lg transition-all duration-300 bg-white">
                            <CardHeader className="pb-4">
                                <div className="flex items-center space-x-3 mb-2">
                                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                                        <Eye className="h-6 w-6 text-purple-600" />
                                    </div>
                                    <div>
                                        <CardTitle className="text-xl font-bold text-slate-900">Close Votes That Shaped Policy</CardTitle>
                                        <CardDescription className="text-slate-600">Recent decisive legislation</CardDescription>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <span className="font-medium text-slate-700">Inflation Reduction Act</span>
                                        <span className="font-bold text-purple-700">51-49</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="font-medium text-slate-700">Infrastructure Investment Act</span>
                                        <span className="font-bold text-purple-700">220-213</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="font-medium text-slate-700">Build Back Better (Failed)</span>
                                        <span className="font-bold text-purple-700">50-50</span>
                                    </div>
                                </div>
                                <Button variant="ghost" className="w-full mt-4 text-purple-600 hover:text-purple-700 hover:bg-purple-50">Explore Vote Patterns →</Button>
                            </CardContent>
                        </Card>
                        {/* Lobbying That Made the Difference */}
                        <Card className="border border-slate-200 hover:shadow-lg transition-all duration-300 bg-white">
                            <CardHeader className="pb-4">
                                <div className="flex items-center space-x-3 mb-2">
                                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                                        <ChevronRight className="h-6 w-6 text-orange-600" />
                                    </div>
                                    <div>
                                        <CardTitle className="text-xl font-bold text-slate-900">Lobbying That Made the Difference</CardTitle>
                                        <CardDescription className="text-slate-600">Industry influence on key votes</CardDescription>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <span className="font-medium text-slate-700">Pharmaceutical Lobby</span>
                                        <span className="font-bold text-orange-700">$90M</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="font-medium text-slate-700">Tech Industry</span>
                                        <span className="font-bold text-orange-700">$67M</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="font-medium text-slate-700">Oil & Gas</span>
                                        <span className="font-bold text-orange-700">$45M</span>
                                    </div>
                                </div>
                                <Button variant="ghost" className="w-full mt-4 text-orange-600 hover:text-orange-700 hover:bg-orange-50">See Full Impact Analysis →</Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* WHAT'S HAPPENING NOW SECTION */}
            <section className="py-12 bg-gradient-to-r from-blue-50 to-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2">What's Happening Now</h2>
                        <p className="text-lg text-slate-600">The latest moves in money and power</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <Card className="flex flex-col h-full min-h-[320px] justify-between border border-slate-200 hover:shadow-xl hover:border-blue-200 transition-all duration-300 group bg-white p-6 focus-within:ring-2 focus-within:ring-blue-400" tabIndex={0}>
                            <CardHeader className="pb-3 px-0">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">Technology</span>
                                    <span className="text-xs text-slate-500">2 hours ago</span>
                                </div>
                                <CardTitle className="text-lg font-bold text-slate-900 leading-tight group-hover:text-blue-700 transition-colors line-clamp-2">Tech Giants Double Down on Capitol Hill</CardTitle>
                            </CardHeader>
                            <CardContent className="pt-0 px-0 flex-1 flex flex-col justify-between">
                                <CardDescription className="text-slate-600 mb-4 leading-relaxed line-clamp-3 text-base">Amazon, Google, and Meta increase lobbying spend by 47% as antitrust bills advance</CardDescription>
                                <div className="mt-auto">
                                    <Button variant="ghost" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 p-0 h-auto font-medium group/btn focus:ring-2 focus:ring-blue-400">Read Analysis</Button>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="flex flex-col h-full min-h-[320px] justify-between border border-slate-200 hover:shadow-xl hover:border-blue-200 transition-all duration-300 group bg-white p-6 focus-within:ring-2 focus-within:ring-blue-400" tabIndex={0}>
                            <CardHeader className="pb-3 px-0">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">Defense</span>
                                    <span className="text-xs text-slate-500">4 hours ago</span>
                                </div>
                                <CardTitle className="text-lg font-bold text-slate-900 leading-tight group-hover:text-blue-700 transition-colors line-clamp-2">The $150M Defense Spending Battle</CardTitle>
                            </CardHeader>
                            <CardContent className="pt-0 px-0 flex-1 flex flex-col justify-between">
                                <CardDescription className="text-slate-600 mb-4 leading-relaxed line-clamp-3 text-base">How contractors are shaping the Pentagon's budget behind closed doors</CardDescription>
                                <div className="mt-auto">
                                    <Button variant="ghost" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 p-0 h-auto font-medium group/btn focus:ring-2 focus:ring-blue-400">Read Analysis</Button>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="flex flex-col h-full min-h-[320px] justify-between border border-slate-200 hover:shadow-xl hover:border-blue-200 transition-all duration-300 group bg-white p-6 focus-within:ring-2 focus-within:ring-blue-400" tabIndex={0}>
                            <CardHeader className="pb-3 px-0">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded">Healthcare</span>
                                    <span className="text-xs text-slate-500">6 hours ago</span>
                                </div>
                                <CardTitle className="text-lg font-bold text-slate-900 leading-tight group-hover:text-blue-700 transition-colors line-clamp-2">Pharma's Quiet Medicare Victory</CardTitle>
                            </CardHeader>
                            <CardContent className="pt-0 px-0 flex-1 flex flex-col justify-between">
                                <CardDescription className="text-slate-600 mb-4 leading-relaxed line-clamp-3 text-base">Industry spending pays off as drug pricing reforms face delays</CardDescription>
                                <div className="mt-auto">
                                    <Button variant="ghost" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 p-0 h-auto font-medium group/btn focus:ring-2 focus:ring-blue-400">Read Analysis</Button>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="flex flex-col h-full min-h-[320px] justify-between border border-slate-200 hover:shadow-xl hover:border-blue-200 transition-all duration-300 group bg-white p-6 focus-within:ring-2 focus-within:ring-blue-400" tabIndex={0}>
                            <CardHeader className="pb-3 px-0">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs font-medium rounded">Energy</span>
                                    <span className="text-xs text-slate-500">8 hours ago</span>
                                </div>
                                <CardTitle className="text-lg font-bold text-slate-900 leading-tight group-hover:text-blue-700 transition-colors line-clamp-2">Energy Lobby's Climate Calculus</CardTitle>
                            </CardHeader>
                            <CardContent className="pt-0 px-0 flex-1 flex flex-col justify-between">
                                <CardDescription className="text-slate-600 mb-4 leading-relaxed line-clamp-3 text-base">Oil companies pivot strategy as renewable subsidies gain momentum</CardDescription>
                                <div className="mt-auto">
                                    <Button variant="ghost" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 p-0 h-auto font-medium group/btn focus:ring-2 focus:ring-blue-400">Read Analysis</Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="text-center mt-8">
                        <Button variant="outline" className="border-2 border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-300 px-6 py-3 font-semibold bg-transparent focus:ring-2 focus:ring-blue-400">View All Updates</Button>
                    </div>
                </div>
            </section>

            {/* Footer (unchanged) */}
            <footer className="bg-slate-900 text-white pt-4 pb-12">
                <div className="h-2 bg-gradient-to-r from-blue-400/20 via-transparent to-blue-400/20 mb-8" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                        {/* Logo and Description */}
                        <div className="md:col-span-2">
                            <div className="flex items-center mb-4">
                                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                                    <Lightbulb className="h-5 w-5 text-white" />
                                </div>
                                <span className="text-xl font-bold">Shine a Light</span>
                            </div>
                            <p className="text-slate-300 text-sm leading-relaxed mb-4 max-w-md">
                                Empowering citizens with transparent access to political data. Because democracy works best when
                                everyone can see how it works.
                            </p>
                            <div className="flex space-x-4">
                                <Link href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin h-5 w-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6" /></svg>
                                </Link>
                                <Link href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter h-5 w-5"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg>
                                </Link>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Explore</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="/officials" className="text-slate-300 hover:text-white transition-colors text-sm">
                                        Officials
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/bills" className="text-slate-300 hover:text-white transition-colors text-sm">
                                        Legislation
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/lobbying" className="text-slate-300 hover:text-white transition-colors text-sm">
                                        Lobbying
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/donations" className="text-slate-300 hover:text-white transition-colors text-sm">
                                        Donations
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* About */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">About</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="/about" className="text-slate-300 hover:text-white transition-colors text-sm">
                                        Our Mission
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/data-sources" className="text-slate-300 hover:text-white transition-colors text-sm">
                                        Data Sources
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/methodology" className="text-slate-300 hover:text-white transition-colors text-sm">
                                        Methodology
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact" className="text-slate-300 hover:text-white transition-colors text-sm">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-slate-700 pt-8 text-center">
                        <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Shine a Light. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
