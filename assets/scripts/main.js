document.addEventListener("DOMContentLoaded", () => {
    console.log("Disagned by Vkdik");
    let slider = document.querySelector("#reviews div.reviews")
    let btns = document.querySelector("#reviews div.btns-container")
    let leftBtn = document.querySelector("#reviews > div.btns-container > button.left")
    let rightBtn = document.querySelector("#reviews > div.btns-container > button.right")
    if (Number(slider.getBoundingClientRect().width) == Number(slider.scrollWidth)) {
        btns.style.display = "none"
    }

    const disabledBtns = () => {
        if (slider.scrollLeft > 0) {
            leftBtn.disabled = false
        } else {
            leftBtn.disabled = true
        }

        if (slider.scrollLeft == slider.scrollWidth - slider.getBoundingClientRect().width) {
            rightBtn.disabled = true
        } else {
            rightBtn.disabled = false
        }
    }

    disabledBtns()

    document.querySelectorAll("#reviews div.btns-container button").forEach(btn => {
        btn.addEventListener('click', () => {
            disabledBtns()
            if (btn == leftBtn) {
                slider.scrollBy(Number(slider.scrollWidth / -3), 0)
            }
            if (btn == rightBtn) {
                slider.scrollBy(Number(slider.scrollWidth / 3), 0)
            }
        })


    });
})