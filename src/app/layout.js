import "/valentines/globals.css"; // Ensure correct path for GitHub Pages

export const metadata = {
  title: "Valentines 2025",
  description: "Dria sent you a letter!",
  metadataBase: new URL('https://pinkmeraki.github.io/valentines'), // Correct base URL for GitHub Pages
  openGraph: {
    images: "/valentines/heart.png" // Ensure correct path for OpenGraph image
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/valentines/globals.css" /> {/* Ensures styles load */}
        <meta property="og:image" content="/valentines/heart.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
