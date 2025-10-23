import NavBar from "@/components/NavBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-w-screen h-[max(100vh, 860px)] w-full flex flex-col items-center px-8 pt-4">
      <NavBar />
      {children}
    </div>
  );
}
