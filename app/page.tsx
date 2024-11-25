import dynamic from "next/dynamic";
const Hero = dynamic(() => import("../components/hero"), {
	ssr: false,
});
import Plan from "../components/plan";

export default function Home() {
	return (
		<div>
			<Hero />
			<Plan />
		</div>
	);
}
