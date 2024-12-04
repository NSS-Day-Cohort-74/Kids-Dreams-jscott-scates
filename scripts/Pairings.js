import { getChildren, getCelebrities } from "./database.js"

const kids = getChildren()
const celebrities = getCelebrities()

const findCelebrityMatch = (kidObject, celebrityArray) => {
    let kidCelebrity = null

    for (const celebrity of celebrityArray) {
        if(parseInt(celebrity.id) === kidObject.celebrityId){
            kidCelebrity = celebrity.name
        }
    }

    return kidCelebrity
}

const findCelebrityMatchSport = (kidObject, celebrityArray) => {
    let kidCelebritySport = null
   
    for (const celebrity of celebrityArray) {
        if(parseInt(celebrity.id) === kidObject.celebrityId){
            kidCelebritySport = celebrity.sport
        }
    }

    return kidCelebritySport
}

export const Pairings = () => {
    let html = ""
    html = "<ul>"

    for (const kid of kids) {
       
        const kidsStar = findCelebrityMatch(kid, celebrities)
        const kidsStarSport = findCelebrityMatchSport(kid, celebrities)
        html += `
            <li>
                ${kid.name} will be making memories with 
                ${kidsStar}, a 
                ${kidsStarSport} star, by 
                ${kid.wish}
            </li>
        `
    }

    html += "</ul>"

    return html
}

