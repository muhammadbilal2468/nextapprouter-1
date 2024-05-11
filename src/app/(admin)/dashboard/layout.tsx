export default function Layout({
  children,
  products,
  analytics,
  payments,
}: {
  children: React.ReactNode;
  products: React.ReactNode;
  analytics: React.ReactNode;
  payments: React.ReactNode;
}) {
  return (
    <div className="p-5">
      <div className="">{children}</div>
      <div className="flex gap-5 mt-5 justify-center items-center">
        {products}
        {analytics}
      </div>
      {payments}
    </div>
  );
}
