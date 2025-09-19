import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Kerolos Adel Portfolio Website',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-8 bg-white rounded-2xl shadow-lg">
        <h1 className="text-4xl font-semibold mb-2 text-gray-800">Privacy Policy</h1>
        <p className="text-gray-600 mb-8">Last updated: June 24, 2025</p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">1. Information Collected</h2>
            <p className="text-gray-600 leading-relaxed mb-4">We collect the following data from users:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Your name and email address (when using the contact form)</li>
              <li>Anonymous analytics such as device and browser type</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">2. Use of Information</h2>
            <p className="text-gray-600 leading-relaxed">
              Your information is used solely to respond to inquiries. We do not share or sell personal data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">3. Form Submission</h2>
            <p className="text-gray-600 leading-relaxed">
              Form submissions are handled by{' '}
              <Link 
                href="https://formsubmit.co/privacy" 
                target="_blank"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                Formsubmit
              </Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">4. Data Security</h2>
            <p className="text-gray-600 leading-relaxed">
              Reasonable measures are taken to protect your data, though internet transmission is never fully secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">5. Your Rights</h2>
            <p className="text-gray-600 leading-relaxed">
              You may contact us to access, correct, or delete your data at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">6. Contact</h2>
            <p className="text-gray-600 leading-relaxed">
              Questions? Email us at{' '}
              <Link 
                href="mailto:kerolos.adel.eleshaa@gmail.com"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                kerolos.adel.eleshaa@gmail.com
              </Link>
            </p>
          </section>
        </div>

        <footer className="text-center mt-10 pt-8 border-t border-gray-200">
          <p className="text-gray-500">
            &copy; 2025 Kerolos Adel Web Masterpieces. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
