import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Target,
  Calendar,
  FileText,
  Building2,
  Shield,
  BarChart3,
} from 'lucide-react';
import Hero03 from '@/components/hero-03';
import Features02 from '@/components/features-02';
import AiWorkflow from '@/components/ai-workflow';
import Features05 from '@/components/features-05';
import Features04 from '@/components/features-04';
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

      {/* Features 04 Section (above pricing) */}
      <Features04 />

      {/* Pricing Section */}
      <div id="pricing">
        <Pricing04 />
      </div>

      {/* Marquee Section */}
      <MarqueeDemo />

      {/* Platform Section */}
      <section id="features" className="py-20 px-6 bg-muted/50">
        <div className="max-w-6xl mx-auto">
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
      <section className="py-20 px-6 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                The Insights
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
                See your practice clearly
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Modern practices run on data. Know exactly where you stand with
                real-time dashboards and actionable insights.
              </p>
              <ul className="mt-6 space-y-3">
                <CheckItem>Revenue trends at a glance</CheckItem>
                <CheckItem>Client outcome tracking</CheckItem>
                <CheckItem>Team performance visibility</CheckItem>
                <CheckItem>Automated billing & claims</CheckItem>
              </ul>
            </div>
            <div className="flex justify-center">
              <Card className="w-full max-w-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 font-semibold mb-6 pb-4 border-b">
                    <BarChart3 className="w-5 h-5" />
                    <span>Practice Overview</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">847</div>
                      <div className="text-xs text-muted-foreground">Active Clients</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">94%</div>
                      <div className="text-xs text-muted-foreground">Goal Progress</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">$127K</div>
                      <div className="text-xs text-muted-foreground">This Month</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center md:order-first">
              <Card className="w-full max-w-sm bg-gradient-to-br from-primary/10 to-primary/5">
                <CardContent className="p-6">
                  <Badge className="mb-4">EIP Module</Badge>
                  <h4 className="text-lg font-semibold mb-2">
                    Early Intervention Programs
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Purpose-built tools for running early intervention services. Manage IFSP goals, track developmental milestones, and coordinate with families.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div>
              <Badge variant="secondary" className="mb-4">
                Specialized
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
                Ready for Early Intervention
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Running an EIP program? Metanoa has a dedicated module for early intervention
                services with everything you need to stay compliant and effective.
              </p>
              <ul className="mt-6 space-y-3">
                <CheckItem>IFSP goal management</CheckItem>
                <CheckItem>Developmental milestone tracking</CheckItem>
                <CheckItem>Family coordination tools</CheckItem>
                <CheckItem>Compliance documentation</CheckItem>
              </ul>
            </div>
          </div>
        </div>
      </section>

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
            <Button size="lg" asChild>
              <Link href={`/${lang}/docs`}>
                Book a Demo
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href={`/${lang}/docs`}>View Pricing</Link>
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
