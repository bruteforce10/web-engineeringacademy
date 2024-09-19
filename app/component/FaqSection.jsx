import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "investasi produk ini dapat apa aja ?",
    answer:
      "Setelah membeli Database ini kamu akan mendapatkan File berupa kumpulan File database arsitektur dan teknik sipil sekiatar 100+ GB yang mudah di download",
  },
  {
    question: "Saya gaptek, gak ngerti teknisnya",
    answer:
      "File ini di susun rapih sehingga mempermudah siapapun untuk mengakses file databasenya",
  },
  {
    question: "Apa saja yang perlu Saya siapkan",
    answer:
      "Anda bisa mendownload file database ini dimana saja, bisa mengunakan handphone atau laptop",
  },
];

const FaqSection = () => {
  return (
    <section className="mt-24 max-lg:px-4 w-full max-w-[1250px]">
      <div className="space-y-1">
        <div className="flex items-center gap-4  mx-auto">
          <h1 className="text-4xl font-bold tracking-tight">FAQ</h1>
          <div className="h-[.5px] w-full bg-black"></div>
        </div>
        <p>Pertanyaan yang sering di ajukan</p>
      </div>
      <div className="mt-4">
        <Accordion type="single" className="space-y-4" collapsible>
          {faqData.map((item, index) => {
            return (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent className="max-w-[800px]">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
