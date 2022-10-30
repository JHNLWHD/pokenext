import Navbar from './Navbar'

export default function Layout({
  children,
}: {
  children: JSX.Element
}): JSX.Element {
  return (
    <div className="mx-10">
      <Navbar />
      <main>{children}</main>
    </div>
  )
}
