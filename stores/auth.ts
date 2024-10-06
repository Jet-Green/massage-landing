import { defineStore } from "pinia"
import AuthAPI from "../api/AuthApi"

import type { User } from "../types/user.interface"
import { ref } from "vue"

export const useAuth = defineStore('auth', () => {
  let user = ref<User | null>()
  let redirectTo = ref<string>('/')
  let managingRestObject = ref<any>()

  async function registration(data: any): Promise<boolean> {
    try {
      const response = await AuthAPI.registration(data)
      if (response.data.value) {
        user.value = response.data.value.user
      }
      return true
    } catch {
      return false
    }
  }

  async function login(email: string, password: string) {
    try {
      const response = await AuthAPI.login(email, password)
      if (response.data.value) {
        user.value = response.data.value.user
      }
      return response
    } catch {
      return false
    }
  }

  async function checkAuth(): Promise<boolean> {
    try {
      const response = await AuthAPI.refresh()

      if (response.data.value?._id) {
        user.value = response.data.value
        return true
      } else {
        return false
      }
    } catch (error) {
      await logout()
      return false
    }
  }

  async function logout(): Promise<any> {
    try {
      let res = await AuthAPI.logout()

      user.value = null

      localStorage.removeItem('newUser')
      return res
    } catch { }
  }

  async function updateUser(new_user: any) {
    try {
      user.value = (await AuthAPI.updateUser(new_user)).data
    } catch { }
  }
  async function setManager(user_email: string, chosen_rest: string) {
    try {
      console.log( user_email, chosen_rest)
      user.value = (await AuthAPI.setManager(user_email, chosen_rest)).data
    } catch { }
  }


  async function deleteManager(manager_email: string, restId: string) {
  
    try {
      console.log( manager_email, restId)
      user.value = (await AuthAPI.deleteManager(manager_email, restId)).data
    } catch { }
  }

  return {
    // variables
    user, managingRestObject,
    // functions
    registration, login, redirectTo, checkAuth, logout,
    updateUser, setManager, deleteManager
  }
})
