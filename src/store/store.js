// import { create } from 'zustand'

// const useTaskStore = create((set) => {
//  return {
//     task:null,
//     setTask: (newTask) => set({task : newTask})
//  }
// });

// export {useTaskStore};

import {create} from 'zustand';

const useTaskStore = create((set)=>{
    return{
        task:"",
        setTask: (newTask) => set({task: newTask})
    }
})

export {useTaskStore};