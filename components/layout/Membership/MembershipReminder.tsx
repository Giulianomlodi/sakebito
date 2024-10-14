import React from 'react';
import { MessageCircle } from 'lucide-react';

const MembershipReminder = () => {
    return (
        <div className="w-full bg-transparent py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Previous sections remain unchanged */}

                {/* ... */}

                <section className="my-20">
                    <div className="bg-[#0f183b6d] p-14 rounded-[16px] shadow-[0_4px_30px_rgba(0,0,0,0.1)] flex flex-col items-center text-left backdrop-blur-[7.3px]">
                        <div className="flex items-start">
                            <MessageCircle className="w-6 h-6 text-yellow-500 mr-4 flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="text-xl font-semibold mb-4">Reminder: Only to the EU countries!</h3>
                                <div className="space-y-4 text-sm">
                                    <p>
                                        Please note Sake bottles can be shipped only to EU locations. You can still purchase our club membership from outside the EU region, however, the Sake distribution is only within EU countries.
                                    </p>
                                    <p>
                                        If you reside outside the EU countries, you could still ship it to your friends or any other locations and pick it up later! Even though we plan to ship out the Sake at the end of the year, if you are not in the EU or cannot find any alternative location, we can keep your Sake with us to give it to you at a later date!
                                    </p>
                                    <p>
                                        Other methods can be the pick up during any of our events, or in-person collection from our office.
                                    </p>
                                    <p>
                                        We apologize for any inconvenience, we are still working on expanding our logistics to all around the world.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default MembershipReminder;