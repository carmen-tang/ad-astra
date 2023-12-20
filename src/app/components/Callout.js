export default function Callout({ heading, subheading, linkText, url, variant = 1 }) {
	const variants = [
		{
			class:
				"lg:col-span-2 lg:grid-cols-1 bg-gradient-to-br from-[#176B87] to-[#64CCC5]",
		},
		{
			class: "bg-gradient-to-br from-[#64CCC5] to-[#DAFFFB]",
		},
		{
			class: "bg-gradient-to-br from-[#DAFFFB] to-[#001C30]",
		}
	];
	return (
		<div className={`grid ${variants[variant - 1].class}`}>
			<div className="flex flex-col gap-2 p-6">
				<h3 className="text-xl text-stone-800">{heading}</h3>
				<p className="text-stone-800 font-light">{subheading}</p>
				{url && (
					<a
						className="self-start p-2 text-xs font-bold tracking-wide text-stone-800 uppercase hover:text-stone-900 bg-white mt-10"
						href={url}
					>
						{linkText}
					</a>
				)}
			</div>
		</div>
	);
}