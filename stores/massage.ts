import { defineStore } from "pinia"

// interfaces
import type { Massage } from "../types/massage.interface"


export const useMassage = defineStore('massage', () => {
  let massages = ref<Massage[]>([])

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