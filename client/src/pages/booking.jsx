import { useState, useEffect } from "react";
import "../App.css";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Booking() {
  //Creating states for Bookings & Forms
  const [booking, setBooking] = useState([]);
  const [delivery, setDelivery] = useState("");
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [shot, setShot] = useState("");
  const [isPaid, setIsPaid] = useState(false);
  const [prePaid, setPrePaid] = useState(false);
  const [form1, setForm1] = useState("hidden");
  const [form2, setForm2] = useState("hidden");

  //So that we can see table o bookings in starting only
  useEffect(() => {
    getBookings();
  }, []);

  const getBookings = async () => {
    let result = await fetch("http://localhost:3005/api/booking");
    result = await result.json();

    setBooking(result);
  };

  const editForm = async (val) => {
    setLocation(val.location_id._id);
    setDelivery(val.deliveryDate);
    setShot(val.shot_id._id);
    setIsPaid(val.isPaid);
    setForm2("");
  };

  return (
    <div>

     <Navbar/>
      <div className="font-bold text-blue-600 text-3xl my-[30px]"> Manage Booking </div>
      {/* Button That Changes visibility of Adding Booking Form */}
      <button
        className={`form1 w-14 h-14 bg-sky-800 rounded-full text-white text-2xl font-bold my-10`}
        onClick={() => { form2=="" ?alert("Cannot add and edit booking at same time"): setForm1("");
        }}
      >
        +
      </button>

      {/*Adding Booking Form Takes customer_id , Location_id , DroneShot_id , Delveriy date and isPaid and PrePaid as Input */}
      <div
        className={`container-form1 w-[600px] h-[600px] bg-green-100 m-auto ${form1}`}
      >
        <div className="font-bold text-blue-600"> Add Booking </div>

        <input
          className="inputbox w-[300px] border-solid border-black block p-2 my-5 mx-auto"
          type="text"
          placeholder="Enter Customer ID"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="inputbox w-[300px] border-solid border-black block p-2 my-5 mx-auto"
          type="mail"
          placeholder="Enter Location ID"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <input
          type="date"
          data-provide="datepicker"
          name="date"
          id="date_val"
          value={delivery}
          onChange={(e) => setDelivery(e.target.value)}
        ></input>

        <input
          className="inputbox w-[300px] border-solid border-black block p-2 my-5 mx-auto"
          type="text"
          placeholder="Enter Shot ID"
          value={shot}
          onChange={(e) => setShot(e.target.value)}
        />

        <button
          className=" h-[60px] bg-slate-600 text-yellow-200 px-5 rounded-xl m-10"
          onClick={() => setIsPaid(!isPaid)}
        >{`Paid : ${isPaid}`}</button>
        <button
          className=" h-[60px] bg-slate-600  text-yellow-200 px-5 rounded-xl m-10"
          onClick={() => setPrePaid(!prePaid)}
        >{`Pre Paid : ${prePaid}`}</button>
        <br />
        <button
          class="inline-block px-7 py-3 mr-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          role="button"
        
          /* This Fuction is responsible for conneting and creating new Booking in server and stores it in Booking array for this page
           *  @params customer_id : id from customer table to be used as a foreign key
           *  @params Location_id : id from Location table to be used as a foreign key
           *  @params DroneShot_id : id from DroneShot table to be used as a foreign key
           */  
          
          onClick={async () => {
            let result = await fetch("http://localhost:3005/api/booking", {
              method: "post",
              body: JSON.stringify({
                customer_id: name,
                location_id: location,
                shot_id: shot,
                deliveryDate: delivery,
                isPaid,
                prePaid,
              }),
              headers: {
                "Content-Type": "application/json",
              },
            });
            result = await result.json();
            getBookings();
            setName("");
            setLocation("")
            setShot("")
            setDelivery("")
          }}
        >
          Add Booking
        </button>

        <button
          class="inline-block px-7 py-3 mr-2 bg-red-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          role="button"
          onClick={() => {
            setForm1("hidden");
            setName("");
            setLocation("")
            setShot("")
            setDelivery("")
          }}
        >
          cancel
        </button>
      </div>

      {/*Editing Booking Form Takes Location_id , DroneShot_id and isPaid and Delivery Date as Input */}
      <div
        className={`container-form1 w-[600px] h-[600px] bg-green-100 m-auto ${form2}`}
      >
        <div className="font-bold text-blue-600"> Edit Booking </div>

        <input
          className="inputbox w-[300px] border-solid border-black block p-2 my-5 mx-auto"
          type="mail"
          placeholder="Enter Location ID"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          className="inputbox w-[300px] border-solid border-black block p-2 my-5 mx-auto"
          type="text"
          placeholder="Enter Delivery date in MM/DD/YYYY HH:MM format only"
          value={delivery}
          onChange={(e) => setDelivery(e.target.value)}
        />
        <input
          className="inputbox w-[300px] border-solid border-black block p-2 my-5 mx-auto"
          type="text"
          placeholder="Enter Shot ID"
          value={shot}
          onChange={(e) => setShot(e.target.value)}
        />
        <button
          className=" h-[60px] bg-slate-600 text-yellow-200 px-5 rounded-xl m-10"
          onClick={() => setIsPaid(!isPaid)}
        >{`Paid : ${isPaid}`}</button>

        <button
          class="inline-block px-7 py-3 mr-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          role="button"
          /*  This Fuction is responsible for conneting and Editing a particular Booking in server
          *  @params booking_id : ID stroed in ID state , Used for fecthing a particular Booking from server
          *  @params Location_id : id from Location table to be used as a foreign key
          *  @params DroneShot_id : id from DroneShot table to be used as a foreign key
          *  @params deliveryDate : date from calaneder input
          *  @params isPaid : boolean to check if order is paid or not
          */

          onClick={async () => {
            let result = await fetch(
              `http://localhost:3005/api/booking/${id}`,
              {
                method: "put",
                body: JSON.stringify({
                  location_id: location,
                  shot_id: shot,
                  deliveryDate: delivery,
                  isPaid,
                }),
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );
            result = await result.json();
            getBookings();
            setLocation("");
            setShot("");
            setDelivery("");
            setIsPaid(false);
          }}
        >
          Edit Booking
        </button>

        <button
          class="inline-block px-7 py-3 mr-2 bg-red-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          role="button"
          onClick={() => {
            setForm2("hidden");
            setLocation("");
            setShot("");
            setDelivery("");
            setIsPaid(false);
          }}
        >
          cancel
        </button>
      </div>

      <div className='mb-[150px]'>
        <div class="flex flex-col">
          <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div class="overflow-scroll">
                <table class="min-w-full text-left text-sm font-light  overflow-scroll">
                  <thead class="border-b font-medium dark:border-neutral-500">
                    <tr>
                      <th scope="col" class="px-6 py-4">
                        #
                      </th>
                      <th scope="col" class="px-6 py-4 text-center">
                        Name
                      </th>
                      <th scope="col" class="px-6 py-4 text-center">
                        Booking _id
                      </th>
                      <th scope="col" class="px-6 py-4 text-center">
                        City
                      </th>
                      <th scope="col" class="px-6 py-4 text-center">
                        area
                      </th>
                      <th scope="col" class="px-6 py-4 text-center">
                        Shot
                      </th>
                      <th scope="col" class="px-6 py-4 text-center">
                        Date OF Delivery
                      </th>
                      <th scope="col" class="px-6 py-4 text-center">
                        Date OF Booking
                      </th>
                      <th scope="col" class="px-6 py-4 text-center">
                        isPaid
                      </th>
                      <th scope="col" class="px-6 py-4 text-center">
                        PrePaid
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/*This Fuction is responsible for mapping every element that is stored in Booking array by getBookings function 
                   * @Params Bookings : a State Array that consists of bookings fetched from Dataase Bookings Table */}

                    {booking.map((val, key) => {
                      return (
                        <tr class="border-b dark:border-neutral-500">
                          <td class="whitespace-nowrap px-6 py-4 font-medium">
                            {key + 1}
                          </td>
                          <td class="whitespace-nowrap px-6 py-4">
                            {val.customer_id.name}
                          </td>
                          <td class="whitespace-nowrap px-6 py-4">{val._id}</td>
                          <td class="whitespace-nowrap px-6 py-4">
                            {val.location_id.city}
                          </td>
                          <td class="whitespace-nowrap px-6 py-4">
                            {val.location_id.area}
                          </td>
                          <td class="whitespace-nowrap px-6 py-4">
                            {val.shot_id.typeOfShot}
                          </td>
                          <td class="whitespace-nowrap px-6 py-4">
                            {val.dateOfBooking}
                          </td>
                          <td class="whitespace-nowrap px-6 py-4">
                            {val.deliveryDate}
                          </td>
                          <td class="whitespace-nowrap px-6 py-4">
                            {val.isPaid.toString()}
                          </td>
                          <td class="whitespace-nowrap px-6 py-4">
                            {val.prePaid.toString()}
                          </td>
                          <td class="whitespace-nowrap px-6 py-4">
                            <button
                              //this button is used for deleting the record and is different for row in table
                              onClick={async () => {
                                let result = await fetch(
                                  `http://localhost:3005/api/booking/${val._id}`,
                                  {
                                    method: "delete",
                                    headers: {
                                      "Content-Type": "application/json",
                                    },
                                  }
                                );

                                result = await result.json();
                                getBookings();
                              }}
                              type="button"
                            >
                              delete
                            </button>
                          </td>
                          <td>
                            <button
                              type="button"
                              onClick={() => {
                                setId(val._id);
                                //this function is reponsible for initiatiang editing of data in Booking Table
                                form1=="hidden" ? editForm(val) : alert("Cannot edit and Add Bookings at the same time")
                              }}
                            >
                              edit
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer  />
    </div>
  );
}

export default Booking;
