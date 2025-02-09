import "/valentines/src/app/globals.css"; // Ensure correct path for GitHub Pages

export const metadata = {
  title: "Valentines 2025",
  description: "Dria sent you a letter!",
  metadataBase: new URL('https://pinkmeraki.github.io/valentines'),
  openGraph: {
    images: "/valentines/heart.png", // Ensure correct path
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/valentines/src/app/globals.css" /> {/* Ensures styles load */}
        <meta property="og:image" content="/valentines/heart.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
