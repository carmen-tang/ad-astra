export default function PlusButton({ size = "md" }) {
	const padding = {
		md: "p-3",
		lg: "p-4"
	};

	const icon = {
		md: 20,
		lg: 24
	};
	return (
		<button
			className={`bg-stone-800 rounded-full text-white hover:bg-stone-700 ${padding[size]}`}
			type="button"
			aria-label="Add item"
		>
			<svg
				viewBox="0 0 24 24"
				width={icon[size]}
				height={icon[size]}
				stroke="currentColor"
				strokeWidth="2"
				fill="none"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<line x1="12" y1="5" x2="12" y2="19"></line>
				<line x1="5" y1="12" x2="19" y2="12"></line>
			</svg>
		</button>
	);
}