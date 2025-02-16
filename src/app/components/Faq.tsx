import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How does Briefli summarize complex research papers?",
    answer:
      "Briefli uses advanced AI algorithms to break down lengthy and technical papers into concise flashcard summaries, extracting key points, main ideas, and essential insights while retaining accuracy and context.",
  },
  {
    question: "Can Briefli handle highly specialized technical documents?",
    answer:
      "Yes, Briefli is designed to process complex, specialized content, including technical, academic, and research-heavy documents, ensuring accurate and digestible summaries.",
  },
  {
    question: "What kind of documents can I upload?",
    answer:
      "Briefli supports PDFs of research papers, academic journals, reports, and other dense content. As long as it's a PDF, you can upload it for summarization and analysis.",
  },
  {
    question: "How does the chat feature work?",
    answer:
      "After your document is summarized, you can use our chat feature to ask specific questions about the content. The AI will respond in real time, offering clarifications or elaborating on key points.",
  },
  {
    question: "Can I customize the flashcards?",
    answer:
      "No, the flashcards are pre-built by Briefli based on the key points of your document. Our AI generates the summaries automatically, so you can quickly grasp the essential information without needing to adjust anything yourself.",
  },
  {
    question: "Is my data safe with Briefli?",
    answer:
      "Absolutely. We prioritize privacy and security. Your uploaded documents are encrypted, and we do not store or share your data without consent.",
  },
  {
    question: "How fast can I get a summary?",
    answer:
      "Most documents are summarized in minutes, depending on their length and complexity. Our AI is optimized for speed without compromising the quality of the output.",
  },
]

export default function FAQ() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">FAQ</h2>
        <p className="text-gray-600 text-lg">Frequently Asked Questions</p>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

