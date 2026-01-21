import { Sparkles, FileText, ClipboardList, Timer } from "lucide-react";

export default function AiWorkflow() {
  return (
    <section className="py-20 px-6 bg-muted">
      <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden bg-black text-white relative">
        <div className="relative grid md:grid-cols-2 gap-10 md:gap-16 p-8 sm:p-12">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-white/80">
              <Sparkles className="h-4 w-4 text-white/80" />
              <span>Metanoa AI Assist</span>
            </div>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-[2.4rem] md:leading-[1.25] font-semibold tracking-tight text-balance">
              Metanoa has AI Assist to help your team move faster.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-white/80">
              From first assessment to final report, Metanoa&apos;s AI keeps the work moving in the
              background so therapists can stay focused on care.
            </p>

            <dl className="mt-8 space-y-4 text-sm sm:text-base">
              <div className="flex gap-3">
                <dt className="mt-1">
                  <ClipboardList className="h-5 w-5 text-white/80" />
                </dt>
                <dd>
                  <p className="font-medium">AI-assisted assessments</p>
                  <p className="text-white/75">
                    Turn raw observations into structured findings and suggested goals in a few clicks.
                  </p>
                </dd>
              </div>
              <div className="flex gap-3">
                <dt className="mt-1">
                  <FileText className="h-5 w-5 text-white/80" />
                </dt>
                <dd>
                  <p className="font-medium">Report &amp; note drafting</p>
                  <p className="text-white/75">
                    Generate first drafts for progress notes and reports that match your clinic&apos;s tone and
                    templates.
                  </p>
                </dd>
              </div>
              <div className="flex gap-3">
                <dt className="mt-1">
                  <Timer className="h-5 w-5 text-white/80" />
                </dt>
                <dd>
                  <p className="font-medium">Workflow shortcuts everywhere</p>
                  <p className="text-white/75">
                    Smart suggestions in the scheduler, documentation, and follow-ups so everyday work takes
                    minutes instead of hours.
                  </p>
                </dd>
              </div>
            </dl>
          </div>

          {/* Right side with gradient background */}
          <div className="hidden md:block bg-gradient-to-br from-indigo-500/20 via-purple-500/15 to-pink-500/20 rounded-xl" />
        </div>
      </div>
    </section>
  );
}


