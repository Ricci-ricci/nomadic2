"use client";
import Container from "../bodycomponents/container";

export default function PrivacyPage() {
  return (
    <Container>
      <div className="flex flex-col gap-8 py-32 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-black text-center">
          Privacy Policy
        </h1>
        <div className="text-gray-700 text-lg space-y-4 overflow-auto  p-4 border rounded-lg shadow-lg">
          <p>Last updated: 8/28/2025</p>
          <p>
            At NOMADIC ZEBU Madagascar Travel Tour, we take the protection of
            your personal data very seriously. This privacy policy explains how
            we collect, use, and protect your information when you visit our
            website or use our travel services.
          </p>
          <h3 className="font-bold mt-4">1. Data We Collect</h3>
          <ul className="list-disc pl-6">
            <li>
              Personal information: name, surname, email, phone, postal address,
              DOB, passport/visa details.
            </li>
            <li>
              Payment information: only for secure processing of bookings.
            </li>
            <li>
              Browsing information: cookies, IP, login data to improve
              experience.
            </li>
          </ul>
          <h3 className="font-bold mt-4">2. Purpose of Use</h3>
          <ul className="list-disc pl-6">
            <li>Process travel requests, bookings, payments.</li>
            <li>
              Communicate with you (confirmation, updates, support,
              newsletters).
            </li>
            <li>Improve services and personalize experience.</li>
            <li>Comply with legal obligations.</li>
          </ul>
          <h3 className="font-bold mt-4">3. Data Sharing</h3>
          <p>
            We do not sell or rent your personal data. Information may be shared
            with travel partners or technical service providers as required.
          </p>
          <h3 className="font-bold mt-4">4. Data Retention</h3>
          <p>
            We keep your data only as long as necessary to complete travel
            arrangements and comply with legal obligations.
          </p>
          <h3 className="font-bold mt-4">5. Security</h3>
          <p>
            We implement appropriate technical and organizational measures to
            protect your data.
          </p>
          <h3 className="font-bold mt-4">6. Your Rights</h3>
          <p>
            You can access, update, or request deletion of your data, and
            withdraw consent. Contact us to exercise your rights.
          </p>
          <h3 className="font-bold mt-4">7. Cookies</h3>
          <p>
            Our website uses cookies to improve browsing experience and analyze
            traffic. You can manage cookies in your browser.
          </p>
          <h3 className="font-bold mt-4">8. Changes to This Policy</h3>
          <p>
            We may update this privacy policy at any time. Changes take effect
            once published on the website.
          </p>
          <h3 className="font-bold mt-4">Contact</h3>
          <p>
            Nomadic Zebu MDG-102 Antananarivo / nomadiczebu@gmail.com / +261 34
            51 516 49
          </p>
        </div>
      </div>
    </Container>
  );
}
