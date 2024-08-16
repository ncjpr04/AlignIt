import React from 'react';
const services = ["Projects", "New Game Idea ?", "Terms & Services", "Privacy Policy"];
const company = ["Team", "about us", "careers", "contact"];


const Footer = () => {
    return (

        <div className="relative rounded-t-3xl overflow-hidden  bg-[#ddefffc7] border-[#000000] border-t-4 backdrop-blur-md pt-40 pb-24 px-5 lg:px-12 mx-auto  w-full ">

            <div>

                <img className="absolute h-12 text-primary top-16" src="src/assets/logo.png" alt="" />
                <div className="flex h-fit flex-wrap  gap-6 justify-center ">
                    <div className='mt-10  flex justify-center '>
                        <div className="flex py-10 min-w-[300px] px-5 shadow-xl shadow-[#6898db] text-black border-[#000000] border-[1px] bg-[#fdfdfdc7] rounded-3xl flex-col  max-w-md justify-around gap-6">
                            <div className="flex gap-4 justify-start items-center">
                                <div className="bg-primary scale-150 w-2.5 h-2.5 rounded-full"></div>
                                <h6 className="text-2xl font-semibold">Want to receive latest games and updates?</h6>
                            </div>
                            <form action="submit" className="flex flex-col  gap-6">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    maxLength="256"
                                    required
                                    className="w-full min-h-[3.25rem]  rounded-2xl py-2 px-5 hover:border-primary focus:border-border-[#00c3ff] focus:outline-none focus:ring-1 transition-all duration-200 ease-in-out border-[#00c3ff] border-[1px] bg-[#ddefffc7] "
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    maxLength="256"
                                    required
                                    className="w-full min-h-[3.25rem]  rounded-2xl py-2 px-5 hover:border-primary focus:border-border-[#00c3ff] focus:outline-none focus:ring-1 transition-all duration-200 ease-in-out border-[#00c3ff] border-[1px] bg-[#ddefffc7]"
                                />
                                <div className="flex gap-2 px-5 items-center">
                                    <input type="checkbox" className="text-primary bg-background rounded-full focus:outline-none focus:ring-0" required />
                                    <h6 className="text-sm">
                                        I agree with the <span className="text-primary font-semibold">privacy statement</span>
                                    </h6>
                                </div>
                                <button className="text-primary-foreground py-2 px-4 rounded-2xl flex flex-nowrap cursor-pointer justify-center  text-lg items-center max-w-fit w-30 h-14  my-auto mx-auto  transition-all group gap-2 bg-[#9bd0ff] border-[#00c3ff] border-[1px] ">
                                    <svg height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className=" group-hover:h-7 duration-300 ease-in-out h-0">
                                        <path d="M15.7196 11.9163C13.8735 11.9163 12.3279 13.3863 12.3279 15.2342V22.5H11.641V15.2342C11.641 13.3863 10.0954 11.9163 8.20639 11.9163H0.822021V11.2443H8.20639C10.0954 11.2023 11.641 9.73237 11.5981 7.88442V0.660645H12.3279V7.88442C12.3279 9.73237 13.8735 11.2023 15.7196 11.2023H23.1469V11.9163H15.7196Z" fill="currentColor"></path>
                                    </svg>
                                    Submit
                                    <svg height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:h-0 duration-300 ease-in-out  h-7">
                                        <path d="M15.7196 11.9163C13.8735 11.9163 12.3279 13.3863 12.3279 15.2342V22.5H11.641V15.2342C11.641 13.3863 10.0954 11.9163 8.20639 11.9163H0.822021V11.2443H8.20639C10.0954 11.2023 11.641 9.73237 11.5981 7.88442V0.660645H12.3279V7.88442C12.3279 9.73237 13.8735 11.2023 15.7196 11.2023H23.1469V11.9163H15.7196Z" fill="currentColor"></path>
                                    </svg>
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className=' mt-10 max-w-4xl flex grow justify-center'>
                        <div className="flex  grow gap-5 flex-wrap rounded-3xl w-full shadow-xl shadow-[#6898db] text-black border-[#000000] border-[1px] bg-[#fdfdfdc7] p-10  md:flex-wrap justify-between ">
                            <div className="flex grow  min-w-[300px] py-5 justify-between">
                                <div className="flex flex-col gap-2 items-start justify-start">
                                    <h6 className="opacity-60 mb-2">Services</h6>
                                    {services.map(service => (
                                        <div key={service} className="flex items-center justify-start gap-2 transition-all group">
                                            <div className="scale-0 group-hover:scale-100 duration-200 ease-out w-2.5 h-2.5 bg-primary rounded-full"></div>
                                            <span className="capitalize text-lg cursor-pointer font-semibold -translate-x-3.5 group-hover:translate-x-0 duration-200 ease-in-out">{service}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex flex-col gap-2 items-end justify-start">
                                    <h6 className="opacity-60 mb-2">Company</h6>
                                    {company.map(comp => (
                                        <div key={comp} className="flex items-center justify-start gap-2 transition-all group">

                                            <span className="capitalize text-lg cursor-pointer font-semibold translate-x-3.5 group-hover:translate-x-0 duration-200 ease-in-out">{comp}</span>
                                            <div className="scale-0 group-hover:scale-100 duration-200 ease-out w-2.5 h-2.5 bg-primary rounded-full"></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex w-full justify-center items-center  transition-all gap-1">
                                <div
                                    className="flex w-1/3 shrink hover:w-2/4 h-12 justify-center items-center rounded-2xl shadow-md shadow-[#db6868] text-white  bg-red-700 border-red-950 border-[1px] font-semibold duration-200 ease-in-out cursor-pointer"
                                >
                                    YouTube
                                </div>
                                <div
                                    className="flex w-1/3 h-12 shrink hover:w-2/4 justify-center items-center rounded-2xl shadow-md shadow-[#ce68db] text-white   bg-pink-700 border-pink-950 border-[1px] font-semibold duration-200 ease-in-out cursor-pointer"
                                >
                                    Instagram
                                </div>
                                <div
                                    className="flex shrink hover:w-2/4 w-1/3 h-12 justify-center items-center rounded-2xl shadow-md shadow-[#687ddb] text-white border-blue-950 border-[1px] bg-blue-700 font-semibold duration-200 ease-in-out cursor-pointer"
                                >
                                    LinkedIn
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
