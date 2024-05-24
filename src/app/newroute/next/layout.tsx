

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <h1>nav from next route</h1>
    {children}
    </>
  );
}
