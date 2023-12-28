
const adviceId = document.querySelector("[data-advice-id]")
const advicetxt = document.querySelector("[data-advice-text]")
const url = 'https://api.adviceslip.com/advice'
const btn = document.querySelector("[data-fetch]")
async function getAdvice() {
    const load = document.querySelector("[data-loader]")
    load.style.display = 'inline-block'
    advicetxt.style.display = 'none'
    const res = await fetch(url)
    const { slip: {id,advice}} = await res.json()
    load.style.display = 'none'
    advicetxt.style.display = 'block'
    adviceId.innerHTML = id
    advicetxt.innerHTML = '"'+ advice + '"'
}

getAdvice()


btn.addEventListener("click", getAdvice);