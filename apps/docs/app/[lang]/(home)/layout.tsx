export default async function Layout({
  params,
  children,
}: LayoutProps<'/[lang]'>) {
  return <>{children}</>;
}
