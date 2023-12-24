import { ICardData } from "@/interfaces";
import { notFound } from "next/navigation";

export const getCardsData = async(): Promise<ICardData[]> => {
  try {
    const data = await fetch('https://demo8881327.mockable.io/promarketing').then(res => res.json())
    return data
  } catch (error) {
    console.log(error)
    notFound();
  }

}