import Navbar from './Navbar'

export default function Layout({
  children,
}: {
  children: JSX.Element
}): JSX.Element {
  return (
    <div>
      <Navbar />
      <main className="mx-10">{children}</main>
    </div>
  )
}
