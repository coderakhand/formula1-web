import NavBar from "@/components/NavBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-screen h-screen flex flex-col items-center px-8 py-4 bg-background">
      <NavBar />
      {children}
    </div>
  );
}
