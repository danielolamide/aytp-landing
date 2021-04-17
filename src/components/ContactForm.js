import React,{useCallback, useState} from "react";


export default function ContactForm() {
    
    const [email,setEmail] = useState("")
    const [phone,setPhone] = useState("")
    const [message,setMessage] = useState("")
    const [isSubscribed,setSubscription] = useState(true)

    const handleSubmit = useCallback((event) =>{
         event.preventDefault();
         console.log(email,phone,message,isSubscribed)
         const headers = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: email,phone:phone,message:message,isSubscribed:isSubscribed })
        };
         fetch("https://34.66.0.133/app2/emailform",headers).then(r => r.json()).then((data )=>{
            setEmail("");
            setPhone("");
            setMessage("");
            setSubscription("true");
         })
    },[email,phone,message,isSubscribed])


    return (
        <div className="flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    {/* <img
            className="mx-auto h-12 w-auto"
            src=""
            alt="Workflow"
          /> */}
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Send us a message</h2>

                </div>
                <form 
                onSubmit={handleSubmit}
                className="mt-8 space-y-6" action="#" method="POST">
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="email-address" className="sr-only">
                                Your Email address
              </label>
                            <input
                                value={email}
                                onChange= {e =>  setEmail(e.target.value)}
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Email address"
                            />
                        </div>
                        <br />
                        <div>
                            <label htmlFor="phone-number" className="sr-only">
                                Your Phonenumber
              </label>
                            <input
                                value={phone}
                                onChange= {e =>  setPhone(e.target.value)}
                                id="phone-number"
                                name="number"
                                type="number"
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Phone Number (optional)"
                            />
                        </div>
                        <br />
                        <div>
                            <label htmlFor="message" className="sr-only">
                                Message
              </label>
                            <textarea
                                value={message}
                                onChange={e => setMessage(e.target.value)}
                                rows="10"
                                id="message"
                                name="message"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Enter your message Here"
                            />
                        </div>
                    </div>
                    <br />
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                value={isSubscribed}
                                onChange={e => setSubscription(e.target.value)}
                                id="remember_me"
                                name="remember_me"
                                type="checkbox"
                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                            />
                            <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                                Subscribe to newsletter
              </label>
                        </div>


                    </div>

                    <div>
                        <button

                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                {/* <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" /> */}
                            </span>
              Send Now
            </button>


                    </div>
                </form>
            </div>
        </div>
    )
}