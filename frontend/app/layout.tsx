import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'LobbyPulse - Follow the Money, Track the Influence',
    description: 'Discover how lobbying, campaign donations, and special interests shape policy in Washington. Make political influence transparent and accessible.',
    keywords: 'political transparency, lobbying, campaign donations, influence tracking, Washington DC, policy analysis',
    authors: [{ name: 'LobbyPulse Team' }],
    openGraph: {
        title: 'LobbyPulse - Political Transparency Platform',
        description: 'Track money in politics and understand how influence shapes policy decisions.',
        type: 'website',
        locale: 'en_US',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'LobbyPulse - Political Transparency Platform',
        description: 'Track money in politics and understand how influence shapes policy decisions.',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
