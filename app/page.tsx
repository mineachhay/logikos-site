import Image from "next/image";
import type { ReactNode } from "react";

const EMAIL = "hello@logikos.dev";

const systems = [
  {
    name: "Asset Management System",
    desc: "Track and manage company assets across locations and departments.",
  },
  {
    name: "Service Desk Plus",
    desc: "IT helpdesk and ticketing system for teams of any size.",
  },
  {
    name: "FloorLens",
    desc: "Floor plan and space management with live occupancy insights.",
  },
  {
    name: "Canteen Management System",
    desc: "Meal ordering, inventory control, and automated billing.",
  },
  {
    name: "Hostel Management System",
    desc: "Room allocation, resident records, and payment tracking.",
  },
  {
    name: "Hotel Management System",
    desc: "End-to-end reservations, check-in/out, and housekeeping workflows.",
  },
  {
    name: "Point of Sale (POS)",
    desc: "Fast checkout, inventory management, and daily sales analytics.",
  },
  {
    name: "Hotel Website",
    desc: "Booking-ready web presence for the hospitality industry.",
  },
  {
    name: "Network Monitoring System",
    desc: "Real-time device and connectivity dashboards with instant alerts.",
  },
  {
    name: "Billing System",
    desc: "Automated invoicing, payment tracking, and financial reporting.",
  },
];

const steps = [
  {
    n: "01",
    title: "Tell us what you need",
    desc: "Describe your workflow, pain point, or idea — we figure out the right solution together.",
  },
  {
    n: "02",
    title: "We design and build it",
    desc: "You get a custom-built system tailored to your business, not a one-size-fits-all template.",
  },
  {
    n: "03",
    title: "Deploy and integrate",
    desc: "We handle deployment and wire up every integration your team depends on.",
  },
];

function IconWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="w-12 h-12 rounded-xl bg-brand-muted flex items-center justify-center text-brand mb-4">
      {children}
    </div>
  );
}

function IntegrationCard({
  icon,
  name,
  desc,
}: {
  icon: ReactNode;
  name: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl bg-white border border-zinc-100 p-6">
      <IconWrapper>{icon}</IconWrapper>
      <h3 className="font-semibold text-navy mb-2">{name}</h3>
      <p className="text-sm text-zinc-500 leading-relaxed">{desc}</p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-white font-sans text-navy">
      {/* Nav */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-zinc-100">
        <div className="mx-auto max-w-6xl px-6 py-3 flex items-center justify-between">
          <Image
            src="/logo.png"
            alt="logikos.dev"
            width={60}
            height={60}
            priority
          />
          <a
            href={`mailto:${EMAIL}`}
            className="rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-light transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-28 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-brand-muted px-4 py-1.5 text-sm font-semibold text-brand mb-8">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4"
            aria-hidden="true"
          >
            <path d="M13 2L4.09 12.97 12 12l-1 9L21 9.97 13 10l1-8z" />
          </svg>
          On-Demand System Development
        </div>
        <h1 className="text-5xl sm:text-6xl font-bold text-navy leading-tight tracking-tight max-w-3xl mx-auto">
          Software Systems Built Around Your Business
        </h1>
        <p className="mt-6 text-xl text-zinc-500 max-w-2xl mx-auto leading-relaxed">
          We design and develop custom management and operational software —
          tailored to your workflow and connected to the tools your team already
          uses.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`mailto:${EMAIL}`}
            className="rounded-full bg-brand px-8 py-4 text-base font-semibold text-white hover:bg-brand-light transition-colors"
          >
            Start a Project
          </a>
          <a
            href="#systems"
            className="rounded-full border border-zinc-200 px-8 py-4 text-base font-semibold text-navy hover:bg-zinc-50 transition-colors"
          >
            See What We Build
          </a>
        </div>
      </section>

      {/* Systems */}
      <section id="systems" className="bg-zinc-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy">Systems We&apos;ve Built</h2>
            <p className="mt-4 text-zinc-500 max-w-xl mx-auto">
              A track record across industries — from hospitality and retail to
              IT operations and facilities management.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {systems.map((system) => (
              <div
                key={system.name}
                className="bg-white rounded-2xl p-6 border border-zinc-100 hover:border-brand/30 hover:shadow-sm transition-all"
              >
                <div className="w-8 h-1 rounded-full bg-brand mb-4" />
                <h3 className="font-semibold text-navy">{system.name}</h3>
                <p className="mt-2 text-sm text-zinc-500 leading-relaxed">
                  {system.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy">
              Seamlessly Connected
            </h2>
            <p className="mt-4 text-zinc-500 max-w-xl mx-auto">
              Every system we build can be wired up to the communication and
              data tools your team relies on.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <IntegrationCard
              name="Email"
              desc="Automated alerts, reports, and confirmations via SMTP or transactional email."
              icon={
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  className="w-6 h-6"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              }
            />
            <IntegrationCard
              name="Telegram"
              desc="Real-time alerts and bot commands delivered directly to your team's channels."
              icon={
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                  aria-hidden="true"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-2.01 9.473c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.88 14.49l-2.95-.924c-.642-.2-.655-.642.136-.953l11.527-4.446c.535-.194 1.003.131.969.081z" />
                </svg>
              }
            />
            <IntegrationCard
              name="REST APIs"
              desc="Connect to any third-party service or expose your own data endpoints to the outside world."
              icon={
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  className="w-6 h-6"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                  />
                </svg>
              }
            />
            <IntegrationCard
              name="Webhooks"
              desc="Trigger automated actions across systems whenever key events occur in your data."
              icon={
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  className="w-6 h-6"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
              }
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-zinc-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy">How It Works</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.n}>
                <span className="text-6xl font-bold text-brand/20 leading-none">
                  {step.n}
                </span>
                <h3 className="mt-4 text-xl font-semibold text-navy">
                  {step.title}
                </h3>
                <p className="mt-3 text-zinc-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-24">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Build Your System?
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto mb-10 text-lg leading-relaxed">
            No lengthy RFPs, no guesswork. Just a conversation about your
            problem and how we can solve it.
          </p>
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 text-base font-semibold text-white hover:bg-brand-light transition-colors"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              className="w-5 h-5"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            {EMAIL}
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Image
            src="/logo.png"
            alt="logikos.dev"
            width={48}
            height={48}
            className="brightness-0 invert"
          />
          <p className="text-zinc-500 text-sm">
            &copy; 2025 logikos.dev. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
