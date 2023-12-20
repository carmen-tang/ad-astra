export default function LogOutButton() {
	return (
		<button className="flex items-center gap-3 group" type="button">
			<span className="p-3 rounded-full bg-stone-700 text-white group-hover:bg-stone-600">
				<svg
					viewBox="0 0 24 24"
					width="16"
					height="16"
					stroke="currentColor"
					strokeWidth="2"
					fill="none"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
					<polyline points="16 17 21 12 16 7"></polyline>
					<line x1="21" y1="12" x2="9" y2="12"></line>
				</svg>
			</span>
			<span className="text-stone-700 font-bold group-hover:text-stone-600">
				Log out
			</span>
		</button>
	);
}