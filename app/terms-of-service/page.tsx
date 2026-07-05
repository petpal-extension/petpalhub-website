import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern your use of PetPalHub.",
};

const UPDATED = "July 5, 2026";
const CONTACT_EMAIL = "support@petpalhub.app";

export default function TermsOfServicePage() {
  return (
    <LegalLayout title="Terms of Service" updated={UPDATED}>
      <p>
        These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the
        PetPalHub browser extension and petpalhub.app website (together, the
        &ldquo;Service&rdquo;), provided by PetPalHub (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By
        installing the extension or using the website, you agree to these Terms.
      </p>

      <h2>1. Eligibility</h2>
      <p>
        You must be at least 13 years old (or the minimum age required in your
        country) to use PetPalHub. By using the Service, you confirm you meet this
        requirement.
      </p>

      <h2>2. Your Account</h2>
      <p>
        Some features require creating an account. You are responsible for keeping
        your login credentials secure and for all activity that occurs under your
        account. Let us know right away if you suspect unauthorized access.
      </p>

      <h2>3. Description of the Service</h2>
      <p>PetPalHub provides features including, but not limited to:</p>
      <ul>
        <li>PetTune: pet care reminders and motivational content</li>
        <li>PetBazaar and PawPro Hub: a curated marketplace and directory of pet-related products and services</li>
        <li>PawPrints: custom, print-on-demand pet merchandise</li>
        <li>PawPlays: pet-themed mini-games</li>
        <li>PetMatch: pet adoption search connecting users with shelters</li>
        <li>Community features such as profiles, leaderboards, and PetSpotlight</li>
        <li>PetVault: optional Web3 features allowing wallet-based donations and participation in community NFT/crypto initiatives</li>
        <li>Premium subscription tiers (Premium and PetPalium) offering additional features</li>
      </ul>
      <p>
        We may add, change, or remove features at any time. We&rsquo;ll do our best to
        communicate significant changes.
      </p>

      <h2>4. Purchases and Subscriptions</h2>
      <p>
        Merchandise orders, marketplace purchases, and Premium/PetPalium
        subscriptions are billed through our payment processor. Subscriptions renew
        automatically unless canceled before the renewal date; you can cancel
        anytime from your account settings and retain access until the end of the
        current billing period. Merchandise is produced on demand; because items are
        personalized, orders generally cannot be canceled once production has
        started, except as required by applicable law.
      </p>

      <h2>5. PetVault and Digital Assets</h2>
      <p>
        PetVault lets you optionally connect a third-party crypto wallet to donate or
        participate in community NFT or crypto initiatives. You are solely
        responsible for the security of your wallet and private keys. Cryptocurrency
        and digital asset transactions are irreversible, may be subject to
        significant value fluctuation, and may carry regulatory or tax obligations
        specific to your jurisdiction, which you are responsible for understanding.
        PetPalHub does not provide financial or investment advice, and participation
        in PetVault is entirely voluntary.
      </p>

      <h2>6. Pet Adoption (PetMatch)</h2>
      <p>
        PetMatch connects users with third-party shelters and rescue organizations.
        PetPalHub facilitates this connection but is not a party to, and is not
        responsible for, the adoption process, the condition of any animal, or the
        conduct of any shelter or individual. Always use good judgment and verify
        information directly with the shelter before proceeding with an adoption.
      </p>

      <h2>7. User Conduct</h2>
      <p>By using PetPalHub, you agree not to:</p>
      <ul>
        <li>Post content that is unlawful, abusive, or infringes on others&rsquo; rights</li>
        <li>Misrepresent a pet&rsquo;s health, temperament, or availability for adoption</li>
        <li>Attempt to disrupt, reverse-engineer, or gain unauthorized access to the Service</li>
        <li>Use the Service for any fraudulent or illegal purpose</li>
      </ul>
      <p>We may suspend or terminate accounts that violate these Terms.</p>

      <h2>8. Intellectual Property</h2>
      <p>
        PetPalHub and its logos, designs, and original content are owned by us or our
        licensors. Content you upload (such as pet photos for PawPrints) remains
        yours, but you grant us a license to use it solely to provide the Service you
        requested, such as producing your custom merchandise or displaying your
        PetSpotlight submission.
      </p>

      <h2>9. Disclaimers</h2>
      <p>
        PetPalHub is provided &ldquo;as is.&rdquo; Reminders, health insights, and care
        information are provided for general informational purposes only and are not
        a substitute for professional veterinary advice. Always consult a licensed
        veterinarian regarding your pet&rsquo;s health and medical needs.
      </p>

      <h2>10. Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by law, PetPalHub is not liable for any
        indirect, incidental, or consequential damages arising from your use of the
        Service, including but not limited to third-party marketplace purchases,
        adoption outcomes, or digital asset transactions.
      </p>

      <h2>11. Changes to These Terms</h2>
      <p>
        We may update these Terms from time to time. Continued use of the Service
        after changes take effect constitutes acceptance of the revised Terms.
      </p>

      <h2>12. Contact Us</h2>
      <p>
        Questions about these Terms can be sent to{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    </LegalLayout>
  );
}
