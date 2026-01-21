import { Check } from "lucide-react";
import Image from "next/image";
import ClinicOwnerImg from "@/public/blog/Clinic_Owner.png";
import TherapistImg from "@/public/blog/Therapist.png";
import ClinicAdminImg from "@/public/blog/Clinic_Admin.png";

const features = [
  {
    title: "Clinic Owners",
    description: "Grow your practice with confidence",
  },
  {
    title: "Therapists",
    description: "Focus on therapy, not paperwork",
  },
  {
    title: "Clinic Admins",
    description: "Tools to streamline daily operations",
  },
];

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
    <div className="min-h-screen flex items-center justify-center py-12 px-6">
      <div className="grow w-full sm:max-w-md lg:max-w-6xl">
        <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight">
        Built for everyone in your practice
        </h2>
        <div className="w-full mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
          {features.map((feature, index) => {
            return (
              <div
                key={feature.title}
                className="flex flex-col text-start w-full group"
              >
                <div className="relative mb-5 sm:mb-6 w-full aspect-[4/5] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src={images[index]}
                    alt={feature.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    priority
                    quality={90}
                  />
                  {/* Gradient overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
                  
                  {/* Content overlay */}
                  <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between">
                    {/* Top section - Title and Description */}
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3 drop-shadow-lg">
                        {feature.title}
                      </h3>
                      <p className="text-white/95 text-base sm:text-lg font-medium leading-relaxed max-w-[90%]">
                        {feature.description}
                      </p>
                    </div>
                    
                    {/* Bottom section - Features list */}
                    <div className="mt-auto pt-6">
                      <ul className="space-y-2.5 text-white">
                        {allFeatures[index].map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-sm sm:text-base leading-relaxed">
                            <Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-white drop-shadow-md" strokeWidth={2.5} />
                            <span className="text-white/95 font-medium">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
            </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Features02;

