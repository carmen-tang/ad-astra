'use client';

import React from 'react';
import TaskCard from './TaskCard'
import ProgressCard from './ProgressCard'
import NumberIcon from './../assets/NumberIcon'
import AlertIcon from './../assets/AlertIcon'
import CheckIcon from './../assets/CheckIcon'
import MoreIcon from './../assets/MoreIcon'
import VirusIcon from './../assets/VirusIcon'
import BacteriaIcon from './../assets/BacteriaIcon'
import MicroscopeIcon from './../assets/MicroscopeIcon'
import DNAIcon from './../assets/DNAIcon'
import Journals from './Journals'

export default function Pinned() {
	return (
		<section className="grid gap-8 p-8 lg:p-10">
			<div className="flex items-start justify-between">
				<h2 className="font-regular text-stone-800 text-xl">Recent Published Journals</h2>
				<a href="#view-all">View all</a>
			</div>
			<Journals />
			<div>
				<div className="flex items-center justify-between">
					<h2 className="font-regular text-stone-800 text-xl">My learnings</h2>
					<a href="#more" title="More options">
						<MoreIcon />
					</a>
				</div>
				<p className="my-2">Your progress of medical lectures</p>
			</div>
			<ul className="grid sm:grid-cols-2 gap-x-4 gap-y-8">
				<li>
					<ProgressCard
						title={"Viruses"}
						progress={"96%"}
						icon={<VirusIcon />}
						color={1}
					/>
				</li>
				<li>
					<ProgressCard
						title={"Bacterial cells"}
						progress={"33%"}
						icon={<BacteriaIcon />}
						color={2}
					/>
				</li>
				<li>
					<ProgressCard
						title={"Med science"}
						progress={"7%"}
						icon={<MicroscopeIcon />}
						color={3}
					/>
				</li>
				<li>
					<ProgressCard
						title={"Human genes"}
						progress={"58%"}
						icon={<DNAIcon />}
						color={4}
					/>
				</li>
			</ul>
		</section>
	);
}
