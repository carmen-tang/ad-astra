export default function TaskCard({ heading, subheading, status, due }) {
	return (
		<div className="border border-stone-300 px-6 py-5">
			<div className="flex justify-between gap-4 mb-2">
				<p>{subheading}</p>
				{/* <time>{due}</time> */}
			</div>
			<h3 className="text-stone-800 font-bold">{heading}</h3>
			{status && (
				<p className="mt-6 flex items-center gap-2 text-stone-800">{status}</p>
			)}
		</div>
	);
}
