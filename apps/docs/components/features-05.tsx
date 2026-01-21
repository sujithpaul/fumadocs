import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Building2,
  ShieldCheck,
  BarChart3,
  CalendarDays,
  ClipboardList,
  Target,
} from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "Multi-Location Management",
    description:
      "Manage all your clinic locations from one dashboard. Track performance, share resources, and maintain consistency across every site.",
  },
  {
    icon: ShieldCheck,
    title: "Team Roles & Permissions",
    description:
      "Control exactly who sees what. Assign roles to therapists, admins, and supervisors with granular access controls built for HIPAA compliance.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description:
      "Know the pulse of your business instantly. Revenue trends, session utilization, and client outcomes—all in one place for smarter decisions.",
  },
  {
    icon: CalendarDays,
    title: "Smart Scheduling",
    description:
      "A calendar built for therapy practices. Manage availability, reduce no-shows with auto-reminders, and handle recurring sessions effortlessly.",
  },
  {
    icon: ClipboardList,
    title: "Clinical Assessments",
    description:
      "Comprehensive assessment tools for every therapy type. Standardized templates, custom forms, and digital documentation that saves hours.",
  },
  {
    icon: Target,
    title: "Goals, Sessions & Reports",
    description:
      "Track client progress with our goal bank. Document sessions with SOAP notes and generate professional reports families and payers trust.",
  },
];

const Features05 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-10 px-6">
      <div className="max-w-6xl w-full">
        <h2 className="text-4xl md:text-[2.5rem] md:leading-[1.2] font-semibold tracking-[-0.03em] sm:max-w-xl text-pretty">
        One connected platform that brings your entire practice management together. 
        </h2>
        <div className="mt-10 w-full mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="flex flex-col border rounded-xl overflow-hidden shadow-none pb-0"
            >
              <CardHeader>
                <feature.icon className="w-6 h-6" />
                <h4 className="mt-3 text-xl font-semibold tracking-tight">
                  {feature.title}
                </h4>
                <p className="mt-1 text-muted-foreground text-[17px]">
                  {feature.description}
                </p>
              </CardHeader>
              <CardContent className="mt-auto px-0 pb-0">
                <div className="bg-muted h-40 ml-6 rounded-tl-xl" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features05;

