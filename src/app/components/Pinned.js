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
import ChartVisualization from './ChartVisualization'

export default function Pinned() {
	return (
		<section className="grid gap-8 p-8 lg:p-10 max-w-[600px] w-full">
			<div className="flex items-start justify-between">
				<h2 className="font-regular text-stone-800 text-xl">Recent Published Journals</h2>
				<a href="#view-all">View all</a>
			</div>
			<Journals />
			<div>
				<div className="flex items-center justify-between">
					<h2 className="font-regular text-stone-800 text-xl">Sequencing Progress</h2>
					{/* <a href="#more" title="More options">
						<MoreIcon />
					</a> */}
				</div>
			</div>
			<ChartVisualization />
		</section>
	);
}
