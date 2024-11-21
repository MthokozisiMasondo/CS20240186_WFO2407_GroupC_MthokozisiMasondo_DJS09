const returningUserDisplay = document.querySelector('#returning-user')
const userNameDisplay = document.querySelector('#user')
const reviewTotalDisplay = document.querySelector('#reviews')

import { LoyaltyUser } from "./enums.js"

export function showReviewTotal(value: number, reviewer: string, isLoyalty: LoyaltyUser) {
    const iconDisplay = LoyaltyUser.GOLD_USER ? "⭐" : ""
    reviewTotalDisplay.innerHTML = value.toString() + makeMultiple(value) + "| last reviewed by " + reviewer + " " + iconDisplay
    reviewer + " " + iconDisplay
}

export function populateUser(isReturning: boolean, userName: string) {
    if(isReturning) {
        returningUserDisplay.innerHTML = "back"       
     }
        userNameDisplay.innerHTML = userName
    }

export function showDetails(value: boolean | Permissions, element : HTMLDivElement, price: number) {
    if (value) {
        const priceDisplay = document.createElement('div')
        priceDisplay.innerHTML = price.toString() + '/night'
        element.appendChild(priceDisplay)
     }
 }
    
export function makeMultiple(value: number) : string {
    if (value > 1 || value == 0 ) {
        return 's'
    } else return ''
    }