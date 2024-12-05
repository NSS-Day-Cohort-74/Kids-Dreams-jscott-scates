import { getChildren } from "./database.js"

const children = getChildren()

document.addEventListener(
    "click",
    (kidClickEvent) => {
        const kidClicked = kidClickEvent.target
        const clickedKidId = kidClicked.dataset.id

        if(kidClicked.dataset.type === "child"){
            for (const child of children) {
                if(parseInt(clickedKidId) === child.id){
                   window.alert(`${child.name}'s wish is to ${child.wish}`) 
                }
            }
        }
    }
)


export const Kids = () => {
    let html = "<ol>"

    for (const child of children) {
        html += `<li 
                    data-id="${child.id}" 
                    data-type="child" 
                    data-wish="${child.wish}">
                        ${child.name}
                </li>`
    }

    html += "</ol>"
    return html
}

