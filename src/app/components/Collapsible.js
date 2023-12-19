'use client';

import React, { useEffect, useState } from 'react';

export default function Collapsible({ trigger, children }) {
	const [open, setOpen] = React.useState(true);

	return (
		<div>
			<button
				className="font-bold px-6 py-4 hover:bg-[#88bea3] hover:text-white flex w-full gap-3 text-stone-700"
				onClick={() => setOpen((prev) => !prev)}
				type="button"
			>
				{trigger}
				<svg
					className={`ml-auto transition-transform ${open ? "rotate-180" : ""}`}
					viewBox="0 0 24 24"
					width="24"
					height="24"
					stroke="currentColor"
					strokeWidth="2"
					fill="none"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<polyline points="6 9 12 15 18 9"></polyline>
				</svg>
			</button>
			<div
				className={`grid transition-[grid-template-rows] [&>*]:overflow-hidden ${
					open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
				}`}
			>
				{children}
			</div>
		</div>
	);
}