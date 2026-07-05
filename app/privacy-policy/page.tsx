import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How PetPalHub collects, uses, and protects your information.",
};

const UPDATED = "July 5, 2026";
const CONTACT_EMAIL = "privacy@petpalhub.app";

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated={UPDATED}>
      <p>
        PetPalHub (&ldquo;PetPalHub,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) provides a
        browser extension and website that help pet owners manage reminders, discover
        pet products, find adoptable pets, and connect with a community of pet
        parents. This Privacy Policy explains what information we collect, how we use
        it, and the choices you have.
      </p>
      <p>
        By installing the PetPalHub extension or using petpalhub.app, you agree to the
        collection and use of information as described in this policy.
      </p>

      <h2>1. Information We Collect</h2>
      <h3>Account information</h3>
      <p>
        When you create a PetPalHub account, we collect your email address and, if you
        sign in with a third-party provider (such as Google), the basic profile
        information that provider shares with us (name and email address).
      </p>
      <h3>Pet and usage information</h3>
      <ul>
        <li>Pet profile details you choose to add, such as a pet&rsquo;s name, species, and care schedule</li>
        <li>Reminder preferences and the reminders you create (e.g. feeding, medication, vet visits)</li>
        <li>Quotes or content you like or save within the extension</li>
        <li>Community content you choose to post, such as pet photos, comments, or leaderboard activity</li>
      </ul>
      <h3>Purchases</h3>
      <p>
        If you order custom merchandise through PawPrints or make a purchase through
        PetBazaar or PawPro Hub, we (or our payment and print-on-demand partners)
        collect the information necessary to fulfill the order, such as shipping
        address and payment confirmation. We do not store your full payment card
        details; these are handled directly by our payment processor.
      </p>
      <h3>PetVault (optional Web3 features)</h3>
      <p>
        If you choose to connect a crypto wallet to donate or participate in PetVault,
        we receive your public wallet address and transaction data necessary to
        process that donation or participation. We never request or store your
        private keys or wallet seed phrase.
      </p>
      <h3>Automatically collected information</h3>
      <p>
        We collect limited technical information such as browser type, extension
        version, and general usage analytics (for example, which features are used)
        to help us maintain and improve PetPalHub. This data is not used to build an
        advertising profile of you.
      </p>

      <h2>2. How We Use Information</h2>
      <ul>
        <li>To provide core features: reminders, adoption search, marketplace, community, and games</li>
        <li>To process orders and donations you initiate</li>
        <li>To sync your data (such as liked quotes and reminders) across your signed-in sessions</li>
        <li>To communicate with you about your account, orders, or updates to PetPalHub</li>
        <li>To maintain the security and reliability of the extension and website</li>
        <li>To understand aggregate usage trends so we can improve features</li>
      </ul>

      <h2>3. How We Share Information</h2>
      <p>We do not sell your personal information. We share information only:</p>
      <ul>
        <li>With service providers who help us operate PetPalHub, such as our backend infrastructure provider (Google Firebase), payment processors, and print-on-demand merchandise partners, each bound to use your data only to provide their service to us</li>
        <li>With shelters or rescue organizations you choose to contact through PetMatch</li>
        <li>If required by law, regulation, or legal process</li>
        <li>In connection with a merger, acquisition, or sale of assets, subject to standard confidentiality protections</li>
      </ul>

      <h2>4. Data Retention</h2>
      <p>
        We retain your account and pet data for as long as your account remains
        active. You can request deletion of your account and associated data at any
        time by contacting us (see Section 8).
      </p>

      <h2>5. Your Choices and Rights</h2>
      <ul>
        <li>You can edit or delete pet profiles and reminders directly within the extension</li>
        <li>You can disconnect a linked crypto wallet at any time from your account settings</li>
        <li>You can unsubscribe from marketing emails using the link in any email we send</li>
        <li>Depending on where you live, you may have rights to access, correct, export, or delete your personal information under laws such as the GDPR or CCPA. Contact us to exercise these rights</li>
      </ul>

      <h2>6. Children&rsquo;s Privacy</h2>
      <p>
        PetPalHub is not directed to children under 13 (or the minimum age required
        in your country), and we do not knowingly collect personal information from
        children. If you believe a child has provided us with personal information,
        please contact us so we can delete it.
      </p>

      <h2>7. Security</h2>
      <p>
        We use industry-standard safeguards, including encrypted connections and
        access-controlled cloud infrastructure, to protect your information. No
        method of transmission or storage is completely secure, so we cannot
        guarantee absolute security.
      </p>

      <h2>8. Contact Us</h2>
      <p>
        Questions about this Privacy Policy or your data can be sent to{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>

      <h2>9. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. If we make material
        changes, we will notify you by updating the &ldquo;Last updated&rdquo; date above
        and, where appropriate, through the extension or by email.
      </p>
    </LegalLayout>
  );
}
