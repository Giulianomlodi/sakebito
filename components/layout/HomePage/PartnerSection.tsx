import * as React from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function PartnerSection() {
  const partners = [
    {
      name: "Tachibana",
      title: "Partnered Brewery",
      description: "Crafted with pristine snow water from the mountain range of Nagano, Japan and locally sourced Miyamanishiki rice. You can now register to claim our favorite bottle for our past events.",
      footer: "Will be available in our shop very soon…",
      cta: "More about Tachibana",
      logo: "/images/tachibana.jpg",
      url: "https://sakebito.mozello.shop/",
    },
    {
      name: "Itano-Shuzo",
      title: "Partnered Brewery",
      description: "Proud creation of Okayama, a tiny brewery succeeding 150 years of sake-making knowledge brings life to sake with all locally sourced ingredients",
      cta: "Learn more",
      logo: "/images/itnao_shuzo.png",
      url: "/partners/itano-shuzo",
    },
    {
      name: "Takanoi-Shuzo",
      title: "Partnered Brewery",
      description: "Some of the finest sake in Japan come from this tiny town in a heavy snow region. Heritage and Progression: Takanoi blends centuries-old techniques with innovative practices to create tastes only in Takanoi.",
      cta: "Learn more",
      logo: "/images/takanoi_shuzo.jpeg",
      url: "/partners/takanoi-shuzo",
    },
  ]

  return (
    <section id="breweries" className="py-32 px-4 bg-[#020617]">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-center mb-8 text-white">Partnered Breweries</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner, index) => (
            <Card key={index} className="flex flex-col bg-gray-800 border-gray-700 overflow-hidden">
              <div className="relative w-full h-48">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-white">{partner.name}</CardTitle>
                <CardDescription className="text-gray-400">{partner.title}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow overflow-auto">
                <p className="text-sm text-gray-300">{partner.description}</p>
              </CardContent>
              <CardFooter className="flex flex-col items-start gap-4 mt-auto">
                {partner.footer && <p className="text-sm text-gray-400">{partner.footer}</p>}
                {partner.name === "Tachibana" ? (
                  <a
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#b29b49] text-white hover:opacity-80 transition-opacity px-4 py-2 rounded-[8px] font-bold"
                  >
                    {partner.cta}
                  </a>
                ) : (
                  <Link href={partner.url} className="bg-[#b29b49] text-white hover:opacity-80 transition-opacity px-4 py-2 rounded-[8px] font-bold">
                    {partner.cta}
                  </Link>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}