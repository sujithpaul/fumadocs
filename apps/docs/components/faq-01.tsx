const faq = [
  {
    question: "What is your return policy?",
    answer:
      "You can return unused items in their original packaging within 30 days for a refund or exchange. Contact support for assistance.",
  },
  {
    question: "How do I track my order?",
    answer:
      "Track your order using the link provided in your confirmation email, or log into your account to view tracking details.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes, we ship worldwide. Shipping fees and delivery times vary by location, and customs duties may apply for some countries.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept Visa, MasterCard, American Express, PayPal, Apple Pay, and Google Pay, ensuring secure payment options for all customers.",
  },
  {
    question: "What if I receive a damaged item?",
    answer:
      "Please contact our support team within 48 hours of delivery with photos of the damaged item. We’ll arrange a replacement or refund.",
  },
];

export default function Faq01() {
  return (
    <section className="py-20 px-6 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-xl mx-auto">
          <h2 className="text-center text-4xl md:text-5xl leading-[1.15]! font-semibold tracking-[-0.035em]">
            Questions &amp; Answers
          </h2>

          <div className="mt-6 divide-y rounded-xl border bg-background">
            {faq.map(({ question, answer }, index) => (
              <details
                key={question}
                className="group p-4 open:bg-accent/30"
                open={index === 0}
              >
                <summary className="cursor-pointer list-none text-left text-lg font-medium [&::-webkit-details-marker]:hidden">
                  <div className="flex items-center justify-between gap-4">
                    <span>{question}</span>
                    <span className="text-muted-foreground transition-transform group-open:rotate-45">
                      +
                    </span>
                  </div>
                </summary>
                <div className="pt-3 text-base text-muted-foreground">{answer}</div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


