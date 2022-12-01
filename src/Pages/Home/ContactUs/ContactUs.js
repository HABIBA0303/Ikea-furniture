import React from 'react';
const ContactUs = () => {
    return (
        <div className="grid max-w-screen-xl grid-cols-1  gap-8 sm:px-8 px-3 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 ">
        
            <form className="space-y-6 ng-untouched ng-pristine ng-valid">
                <div>
                    <label htmlFor="name" className="text-sm text-gray-800 font-semibold">Full name</label>
                    <input id="name" type="text" placeholder="Your Name" required className="w-full input input-bordered  p-3 rounded " />
                </div>
                <div>
                    <label htmlFor="email" className="text-sm text-gray-800 font-semibold">Email</label>
                    <input id="email" type="email" required placeholder="Your Email" className="w-full input input-bordered  p-3 rounded " />
                </div>
                <div>
                    <label htmlFor="message" className="text-sm text-gray-800 font-semibold">Message</label>
                    <textarea id="message" required rows="3" className="w-full textarea textarea-bordered p-3 rounded " placeholder='Say somethings.....' spellCheck="false"></textarea>
                </div>
                <button type="submit" className="w-full input input-bordered  p-3 text-sm text-gray-800 font font-semibold tracking-wide uppercase rounded dark:bg-violet-400 dark:text-gray-900">Send Message</button>
            </form>
        </div>
    );
};

export default ContactUs;