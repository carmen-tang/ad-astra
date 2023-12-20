'use client';

import React from 'react';
import Avatar from './Avatar'
import EditButton from './EditButton'
import MessageButton from './MessageButton'
import PlusButton from './PlusButton'
import Image from 'next/image'

export default function Profile() {
	return (
		<section className="flex flex-col md:max-xl:flex-row gap-4 items-center p-8 border-stone-300 max-xl:border-t xl:p-10 xl:border-l">
			<div className="relative">
				<Image
					src="/profile.jpeg"
					width={50}
					height={50}
					alt="Picture of the author"
					className="rounded-full"
				/>
				<span
					className="absolute top-0 end-0 inline-block border-2 border-white rounded-full w-4 h-4 bg-emerald-400"
					aria-label="available"
				></span>
			</div>
			<div className="text-center sm:max-xl:text-left">
				<h3 className="font-bold text-stone-800 min-w-[8ch]">Carmen Tang</h3>
				<p className="">Scientist</p>
			</div>
			<div className="flex gap-3 items-center xl:flex-col xl:mt-auto md:max-xl:ml-auto">
				<EditButton />
				<MessageButton />
				<PlusButton />
			</div>
		</section>
	);
}