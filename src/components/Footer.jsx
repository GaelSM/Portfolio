export default function Footer() {
  const actualYear = new Date().getUTCFullYear()
  return (
    <footer>
      <div>
        <p> &copy; {actualYear} </p>
      </div>
    </footer>
  )
}