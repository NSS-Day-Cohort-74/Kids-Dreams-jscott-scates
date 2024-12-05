import { getCelebrities } from "./database.js"

const celebrities = getCelebrities()

document.addEventListener(
    "click",
    (celebrityClickEvent) => {
        const celebrityClicked = celebrityClickEvent.target
        const celebrityClickedId = celebrityClicked.dataset.id

        if(celebrityClicked.dataset.type === "celebrity"){
            for (const celebrity of celebrities) {
                if(parseInt(celebrityClickedId) === celebrity.id){
                    window.alert(`${celebrity.name} is a ${celebrity.sport} star.`)
                }
            }
        }
    }
)

export const Celebrities = () => {
    let html = "<ol>"

    for (const celebrity of celebrities) {
        html += `<li 
                    data-id="${celebrity.id}" 
                    data-type="celebrity"
                    data-sport="${celebrity.sport}"
                    id="star--${celebrity.id}">
                        ${celebrity.name}
                </li>`
    }

    html += "</ol>"
    return html
}
