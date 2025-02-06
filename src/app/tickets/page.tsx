import { LucideCircleCheck, LucideFileText, LucidePencil } from 'lucide-react';
import Link from 'next/link';
import Heading from '@/components/Heading';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { initialTickets } from '@/data';
import { ticketPath } from '@/paths';

const TicketIcons = {
	OPEN: <LucideFileText />,
	'IN-PROGRESS': <LucidePencil />,
	DONE: <LucideCircleCheck />,
};

const TicketsPage = () => {
	return (
		<div className="flex-1 flex flex-col gap-y-8">
			<Heading title="Tickets Page" description="All Your Available Tickets are" />
			<div className="flex-1 flex flex-col items-center gap-y-4 animate-fade-in-from-top">
				{initialTickets.map(ticket => (
					<Card key={ticket.id} className="w-full max-w-[420px]">
						<CardHeader>
							<CardTitle className="flex gap-x-2">
								<span>{TicketIcons[ticket.status]}</span>
								<span className="truncate">{ticket.title}</span>
							</CardTitle>
						</CardHeader>
						<CardContent>
							<span className="line-clamp-3 whitespace-break-spaces">
								{ticket.content}
							</span>
						</CardContent>
						<CardFooter>
							<Link href={ticketPath(ticket.id)} className="underline text-sm">
								View
							</Link>
						</CardFooter>
					</Card>
				))}
			</div>
		</div>
	);
};

export default TicketsPage;
