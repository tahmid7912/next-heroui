'use server'
import { revalidatePath } from 'next/cache';
import { PostTask } from './tasks';
import { redirect } from 'next/navigation';

export  const  createTask = async (formData) =>{
'use server'

// const name = formData.get('title');

const newTask = Object.fromEntries(formData.entries());

console.log('New Task:', newTask);


const res = await PostTask(newTask);
if(res.ok){
    revalidatePath('/tasks');
}
return res;


}

export const newTask = async (formData)=>{

 const newTask = Object.fromEntries(formData.entries());

console.log('New Task:', newTask);


const res = await PostTask(newTask);
if(res.ok){
    revalidatePath('/tasks'); 
    redirect('/tasks');
}
    return res;

}