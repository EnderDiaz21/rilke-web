// The <html> shell lives in app/[locale]/layout.tsx so each language gets its own lang attribute.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
