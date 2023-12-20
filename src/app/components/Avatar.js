export default function Avatar({ src, size = "md" }) {
	const sizes = {
		sm: "h-8 w-8",
		md: "h-12 w-12",
		lg: "h-16 w-16"
	};

	return (
		<img
			className={`relative rounded-full border-2 border-white saturate-0 ${sizes[size]}`}
			src={src}
			width="256"
			height="256"
		/>
	);
}