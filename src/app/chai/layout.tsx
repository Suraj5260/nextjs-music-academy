export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<h2 className="text-3xl text-center ">Inner layout Item</h2>
			{children}
		</>
	);
}
