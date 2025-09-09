import FooterSection from "@/components/sections/footer/minimal";
import Navbar from "@/components/sections/navbar/default";

export const metadata = {
  title: "Information Security Policy - dex",
  description: "Information Security Policy for dex data platform services - comprehensive security framework and compliance standards",
};

export default function SecurityPolicy() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-8">Information Security Policy</h1>
          
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <p className="text-sm text-blue-800 mb-2"><strong>Document Version:</strong> 3.2 - Public</p>
              <p className="text-sm text-blue-800 mb-2"><strong>Last Updated:</strong> September 2025</p>
              <p className="text-sm text-blue-800 mb-2"><strong>Next Review Date:</strong> December 2025</p>
              <p className="text-sm text-blue-800"><strong>Contact:</strong> support@dexlabs.io</p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-amber-800 mb-2">📋 Detailed Security Documentation</h3>
              <p className="text-amber-700">
                This is the public version of our Information Security Policy. For organizations requiring more detailed security documentation, including technical specifications, implementation details, and compliance reports, please contact us at{" "}
                <a href="mailto:support@dexlabs.io" className="font-semibold underline">
                  support@dexlabs.io
                </a>. We provide comprehensive security documentation on an on-demand basis to support your vendor assessment and compliance requirements.
              </p>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Our Security Commitment</h2>
              <div className="bg-muted p-4 rounded-lg mb-4">
                <p className="font-semibold mb-2">Key Principles:</p>
                <ul className="list-disc pl-6">
                  <li>Comprehensive security framework protecting all customer data and operations</li>
                  <li>Control/data plane architecture ensuring complete customer data sovereignty</li>
                  <li>Industry-leading security standards and compliance frameworks</li>
                  <li>Continuous security monitoring and improvement programs</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mb-3">1.1 Security Mission</h3>
              <p className="mb-4">
                dex Tecnologia LTDA is committed to maintaining the highest standards of information security to protect our customers&apos; data, business operations, and privacy. This policy demonstrates our dedication to implementing enterprise-grade security controls while enabling innovative data engineering solutions.
              </p>

              <h3 className="text-xl font-semibold mb-3">1.2 Customer Data Protection Promise</h3>
              <p className="mb-4">
                We understand that your data is your most valuable asset. Our security framework is designed around a fundamental principle: <strong>your data remains exclusively under your control</strong>. Through our innovative control/data plane architecture, customer business data never leaves your own cloud environment, ensuring complete data sovereignty and regulatory compliance.
              </p>

              <h3 className="text-xl font-semibold mb-3">1.3 Our Unique Architecture</h3>
              <p className="mb-4">dex operates using a sophisticated control and data plane separation that provides unmatched security and compliance benefits:</p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Control Plane (dex-managed):</strong> Our platform manages orchestration, workflow coordination, user interfaces, and system monitoring without ever accessing your business data.</li>
                <li><strong>Data Plane (customer-controlled):</strong> All your sensitive business data remains exclusively within your own cloud infrastructure (Amazon S3, Google BigQuery, Google Cloud Storage). We never store, cache, or process your business data on our systems.</li>
              </ul>
              <p className="mb-4">
                This architectural approach ensures that your data enjoys the same security protections as your existing cloud infrastructure while benefiting from our advanced data engineering capabilities.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Security Standards and Compliance</h2>
              <div className="bg-muted p-4 rounded-lg mb-4">
                <p className="font-semibold mb-2">Our Commitments:</p>
                <ul className="list-disc pl-6">
                  <li>AWS Well-Architected Security Pillar implementation</li>
                  <li>OWASP security guidelines adherence</li>
                  <li>Target SOC 2 Type I certification by Q2 2026</li>
                  <li>Full GDPR and LGPD compliance for international operations</li>
                  <li>Regular third-party security assessments</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mb-3">2.1 Industry Standards</h3>
              <p className="mb-4">
                We align our security practices with globally recognized frameworks including the AWS Well-Architected Security Pillar, OWASP Security Guidelines, and ISO 27001 principles. Our approach ensures comprehensive security coverage while preparing for formal compliance certifications.
              </p>

              <h3 className="text-xl font-semibold mb-3">2.2 Regulatory Compliance</h3>
              <p className="mb-4">
                dex maintains full compliance with applicable data protection regulations including GDPR for European customers and LGPD for Brazilian operations. Our architectural approach simplifies compliance by ensuring your data processing occurs within your own jurisdiction and security controls.
              </p>

              <h3 className="text-xl font-semibold mb-3">2.3 Continuous Certification</h3>
              <p className="mb-4">
                We are actively pursuing SOC 2 Type I certification to provide third-party validation of our security controls. Through our AWS partnership, we inherit numerous enterprise-grade security certifications and maintain alignment with global security standards.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Access Control and Authentication</h2>
              <div className="bg-muted p-4 rounded-lg mb-4">
                <p className="font-semibold mb-2">Security Features:</p>
                <ul className="list-disc pl-6">
                  <li>Multi-factor authentication required for all system access</li>
                  <li>Role-based access control with least privilege principles</li>
                  <li>Customer-controlled access through dual-layer security model</li>
                  <li>Regular access reviews and automated provisioning/deprovisioning</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mb-3">3.1 Strong Authentication</h3>
              <p className="mb-4">
                Every interaction with dex systems requires multi-factor authentication, ensuring that only authorized individuals can access platform capabilities. We implement zero-trust principles where authentication is required for every system interaction.
              </p>

              <h3 className="text-xl font-semibold mb-3">3.2 Customer-Controlled Access</h3>
              <p className="mb-4">
                Our unique architecture means that even after authenticating with dex, users must also satisfy your organization&apos;s own cloud security requirements to access data and execute operations. This dual-layer approach provides enhanced protection through customer-controlled security policies.
              </p>

              <h3 className="text-xl font-semibold mb-3">3.3 Privileged Access Management</h3>
              <p className="mb-4">
                Access to sensitive system functions follows strict approval processes with regular reviews to ensure continued appropriateness. We implement the principle of least privilege throughout our systems, ensuring users receive only the minimum access necessary for their functions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Data Protection and Encryption</h2>
              <div className="bg-muted p-4 rounded-lg mb-4">
                <p className="font-semibold mb-2">Encryption Standards:</p>
                <ul className="list-disc pl-6">
                  <li>Industry-standard encryption for all data in transit and at rest</li>
                  <li>Advanced key management with automated rotation</li>
                  <li>Customer data sovereignty with zero data persistence on dex systems</li>
                  <li>Complete audit trails for all data operations</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mb-3">4.1 Comprehensive Encryption</h3>
              <p className="mb-4">
                All data communications utilize TLS 1.3 encryption, providing strong protection against interception. Customer credentials and sensitive information receive additional encryption layers using advanced cryptographic techniques.
              </p>

              <h3 className="text-xl font-semibold mb-3">4.2 Your Data Stays Yours</h3>
              <p className="mb-4">
                Our architectural approach ensures that your business data never leaves your cloud environment. Data flows directly from third-party APIs (like TikTok Shop) into your own storage systems, with dex orchestrating the processing without ever storing or caching your information.
              </p>

              <h3 className="text-xl font-semibold mb-3">4.3 Audit and Transparency</h3>
              <p className="mb-4">
                Complete audit trails document all data operations, providing full transparency into how your data is accessed and processed. These logs support compliance requirements and incident investigation capabilities.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Infrastructure Security</h2>
              <div className="bg-muted p-4 rounded-lg mb-4">
                <p className="font-semibold mb-2">Technical Safeguards:</p>
                <ul className="list-disc pl-6">
                  <li>Enterprise-grade cloud infrastructure with multi-region deployment</li>
                  <li>Advanced threat detection and monitoring systems</li>
                  <li>Automated security scanning and vulnerability management</li>
                  <li>Container security with image scanning and validation</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mb-3">5.1 Cloud-Native Security</h3>
              <p className="mb-4">
                Our infrastructure leverages AWS enterprise security controls, including native firewalls, DDoS protection, and comprehensive monitoring systems. Multi-region deployment provides both security and operational resilience.
              </p>

              <h3 className="text-xl font-semibold mb-3">5.2 Automated Security</h3>
              <p className="mb-4">
                Continuous security monitoring provides real-time threat detection and automated response capabilities. Our development pipeline includes automated security scanning to identify and address vulnerabilities before they reach production systems.
              </p>

              <h3 className="text-xl font-semibold mb-3">5.3 Container and Application Security</h3>
              <p className="mb-4">
                All applications run in secure containerized environments with comprehensive image scanning and validation. Our development practices follow secure coding guidelines with regular security assessments.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Business Continuity and Availability</h2>
              <div className="bg-muted p-4 rounded-lg mb-4">
                <p className="font-semibold mb-2">Resilience Features:</p>
                <ul className="list-disc pl-6">
                  <li>Automated backup systems with encrypted storage</li>
                  <li>Multi-region deployment for high availability</li>
                  <li>Disaster recovery testing and validation procedures</li>
                  <li>Scalable architecture supporting business growth</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Privacy and Data Rights</h2>
              <div className="bg-muted p-4 rounded-lg mb-4">
                <p className="font-semibold mb-2">Privacy Commitments:</p>
                <ul className="list-disc pl-6">
                  <li>Privacy by design implementation across all systems</li>
                  <li>Comprehensive data subject rights support (access, portability, deletion)</li>
                  <li>Global privacy regulation compliance (GDPR, LGPD, CCPA)</li>
                  <li>Transparent data processing practices with customer control</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Security Assessment and Validation</h2>
              <div className="bg-muted p-4 rounded-lg mb-4">
                <p className="font-semibold mb-2">Validation Programs:</p>
                <ul className="list-disc pl-6">
                  <li>Regular third-party security assessments and penetration testing</li>
                  <li>Continuous vulnerability scanning and management</li>
                  <li>Compliance audits and certification processes</li>
                  <li>Customer security reviews and documentation support</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">9. Contact and Support</h2>
              <h3 className="text-xl font-semibold mb-3">9.1 Security Team</h3>
              <p className="mb-4">For security-related questions, concerns, or incident reporting:</p>
              <div className="bg-muted p-4 rounded-lg mb-4">
                <p><strong>Email:</strong> support@dexlabs.io</p>
                <p><strong>Website:</strong> https://www.dexlabs.io</p>
                <p><strong>Business Hours:</strong> Standard support during business hours, emergency response available 24/7</p>
              </div>

              <h3 className="text-xl font-semibold mb-3">9.2 Compliance and Privacy</h3>
              <p className="mb-4">For compliance-related inquiries, data processing questions, or privacy concerns:</p>
              <div className="bg-muted p-4 rounded-lg mb-4">
                <p><strong>General Inquiries:</strong> support@dexlabs.io</p>
                <p><strong>Privacy Requests:</strong> Include &quot;Privacy Request&quot; in subject line</p>
                <p><strong>Company Information:</strong> dex Tecnologia LTDA, CNPJ: 48.412.896/0001-42</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Policy Updates and Transparency</h2>
              <p className="mb-4">
                This security policy is reviewed quarterly and updated as needed to reflect changes in our security practices, regulatory requirements, or business operations. We notify customers of material changes to our security practices and maintain transparency about our ongoing security improvements.
              </p>
              <p className="mb-4">
                For the most current version of this policy and additional security information, visit our website at{" "}
                <a href="https://www.dexlabs.io/security" className="text-blue-600 hover:underline">
                  https://www.dexlabs.io/security
                </a>.
              </p>
              <p className="italic text-muted-foreground">
                This policy demonstrates dex&apos;s commitment to maintaining the highest standards of information security while enabling innovative data engineering solutions for our customers.
              </p>
            </section>
          </div>
        </div>
      </div>
      <FooterSection />
    </>
  );
}