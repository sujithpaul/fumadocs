import Link from 'next/link';
import Image from 'next/image';
import {
  Users,
  ClipboardCheck,
  Target,
  Calendar,
  FileText,
  BarChart3,
  Shield,
  Building2,
  ArrowRight,
  CheckCircle2,
  Play,
} from 'lucide-react';
import HeroBg from '@/public/hero-bg.png';
import { AudienceTabs } from './AudienceTabs';
import './mintlify.css';

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <main className="mintlify-home">
      {/* Hero Section */}
      <section className="mint-hero mint-hero-with-bg">
        <div className="mint-hero-bg-image">
          <Image
            src={HeroBg}
            alt=""
            fill
            className="object-cover"
            priority
            quality={90}
            style={{ objectFit: 'cover' }}
          />
          <div className="mint-hero-bg-overlay" />
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto pt-24">
          <div className="mint-hero-badge">
            <span>Trusted by 200+ therapy clinics</span>
          </div>

          <h1 className="mint-hero-title">
            Run your therapy practice,
            <br />
            not paperwork
          </h1>

          <p className="mint-hero-subtitle">
            Metanoa brings your client management, assessments, scheduling, and billing
            into one simple platform. So you can focus on what matters — your clients.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link href={`/${lang}/docs`} className="mint-btn mint-btn-primary">
              Book a Demo
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#features"
              className="mint-btn mint-btn-secondary"
            >
              <Play className="w-4 h-4" />
              See How It Works
            </a>
          </div>

          {/* Browser Screenshot Placeholder */}
          <div className="mint-browser-placeholder">
            <div className="mint-browser-placeholder-inner">
              <p>Add browser screenshot image here</p>
              <p className="mint-browser-placeholder-hint">Place image at: /public/app-screenshot.png</p>
            </div>
          </div>
        </div>
      </section>

      {/* Audience Section */}
      <section className="mint-audience-section">
        <div className="mint-audience-container">
          <div className="text-center mb-10">
            <span className="mint-section-label">Who It's For</span>
            <h2 className="mint-section-title">Built for everyone in your practice</h2>
          </div>

          <AudienceTabs />
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="mint-features">
        <div className="text-center mb-16">
          <span className="mint-section-label">The Problem</span>
          <h2 className="mint-section-title">Managing a therapy practice is hard</h2>
          <p className="mint-section-desc mx-auto">
            Scattered spreadsheets. Manual tracking. Hours spent on admin instead of clients.
            You didn&apos;t become a therapist to drown in paperwork.
          </p>
        </div>

        <div className="mint-problem-grid">
          <div className="mint-problem-card">
            <span className="mint-problem-icon">📋</span>
            <p>Assessments scattered across different tools</p>
          </div>
          <div className="mint-problem-card">
            <span className="mint-problem-icon">🎯</span>
            <p>No clear way to track client goals</p>
          </div>
          <div className="mint-problem-card">
            <span className="mint-problem-icon">📅</span>
            <p>Scheduling chaos across departments</p>
          </div>
          <div className="mint-problem-card">
            <span className="mint-problem-icon">📊</span>
            <p>Reports take hours to compile</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="mint-stories">
        <div className="mint-stories-container">
          <div className="mint-stories-header">
            <span className="mint-section-label">The Solution</span>
            <h2 className="mint-section-title">Everything you need in one place</h2>
            <p className="mint-section-desc mx-auto">
              Metanoa replaces the patchwork of tools with one complete platform
              designed specifically for therapy practices.
            </p>
          </div>

          <div className="mint-features-grid">
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
              description="Book sessions, send reminders, manage therapist availability. No more double-bookings or missed appointments."
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

      {/* How It Works */}
      <section className="mint-features">
        <div className="text-center mb-16">
          <span className="mint-section-label">How It Works</span>
          <h2 className="mint-section-title">From intake to outcome, simplified</h2>
        </div>

        <div className="mint-steps">
          <Step
            number="1"
            title="Client Onboarding"
            description="Add new clients in minutes. Capture all the information you need with customizable intake forms."
          />
          <Step
            number="2"
            title="Run Assessments"
            description="Choose from your assessment library. Complete evaluations on any device. Results sync automatically."
          />
          <Step
            number="3"
            title="Set Goals"
            description="Based on assessment results, set clear goals from your goal bank. Assign to therapists."
          />
          <Step
            number="4"
            title="Track Progress"
            description="Document each session. Track goal progress. Generate reports for families and payers."
          />
        </div>
      </section>

      {/* Billing & Analytics */}
      <section className="mint-stories">
        <div className="mint-stories-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="mint-section-label">Billing & Analytics</span>
              <h2 className="mint-section-title">Get paid. Stay informed.</h2>
              <p className="mint-section-desc">
                Track billing, manage insurance claims, and understand your practice performance
                with real-time analytics.
              </p>
              <ul className="mint-check-list">
                <li>
                  <CheckCircle2 className="w-5 h-5 text-[var(--mint-brand)]" />
                  <span>Automated invoice generation</span>
                </li>
                <li>
                  <CheckCircle2 className="w-5 h-5 text-[var(--mint-brand)]" />
                  <span>Insurance claim tracking</span>
                </li>
                <li>
                  <CheckCircle2 className="w-5 h-5 text-[var(--mint-brand)]" />
                  <span>Revenue and session analytics</span>
                </li>
                <li>
                  <CheckCircle2 className="w-5 h-5 text-[var(--mint-brand)]" />
                  <span>Therapist productivity reports</span>
                </li>
              </ul>
            </div>
            <div className="mint-analytics-preview">
              <div className="mint-analytics-card">
                <div className="mint-analytics-header">
                  <BarChart3 className="w-5 h-5" />
                  <span>Practice Overview</span>
                </div>
                <div className="mint-analytics-stats">
                  <div className="mint-stat">
                    <span className="mint-stat-value">847</span>
                    <span className="mint-stat-label">Active Clients</span>
                  </div>
                  <div className="mint-stat">
                    <span className="mint-stat-value">94%</span>
                    <span className="mint-stat-label">Goal Progress</span>
                  </div>
                  <div className="mint-stat">
                    <span className="mint-stat-value">$127K</span>
                    <span className="mint-stat-label">This Month</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EIP Section */}
      <section className="mint-features">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="mint-eip-visual">
            <div className="mint-eip-card">
              <div className="mint-eip-badge">EIP Module</div>
              <h4>Early Intervention Programs</h4>
              <p>Purpose-built tools for running early intervention services. Manage IFSP goals, track developmental milestones, and coordinate with families.</p>
            </div>
          </div>
          <div>
            <span className="mint-section-label">Specialized Programs</span>
            <h2 className="mint-section-title">Early Intervention, done right</h2>
            <p className="mint-section-desc">
              Running an EIP program? Metanoa has a dedicated module for early intervention
              services with everything you need to stay compliant and effective.
            </p>
            <ul className="mint-check-list">
              <li>
                <CheckCircle2 className="w-5 h-5 text-[var(--mint-brand)]" />
                <span>IFSP goal management</span>
              </li>
              <li>
                <CheckCircle2 className="w-5 h-5 text-[var(--mint-brand)]" />
                <span>Developmental milestone tracking</span>
              </li>
              <li>
                <CheckCircle2 className="w-5 h-5 text-[var(--mint-brand)]" />
                <span>Family coordination tools</span>
              </li>
              <li>
                <CheckCircle2 className="w-5 h-5 text-[var(--mint-brand)]" />
                <span>Compliance documentation</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mint-stories">
        <div className="mint-stories-container">
          <div className="mint-stories-header">
            <span className="mint-section-label">Testimonials</span>
            <h2 className="mint-section-title">Trusted by therapy practices</h2>
          </div>

          <div className="mint-stories-grid">
            <TestimonialCard
              quote="We cut our admin time in half. Now I spend my evenings with family, not paperwork."
              name="Dr. Sarah Chen"
              role="Clinical Director, Bright Futures OT"
            />
            <TestimonialCard
              quote="The assessment builder is exactly what we needed. We finally have one system for everything."
              name="Michael Torres"
              role="Owner, Speak Easy Speech Therapy"
            />
            <TestimonialCard
              quote="Onboarding our team was painless. The permission controls mean everyone sees only what they need."
              name="Rachel Kim"
              role="Practice Manager, Healing Hands PT"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mint-cta">
        <div className="relative z-10 max-w-[800px] mx-auto">
          <h2 className="mint-cta-title">Ready to simplify your practice?</h2>
          <p className="mint-cta-desc">
            Join 200+ therapy practices that have made the switch.
            See Metanoa in action with a personalized demo.
          </p>
          <div className="mint-cta-buttons">
            <Link href={`/${lang}/docs`} className="mint-btn mint-btn-primary">
              Book a Demo
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href={`/${lang}/docs`} className="mint-btn mint-btn-secondary">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </main>
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
    <div className="mint-feature-card">
      <div className="mint-feature-icon">{icon}</div>
      <h3 className="mint-feature-title">{title}</h3>
      <p className="mint-feature-desc">{description}</p>
    </div>
  );
}

function TestimonialCard({
  quote,
  name,
  role,
}: {
  quote: string;
  name: string;
  role: string;
}) {
  return (
    <div className="mint-story-card">
      <p className="mint-story-quote">&ldquo;{quote}&rdquo;</p>
      <div className="mint-story-author">
        <div className="mint-avatar-placeholder">
          {name.split(' ').map(n => n[0]).join('')}
        </div>
        <div>
          <p className="mint-story-name">{name}</p>
          <p className="mint-story-role">{role}</p>
        </div>
      </div>
    </div>
  );
}

function Step({
  number,
  title,
  description
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mint-step">
      <div className="mint-step-number">{number}</div>
      <div className="mint-step-content">
        <h3 className="mint-step-title">{title}</h3>
        <p className="mint-step-desc">{description}</p>
      </div>
    </div>
  );
}
