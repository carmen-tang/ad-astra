export default function CloseMenuButton({ onClick }) {
	return (
		<button
			className="text-stone-800 justify-self-end sm:hidden"
			onClick={onClick}
			type="button"
			aria-label="Close menu"
		>
			<svg
				viewBox="0 0 24 24"
				width="24"
				height="24"
				stroke="currentColor"
				strokeWidth="2"
				fill="none"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<polyline points="15 18 9 12 15 6"></polyline>
			</svg>
		</button>
	);
}