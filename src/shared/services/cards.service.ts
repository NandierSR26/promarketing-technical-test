import { ICardData } from "@/shared/interfaces";
import { notFound } from "next/navigation";

export const getCardsData = async(): Promise<ICardData[]> => {
  try {
    const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`).then(res => res.json())
    return data
  } catch (error) {
    console.log(error)
    notFound();
  }

}