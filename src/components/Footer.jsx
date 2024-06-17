const actualYear = new Date().getFullYear()

export default function Footer() {
  return (
    <footer>
      <div>
        <p> &copy; {actualYear} </p>
      </div>
    </footer>
  )
}