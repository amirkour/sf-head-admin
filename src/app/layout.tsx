import "./globals.css";

export const metadata = {
  title: "sf-head admin",
  description: "Satisfactory-head Admin Site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="container my-0 mx-auto">{children}</body>
    </html>
  );
}
