import "./globals.css";

export const metadata = {
	title: "Producer's pantry",
	description: "Pantry for producers",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/logo.svg"
				/>
			</head>
			<body>
				{children}
			</body>
		</html>
	);
}
