const background = document.querySelector('.background')
const textLoading = document.querySelector('.text')

let loading = 0

let interval = setInterval(setBlur, 30)

function setBlur() {
  loading++

  if (loading > 99) {
    clearInterval(interval)
  }
  
  textLoading.innerHTML = `${loading}%`
  textLoading.style.opacity = scale(loading, 0, 100, 1, 0)
  background.style.filter = `blur(${scale(loading, 0, 100, 50, 0)}px)`
}

const scale = (num, inMin, inMax, outMin, outMax) => {
  return ((num - inMin) / (inMax - inMin) ) * (outMax - outMin) + outMin
}