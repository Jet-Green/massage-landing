import { defineStore } from "pinia"

// interfaces
import type { Massage } from "../types/massage.interface"


export const useMassage = defineStore('massage', () => {
  let massages = ref<Massage[]>([
    {
      _id: '0',
      image: "https://yogaperm.ru/wp-content/uploads/yogaterapiya-v-permi.jpg",
      description: "Самый обычный массаж",
      name: "Обычный массаж",
      effect: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolore sint sed voluptate, natus\n            impedit ullam eveniet voluptatibus consequuntur nobis illo optio, quos autem nemo modi. Dolores expedita\n            natus vitae!",
      result: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolore sint sed voluptate, natus\n            impedit ullam eveniet voluptatibus consequuntur nobis illo optio, quos autem nemo modi. Dolores expedita\n            natus vitae!",
      contraindications: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolore sint sed voluptate, natus\n            impedit ullam eveniet voluptatibus consequuntur nobis illo optio, quos autem nemo modi. Dolores expedita\n            natus vitae!",
      indications: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolore sint sed voluptate, natus\n            impedit ullam eveniet voluptatibus consequuntur nobis illo optio, quos autem nemo modi. Dolores expedita\n            natus vitae!"
    }
  ])

  async function getAll() {
    let res: any = await useApiFetch("/massage/all", { method: "GET" })
    massages.value = res.data.value;
    
    return res.data.value
  }

  return {
    // functions
    getAll,
    // variables
    massages
  }
})