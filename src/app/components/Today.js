'use client';

import React from 'react';

import PlusButton from './PlusButton'
import Avatar from './Avatar'
import Callout from './Callout'
import CheckIcon from './../assets/CheckIcon'
import ClockIcon from './../assets/ClockIcon'

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
				<h2 className="text-stone-800 text-2xl font-medium">
					Sustainable development goals and health innovation
				</h2>
				<div className="flex flex-wrap justify-between gap-x-6 gap-y-4">
					<ul className="flex items-center">
						<li>
							<Avatar src="https://images.generated.photos/oWr1knsWISwmkyGvpL5CWBI8zqndUZPuJm5_SsELHVE/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/Nzg4Mjk4LmpwZw.jpg" />
						</li>
						<li className="-ml-5">
							<Avatar src="https://images.generated.photos/NvyV3aw5LJGHlsxovZkI3gxVaQ0k0EXDiXx1gwJLRIg/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTY4MDI0LmpwZw.jpg" />
						</li>
						<li className="-ml-5">
							<Avatar src="https://images.generated.photos/DIZ_Lh2IEmvaYNzbhXKP9kPXf0O3mtkGF6CjOI6pAss/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDE0ODY2LmpwZw.jpg" />
						</li>
						<li className="-ml-5">
							<span className="relative grid place-items-center rounded-full h-12 w-12 border-2 border-white bg-orange-200 text-stone-700 font-regular">
								+5
							</span>
						</li>
					</ul>
					<div className="border-l pl-6">
						<p className="text-stone-800">Medi Team meeting</p>
						<time>13:30 - 14:50</time>
					</div>
				</div>
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