'use client';

import React from 'react';

import PlusButton from './PlusButton'
import Avatar from './Avatar'
import Callout from './Callout'
import CheckIcon from './../assets/CheckIcon'
import ClockIcon from './../assets/ClockIcon'
import Appointments from './appointments/Appointments';

export default function Today() {
	return (
		<section className="p-8 lg:p-10 bg-white grid gap-12 content-start">
			<header className="flex items-center justify-between">
				<div>
					<h1 className="font-regular text-stone-800 text-xl">Today's Plan</h1>
					<p>June 14th, 2022</p>
				</div>
				<PlusButton size="lg" />
			</header>
			<div className="grid gap-8">
				<Appointments />
				<div className="grid gap-6">
					<Callout
						heading="Weekly Report"
						subheading="Track your performance"
						linkText="View report"
						url="#report"
						variant={1}
					/>
					<Callout
						heading="Study 78X"
						subheading={
							<span className="flex items-center gap-2">
								<ClockIcon /> In progress
							</span>
						}
						variant={2}
					/>
					<Callout
						heading="Analyses"
						subheading={
							<span className="flex items-center gap-2">
								<CheckIcon /> Completed
							</span>
						}
						variant={3}
					/>
				</div>
			</div>
		</section>
	);
}