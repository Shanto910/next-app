import { initialTickets } from '@/data';

interface TicketPageProps {
	params: Promise<{
		ticketId: string;
	}>;
}
const TicketPage = async ({ params }: TicketPageProps) => {
	const { ticketId } = await params;
	const ticket = initialTickets.find(ticket => ticket.id === ticketId);

	if (!ticket) {
		return <div>ticket not found</div>;
	}

	return (
		<>
			<h3>{ticket.title}</h3>
		</>
	);
};

export default TicketPage;
