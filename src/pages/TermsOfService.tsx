export function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      <section className="pt-28 pb-8 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-emerald-50 to-teal-50">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms Of Service</h1>
        </div>
      </section>

      <section className="py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8 text-gray-700 leading-relaxed">
          <div>
            <p>
              Theta Dynamics Ltd is an AI-driven operational intelligence platform and acts as the Data
              Controller for personal data processed through its platform and website. This policy applies
              to employees, directors, and authorised representatives of business clients, and the company
              does not knowingly collect data from individuals acting in a personal capacity. The registered
              office of the company is in the UK and UAE (Dubai).
            </p>
          </div>

          <div>
            <ul className="list-disc pl-6 space-y-4">
              <li>
                Business contact data such as name, work email, phone number, job title, and company
                name; account credentials including login details and access logs; operational data such as
                files and reports uploaded for analysis; technical data such as IP address and device
                information; and communication records including emails and support tickets.
              </li>
              <li>
                Personal data is processed under lawful bases defined by UK GDPR, including performance of
                a contract, legitimate interests such as security and service improvement, compliance with
                legal obligations, and consent where required, particularly for marketing and non-essential
                cookies.
              </li>
              <li>
                Theta Dynamics uses AI and machine learning to analyse operational data and generate
                insights, detect inefficiencies, and produce reports. However, it does not make solely
                automated decisions that have legal or significant effects on individuals without human
                involvement.
              </li>
              <li>
                The company does not use client-uploaded data to train AI or machine learning models
                without explicit written consent. All AI outputs are subject to human review, and
                processing is limited to the minimum data necessary to deliver services.
              </li>
              <li>
                Personal data is stored within the UK (UK South region) using Microsoft Azure (UK South)
                and Google Cloud Platform (London region). Data is not transferred outside the UK unless
                appropriate safeguards, such as international data transfer agreements, are in place.
              </li>
              <li>
                The company does not sell or trade personal data and only shares it with trusted
                sub-processors under strict agreements, legal authorities when required by law, or as part
                of a business transfer such as a merger or acquisition.
              </li>
              <li>
                Strong security measures are implemented, including encryption in transit (TLS 1.2 or
                higher), encryption at rest (AES-256), role-based access controls, and audit logging. In
                case of a data breach, the company will notify the relevant authority within 72 hours and
                inform affected clients promptly.
              </li>
              <li>
                Personal data is retained only as long as necessary, with account and contact data kept for
                the duration of the contract plus six years, operational data deleted or returned within 30
                days after contract termination, security logs retained for 12 months, and marketing records
                kept until consent is withdrawn.
              </li>
              <li>
                Individuals have rights under UK GDPR, including access, rectification, erasure,
                restriction, portability, and objection to processing. Requests are handled within one month,
                and individuals can contact the Data Protection Officer at Theta Dynamics Ltd in the UK and
                UAE (Dubai) for queries or complaints. The company may update this policy periodically and
                will notify clients of significant changes in advance.
              </li>
            </ul>
          </div>

          <div>
            <p>Email: support@thetadynamics.io</p>
            <p>Registered office: UK and UAE (Dubai)</p>
          </div>
        </div>
      </section>
    </div>
  );
}