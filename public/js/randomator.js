document.addEventListener('DOMContentLoaded', () => {

  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0)

  if ($navbarBurgers.length > 0) {

    $navbarBurgers.forEach(el => {
      el.addEventListener('click', () => {

        const target = el.dataset.target
        const $target = document.getElementById(target)

        el.classList.toggle('is-active')
        $target.classList.toggle('is-active')

      })
    })
  }



  let textWrapper = document.querySelector('.ml9 .letters')
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>")

  anime.timeline({
      loop: false
    })
    .add({
      targets: '.ml9 .letter',
      scale: [0, 1],
      duration: 1500,
      elasticity: 600,
      delay: (el, i) => 45 * (i + 1),
    })
})