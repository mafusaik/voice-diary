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
  lastUpdated: "May 31, 2026",
  sections: [
    {
      heading: "1. Introduction",
      content: "Thank you for choosing Voice Diary ('the App', 'us', 'we', 'our'). We are committed to protecting your personal data and your privacy. This Privacy Policy outlines what information we collect, how we process it, and your rights concerning your personal recordings and transcripts. By installing and using Voice Diary, you consent to our collection, processing, and storage practices as detailed in this policy."
    },
    {
      heading: "2. Information We Process & Collect",
      content: [
        "Audio Recordings & Transcripts: To transcribe/refine your voice journals, our application securely processes your spoken audio recording to generate structured text. Both the audio recordings and generated text are stored and processed. No voice recordings or text entries are sold or rented.",
        "Subscription and Purchase Metadata: We track your free trial (7 days) and subscription status to deliver access features.",
        "Feedback & Support Information: If you reach out to us at glazer.dev@gmail.com, we collect your email address and any communications details you choose to share to solve support queries."
      ]
    },
    {
      heading: "3. How Your Voice Data is Used",
      content: [
        "We use secure AI systems to transcribe, structure, and refine your spoken thoughts into journal entries.",
        "Your spoken journals are exclusively leveraged to deliver the app's services, preserve personal tone, draft notes, and summarize structures.",
        "Your data is never sold, shared with advertisers, or used for profiling, and we never display advertisements inside the app."
      ]
    },
    {
      heading: "4. Third-Party Core Processing",
      content: "For rendering AI transcription models and language structures, your recordings are safely routed through secure AI processing tunnels. Third-party infrastructure partners act as confidential subprocessors and are legally bound by strict confidentiality and safety protocols — they are prohibited from using your data for any promotional or advertising tasks."
    },
    {
      heading: "5. Information Security & Encryption",
      content: "We implement advanced industry-standard data encryption both during transit and at rest to defend against unauthorized file breaches, alteration, or leaks. However, no database or transmission channel can be guaranteed 100% secure. We strongly coordinate to provide optimal hardware guardrails for your voice journals."
    },
    {
      heading: "6. User Control & Data Deletion",
      content: "You retain full control over your journal notes, audios, and files. You can delete individual transcript records or your entire diary database inside the Voice Diary application at any time, which permanently fires off deletion of historical logs associated with your metadata."
    },
    {
      heading: "7. Contact and Support Email",
      content: "For queries, deletion procedures, or standard privacy requests, please feel free to send a message to glazer.dev@gmail.com."
    }
  ]
};

export const termsOfService: LegalDoc = {
  title: "Terms of Service",
  lastUpdated: "May 31, 2026",
  sections: [
    {
      heading: "1. Agreement to Terms",
      content: "By installing, testing, or subscribing to the Voice Diary application, you represent that you have read, understood, and agreed to be bound by these Terms of Service. If you do not accept these Terms, do not install or use the app."
    },
    {
      heading: "2. Free Trial & Subscriptions",
      content: [
        "Free Trial: Voice Diary offers full access free for 7 days. You may cancel at any point during this period without incurring fees.",
        "Subscriptions: After the 7-day trial, you can continue accessing unlimited journals, transcriber credits, and advanced summaries via a monthly or annual subscription billed directly through your Google Play Store account.",
        "Daily limits for free tier: Non-subscribed users are limited to 4 minutes of recording time per day."
      ]
    },
    {
      heading: "3. Acceptable Use Policy",
      content: "You are solely responsible for all content you record on Voice Diary. You agree not to upload, transmit, or process voice recordings containing spyware, malware, or content violating copyright laws, or recordings representing illegal actions."
    },
    {
      heading: "4. Intellectual Property Rights",
      content: "All source files, software engines, visual card layouts, designs, trademarks, and logos associated with the 'Voice Diary' product are the absolute intellectual property of Glazier Audio Journal and our licensors. Your audio files and text transcripts belong entirely to you and we assert no proprietary claim over your diary content."
    },
    {
      heading: "5. Disclaimers of Warranties",
      content: "The Voice Diary application is provided on an 'AS IS' and 'AS AVAILABLE' basis without warranty of any kind. Glazier Audio Journal disclaims all representations, including but not limited to, the accuracy of speech-to-text translations or continuous uninterrupted system availability."
    },
    {
      heading: "6. Limitation of Liability",
      content: "In no event shall we or our partners be liable for any incidental, direct, indirect, special, punitive, or consequential damages resulting from your use of Voice Diary or errors in transcribing your speech logs, even if we were informed beforehand."
    },
    {
      heading: "7. Help and Support",
      content: "If you have questions about subscription cancellations, billing, translation fixes, or terms compliance, please contact us at glazer.dev@gmail.com."
    }
  ]
};
