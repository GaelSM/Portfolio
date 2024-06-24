const actualYear = new Date().getFullYear()

export default function Footer() {
  return (
    <footer>
      <div>
        <p> {actualYear} </p>
      </div>
    </footer>
  )
}