import { EnsureLightMode } from './ensure-light.client';

export default async function Layout({
  params,
  children,
}: LayoutProps<'/[lang]'>) {
  return (
    <>
      <EnsureLightMode />
      {children}
    </>
  );
}
