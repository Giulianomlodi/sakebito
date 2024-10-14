import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, Users } from 'lucide-react';

const MembershipEditionsTable = () => {
    const editions = [
        { name: "Genesis Edition", number: "1 - 100", price: "€300", launchDate: "07/09", status: "Active" },
        { name: "2nd Edition", number: "101 - 200", price: "€350", launchDate: "TBD", status: "Coming Soon" },
        { name: "3rd Edition", number: "201 - 300", price: "€400", launchDate: "TBD", status: "Coming Soon" },
    ];

    return (
        <section className="w-full py-24 bg-gradient-to-b from-[#0f183b] to-[#1a2651]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center mb-8 text-white">How to become a member</h2>
                <p className="text-center text-lg mb-8 text-gray-300">
                    The membership will be released in a series of editions with a set launch date.
                    Each edition has a limited supply of 100 members.
                </p>

                <div className="bg-[#0f183b6d] p-8 rounded-[16px] shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[7.3px] overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="text-white">Edition</TableHead>
                                <TableHead className="text-white">No.</TableHead>
                                <TableHead className="text-white">Price</TableHead>
                                <TableHead className="text-white">Launch Date</TableHead>
                                <TableHead className="text-white">Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {editions.map((edition, index) => (
                                <TableRow key={index} className="hover:bg-[#ffffff0d] transition-colors">
                                    <TableCell className="font-medium text-white">{edition.name}</TableCell>
                                    <TableCell className="text-gray-300">
                                        <Users className="inline-block mr-2 h-4 w-4" />
                                        {edition.number}
                                    </TableCell>
                                    <TableCell className="text-gray-300">{edition.price}</TableCell>
                                    <TableCell className="text-gray-300">
                                        <CalendarIcon className="inline-block mr-2 h-4 w-4" />
                                        {edition.launchDate}
                                    </TableCell>
                                    <TableCell>
                                        <Badge variant={index === 0 ? "outline" : "secondary"}>
                                            {edition.status}
                                        </Badge>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>

                <p className="text-center text-sm mt-4 text-gray-400">
                    Each edition is priced higher than the previous one
                </p>
                <p className="text-center text-sm mt-2 text-gray-400">
                    More editions to come...
                </p>
            </div>
        </section>
    );
};

export default MembershipEditionsTable;