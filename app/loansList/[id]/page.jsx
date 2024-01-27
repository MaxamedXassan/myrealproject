
import Link from "next/link"
import {HiPencilAlt} from "react-icons/hi"
import {HiOutlineTrash} from "react-icons/hi"
// import prisma from "@/app/libs/prismabd"
import prisma from "../../libs/prismabd"
import moment from 'moment-timezone';



async function getLoans() {
  try {
    const loans = await prisma.loan.findMany({});
    return loans;
  } catch (error) {
    console.error('Error fetching customers:', error);
    throw error; // Re-throwing the error to handle it where the function is called
  }
}

const Single = async () => {
  const loans = await getLoans()

  // const loans = [
  //   {
  //     id: 1,
  //     title: "bariis baasto sonkor",
  //     desc: "wuxuu qatay 2bariis 1baasto hafSonkor",
  //     prace: "$12",
  //     Date: "7-11-2023"
  //   },

  //   {
  //     id: 2,
  //     title: "bariis baasto bur",
  //     desc: "wuxuu qatay 2bariis 1baasto 2bur",
  //     prace: "$12",
  //     Date: "7-11-2023"
  //   },

  //   {
  //     id: 3,
  //     title: "caleen baasto sonkor",
  //     desc: "wuxuu qatay 3caleen 1baasto hafSonkor",
  //     prace: "$12",
  //     Date: "7-11-2023"
  //   },

  //   {
  //       id: 3,
  //       title: "caleen baasto sonkor",
  //       desc: "wuxuu qatay 3caleen 1baasto hafSonkor",
  //       prace: "$12",
  //       Date: "7-11-2023"
  //     },

  //     {
  //       id: 3,
  //       title: "caleen baasto sonkor wuxuu ",
  //       desc: "wuxuu qatay 3caleen 1baasto hafSonkor",
  //       prace: "$12",
  //       Date: "7-11-2023"
  //     },

  //     {
  //       id: 3,
  //       title: "caleen baasto sonkor  ",
  //       desc: "wuxuu qatay 3caleen 1baasto hafSonkor",
  //       prace: "$12",
  //       Date: "7-11-2023"
  //     },
  // ]


  return (

    <div class="flex flex-col w-full">
      {loans.map((loan) => (
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8 ">
    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8 ">
      <div class="overflow-hidden ">
        <table
          class="min-w-full border text-center text-sm font-light dark:border-neutral-500 ">
          <thead class="border-b font-medium dark:border-neutral-500 ">
            <tr>
              <th
                scope="col"
                class="border-r px-6 py-4 dark:border-neutral-500 w-3/6">
                Title
              </th>
              <th
                scope="col"
                class="border-r px-6 py-4 dark:border-neutral-500 ">
                Price
              </th>
              <th
                scope="col"
                class="border-r px-6 py-4 dark:border-neutral-500">
                Date
              </th>
              <th scope="col" class="px-6 py-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b dark:border-neutral-500">
             
              <td
                class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                {loan.title}
              </td>
              <td
                class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                {loan.price}
              </td>
              <td class="whitespace-nowrap px-6 py-4">
              {moment(loan.Date).tz('Africa/Mogadishu').format('YYYY-MM-DD')}
                </td>
                {/* <td className="whitespace-nowrap px-6 py-4">
  {new Date(loan.Date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'Africa/Mogadishu'
  })}
</td> */}

              <td
                class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                  <div className="flex gap-2">
                  <button className="text-red-500"> <HiOutlineTrash size={24} /></button>
             
                  < HiPencilAlt size={24} />
                  </div>
             
              </td>
            </tr>
           
          </tbody>
        </table>
      </div>
    </div>
  </div>
  ))}
</div>

 


  )
}

export default Single
