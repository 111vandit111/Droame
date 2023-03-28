import { useEffect, useState } from "react";
import "../App.css";

function Customer() {
    // Creating States that will be used in this page 
    const [customer, setCustomer] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [id, setId] = useState("");
    const [form1, setForm1] = useState("hidden");
    const [form2, setForm2] = useState("hidden");


    useEffect(() => {
        getCustomer();
    }, []);

    //So that we can see table o customers in starting only
    const getCustomer = async () => {
        let result = await fetch("http://localhost:3005/api/customer");
        result = await result.json();

        setCustomer(result);
    };



    const editForm = async () => {
        setForm2("");
    }

    return (
        <div>
            {/* Button That Changes visibility of Adding Customer Form */}
            <div className="font-bold text-blue-600"> Add Customer </div>
            <button
                className={`form1 w-14 h-14 bg-sky-800 rounded-full text-white text-2xl font-bold my-10`}
                onClick={() => {
                    setForm1("");
                }}
            >
                +
            </button>
            {/*Adding Customer Form Takes customer_id , Location_id , DroneShot_id , Delveriy date and isPaid and PrePaid as Input */}
            <div
                className={`container-form1 w-[600px] h-[600px] bg-green-100 m-auto ${form1}`}
            >
                <div className="font-bold text-blue-600"> Add Customer </div>

                <input
                    className="inputbox w-[300px] border-solid border-black block p-2 my-5 mx-auto"
                    type="text"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    className="inputbox w-[300px] border-solid border-black block p-2 my-5 mx-auto"
                    type="mail"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className="inputbox w-[300px] border-solid border-black block p-2 my-5 mx-auto"
                    type="text"
                    placeholder="Enter Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
                <input
                    className="inputbox w-[300px] border-solid border-black block p-2 my-5 mx-auto"
                    type="text"
                    placeholder="Enter Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />

                <button
                    class="inline-block px-7 py-3 mr-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    role="button"
                    /* This Fuction is responsible for conneting and creating new Customer in server and stores it in Customer array for this page
                     *  @params name : String name of Customer
                     *  @params Email : String email of Customer
                     *  @params Phone : number phone number of Customer
                     *  @params address : String address of Customer 
                     */
                    onClick={async () => {
                        let result = await fetch("http://localhost:3005/api/customer", {
                            method: "post",
                            body: JSON.stringify({ name, Email: email, phone, address }),
                            headers: {
                                "Content-Type": "application/json",
                            },
                        });
                        result = await result.json();
                        getCustomer();
                    }}
                >
                    Add Customer
                </button>

                <button
                    class="inline-block px-7 py-3 mr-2 bg-red-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    role="button"
                    onClick={() => {
                        setForm1("hidden");
                    }}
                >
                    cancel
                </button>
            </div>


            {/*Editing Customer Form Takes name ,email , Phone Numer and Address as Input */}
            <div
                className={`container-form1 w-[600px] h-[600px] bg-green-100 m-auto ${form2}`}
            >
                <div className="font-bold text-blue-600"> Edit Customer </div>

                <input
                    className="inputbox w-[300px] border-solid border-black block p-2 my-5 mx-auto"
                    type="text"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    className="inputbox w-[300px] border-solid border-black block p-2 my-5 mx-auto"
                    type="mail"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className="inputbox w-[300px] border-solid border-black block p-2 my-5 mx-auto"
                    type="text"
                    placeholder="Enter Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
                <input
                    className="inputbox w-[300px] border-solid border-black block p-2 my-5 mx-auto"
                    type="text"
                    placeholder="Enter Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />

                <button
                    class="inline-block px-7 py-3 mr-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    role="button"
                    onClick={async () => {
                        /* This Fuction is responsible for conneting and Editing a particular Customer in server
                        *  @params id : ID stroed in ID state , Used for fecthing a particular Customer from server
                        *  @params name : String name of Customer
                        *  @params Email : String email of Customer
                        *  @params Phone : number phone number of Customer
                        *  @params address : String address of Customer 
                        */
                        let result = await fetch(`http://localhost:3005/api/customer/${id}`, {
                            method: "put",
                            body: JSON.stringify({ name, Email: email, phone, address }),
                            headers: {
                                "Content-Type": "application/json",
                            },
                        });
                        result = await result.json();
                        getCustomer();
                        setAddress("");
                        setEmail("");
                        setId("");
                        setName("");
                        setPhone("");
                    }}
                >
                    Edit Customer
                </button>

                <button
                    class="inline-block px-7 py-3 mr-2 bg-red-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    role="button"
                    onClick={() => {
                        setForm2("hidden");
                    }}
                >
                    cancel
                </button>
            </div>

            <div>
                <div class="flex flex-col">
                    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                            <div class="overflow-hidden">
                                <table class="min-w-full text-left text-sm font-light">
                                    <thead class="border-b font-medium dark:border-neutral-500">
                                        <tr>
                                            <th scope="col" class="px-6 py-4">
                                                #
                                            </th>
                                            <th scope="col" class="px-6 py-4 text-center">
                                                Name
                                            </th>
                                            <th scope="col" class="px-6 py-4 text-center">
                                                _id
                                            </th>
                                            <th scope="col" class="px-6 py-4 text-center">
                                                Email
                                            </th>
                                            <th scope="col" class="px-6 py-4 text-center">
                                                address
                                            </th>
                                            <th scope="col" class="px-6 py-4 text-center">
                                                Phone
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/*This Fuction is responsible for mapping every element that is stored in Customer array by getCustomers function 
                   * @Params Customers : a State Array that consists of Customers fetched from Dataase Customers Table */}
                                        {customer.map((val, key) => {
                                            return (
                                                <tr class="border-b dark:border-neutral-500">
                                                    <td class="whitespace-nowrap px-6 py-4 font-medium">
                                                        {key + 1}
                                                    </td>
                                                    <td class="whitespace-nowrap px-6 py-4">
                                                        {val.name}
                                                    </td>
                                                    <td class="whitespace-nowrap px-6 py-4">{val._id}</td>
                                                    <td class="whitespace-nowrap px-6 py-4">
                                                        {val.Email}
                                                    </td>
                                                    <td class="whitespace-nowrap px-6 py-4">
                                                        {val.address}
                                                    </td>
                                                    <td class="whitespace-nowrap px-6 py-4">
                                                        {val.phone}
                                                    </td>
                                                    <td class="whitespace-nowrap px-6 py-4">
                                                        {/*this button is used for deleting the record and is different for row in table*/}
                                                        <button

                                                            onClick={async () => {
                                                                let result = await fetch(
                                                                    `http://localhost:3005/api/customer/${val._id}`,
                                                                    {
                                                                        method: "delete",
                                                                        headers: {
                                                                            "Content-Type": "application/json",
                                                                        },
                                                                    }
                                                                );

                                                                result = await result.json();
                                                                getCustomer();
                                                            }}
                                                            type="button"
                                                        >
                                                            delete
                                                        </button>
                                                    </td>
                                                    <td>
                                                        <button type="button" onClick={() => {
                                                            setId(val._id)
                                                            setAddress(val.address)
                                                            setName(val.name)
                                                            setEmail(val.Email)
                                                            setPhone(val.phone)
                                                            editForm();
                                                        }}>
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
        </div>
    );
}

export default Customer;
