import Link from 'next/link';
import Image from 'next/image';
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
  Bell,
  Users,
  CreditCard,
} from 'lucide-react';
import InsightsImage from '@/public/insights.png';
import YourFormatsImage from '@/public/your-formats.png';
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

      {/* AI Workflow Highlight */}
      <AiWorkflow />

      {/* Features 05 Section */}
      <Features05 />

      {/* Owners Section */}
      <section className="py-20 px-6 bg-muted">
        <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden bg-black text-white relative">
          <div className="relative p-8 sm:p-12">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-white/80 mb-6">
                <Building2 className="h-4 w-4 text-white/80" />
                <span>For Practice Owners</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-[2.4rem] md:leading-[1.25] font-semibold tracking-tight text-balance mb-4">
                Grow your practice with confidence
              </h2>
              <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto text-balance">
                Make data-driven decisions with real-time insights into your practice&apos;s performance, revenue, and operations.
              </p>
            </div>

            {/* Row 1: Revenue, Multi-location, Staff Performance */}
            <div className="grid sm:grid-cols-3 gap-6 mb-6">
              {/* Revenue Dashboards - Medium */}
              <div className="flex flex-col p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Real-time revenue dashboards</h3>
                <p className="text-sm text-white/75 leading-relaxed">
                  Track your practice&apos;s financial health with instant insights into revenue trends, collections, and performance metrics.
                </p>
              </div>

              {/* Multi-location - Medium */}
              <div className="flex flex-col p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Multi-location management</h3>
                <p className="text-sm text-white/75 leading-relaxed">
                  Oversee all your clinic locations. Track performance, share resources, and maintain consistency across sites.
                </p>
              </div>

              {/* Staff Performance - Medium */}
              <div className="flex flex-col p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-violet-500/20 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-violet-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Staff performance insights</h3>
                <p className="text-sm text-white/75 leading-relaxed">
                  Get visibility into team productivity, caseloads, and outcomes. Make data-driven decisions about staffing and resources.
                </p>
              </div>
            </div>

            {/* Row 2: Compliance (Large) + Other cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Compliance & Audit - Large, spans 2 columns */}
              <div className="sm:col-span-2 flex flex-col p-8 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-14 h-14 rounded-lg bg-amber-500/20 flex items-center justify-center mb-4">
                  <Shield className="w-7 h-7 text-amber-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Compliance & audit trails</h3>
                <p className="text-base text-white/75 leading-relaxed mb-4">
                  Maintain comprehensive audit logs and compliance documentation. Track all system activities, access changes, and maintain 
                  HIPAA-compliant records. Stay ready for inspections and reviews with detailed audit trails.
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-medium">HIPAA</span>
                  <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-medium">Audit Logs</span>
                  <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-medium">Compliance</span>
                </div>
              </div>

              {/* Billing & Claims - Small */}
              <div className="flex flex-col p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Billing & claims</h3>
                <p className="text-sm text-white/75 leading-relaxed">
                  Streamline insurance claims processing and billing workflows. Reduce errors and speed up reimbursements.
                </p>
      </div>

              {/* Practice analytics - Small */}
              <div className="flex flex-col p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-indigo-500/20 flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Practice analytics</h3>
                <p className="text-sm text-white/75 leading-relaxed">
                  Deep insights into client outcomes, session utilization, and practice growth trends over time.
            </p>
          </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="py-20 px-6 bg-muted">
        <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden bg-black text-white relative">
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

            {/* Right side with Insights image */}
            <div className="hidden md:block relative rounded-xl overflow-hidden">
              <Image
                src={InsightsImage}
                alt="Practice insights dashboard"
                className="w-full h-full object-cover"
                quality={90}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <MarqueeDemo />

      {/* Therapy-Focused Platform Section */}
      <section className="py-20 px-6 bg-muted">
        <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden bg-black text-white relative">
          <div className="relative p-8 sm:p-12">
          <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-white/80 mb-6">
                <ClipboardCheck className="h-4 w-4 text-white/80" />
                <span>Focus on Therapy</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-[2.4rem] md:leading-[1.25] font-semibold tracking-tight text-balance mb-4">
              Built for how modern practices work
            </h2>
              <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto text-balance">
                Every tool designed to help therapists spend more time with clients and less time on paperwork.
              </p>
            </div>

            {/* Row 1: Assessments, Goals, Session */}
            <div className="grid sm:grid-cols-3 gap-6 mb-6">
              {/* Assessments - Medium */}
              <div className="flex flex-col p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-violet-500/20 flex items-center justify-center mb-4">
                  <ClipboardCheck className="w-6 h-6 text-violet-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Assessments</h3>
                <p className="text-sm text-white/75 leading-relaxed">
                  Support configurable assessment forms tailored to your therapy discipline. Build forms that match how you actually work.
                </p>
              </div>

              {/* Goals - Medium */}
              <div className="flex flex-col p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Goals</h3>
                <p className="text-sm text-white/75 leading-relaxed">
                  Goal bank support with configurable goal tracking scales like GAS, COPM, and more. Track outcomes that matter.
                </p>
              </div>

              {/* Session - Medium */}
              <div className="flex flex-col p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Session Plans</h3>
                <p className="text-sm text-white/75 leading-relaxed">
                  Create session plans from goals with detailed activity planning. Structure your sessions around client objectives.
                </p>
              </div>
            </div>

            {/* Row 2: Session Notes (Large) + Other cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Session Notes - Large, spans 2 columns */}
              <div className="sm:col-span-2 flex flex-col p-8 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-14 h-14 rounded-lg bg-indigo-500/20 flex items-center justify-center mb-4">
                  <FileText className="w-7 h-7 text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Session Notes</h3>
                <p className="text-base text-white/75 leading-relaxed mb-4">
                  Write session notes with AI Assist. Set up the type of notes you want to write—SOAP, DAP, BIRP, and more. 
                  Documentation that adapts to your preferred format.
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-medium">SOAP</span>
                  <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-medium">DAP</span>
                  <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-medium">BIRP</span>
                  <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-medium">Custom</span>
                </div>
              </div>

              {/* Progress Reports - Small */}
              <div className="flex flex-col p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-amber-500/20 flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Progress Reports</h3>
                <p className="text-sm text-white/75 leading-relaxed">
                  Generate professional reports for families, schools, and payers. Customize formats to match requirements.
            </p>
          </div>

              {/* Per Client Analytics - Small */}
              <div className="flex flex-col p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Client Analytics</h3>
                <p className="text-sm text-white/75 leading-relaxed">
                  Visualize client progress with interactive data representations. Track outcomes, compare baselines, and identify trends at a glance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customization Section */}
      <section className="py-20 px-6 bg-muted">
        <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden bg-black text-white relative">
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
                Some bill insurance, others work with schools. Metanoa adapts to how you already work. You&apos;re not 
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

            {/* Right side with Your Formats image */}
            <div className="hidden md:block relative rounded-xl overflow-hidden">
              <Image
                src={YourFormatsImage}
                alt="Customizable formats and processes"
                className="w-full h-full object-cover"
                quality={90}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Administrators Section */}
      <section className="py-20 px-6 bg-muted">
        <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden bg-black text-white relative">
          <div className="relative p-8 sm:p-12">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-white/80 mb-6">
                <ClipboardCheck className="h-4 w-4 text-white/80" />
                <span>For Administrators</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-[2.4rem] md:leading-[1.25] font-semibold tracking-tight text-balance mb-4">
                Tools to streamline daily operations
              </h2>
              <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto text-balance">
                Automate routine tasks and manage workflows efficiently. Reduce administrative overhead so your team can focus on what matters.
              </p>
            </div>

            {/* Row 1: Calendar, Notifications, Client Intake */}
            <div className="grid sm:grid-cols-3 gap-6 mb-6">
              {/* Calendar & Scheduling - Medium */}
              <div className="flex flex-col p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Calendar & scheduling</h3>
                <p className="text-sm text-white/75 leading-relaxed">
                  Manage therapist availability, book sessions, and handle recurring appointments. Reduce scheduling conflicts and no-shows.
                </p>
              </div>

              {/* Notifications & Reminders - Medium */}
              <div className="flex flex-col p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-amber-500/20 flex items-center justify-center mb-4">
                  <Bell className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Notifications & reminders</h3>
                <p className="text-sm text-white/75 leading-relaxed">
                  Automated appointment reminders, session notifications, and task alerts. Keep everyone informed and reduce missed appointments.
                </p>
              </div>

              {/* Client Intake - Medium */}
              <div className="flex flex-col p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-violet-500/20 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-violet-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Client intake workflows</h3>
                <p className="text-sm text-white/75 leading-relaxed">
                  Streamline new client onboarding with digital intake forms, consent management, and automated workflow assignments.
                </p>
              </div>
            </div>

            {/* Row 2: Billing (Large) + Other cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Billing & Invoicing - Large, spans 2 columns */}
              <div className="sm:col-span-2 flex flex-col p-8 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-14 h-14 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-4">
                  <CreditCard className="w-7 h-7 text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Billing & invoicing</h3>
                <p className="text-base text-white/75 leading-relaxed mb-4">
                  Process insurance claims, generate invoices, and track payments. Automate billing workflows to reduce errors and speed up 
                  reimbursements. Handle both insurance and private pay clients seamlessly.
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-medium">Insurance Claims</span>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-medium">Invoicing</span>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-medium">Payment Tracking</span>
                    </div>
                  </div>

              {/* Document Management - Small */}
              <div className="flex flex-col p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Document management</h3>
                <p className="text-sm text-white/75 leading-relaxed">
                  Organize and store client documents, forms, and reports securely. Easy access and retrieval when needed.
                </p>
      </div>

              {/* Reporting - Small */}
              <div className="flex flex-col p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-indigo-500/20 flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Administrative reports</h3>
                <p className="text-sm text-white/75 leading-relaxed">
                  Generate reports on scheduling, billing, and operations. Export data for accounting and analysis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Section */}
      <section className="py-20 px-6 bg-muted">
        <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden bg-black text-white relative">
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
      <section className="py-20 px-6 bg-muted">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Ready to simplify your practice?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Join 200+ therapy practices that have made the switch.
            
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
