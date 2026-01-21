import { CircleCheck } from "lucide-react";
import Image from "next/image";
import ClinicOwnerImg from "@/public/blog/Clinic_Owner.png";
import TherapistImg from "@/public/blog/Therapist.png";
import ClinicAdminImg from "@/public/blog/Clinic_Admin.png";

const features = [
  {
    title: "Owners",
    description: "Grow your practice with confidence",
  },
  {
    title: "Therapists",
    description: "Focus on therapy, not paperwork",
  },
  {
    title: "Administrators",
    description: "Tools to streamline daily operations",
  },
];

const overlays = [
  // Owners: green/teal tint (like the Jack/John avatar vibe)
  "bg-gradient-to-b from-emerald-950/80 via-emerald-900/55 to-emerald-950/80",
  // Therapists: purple/indigo tint (like the Jill avatar vibe)
  "bg-gradient-to-b from-indigo-950/80 via-violet-900/55 to-indigo-950/80",
  // Admins: warm/orange tint
  "bg-gradient-to-b from-orange-950/75 via-amber-900/50 to-orange-950/75",
];

// Per-card image tuning to make the subjects feel similarly framed.
// We use CSS vars so base scale + hover scale don't fight each other.
const imageTweaks = [
  // Owners photo reads more "zoomed out" — zoom in slightly more and bias upward
  { scale: 1.425, hoverScale: 1.475, objectPosition: "50% 10%" },
  // Therapists
  { scale: 1.12, hoverScale: 1.16, objectPosition: "50% 35%" },
  // Administrators
  { scale: 1.12, hoverScale: 1.16, objectPosition: "50% 35%" },
] as const;

const Features02 = () => {
  const clinicOwnerFeatures = [
    "Real-time revenue dashboards",
    "Multi-location management",
    "Staff performance insights",
    "Compliance & audit trails",
  ];

  const therapistFeatures = [
    "Quick SOAP note templates",
    "Goal tracking & progress reports",
    "Assessment library",
    "Mobile-friendly scheduling",
  ];

  const clinicAdminFeatures = [
    "Automated appointment reminders",
    "Insurance claim management",
    "Client intake workflows",
    "Billing & invoicing",
  ];

  const allFeatures = [
    clinicOwnerFeatures,
    therapistFeatures,
    clinicAdminFeatures,
  ];

  const images = [
    ClinicOwnerImg,
    TherapistImg,
    ClinicAdminImg,
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden bg-black text-white relative">
        <div className="relative p-8 sm:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-[2.4rem] md:leading-[1.25] font-semibold tracking-tight text-balance mb-4">
              Unified Platform for Behavioral Health Organizations, Group Practices and Solo Practitioners.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              return (
                <div
                  key={feature.title}
                  className="flex flex-col p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="relative mb-4 w-full aspect-[4/3] rounded-lg overflow-hidden">
                    <Image
                      src={images[index]}
                      alt={feature.title}
                      fill
                      className="object-cover"
                      style={
                        {
                          objectPosition: imageTweaks[index].objectPosition,
                        } as React.CSSProperties
                      }
                      priority
                      quality={90}
                    />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-white/80 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <ul className="space-y-2 mt-auto">
                    {allFeatures[index].map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-white/75"
                      >
                        <CircleCheck className="w-4 h-4 flex-shrink-0 mt-0.5 text-white/80" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features02;

