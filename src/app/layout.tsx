import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
};

export const metadata: Metadata = {
    title: 'TechEd.space - Technology Education Platform',
    description:
        'Empowering developers and tech professionals with cutting-edge education and training solutions.',
    keywords:
        'technology education, developer training, tech courses, education',
    authors: [{ name: 'TechEd.space' }],
    openGraph: {
        title: 'TechEd.space - Technology Education Platform',
        description:
            'Empowering developers and tech professionals with cutting-edge education and training solutions.',
        url: 'https://teched.space',
        siteName: 'TechEd.space',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'TechEd.space - Technology Education Platform',
        description:
            'Empowering developers and tech professionals with cutting-edge education and training solutions.',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
