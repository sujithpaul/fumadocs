import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ClipboardCheck,
  Target,
  Calendar,
  FileText,
  Building2,
  Shield,
  BarChart3,
  HeartHandshake,
  Settings,
  FileEdit,
  Layers,
} from 'lucide-react';
import Hero03 from '@/components/hero-03';
import Features02 from '@/components/features-02';
import AiWorkflow from '@/components/ai-workflow';
import Features05 from '@/components/features-05';
import Pricing04 from '@/components/pricing-04';
import { MarqueeDemo } from '@/components/marquee-demo';
import Faq01 from '@/components/faq-01';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default async function MarketingPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <>
      {/* Hero Section */}
      <Hero03 />

      {/* Features Section */}
      <Features02 />

      {/* Marquee Section */}
      <MarqueeDemo />

      {/* AI Workflow Highlight */}
      <AiWorkflow />

      {/* Features 05 Section */}
      <Features05 />

      {/* Customization Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden bg-black text-white relative">
          <div className="relative grid md:grid-cols-2 gap-10 md:gap-16 p-8 sm:p-12">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-white/80">
                <Settings className="h-4 w-4 text-white/80" />
                <span>Fully Customizable</span>
              </div>
              <h2 className="mt-4 text-3xl sm:text-4xl md:text-[2.4rem] md:leading-[1.25] font-semibold tracking-tight text-balance">
                Your processes. Your formats.
              </h2>
              <p className="mt-4 text-base sm:text-lg text-white/80">
                Every therapy practice runs differently. Some use standardized assessments, others build their own. 
                Some bill insurance, others work with schools. Metanoa adapts to how you already work—you&apos;re not 
                locked into someone else&apos;s idea of the &quot;right&quot; process.
              </p>

              <dl className="mt-8 space-y-4 text-sm sm:text-base">
                <div className="flex gap-3">
                  <dt className="mt-1">
                    <ClipboardCheck className="h-5 w-5 text-white/80" />
                  </dt>
                  <dd>
                    <p className="font-medium">Assessment forms that fit your discipline</p>
                    <p className="text-white/75">
                      Create forms specific to your therapy type. Add the fields you actually use, skip the ones you don&apos;t. 
                      Speech pathology looks different from OT—your forms should too.
                    </p>
                  </dd>
                </div>
                <div className="flex gap-3">
                  <dt className="mt-1">
                    <FileText className="h-5 w-5 text-white/80" />
                  </dt>
                  <dd>
                    <p className="font-medium">Reports formatted for who needs them</p>
                    <p className="text-white/75">
                      Insurance companies want one thing, schools want another, parents want something else entirely. 
                      Build report templates for each audience instead of trying to make one format work for everyone.
                    </p>
                  </dd>
                </div>
                <div className="flex gap-3">
                  <dt className="mt-1">
                    <Layers className="h-5 w-5 text-white/80" />
                  </dt>
                  <dd>
                    <p className="font-medium">Templates to get you started</p>
                    <p className="text-white/75">
                      We include ready-made assessments and reports for common therapy types. Use them as-is or customize them. 
                      Either way, you&apos;re not starting from scratch.
                    </p>
                  </dd>
                </div>
              </dl>
            </div>

            {/* Right side with gradient background */}
            <div className="hidden md:block bg-gradient-to-br from-amber-500/20 via-orange-500/15 to-red-500/20 rounded-xl" />
          </div>
        </div>
      </section>

      {/* Platform Section */}
      <section id="features" className="py-20 px-6 bg-muted/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              The Platform
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Built for how modern practices work
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              One connected platform that brings your entire practice together.
              Designed by therapists, for therapists.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<ClipboardCheck className="w-6 h-6" />}
              title="Flexible Assessments"
              description="Build assessments that match how you work. Use templates or create your own. Works for any therapy type."
            />
            <FeatureCard
              icon={<Target className="w-6 h-6" />}
              title="Goal Tracking"
              description="Set measurable goals from our goal bank. Track progress over time. Show clients and families real results."
            />
            <FeatureCard
              icon={<Calendar className="w-6 h-6" />}
              title="Session Scheduling"
              description="Book sessions, send reminders, manage therapist availability. Everything syncs automatically."
            />
            <FeatureCard
              icon={<FileText className="w-6 h-6" />}
              title="SOAP Notes & Reports"
              description="Document sessions with standard SOAP format. Generate therapy plans and progress reports in minutes."
            />
            <FeatureCard
              icon={<Building2 className="w-6 h-6" />}
              title="Multi-Department"
              description="Run OT, Speech, PT, and any other department from one system. Each with their own workflows and settings."
            />
            <FeatureCard
              icon={<Shield className="w-6 h-6" />}
              title="Smart Permissions"
              description="Control who sees what. Give therapists access to only their department, or let supervisors see everything."
            />
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden bg-black text-white relative">
          <div className="relative grid md:grid-cols-2 gap-10 md:gap-16 p-8 sm:p-12">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-white/80">
                <BarChart3 className="h-4 w-4 text-white/80" />
                <span>The Insights</span>
              </div>
              <h2 className="mt-4 text-3xl sm:text-4xl md:text-[2.4rem] md:leading-[1.25] font-semibold tracking-tight text-balance">
                See your practice clearly
              </h2>
              <p className="mt-4 text-base sm:text-lg text-white/80">
                Modern practices run on data. Know exactly where you stand with
                real-time dashboards and actionable insights.
              </p>

              <dl className="mt-8 space-y-4 text-sm sm:text-base">
                <div className="flex gap-3">
                  <dt className="mt-1">
                    <BarChart3 className="h-5 w-5 text-white/80" />
                  </dt>
                  <dd>
                    <p className="font-medium">Revenue trends at a glance</p>
                    <p className="text-white/75">
                      Track your practice&apos;s financial health with real-time revenue dashboards and trend analysis.
                    </p>
                  </dd>
                </div>
                <div className="flex gap-3">
                  <dt className="mt-1">
                    <Target className="h-5 w-5 text-white/80" />
                  </dt>
                  <dd>
                    <p className="font-medium">Client outcome tracking</p>
                    <p className="text-white/75">
                      Monitor client progress and outcomes to demonstrate the value of your therapy services.
                    </p>
                  </dd>
                </div>
                <div className="flex gap-3">
                  <dt className="mt-1">
                    <Building2 className="h-5 w-5 text-white/80" />
                  </dt>
                  <dd>
                    <p className="font-medium">Team performance visibility</p>
                    <p className="text-white/75">
                      Get insights into team productivity, caseloads, and performance metrics across all locations.
                    </p>
                  </dd>
                </div>
                <div className="flex gap-3">
                  <dt className="mt-1">
                    <FileText className="h-5 w-5 text-white/80" />
                  </dt>
                  <dd>
                    <p className="font-medium">Automated billing & claims</p>
                    <p className="text-white/75">
                      Streamline your billing process with automated claim generation and tracking to reduce administrative overhead.
                    </p>
                  </dd>
                </div>
              </dl>
            </div>

            {/* Right side with gradient background */}
            <div className="hidden md:block bg-gradient-to-br from-blue-500/20 via-cyan-500/15 to-teal-500/20 rounded-xl" />
          </div>
        </div>
      </section>

      {/* Specialized Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden bg-black text-white relative">
          <div className="relative grid md:grid-cols-2 gap-10 md:gap-16 p-8 sm:p-12">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-white/80">
                <HeartHandshake className="h-4 w-4 text-white/80" />
                <span>Early Intervention</span>
              </div>
              <h2 className="mt-4 text-3xl sm:text-4xl md:text-[2.4rem] md:leading-[1.25] font-semibold tracking-tight text-balance">
                Ready for Early Intervention
              </h2>
              <p className="mt-4 text-base sm:text-lg text-white/80">
                Running an EIP program? Metanoa has a dedicated module for early intervention
                services with everything you need to stay compliant and effective.
              </p>

              <dl className="mt-8 space-y-4 text-sm sm:text-base">
                <div className="flex gap-3">
                  <dt className="mt-1">
                    <Target className="h-5 w-5 text-white/80" />
                  </dt>
                  <dd>
                    <p className="font-medium">IFSP goal management</p>
                    <p className="text-white/75">
                      Track and manage Individualized Family Service Plan goals with built-in compliance tools.
                    </p>
                  </dd>
                </div>
                <div className="flex gap-3">
                  <dt className="mt-1">
                    <ClipboardCheck className="h-5 w-5 text-white/80" />
                  </dt>
                  <dd>
                    <p className="font-medium">Developmental milestone tracking</p>
                    <p className="text-white/75">
                      Monitor progress against developmental milestones and generate reports for families and payers.
                    </p>
                  </dd>
                </div>
                <div className="flex gap-3">
                  <dt className="mt-1">
                    <Building2 className="h-5 w-5 text-white/80" />
                  </dt>
                  <dd>
                    <p className="font-medium">Family coordination tools</p>
                    <p className="text-white/75">
                      Keep families informed and engaged with secure portals and communication tools built for EIP workflows.
                    </p>
                  </dd>
                </div>
              </dl>
            </div>

            {/* Right side with gradient background */}
            <div className="hidden md:block bg-gradient-to-br from-emerald-500/20 via-teal-500/15 to-cyan-500/20 rounded-xl" />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <div id="pricing">
        <Pricing04 />
      </div>

      <Faq01 />

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Ready to simplify your practice?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Join 200+ therapy practices that have made the switch.
            See Metanoa in action with a personalized demo.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="rounded-full text-base" asChild>
              <Link href={`/${lang}/docs`}>
                Start Now <ArrowUpRight className="!h-5 !w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Card className="hover:border-primary/50 transition-colors">
      <CardContent className="p-6">
        <div className="w-11 h-11 flex items-center justify-center bg-primary/10 rounded-lg mb-4 text-primary">
          {icon}
        </div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-center gap-3">
      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
      <span>{children}</span>
    </li>
  );
}
