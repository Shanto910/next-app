import Link from 'next/link';
import Heading from '@/components/Heading';
import { ticketsPath } from '@/paths';

const HomePage = () => {
	return (
		<div className="flex-1 flex flex-col gap-y-8">
			<Heading title="Home" description="Your Home Place to Start" />
			<div className="flex-1 flex flex-col items-center">
				<Link href={ticketsPath()} className="underline">
					Tickets Page
				</Link>
			</div>
		</div>
	);
};

export default HomePage;
