import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import {
  Building2,
  ShieldCheck,
  BarChart3,
  CalendarDays,
  ClipboardList,
  Target,
} from "lucide-react";
import SmartSchedulingImage from "@/scripts/smart-scheduling.png";
import MultiLocationImage from "@/scripts/multi-location-management.png";
import RolesPermissionsImage from "@/scripts/roles-permissions.png";
import RealTimeAnalyticsImage from "@/scripts/real-time-analytics.png";
import GoalsSessionsImage from "@/scripts/goals_sessions.png";

const features = [
  {
    icon: Building2,
    title: "Multi-Location Management",
    description:
      "Manage all your clinic locations. Track performance, share resources, and maintain consistency across every site.",
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

const previewColors = [
  "bg-gradient-to-br from-emerald-500/70 via-emerald-400/60 to-emerald-500/80",
  "bg-gradient-to-br from-indigo-500/70 via-sky-500/60 to-indigo-500/80",
  "bg-gradient-to-br from-amber-500/70 via-orange-400/60 to-amber-500/80",
  "bg-gradient-to-br from-pink-500/70 via-rose-400/60 to-pink-500/80",
  "bg-gradient-to-br from-cyan-500/70 via-teal-400/60 to-cyan-500/80",
  "bg-gradient-to-br from-purple-500/70 via-violet-400/60 to-purple-500/80",
];

const Features05 = () => {
  return (
    <section className="py-20 px-6 bg-muted">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-[2.5rem] md:leading-[1.2] font-semibold tracking-[-0.03em] sm:max-w-xl text-pretty">
        Your entire workflow in one system. Across locations. 
        </h2>
        <div className="mt-10 w-full mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
          {features.map((feature, index) => (
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
                {feature.title === "Smart Scheduling" ? (
                  <div className="h-40 ml-6 rounded-tl-xl relative overflow-hidden">
                    <Image
                      src={SmartSchedulingImage}
                      alt="Smart Scheduling"
                      fill
                      className="object-cover"
                      quality={90}
                    />
                  </div>
                ) : feature.title === "Multi-Location Management" ? (
                  <div className="h-40 ml-6 rounded-tl-xl relative overflow-hidden">
                    <Image
                      src={MultiLocationImage}
                      alt="Multi-Location Management"
                      fill
                      className="object-cover"
                      quality={90}
                    />
                  </div>
                ) : feature.title === "Team Roles & Permissions" ? (
                  <div className="h-40 ml-6 rounded-tl-xl relative overflow-hidden">
                    <Image
                      src={RolesPermissionsImage}
                      alt="Team Roles & Permissions"
                      fill
                      className="object-cover"
                      quality={90}
                    />
                  </div>
                ) : feature.title === "Real-Time Analytics" ? (
                  <div className="h-40 ml-6 rounded-tl-xl relative overflow-hidden">
                    <Image
                      src={RealTimeAnalyticsImage}
                      alt="Real-Time Analytics"
                      fill
                      className="object-cover"
                      quality={90}
                    />
                  </div>
                 ) : feature.title === "Goals, Sessions & Reports" ? (
                   <div className="h-40 ml-6 rounded-tl-xl relative overflow-hidden">
                     <Image
                       src={GoalsSessionsImage}
                       alt="Goals, Sessions & Reports"
                       fill
                       className="object-cover object-top"
                       quality={90}
                     />
                   </div>
                 ) : (
                  <div
                    className={`h-40 ml-6 rounded-tl-xl ${previewColors[index % previewColors.length]}`}
                  />
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features05;

