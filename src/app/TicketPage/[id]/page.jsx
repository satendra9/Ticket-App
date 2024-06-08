import TicketForm from "../../(components)/TicketForm.jsx";


const getTicketById = async (id)=> {
  try{
  const res = await fetch(`http://localhost:3000/Api/Tickets/${id}`, {
    cache: "no-store"
  })
  if(!res.ok){
    console.log("Failed to get Ticket");
  }
  return res.json();
}catch(error){
  console.log(error);
}
}

let updateTicketData = {}
const TicketPage = async ({params}) => {

  const EDITMODE = params.id === "new" ? false:true;
  let updateTicketData = {}

  if(EDITMODE){
    updateTicketData = await getTicketById(params.id);
    updateTicketData = updateTicketData.foundTicket;
  }else{
    updateTicketData = {
      _id: "new"
    }
  }
  return (
    <div><TicketForm ticket={updateTicketData}/></div>
  )
}

export default TicketPage;