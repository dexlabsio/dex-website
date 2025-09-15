import FooterSection from '@/components/sections/footer/minimal';
import Navbar from '@/components/sections/navbar/default';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/ui/section';
import { cn } from '@/lib/utils';
import { CheckIcon, X } from 'lucide-react';

const tiers = [
  {
    name: 'Trial',
    id: 'tier-trial',
    href: '/demo',
    price: '14-day Free',
    description: 'Try dex risk-free with full access to all features.',
    features: [
      'Full platform access',
      'All connectors included',
      'AI-assisted transformations',
      'Email support',
      'Up to 1GB data processing',
    ],
    featured: false,
    cta: 'Start Free Trial',
  },
  {
    name: 'Startups',
    id: 'tier-startups',
    href: '/demo',
    price: '$499',
    description: 'Perfect for growing startups scaling their data operations.',
    features: [
      '2 users included',
      '2,000 monthly runs',
      'dex connector catalog',
      '24x5 support (in-app, email)',
      'Multi-cloud support',
    ],
    featured: false,
    cta: 'Get Started',
  },
  {
    name: 'Professional',
    id: 'tier-professional',
    href: '/demo',
    price: '$1,499',
    description: 'For established teams with enterprise-grade requirements.',
    features: [
      '10 users included',
      '10,000 monthly runs',
      'Custom connectors',
      'Priority support & enhanced SLAs',
      'Private network access',
    ],
    featured: false,
    cta: 'Get Started',
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    href: '/demo',
    price: 'Contact Sales',
    description: 'Tailored solutions for large-scale enterprise deployments.',
    features: [
      'Unlimited users',
      'Unlimited runs',
      'Platform API access',
      'Slack support',
      'Dedicated technical experts',
    ],
    featured: true,
    cta: 'Contact Sales',
  },
];

// Separate array for feature comparison (without Trial)
const comparisonTiers = tiers.filter(tier => tier.name !== 'Trial');

