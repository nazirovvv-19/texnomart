import { create } from 'zustand'

const countStore=()=>{
    count:[]
}
const useMyStore=create(countStore)

export default useMyStore
