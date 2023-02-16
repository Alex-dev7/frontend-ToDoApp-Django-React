import url from "./url";
import { redirect } from "react-router-dom";


export  async function CreateAction({request}){
    // get the form data
    const formData = await request.formData()

    // construct new todo
    const newTodo = {
       subject: formData.get("subject"),
       details: formData.get("details")

    }

    // request to create route in the backend
    await fetch(url, {
        method: 'post',
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(newTodo)
    })
    return redirect('/')
}

// update data ----------------------------------------------------------------

export  async function UpdateAction({request, params}){
    // get the form data
    const formData = await request.formData()

    // construct new todo
    const updateTodo = {
       subject: formData.get("subject"),
       details: formData.get("details")

    }

    // request to create route in the backend
    await fetch(url + params.id + '/', {
        method: 'put',
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(updateTodo)
    })
    return redirect('/')
}

export async function DeleteAction({params}) {
    //get the id
    const id = params.id

    // send request to delete
    await fetch(url + id + '/', {
        method: "delete"
    })
    // redirect
    return redirect('/')

}