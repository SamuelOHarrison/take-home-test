import { Injectable } from '@nestjs/common';
import data from '../data.json'
import { getFormattedCatsString } from './utils/stringFormattingUtils';


@Injectable()
export class AppService {
  
  getHello(): string {
    return 'Hello World!?';
  }

  getNextDelivery(userId: string): NextDelivery {
    const userData: User | undefined = data.find(user => user.id === userId)
    if (!userData) { throw new Error("No user data") }

    const catsFormatted = getFormattedCatsString(userData.cats)
    const title = `Your next delivery for ${catsFormatted}`
    const message = `Hey ${userData.firstName}! In two days' time, we'll be charging you for your next order for ${catsFormatted}'s fresh food.`

    const pouchSizeToPriceMap: Record<string, number> = {
      "A": 55.50,
      "B": 59.50,
      "C": 62.75,
      "D": 66.00,
      "E": 69.00,
      "F": 71.25,
    }
    let totalPrice = 0
    userData.cats.forEach(cat => {
      if (cat.subscriptionActive) {
        totalPrice += pouchSizeToPriceMap[cat.pouchSize]
      }
    });
    const freeGift = totalPrice > 120 ? true : false
    
    return { title: title, message: message, totalPrice: Number(totalPrice.toFixed(2)), freeGift: freeGift }
  }
}
