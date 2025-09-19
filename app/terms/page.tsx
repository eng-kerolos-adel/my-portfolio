import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Kerolos Adel Portfolio Website',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-8 bg-white rounded-2xl shadow-lg">
        <h1 className="text-4xl font-semibold mb-2 text-gray-800">Terms of Service</h1>
        <p className="text-gray-600 mb-8">Last updated: June 24, 2025</p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">1. Ownership</h2>
            <p className="text-gray-600 leading-relaxed">
              All content on this website, including text, images, and code, is owned by Kerolos Adel unless otherwise stated.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">2. Use of Website</h2>
            <p className="text-gray-600 leading-relaxed">
              You may browse and view content freely for personal or educational use. Commercial use or redistribution of any part of this website without permission is prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">3. Accuracy</h2>
            <p className="text-gray-600 leading-relaxed">
              While efforts are made to keep the content accurate and up-to-date, there is no guarantee of completeness or correctness.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">4. External Links</h2>
            <p className="text-gray-600 leading-relaxed">
              This site may contain links to third-party websites. I am not responsible for their content or privacy practices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">5. Changes</h2>
            <p className="text-gray-600 leading-relaxed">
              These terms may be updated at any time without prior notice. Continued use of the site indicates acceptance of the current terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">6. Contact</h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions about these terms, please contact me at:{' '}
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
