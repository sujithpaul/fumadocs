const faq = [
  {
    question: "1. What types of therapy practices does Metanoa support?",
    answer:
      "Metanoa works for occupational therapy, speech therapy, physical therapy, ABA, and other behavioral health services. Whether you're a solo practitioner or a multi-location organization, the platform adapts to your discipline and workflows.",
  },
  {
    question: "2. Is Metanoa HIPAA compliant?",
    answer:
      "Absolutely. Metanoa is fully HIPAA compliant with encrypted data storage, secure access controls and audit logs. We take client privacy and data security seriously.",
  },
  {
    question: "3. Can therapists access Metanoa on mobile devices?",
    answer:
      "Yes. Metanoa is fully responsive and works on phones and tablets. Therapists can document sessions, check schedules, and access client information from any device—perfect for home visits or between appointments.",
  },
  {
    question: "4. What kind of reports can I generate?",
    answer:
      "You can create progress reports, therapy plans, discharge summaries, and custom reports for schools, insurance companies, or families. All reports are customizable to match your format requirements and clinic branding.",
  },
  {
    question: "5. How much training is required to get started?",
    answer:
      "Most teams are up and running within a week. We provide onboarding sessions, video tutorials, and ongoing support. The interface is intuitive enough that therapists who aren't tech-savvy can navigate it comfortably.",
  },
  {
    question: "6. Can I manage multiple locations from one account?",
    answer:
      "Yes. You can oversee all your clinic locations from a single dashboard, track performance across sites, manage staff schedules, and maintain consistent documentation standards while allowing each location appropriate autonomy.",
  },
  {
    question: "7. What happens to my data if I cancel?",
    answer:
      "You own your data. If you decide to leave Metanoa, we provide a complete export of your client records, session notes, and documentation in standard formats. There are no lock-ins.",
  },
  {
    question: "8. Do you offer a free trial or demo?",
    answer:
      "We offer personalized demos where we walk you through the platform based on your specific practice needs. This helps you see exactly how Metanoa would work for your workflows before committing. Contact us to schedule a demo with our team.",
  },
];

export default function Faq01() {
  return (
    <section className="py-20 px-6 bg-muted">
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


