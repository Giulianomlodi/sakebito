import React from 'react';
import { Users, Ticket, Calendar } from 'lucide-react';
import Image from 'next/image';

const MoreContent = () => {
    return (
        <div className="w-full py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-center mb-10">Membership Benefits</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: 'Complimentary Sake', icon: <Users className="w-8 h-8 mb-4" />, description: 'Receive a bottle of sake after joining. Exclusive to members, not available separately.' },
                            { title: 'Exclusive Discounts', icon: <Ticket className="w-8 h-8 mb-4" />, description: 'Enjoy a 15% discount on all online shop purchases and additional bonuses on subscriptions.' },
                            { title: 'Priority Access', icon: <Calendar className="w-8 h-8 mb-4" />, description: 'Get early access to new product releases and limited edition sakes before the general public.' },
                        ].map((item, index) => (
                            <div key={index} className="bg-[#0f183b6d] p-14 rounded-[16px] shadow-[0_4px_30px_rgba(0,0,0,0.1)] flex flex-col items-center text-center backdrop-blur-[7.3px]">
                                {item.icon}
                                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-center mb-10">Exclusive Experiences</h2>
                    <div className="bg-[#0f183b6d] p-20 rounded-[16px] shadow-[0_4px_30px_rgba(0,0,0,0.1)] flex flex-col items-center text-left backdrop-blur-[7.3px]">
                        <div className="flex flex-col md:flex-row items-center justify-between">
                            <div className="md:w-1/2 mb-6 md:mb-0">
                                <h3 className="text-2xl font-semibold mb-4">Events and Tastings</h3>
                                <p className="text-lg">Join our VIP community events around the world, connecting with fellow sake enthusiasts. Attend member-only events such as sake tastings, brewery tours, or meet-the-brewer sessions.</p>
                            </div>
                            <div className="md:w-1/3">
                                <Image src="/images/Membership.jpg" alt="Sake tasting event" className="rounded-lg shadow-md" width={500} height={300} />
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-3xl font-bold text-center mb-10">Community Perks</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-[#0f183b6d] p-20 rounded-[16px] shadow-[0_4px_30px_rgba(0,0,0,0.1)] flex flex-col items-center justify-center text-left backdrop-blur-[7.3px]">

                            <div>
                                <h3 className="text-xl font-semibold mb-2">Exclusive Access</h3>
                                <p>Gain entry to private gatherings in Japan and member-only spaces to enjoy premium sakes in an intimate setting.</p>
                            </div>
                        </div>
                        <div className="bg-[#0f183b6d] p-20 rounded-[16px] shadow-[0_4px_30px_rgba(0,0,0,0.1)] flex flex-col items-center justify-center text-left backdrop-blur-[7.3px]">

                            <div>
                                <h3 className="text-xl font-semibold mb-2">Expert Community</h3>
                                <p>Connect with sake sommeliers and enthusiasts. Share experiences, ask questions, and deepen your sake knowledge through our online platform.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default MoreContent;
