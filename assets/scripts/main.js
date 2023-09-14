document.addEventListener("DOMContentLoaded", () => {
    console.log("Disagned by Vkdik");
    let slider = document.querySelector("#reviews > div > div.reviews")
    let btns = document.querySelector("#reviews > div > div.btns-container")
    let leftBtn = document.querySelector("#reviews > div > div.btns-container > div > button.left")
    let rightBtn = document.querySelector("#reviews > div > div.btns-container > div > button.right")
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

    document.querySelectorAll("#reviews > div > div.btns-container button").forEach(btn => {
        btn.addEventListener('click', () => {
            disabledBtns()
            if (btn == leftBtn) {
                console.log(Number(slider.scrollWidth / -3), 0);
                slider.scrollBy(Number(slider.scrollWidth / -3), 0)
            }
            if (btn == rightBtn) {
                console.log("right");
                slider.scrollBy(Number(slider.scrollWidth / 3), 0)
            }
        })


    });

    console.log(slider);
    console.log(btns);
})