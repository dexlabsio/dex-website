import { Metadata } from 'next';
import DexNavbar from '@/components/sections/navbar/dex-navbar';
import FooterSection from '@/components/sections/footer/minimal';

export const metadata: Metadata = {
  title: 'Terms of Service - dex',
  description: 'Terms of Service for dex unified data platform services.',
};

export default function TermsOfService() {
  return (
    <>
      <DexNavbar />
    <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-4xl text-base/7 text-gray-700">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-6 text-xl/8 text-gray-600">
            These Terms of Service govern your use of dex services provided by dex Tecnologia LTDA.
          </p>
        </div>
        
        <div className="mt-10 max-w-2xl">
          <p className="text-sm text-gray-500 mb-8">
            <strong>Last Updated:</strong> January 2025
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing or using dex services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you may not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of Service</h2>
              <p className="mb-4">
                dex is a unified data platform that provides:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Extract & Load:</strong> High-performance connectors for databases, business tools, and spreadsheets</li>
                <li><strong>Transform:</strong> AI-assisted data transformation workflows with Git integration</li>
                <li><strong>Orchestrate:</strong> Auto-DAGs, built-in retries, and full observability</li>
                <li><strong>AI Copilot:</strong> Generate SQL from natural language with full data awareness</li>
                <li><strong>Analytics:</strong> End-to-end analytics solutions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Accounts</h2>
              <p>
                You must create an account to access certain features of dex. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Security and Privacy</h2>
              <p>
                We implement enterprise-grade security measures to protect your data. Your use of our services is also governed by our Privacy Policy and Information Security Policy, which are incorporated into these terms by reference.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Acceptable Use</h2>
              <p className="mb-4">
                You agree not to use dex services to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on intellectual property rights</li>
                <li>Transmit malicious code or compromise system security</li>
                <li>Interfere with the proper functioning of our services</li>
                <li>Access data without proper authorization</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Service Availability</h2>
              <p>
                While we strive to maintain high availability, we do not guarantee uninterrupted access to our services. We may temporarily suspend access for maintenance, updates, or other operational needs.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Intellectual Property</h2>
              <p>
                dex and its original content, features, and functionality are owned by dex Tecnologia LTDA and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, dex Tecnologia LTDA shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Termination</h2>
              <p>
                We reserve the right to terminate or suspend your account and access to our services at our sole discretion, without notice, for conduct that we believe violates these Terms of Service or is harmful to other users, us, or third parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms of Service at any time. We will notify users of any material changes by posting the updated terms on our website. Your continued use of our services after such changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Governing Law</h2>
              <p>
                These Terms of Service are governed by and construed in accordance with the laws of Brazil. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Brazil.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Contact Information</h2>
              <p className="mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p><strong>dex Tecnologia LTDA</strong></p>
                <p>CNPJ: 48.412.896/0001-42</p>
                <p>Email: <a href="mailto:support@dexlabs.io" className="text-indigo-600 hover:text-indigo-500">support@dexlabs.io</a></p>
                <p>Website: <a href="https://dexlabs.io" className="text-indigo-600 hover:text-indigo-500">https://dexlabs.io</a></p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
    <FooterSection />
    </>
  );
}