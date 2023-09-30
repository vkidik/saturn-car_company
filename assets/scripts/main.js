const findIndex = (a, o) => {
    let index = 0
    for (let i = 0; i < a.length; i++) {
        if (a[i] == o) {
            index = i
            return index
        }
    }
}

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

    let imgArray = []
    document.querySelectorAll(".bus .img").forEach(container => {
        container.addEventListener('click', () => {
            document.querySelector("#dialog-img-container").style.display = "flex"
        })
        imgArray = [
            "assets/pictures/photo_5460695921093366719_y.jpg",
            "assets/pictures/photo_5460695921093366719_y.jpg",
            "assets/pictures/photo_5460695921093366719_y.jpg",
            "assets/pictures/photo_5460695921093366719_y.jpg",
            "assets/pictures/photo_5460695921093366719_y.jpg"
        ]

        document.querySelectorAll('#dialog-img-container .img-container img').forEach(img => {
            img.remove()
        })

        for (let i = 0; i < imgArray.length; i++) {
            let img = document.createElement('img')
            img.src = imgArray[i]
            document.querySelector('#dialog-img-container .img-container').appendChild(img)
        }

        document.querySelector("#dialog-img-container .main").src = document.querySelector("#dialog-img-container .img-container img:nth-child(1)").src
        document.querySelectorAll("#dialog-img-container .img-container img").forEach(img => {
            img.style.filter = "brightness(0.3)"
        });
        document.querySelector("#dialog-img-container .img-container img:nth-child(1)").style.filter = "brightness(1)"
        document.querySelector("#dialog-img-container .img-container img:nth-child(1)").setAttribute("disabled", '')
    });

    document.querySelectorAll('#dialog-img-container .img-container img').forEach(img => {
        img.addEventListener('click', () => {
            img.style.filter = "brightness(0.3)"

            document.querySelectorAll("#dialog-img-container .img-container img[disabled]").forEach(disabledImg => {
                disabledImg.style.filter = "brightness(0.3)"
                disabledImg.removeAttribute('disabled')
            });

            document.querySelector("#dialog-img-container .main").src = img.src
            img.style.filter = "brightness(1)"
            img.setAttribute("disabled", '')
        })
    });

    document.querySelector("#dialog-img-container .background").addEventListener('click', () => {
        document.querySelector("#dialog-img-container").style.display = "none"
        document.querySelectorAll('#dialog-img-container .img-container img').forEach(img => {
            img.remove()
            document.querySelector("#dialog-img-container .main").src = ''
        })
    })
})