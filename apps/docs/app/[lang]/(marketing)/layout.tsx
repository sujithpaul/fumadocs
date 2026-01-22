export default async function MarketingLayout({
  params,
  children,
}: LayoutProps<'/[lang]'>) {
  return <>{children}</>;
}
