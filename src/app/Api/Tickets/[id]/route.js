import Ticket from '@/app/(models)/Ticket';
import {NextResponse} from 'next/server' 


export async function GET(req, { params }) {
    const { id } = params;
  
    const foundTicket = await Ticket.findOne({ _id: id });
    return NextResponse.json({ foundTicket }, { status: 200 });
  }


export async function DELETE(req, { params }){
    try{
        const {id} = params;
        await Ticket.findByIdAndDelete(id);

        return NextResponse.json({message: "Ticket deleted"}, {status: 200})

    }catch(error){
        console.log(error);
        return NextResponse.json({message: "Error"}, {status: 500})
    }
}

export async function PUT(req, { params }){
    try{
        const {id} = params;
        const body = await req.json();
        const ticketData = body.formatData;

        const updateTicketData = await Ticket.findByIdAndUpdate(id, {
            ...ticketData,
        })

        return NextResponse.json({message: "Ticket updated"}, {status: 200})

    }catch(error){
        console.log(error);
        return NextResponse.json({message: "Error"}, {status: 500})
    }
}