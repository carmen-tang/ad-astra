export default function MenuButton({ onClick }) {
	return (
		<button
			className="fixed bottom-4 end-4 p-4 bg-stone-800 rounded-full text-white hover:bg-stone-700 sm:hidden"
			onClick={onClick}
			type="button"
			aria-label="Open menu"
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
				<line x1="3" y1="12" x2="21" y2="12"></line>
				<line x1="3" y1="6" x2="21" y2="6"></line>
				<line x1="3" y1="18" x2="21" y2="18"></line>
			</svg>
		</button>
	);
}