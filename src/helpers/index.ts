import { supplier } from "@/enums";

export const selectCardLogo = (supplierText:string, width:number) => {
  let cardLogo = '';
  switch (supplierText) {
    case supplier.PLAYTECH:
      if (width >= 1024) {
        cardLogo = '/assets/playtech-lg.svg';
      }
      if (width < 1024 && width >= 768) {
        cardLogo = '/assets/playtech-md.svg';
      }
      break;

    case supplier.EVOPLAY:
      if (width >= 1024) {
        cardLogo = '/assets/evoplay-lg.svg';
      }
      if (width < 1024 && width >= 768) {
        cardLogo = '/assets/evoplay-md.svg';
      }
      if (width < 768) {
        cardLogo = '/assets/evoplay-sm.svg';
      }
      break;

    case supplier.PRAGMATIC:
      if (width >= 1024) {
        cardLogo = '/assets/pragmatic-lg.svg';
      }
      if (width < 1024 && width >= 768) {
        cardLogo = '/assets/pragmatic-md.svg';
      }
      break;

    case supplier.SPINOMENAL:
      if (width >= 1024) {
        cardLogo = '/assets/spinomenal-lg.svg';
      }
      if (width < 1024 && width >= 768) {
        cardLogo = '/assets/spinomenal-md.svg';
      }
      if (width <= 768) {
        cardLogo = '/assets/spinomenal-sm.svg';
      }
      break;

    default:
      break;
  }
  return cardLogo;
}