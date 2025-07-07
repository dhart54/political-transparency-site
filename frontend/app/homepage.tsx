"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Search,
  DollarSign,
  Vote,
  TrendingUp,
  Eye,
  Menu,
  X,
  Lightbulb,
  ExternalLink,
  Linkedin,
  Twitter,
  ArrowUp,
  ArrowDown,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function Homepage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const newsItems = [
    {
      title: "Tech Giants Double Down on Capitol Hill",
      description: "Amazon, Google, and Meta increase lobbying spend by 47% as antitrust bills advance",
      category: "Technology",
      timeAgo: "2 hours ago",
    },
    {
      title: "The $150M Defense Spending Battle",
      description: "How contractors are shaping the Pentagon's budget behind closed doors",
      category: "Defense",
      timeAgo: "4 hours ago",
    },
    {
      title: "Pharma's Quiet Medicare Victory",
      description: "Industry spending pays off as drug pricing reforms face delays",
      category: "Healthcare",
      timeAgo: "6 hours ago",
    },
    {
      title: "Energy Lobby's Climate Calculus",
      description: "Oil companies pivot strategy as renewable subsidies gain momentum",
      category: "Energy",
      timeAgo: "8 hours ago",
    },
  ]

  // Enhanced data visualization components
  const DataBar = ({
    value,
    maxValue,
    color = "bg-blue-500",
    label,
    amount,
  }: {
    value: number
    maxValue: number
    color?: string
    label: string
    amount: string
  }) => (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-slate-700">{label}</span>
        <span className="text-sm font-bold text-slate-900">{amount}</span>
      </div>
      <div className="w-full bg-slate-100 rounded-full h-2">
        <div
          className={`${color} h-2 rounded-full transition-all duration-700 ease-out`}
          style={{ width: `${(value / maxValue) * 100}%` }}
        ></div>
      </div>
    </div>
  )

  const VoteDonut = ({ forVotes, againstVotes, title }: { forVotes: number; againstVotes: number; title: string }) => {
    const total = forVotes + againstVotes
    const forPercentage = (forVotes / total) * 100
    const circumference = 2 * Math.PI * 16
    const forStroke = (forPercentage / 100) * circumference

    return (
      <div className="flex items-center space-x-3">
        <div className="relative w-12 h-12">
          <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 36 36">
            <circle cx="18" cy="18" r="16" fill="none" stroke="#e2e8f0" strokeWidth="3" />
            <circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              stroke="#10b981"
              strokeWidth="3"
              strokeDasharray={`${forStroke} ${circumference}`}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-bold text-slate-700">{forVotes}</span>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-900">{title}</p>
          <p className="text-xs text-slate-600">
            <span className="text-emerald-600 font-medium">{forVotes} Yes</span>
            <span className="mx-1">•</span>
            <span className="text-red-500 font-medium">{againstVotes} No</span>
          </p>
        </div>
      </div>
    )
  }

  const TrendIndicator = ({
    value,
    change,
    trend,
    label,
  }: {
    value: string
    change: string
    trend: "up" | "down"
    label: string
  }) => (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-slate-700">{label}</span>
        <div className="flex items-center space-x-1">
          {trend === "up" ? (
            <ArrowUp className="h-3 w-3 text-emerald-500" />
          ) : (
            <ArrowDown className="h-3 w-3 text-red-500" />
          )}
          <span className={`text-sm font-bold ${trend === "up" ? "text-emerald-600" : "text-red-600"}`}>{change}</span>
        </div>
      </div>
      <p className="text-lg font-bold text-slate-900">{value}</p>
    </div>
  )

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                  <Lightbulb className="h-5 w-5 text-white" />
                </div>
              </div>
              <div className="ml-3">
                <span className="text-xl font-bold text-slate-900">Shine a Light</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link
                  href="/"
                  className="text-slate-900 hover:text-blue-600 px-3 py-2 text-sm font-semibold transition-colors duration-200"
                >
                  Home
                </Link>
                <Link
                  href="/officials"
                  className="text-slate-600 hover:text-slate-900 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  Officials
                </Link>
                <Link
                  href="/bills"
                  className="text-slate-600 hover:text-slate-900 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  Bills
                </Link>
                <Link
                  href="/compare"
                  className="text-slate-600 hover:text-slate-900 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  Compare
                </Link>
                <Link
                  href="/about"
                  className="text-slate-600 hover:text-slate-900 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  About
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
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

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-slate-200 py-4">
              <div className="flex flex-col space-y-2">
                <Link
                  href="/"
                  className="text-slate-900 hover:text-blue-600 px-3 py-2 text-sm font-semibold transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/officials"
                  className="text-slate-600 hover:text-slate-900 px-3 py-2 text-sm font-medium transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Officials
                </Link>
                <Link
                  href="/bills"
                  className="text-slate-600 hover:text-slate-900 px-3 py-2 text-sm font-medium transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Bills
                </Link>
                <Link
                  href="/compare"
                  className="text-slate-600 hover:text-slate-900 px-3 py-2 text-sm font-medium transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Compare
                </Link>
                <Link
                  href="/about"
                  className="text-slate-600 hover:text-slate-900 px-3 py-2 text-sm font-medium transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-blue-50/30 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight">
                Follow the Money.
                <span className="block text-blue-600">See Who Holds the Power.</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Track campaign donations, lobbying influence, and the decisions that shape your life. Because democracy
                works best when citizens know who's pulling the strings.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  Track Influence Now
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 text-lg font-medium rounded-lg transition-all duration-200 bg-transparent"
                >
                  See the Money Flow
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200">
                <div>
                  <p className="text-2xl font-bold text-slate-900">$14.4B</p>
                  <p className="text-sm text-slate-600">Total Lobbying (2023)</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">11,832</p>
                  <p className="text-sm text-slate-600">Active Lobbyists</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">$8.9B</p>
                  <p className="text-sm text-slate-600">Campaign Donations</p>
                </div>
              </div>
            </div>

            {/* Hero Visualization */}
            <div className="lg:pl-8">
              <div className="bg-white rounded-2xl shadow-xl p-6 border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Top Industries by Lobbying Spend</h3>
                <div className="space-y-4">
                  <DataBar value={375} maxValue={400} color="bg-blue-500" label="Pharmaceuticals" amount="$375M" />
                  <DataBar value={298} maxValue={400} color="bg-emerald-500" label="Oil & Gas" amount="$298M" />
                  <DataBar value={267} maxValue={400} color="bg-purple-500" label="Technology" amount="$267M" />
                  <DataBar value={189} maxValue={400} color="bg-orange-500" label="Finance" amount="$189M" />
                </div>
                <p className="text-xs text-slate-500 mt-4">Data from 2023 lobbying disclosures</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Find the Story Behind the Numbers</h2>
            <p className="text-lg text-slate-600">Search politicians, bills, companies, or industries</p>
          </div>

          <div className="relative group max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5 transition-colors group-focus-within:text-blue-500" />
            <Input
              type="text"
              placeholder="Try 'pharmaceutical lobbying' or 'Senator Smith'"
              className="pl-12 pr-4 py-4 text-lg border-2 border-slate-200 focus:border-blue-500 focus:ring-blue-500/20 focus:ring-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 bg-white"
            />
          </div>
        </div>
      </section>

      {/* Money & Influence Section */}
      <section className="py-16 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-4">Money & Influence</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Who's funding campaigns and how their wealth is changing
            </p>
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
                  <DataBar
                    value={3.5}
                    maxValue={4}
                    color="bg-blue-500"
                    label="Sen. Mitch McConnell (R-KY)"
                    amount="$3.5M"
                  />
                  <DataBar
                    value={2.8}
                    maxValue={4}
                    color="bg-blue-400"
                    label="Sen. Chuck Schumer (D-NY)"
                    amount="$2.8M"
                  />
                  <DataBar
                    value={2.1}
                    maxValue={4}
                    color="bg-blue-300"
                    label="Rep. Kevin McCarthy (R-CA)"
                    amount="$2.1M"
                  />
                </div>
                <Button variant="ghost" className="w-full mt-4 text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                  View All Recipients →
                </Button>
              </CardContent>
            </Card>

            {/* How Their Wealth is Changing */}
            <Card className="border border-slate-200 hover:shadow-lg transition-all duration-300 bg-white">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold text-slate-900">How Their Wealth is Changing</CardTitle>
                    <CardDescription className="text-slate-600">Notable net worth changes in 2023</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <TrendIndicator value="$87.4M" change="+$5.4M" trend="up" label="Sen. Dianne Feinstein (D-CA)" />
                  <TrendIndicator value="$43.2M" change="+$3.1M" trend="up" label="Rep. Nancy Pelosi (D-CA)" />
                  <TrendIndicator value="$31.8M" change="-$2.3M" trend="down" label="Sen. Rick Scott (R-FL)" />
                </div>
                <Button
                  variant="ghost"
                  className="w-full mt-4 text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50"
                >
                  Track All Changes →
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Policy in Action Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-4">Policy in Action</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Close votes and the lobbying efforts that shaped them
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Close Votes That Shaped Policy */}
            <Card className="border border-slate-200 hover:shadow-lg transition-all duration-300 bg-white">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Vote className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold text-slate-900">Close Votes That Shaped Policy</CardTitle>
                    <CardDescription className="text-slate-600">Recent decisive legislation</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <VoteDonut forVotes={51} againstVotes={49} title="Inflation Reduction Act" />
                  <VoteDonut forVotes={220} againstVotes={213} title="Infrastructure Investment Act" />
                  <VoteDonut forVotes={50} againstVotes={50} title="Build Back Better (Failed)" />
                </div>
                <Button
                  variant="ghost"
                  className="w-full mt-4 text-purple-600 hover:text-purple-700 hover:bg-purple-50"
                >
                  Explore Vote Patterns →
                </Button>
              </CardContent>
            </Card>

            {/* Lobbying That Made the Difference */}
            <Card className="border border-slate-200 hover:shadow-lg transition-all duration-300 bg-white">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Eye className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold text-slate-900">
                      Lobbying That Made the Difference
                    </CardTitle>
                    <CardDescription className="text-slate-600">Industry influence on key votes</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                    <div>
                      <p className="font-semibold text-slate-900">Pharmaceutical Lobby</p>
                      <p className="text-sm text-slate-600">Drug Pricing Reform</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-orange-600">$90M</p>
                      <p className="text-xs text-slate-500">2024 spend</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                    <div>
                      <p className="font-semibold text-slate-900">Tech Industry</p>
                      <p className="text-sm text-slate-600">Antitrust Legislation</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-orange-600">$67M</p>
                      <p className="text-xs text-slate-500">2024 spend</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                    <div>
                      <p className="font-semibold text-slate-900">Oil & Gas</p>
                      <p className="text-sm text-slate-600">Climate Policy</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-orange-600">$45M</p>
                      <p className="text-xs text-slate-500">2024 spend</p>
                    </div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  className="w-full mt-4 text-orange-600 hover:text-orange-700 hover:bg-orange-50"
                >
                  See Full Impact Analysis →
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What's Happening Now Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-4">What's Happening Now</h2>
            <p className="text-lg text-slate-600">The latest moves in money and power</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {newsItems.map((item, index) => (
              <Card
                key={index}
                className="border border-slate-200 hover:shadow-lg hover:border-blue-200 transition-all duration-300 group bg-white"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">
                      {item.category}
                    </span>
                    <span className="text-xs text-slate-500">{item.timeAgo}</span>
                  </div>
                  <CardTitle className="text-lg font-bold text-slate-900 leading-tight group-hover:text-blue-700 transition-colors line-clamp-2">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-slate-600 mb-4 leading-relaxed line-clamp-3">
                    {item.description}
                  </CardDescription>
                  <Button
                    variant="ghost"
                    className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 p-0 h-auto font-medium group/btn"
                  >
                    Read Analysis
                    <ExternalLink className="ml-1 h-3 w-3 transition-transform group-hover/btn:translate-x-0.5" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button
              variant="outline"
              className="border-2 border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-300 px-6 py-3 font-semibold bg-transparent"
            >
              View All Updates
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
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
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                  <Twitter className="h-5 w-5" />
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
  )
}
