import dynamic from "next/dynamic";
const Hero = dynamic(() => import("../components/hero"), {
	ssr: false,
});
import Plan from "../components/plan";
import Values from "../components/values";
import Offer from "../components/offer";
import Map from "../components/map";
import Footer from "../components/footer";

export default function Home() {
	return (
		<div>
			<Hero />
			<Plan />
			<Values />
			<Offer />
			<Map />
			<Footer />
		</div>
	);
}