const featureSections = [
  {
    name: 'Platform',
    features: [
      { name: 'Number of users', tiers: { Startups: '2', Professional: '10', Enterprise: 'Unlimited' } },
      { name: 'Monthly runs', tiers: { Startups: '2,000', Professional: '10,000', Enterprise: 'Unlimited' } },
      { name: 'Platform API', tiers: { Startups: false, Professional: false, Enterprise: true } },
      { name: 'Multi-cloud support (AWS/GCP)', tiers: { Startups: true, Professional: true, Enterprise: true } },
      { name: 'Multi-region deployment', tiers: { Startups: true, Professional: true, Enterprise: true } },
    ],
  },
  {
    name: 'Data Collection',
    features: [
      { name: 'dex connector catalog', tiers: { Startups: true, Professional: true, Enterprise: true } },
      { name: 'Custom connectors', tiers: { Startups: false, Professional: true, Enterprise: true } },
      { name: 'Custom connector SLA', tiers: { Startups: false, Professional: '30 days', Enterprise: '14 days' } },
      { name: 'Log-based change data capture (CDC)', tiers: { Startups: true, Professional: true, Enterprise: true } },
      { name: 'dex Connectors Ultra (ultra-fast performance)', tiers: { Startups: false, Professional: true, Enterprise: true } },
    ],
  },
  {
    name: 'Development',
    features: [
      { name: 'SQL Editor', tiers: { Startups: true, Professional: true, Enterprise: true } },
      { name: 'Python script runner', tiers: { Startups: true, Professional: true, Enterprise: true } },
      { name: 'Context-aware AI Copilot', tiers: { Startups: true, Professional: true, Enterprise: true } },
      { name: 'Model versioning & history', tiers: { Startups: true, Professional: true, Enterprise: true } },
      { name: 'Browser-based IDE', tiers: { Startups: true, Professional: true, Enterprise: true } },
      { name: 'Data lineage', tiers: { Startups: true, Professional: true, Enterprise: true } },
    ],
  },
  {
    name: 'Testing & Deployment',
    features: [
      { name: 'GitHub/GitLab support', tiers: { Startups: true, Professional: true, Enterprise: true } },
      { name: 'Testing framework', tiers: { Startups: true, Professional: true, Enterprise: true } },
      { name: 'Data expectations library', tiers: { Startups: true, Professional: true, Enterprise: true } },
      { name: 'Custom tests', tiers: { Startups: true, Professional: true, Enterprise: true } },
    ],
  },
  {
    name: 'Orchestration & Monitoring',
    features: [
      { name: 'Auto-DAG creation', tiers: { Startups: true, Professional: true, Enterprise: true } },
      { name: 'Advanced dex Orchestrator', tiers: { Startups: true, Professional: true, Enterprise: true } },
      { name: 'Notification center', tiers: { Startups: true, Professional: true, Enterprise: true } },
      { name: 'Slack integration', tiers: { Startups: true, Professional: true, Enterprise: true } },
    ],
  },
  {
    name: 'Network & Connectivity',
    features: [
      { name: 'SSH tunnel connections', tiers: { Startups: false, Professional: true, Enterprise: true } },
      { name: 'Private network access', tiers: { Startups: true, Professional: true, Enterprise: true } },
      { name: 'VPC peering support', tiers: { Startups: true, Professional: true, Enterprise: true } },
    ],
  },
  {
    name: 'Security',
    features: [
      { name: 'IAM integration', tiers: { Startups: true, Professional: true, Enterprise: true } },
      { name: 'Data never leaves customer cloud', tiers: { Startups: true, Professional: true, Enterprise: true } },
      { name: 'Control/data plane architecture', tiers: { Startups: true, Professional: true, Enterprise: true } },
      { name: 'Privacy by design implementation', tiers: { Startups: true, Professional: true, Enterprise: true } },
    ],
  },
  {
    name: 'Support',
    features: [
      { name: 'Support level', tiers: { Startups: '24x5 Support (in-app, email)', Professional: 'Priority support, enhanced SLAs, implementation assistance', Enterprise: 'Priority support, dedicated Slack channel, dedicated technical experts' } },
      { name: 'AI support agent', tiers: { Startups: true, Professional: true, Enterprise: true } },
      { name: 'Professional services', tiers: { Startups: false, Professional: false, Enterprise: 'Contact Sales' } },
    ],
  },
];

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <div className="bg-white">
        <Section className="pt-10 pb-12 sm:pb-16 lg:py-20">
        <div className="mx-auto max-w-container">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-base/7 font-semibold text-primary">Pricing</h2>
            <p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl">
              Transparent Pricing, No Surprises
            </p>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-muted-foreground sm:text-xl/8">
            While others charge by usage, we believe in fair, predictable pricing that lets you scale without fear
          </p>
          
          <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {tiers.map((tier) => (
              <div
                key={tier.id}
                data-featured={tier.featured ? 'true' : undefined}
                className={cn(
                  "rounded-3xl p-8 ring-1 ring-gray-200 xl:p-10",
                  tier.featured && "bg-gray-900 ring-gray-900"
                )}
              >
                <h3
                  id={`tier-${tier.id}`}
                  className={cn(
                    "text-lg/8 font-semibold text-gray-900",
                    tier.featured && "text-white"
                  )}
                >
                  {tier.name}
                </h3>
                <p className={cn(
                  "mt-4 text-sm/6 text-gray-600",
                  tier.featured && "text-gray-300"
                )}>
                  {tier.description}
                </p>
                
                <p className={cn(
                  "mt-6 text-4xl font-semibold tracking-tight text-gray-900",
                  tier.featured && "text-white"
                )}>
                  {tier.price}
                  {tier.price !== 'Contact Sales' && tier.price !== '14-day Free' && (
                    <span className={cn(
                      "text-sm/6 font-semibold text-gray-600 ml-1",
                      tier.featured && "text-gray-300"
                    )}>
                      /month
                    </span>
                  )}
                </p>

                <Button
                  asChild
                  className={cn(
                    "mt-6 w-full",
                    tier.featured && "bg-white hover:bg-gray-100 text-gray-900 border border-gray-200"
                  )}
                  variant={tier.featured ? "secondary" : "default"}
                >
                  <a href={tier.href}>
                    {tier.cta}
                  </a>
                </Button>

                <ul
                  role="list"
                  className={cn(
                    "mt-8 space-y-3 text-sm/6 text-gray-600 xl:mt-10",
                    tier.featured && "text-gray-300"
                  )}
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon
                        aria-hidden="true"
                        className={cn(
                          "h-6 w-5 flex-none",
                          tier.featured ? "text-white" : "text-primary"
                        )}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Feature Comparison Section */}
      <Section className="bg-white">
        <div className="mx-auto max-w-container">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8 lg:mb-12">
            Compare Plan Features
          </h2>
          {/* Feature comparison (up to lg) */}
          <section aria-labelledby="mobile-comparison-heading" className="lg:hidden">
            <h2 id="mobile-comparison-heading" className="sr-only">
              Feature comparison
            </h2>

            <div className="mx-auto max-w-2xl space-y-16">
              {comparisonTiers.map((tier) => (
                <div key={tier.id} className="border-t border-gray-900/10">
                  <div
                    className={cn(
                      tier.featured ? 'border-primary' : 'border-transparent',
                      '-mt-px w-72 border-t-2 pt-10 md:w-80',
                    )}
                  >
                    <h3
                      className={cn(
                        tier.featured ? 'text-primary' : 'text-gray-900',
                        'text-sm/6 font-semibold',
                      )}
                    >
                      {tier.name}
                    </h3>
                    <p className="mt-1 text-sm/6 text-gray-600">{tier.description}</p>
                  </div>

                  <div className="mt-10 space-y-10">
                    {featureSections.map((section) => (
                      <div key={section.name}>
                        <h4 className="text-sm/6 font-semibold text-gray-900">{section.name}</h4>
                        <div className="relative mt-6">
                          {/* Fake card background */}
                          <div
                            aria-hidden="true"
                            className="absolute inset-y-0 right-0 hidden w-1/2 rounded-lg bg-white shadow-sm sm:block"
                          />

                          <div
                            className={cn(
                              tier.featured ? 'ring-2 ring-primary' : 'ring-1 ring-gray-900/10',
                              'relative rounded-lg bg-white shadow-sm sm:rounded-none sm:bg-transparent sm:shadow-none sm:ring-0',
                            )}
                          >
                            <dl className="divide-y divide-gray-200 text-sm/6">
                              {section.features.map((feature) => (
                                <div
                                  key={feature.name}
                                  className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0"
                                >
                                  <dt className="pr-4 text-gray-600">{feature.name}</dt>
                                  <dd className="flex items-center justify-end sm:justify-center sm:px-4">
                                    {(() => { const tierName = tier.name as 'Startups' | 'Professional' | 'Enterprise'; return typeof feature.tiers[tierName] === 'string'; })() ? (
                                      <span
                                        className={tier.featured ? 'font-semibold text-primary' : 'text-gray-900'}
                                      >
                                        {(() => { const tierName = tier.name as 'Startups' | 'Professional' | 'Enterprise'; return feature.tiers[tierName]; })()}
                                      </span>
                                    ) : (
                                      <>
                                        {(() => { const tierName = tier.name as 'Startups' | 'Professional' | 'Enterprise'; return feature.tiers[tierName] === true; })() ? (
                                          <CheckIcon aria-hidden="true" className="mx-auto size-5 text-primary" />
                                        ) : (
                                          <X aria-hidden="true" className="mx-auto size-5 text-gray-400" />
                                        )}

                                        <span className="sr-only">
                                          {(() => { const tierName = tier.name as 'Startups' | 'Professional' | 'Enterprise'; return feature.tiers[tierName] === true ? 'Yes' : 'No'; })()}
                                        </span>
                                      </>
                                    )}
                                  </dd>
                                </div>
                              ))}
                            </dl>
                          </div>

                          {/* Fake card border */}
                          <div
                            aria-hidden="true"
                            className={cn(
                              tier.featured ? 'ring-2 ring-primary' : 'ring-1 ring-gray-900/10',
                              'pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 rounded-lg sm:block',
                            )}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Feature comparison (lg+) */}
          <section aria-labelledby="comparison-heading" className="hidden lg:block">
            <h2 id="comparison-heading" className="sr-only">
              Feature comparison
            </h2>

            <div className="border-t border-gray-900/10">
              <div className="grid grid-cols-4 gap-x-8 pt-10">
                <div></div>
                {comparisonTiers.map((tier) => (
                  <div key={tier.id} className="text-center">
                    <div
                      className={cn(
                        tier.featured ? 'border-primary' : 'border-transparent',
                        'border-t-2 -mt-px pt-10',
                      )}
                    >
                      <p
                        className={cn(
                          tier.featured ? 'text-primary' : 'text-gray-900',
                          'text-sm/6 font-semibold',
                        )}
                      >
                        {tier.name}
                      </p>
                      <p className="mt-1 text-sm/6 text-gray-600">{tier.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 space-y-16">
              {featureSections.map((section) => (
                <div key={section.name}>
                  <h3 className="text-sm/6 font-semibold text-gray-900">{section.name}</h3>
                  <div className="mt-6">
                    <table className="w-full">
                      <thead>
                        <tr className="text-left">
                          <th scope="col" className="w-1/4">
                            <span className="sr-only">Feature</span>
                          </th>
                          {comparisonTiers.map((tier) => (
                            <th key={tier.id} scope="col" className="w-1/4 text-center">
                              <span className="sr-only">{tier.name} tier</span>
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.features.map((feature) => (
                          <tr key={feature.name} className="border-b border-gray-100 last:border-0">
                            <th scope="row" className="w-1/4 py-4 pr-4 text-left text-sm/6 font-normal text-gray-900">
                              {feature.name}
                            </th>
                            {comparisonTiers.map((tier) => (
                              <td key={tier.id} className="w-1/4 px-4 py-4 text-center bg-white shadow-sm border border-gray-100">
                                <div className="py-1">
                                  {(() => { const tierName = tier.name as 'Startups' | 'Professional' | 'Enterprise'; return typeof feature.tiers[tierName] === 'string'; })() ? (
                                    <span
                                      className={cn(
                                        tier.featured ? 'font-semibold text-primary' : 'text-gray-900',
                                        'text-sm/6',
                                      )}
                                    >
                                      {(() => { const tierName = tier.name as 'Startups' | 'Professional' | 'Enterprise'; return feature.tiers[tierName]; })()}
                                    </span>
                                  ) : (
                                    <>
                                      {(() => { const tierName = tier.name as 'Startups' | 'Professional' | 'Enterprise'; return feature.tiers[tierName] === true; })() ? (
                                        <CheckIcon aria-hidden="true" className="mx-auto size-5 text-primary" />
                                      ) : (
                                        <X aria-hidden="true" className="mx-auto size-5 text-gray-400" />
                                      )}

                                      <span className="sr-only">
                                        {(() => { const tierName = tier.name as 'Startups' | 'Professional' | 'Enterprise'; return feature.tiers[tierName] === true ? 'Yes' : 'No'; })()}
                                      </span>
                                    </>
                                  )}
                                </div>
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </Section>
    </div>
    <FooterSection />
    </>
  );
}