
import Link from "next/link"
import {HiPencilAlt} from "react-icons/hi"
import {HiOutlineTrash} from "react-icons/hi"
import RemoveBtn from "./RemoveBtn"

import prisma from "@/app/libs/prismabd"




async function getCustomers() {
  try {
    const customers = await prisma.customer.findMany({});
    return customers;
  } catch (error) {
    console.error('Error fetching customers:', error);
    throw error; // Re-throwing the error to handle it where the function is called
  }
}

const CusList = async () => {

const customers = await getCustomers()

      
// const customers = [
//     {
//         id: 1,
//         name: "farxiyo",
//         number: "615450000"
//     },
  
//     {
//         id: 1,
//         name: "xafso",
//         number: "615450000"
//     },
  
//     {
//         id: 1,
//         name: "HAJARA",
//         number: "615450000"
//     },
  
//     {
//         id: 1,
//         name: "ilyas",
//         number: "615450000"
//     },
  
//     {
//         id: 1,
//         name: "maxamed",
//         number: "615450000"
//     },

//     {
//         id: 1,
//         name: "maxamed",
//         number: "615450000"
//     },

//     {
//         id: 1,
//         name: "maxamed",
//         number: "615450000"
//     },
//   ]


  // const [customers, setCustomers] = useState();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:3000/api/customer');
  //       setCustomers(response.data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //     console.log(cus)
  //   };

  //   fetchData();
  // }, []);


  return (
    
    <div>
        <Link className='flex mt-4 p-2 items-center justify-center bg-yellow-400 font-bold' href={"/newCustomer"}>Add</Link>
       <div>
        {customers.map((customer) => (
            <div key={customer.id} className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
                <Link href={`loansList/${customer.id}`} className=" w-4/6">
                <h3 className="font-bold ">{customer.name}</h3>
                <p>{customer.number}</p>
                </Link>

                <div className='flex gap-2'>
        <RemoveBtn/>
        <Link href={'/editTopic/123'}>
            <HiPencilAlt size={24} />
        </Link>
      </div>
               
            </div>

            
        ))}
       </div>
    </div>
     
  )
}

export default CusList
