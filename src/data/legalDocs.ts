export interface LegalDoc {
  title: string;
  lastUpdated: string;
  sections: {
    heading: string;
    content: string | string[];
  }[];
}

export const privacyPolicy: LegalDoc = {
  title: "Privacy Policy",
  lastUpdated: "April 29, 2025",
  sections: [
    {
      heading: "1. Information We Collect",
      content: [
        "The app requests access to the microphone to record voice diary entries.",
        "When the user chooses to create a voice diary entry, the audio recording may be sent to third-party services for transcription and AI-assisted processing, but only after the user provides explicit consent.",
        "The resulting diary entry text is stored locally on the user's device. We do not store user recordings or diary entries on our own servers."
      ]
    },
    {
      heading: "2. Third-Party Services",
      content: [
        "Transcription and AI Processing: When the user chooses to create a voice diary entry, the audio recording is sent to Deepgram (deepgram.com), a third-party speech-to-text provider, to transcribe the recording into text. After transcription, the resulting text may be sent to Groq AI (groq.com) to generate a title and improve the readability of the diary entry.",
        "This processing occurs only after the user provides explicit consent within the app. Audio recordings and transcribed text are used solely to provide transcription, title generation, and AI-assisted text improvement features.",
        "Audio recordings and transcribed text are not sold, shared, or used for advertising purposes. See Deepgram's privacy policy: deepgram.com/privacy. See Groq's privacy policy: groq.com/privacy.",
        "We do not sell user data or share personal information with third parties except as described above and only for providing the app's transcription and AI-assisted features."
      ]
    },
    {
      heading: "3. Data Storage",
      content: "All data is stored locally on the user's device. We have no access to this data and do not store it on any servers."
    },
    {
      heading: "4. Data Deletion",
      content: "Users can delete all data by uninstalling the app. The local database is removed along with the app."
    },
    {
      heading: "5. Children's Rights",
      content: "The app is not intended for children under 13 years of age and does not collect data from children."
    },
    {
      heading: "6. Contact",
      content: "If you have any questions about this Privacy Policy, please contact us at: glazer.dev@gmail.com"
    },
    {
      heading: "7. In-App Purchases",
      content: "We use RevenueCat to process in-app subscriptions. RevenueCat may collect purchase history and device identifiers to manage subscription status. See RevenueCat's privacy policy: https://www.revenuecat.com/privacy"
    }
  ]
};

export const termsOfService: LegalDoc = {
  title: "Terms of Service",
  lastUpdated: "April 29, 2025",
  sections: [
    {
      heading: "1. Acceptance of Terms",
      content: "By downloading or using the Voice Diary application (\"App\"), you agree to be bound by these Terms of Service. If you do not agree, please do not use the App."
    },
    {
      heading: "2. Description of Service",
      content: "The App allows users to record voice input, convert speech to text, and store notes locally on their device. Optional AI-based text improvement may be provided via third-party services."
    },
    {
      heading: "3. User Responsibilities",
      content: [
        "You agree to use the App only for lawful purposes. You are solely responsible for the content you create, store, or process using the App.",
        "You must not misuse the App, attempt to reverse engineer it, or use it for illegal or harmful activities."
      ]
    },
    {
      heading: "4. Payments and Subscriptions",
      content: [
        "The App may offer paid features, including subscriptions and one-time purchases.",
        "All payments are processed through the respective platform (Apple App Store or Google Play). Payment will be charged to your Apple ID or Google account at the confirmation of purchase.",
        "Subscriptions automatically renew unless canceled at least 24 hours before the end of the current billing period. You can manage or cancel your subscription in your platform's subscription settings (App Store: Settings → Apple ID → Subscriptions; Google Play: Play Store → Subscriptions).",
        "Refunds are handled according to the policy of the respective platform provider. We do not collect or store payment information.",
        "By using the App, you agree to Apple's Standard End User License Agreement (EULA): https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
      ]
    },
    {
      heading: "5. Third-Party Services",
      content: [
        "The App may use third-party services for certain features. By using those features, you agree to the terms of those third-party providers.",
        "We are not responsible for the content, accuracy, or data practices of third-party services."
      ]
    },
    {
      heading: "6. Data and Privacy",
      content: "Your data is stored locally on your device. Please refer to the Privacy Policy for more information."
    },
    {
      heading: "7. Intellectual Property",
      content: "The App and its original content, features, and functionality are the property of the developer and are protected by applicable laws."
    },
    {
      heading: "8. No Warranty",
      content: "The App is provided \"as is\" without warranties of any kind. We do not guarantee that the App will be error-free or uninterrupted."
    },
    {
      heading: "9. Limitation of Liability",
      content: "To the maximum extent permitted by law, we are not liable for any damages arising from the use or inability to use the App."
    },
    {
      heading: "10. Termination",
      content: "We reserve the right to suspend or terminate access to the App at any time without notice."
    },
    {
      heading: "11. Changes to Terms",
      content: "We may update these Terms from time to time. Continued use of the App means you accept the updated Terms."
    },
    {
      heading: "12. Governing Law",
      content: "These Terms shall be governed by and interpreted in accordance with the laws of your country of residence."
    },
    {
      heading: "13. Contact",
      content: "If you have any questions, please contact: glazer.dev@gmail.com"
    }
  ]
};
