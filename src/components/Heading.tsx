import { Separator } from './ui/separator';

interface HeadingProps {
	title: string;
	description?: string;
}

const Heading = ({ title, description }: HeadingProps) => {
	return (
		<>
			<div className="px-8">
				<h2 className="text-3xl font-bold tracking-tight">{title}</h2>
				{description && <p className="text-sm text-slate-500">{description}</p>}
			</div>
			<Separator />
		</>
	);
};

export default Heading;
