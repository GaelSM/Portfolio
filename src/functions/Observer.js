export default function observer(){
  const sections = document.querySelectorAll(".observe")

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("show")
        observer.unobserve(entry.target)
      }
    })
  }, {
    threshold: 0.5
  })

  sections.forEach(section => observer.observe(section))
}