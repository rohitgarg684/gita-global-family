import type { Metadata } from "next";
import PasswordGate from "@/components/PasswordGate";

export const metadata: Metadata = {
  title: "Allegations Against Hinduism",
  description:
    "A dispassionate examination of common allegations made against Sanatan Dharma (Hinduism) by other world religions, alongside considered responses grounded in Hindu philosophical traditions.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AllegationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PasswordGate
      statusEndpoint="/api/allegations/status/"
      loginEndpoint="/api/allegations/login/"
      title="Allegations Against Hinduism"
      description="This section contains a candid, comparative-religion examination of sensitive material. Please enter the access passphrase to continue."
    >
      {children}
    </PasswordGate>
  );
}
