import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  BookCheck,
  ChartPie,
  FolderSync,
  Goal,
  Users,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Goal,
    title: "Identify opportunities",
    description:
      "Quickly spot gaps in your workflows and find where your practice can grow next.",
  },
  {
    icon: BookCheck,
    title: "Stay clinical, not clerical",
    description:
      "Reduce admin overhead so clinicians can stay focused on client outcomes, not paperwork.",
  },
  {
    icon: ChartPie,
    title: "Instant insights",
    description:
      "See waitlists, caseloads, and outcomes at a glance to make better decisions, faster.",
  },
  {
    icon: Users,
    title: "Support every stakeholder",
    description:
      "Give therapists, admins, and leadership the tools they need in a single shared system.",
  },
  {
    icon: FolderSync,
    title: "Automate the busywork",
    description:
      "From reminders to reports, automate repetitive tasks so nothing falls through the cracks.",
  },
  {
    icon: Zap,
    title: "Scale with confidence",
    description:
      "Open new locations, add service lines, and grow your team without outgrowing your tools.",
  },
];

export default function Features04() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-[2.5rem] md:leading-[1.2] font-semibold tracking-[-0.03em] sm:max-w-xl text-pretty">
          Built-in advantages for modern practices
        </h2>
        <div className="mt-6 md:mt-10 w-full mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <Accordion defaultValue="item-0" type="single" className="w-full">
              {features.map(({ title, description, icon: Icon }, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="group/accordion-item data-[state=open]:border-b-2 data-[state=open]:border-primary"
                >
                  <AccordionTrigger className="text-lg [&>svg]:hidden group-first/accordion-item:pt-0">
                    <div className="flex items-center gap-4">
                      <Icon className="h-5 w-5" />
                      {title}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-[17px] leading-relaxed text-muted-foreground">
                    {description}
                    <div className="mt-6 mb-2 md:hidden aspect-video w-full bg-muted rounded-xl" />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Media */}
          <div className="hidden md:block w-full h-full bg-muted rounded-xl" />
        </div>
      </div>
    </section>
  );
}
