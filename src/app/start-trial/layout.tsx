import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Start Free Trial - Idexia Studio",
  description: "Start your 14-day free trial of Idexia Studio's AI-powered social media management platform. No credit card required.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
