import dynamic from "next/dynamic";
const NoSSR = dynamic(() => import("../components/hero"), {
	ssr: false,
});

export default function Home() {
	return (
		<div>
			<NoSSR />
		</div>
	);
}
