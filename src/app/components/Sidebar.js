'use client';

import React, { useEffect, useState } from 'react';
import Logo from './Logo'
import Collapsible from './Collapsible'
import LogOutButton from './LogOutButton'
import CloseMenuButton from './CloseMenuButton'
import MenuButton from './MenuButton'
import Image from 'next/image'

const links = [
	{
		label: "Dashboard",
		url: "#dashboard",
		icon: (
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
				<line x1="18" y1="20" x2="18" y2="10"></line>
				<line x1="12" y1="20" x2="12" y2="4"></line>
				<line x1="6" y1="20" x2="6" y2="14"></line>
			</svg>
		)
	},
	{
		label: "Education",
		url: "#education",
		icon: (
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
				<circle cx="18" cy="5" r="3"></circle>
				<circle cx="6" cy="12" r="3"></circle>
				<circle cx="18" cy="19" r="3"></circle>
				<line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
				<line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
			</svg>
		)
	},
	{
		label: "Resources",
		url: "#resources",
		icon: (
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
				<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
			</svg>
		),
		submenu: [
			{
				label: "Genetics 101",
				url: "#genetics",
				color: "bg-rose-300"
			},
			{
				label: "DNA synthesis",
				url: "#dna",
				color: "bg-orange-300"
			},
			{
				label: "Events",
				url: "#events",
				color: "bg-indigo-800"
			}
		]
	},
	{
		label: "Settings",
		url: "#settings",
		icon: (
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
				<circle cx="12" cy="12" r="3"></circle>
				<path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
			</svg>
		)
	}
];

function Sidebar() {
	const [open, setOpen] = React.useState(false);

	return (
		<>
			<button
				className={`fixed inset-0 bg-stone-800 transition-all z-10 ${
					open ? "opacity-30 visible" : "opacity-0 invisible"
				} sm:hidden`}
				onClick={() => setOpen(false)}
				type="button"
				aria-label="Close menu"
			></button>
			<aside
				className={`max-sm:fixed bg-[#ecf8ff] inset-0 end-auto flex flex-col gap-10 max-sm:transition-transform z-10 overflow-auto sm:sticky sm:top-3 sm:max-h-[calc(100vh-1.5rem)] ${
					open ? "max-sm:translate-x-0" : "max-sm:-translate-x-full"
				}`}
			>
				<Image
					src="/logo.png"
					width={150}
					height={150}
					alt="As Astra"
					className="rounded-full mx-auto mt-8"
				/>
				<ul className="grid gap-2 w-[280px]">
					{links.map(({ label, url, icon, submenu }) => (
						<li key={label}>
							{submenu ? (
								<Collapsible
									trigger={
										<>
											{label}
										</>
									}
								>
									<ul className="">
										{submenu.map(({ label, url, color }) => (
											<li key={label}>
												<a
													className="flex items-center gap-3 px-6 py-2 hover:bg-[#88bea3] hover:text-white p-4"
													href={url}
												>
													{/* <span className={`block w-2 h-2 rounded-sm ${color}`}></span> */}
													{label}
												</a>
											</li>
										))}
									</ul>
								</Collapsible>
							) : (
								<a
									className="font-bold p-2 hover:bg-[#88bea3] hover:text-white px-6 py-4 flex gap-3 text-stone-700"
									href={url}
								>
									{label}
								</a>
							)}
						</li>
					))}
				</ul>
				<div className="mt-auto grid grid-cols-2 items-center px-6 py-4">
					<LogOutButton />
					<CloseMenuButton onClick={() => setOpen(false)} />
				</div>
			</aside>
			<MenuButton onClick={() => setOpen(true)} />
		</>
	);
}

export default Sidebar;