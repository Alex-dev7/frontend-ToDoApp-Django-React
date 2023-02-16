import { Link, useLoaderData, Form } from "react-router-dom";



const Show = (props) => {

    const post = useLoaderData()

    // styles
    const div = {
        textAlign: 'center',
        border: '3px solid green',
        width: '80%',
        margin: '30px auto'
    }

    return <div style={div}>
        <h1>
            {post.subject}
        </h1>
        <h2>
            {post.details}
        </h2>
        <div  style={{textAlign: 'center', width: '50%', margin: '0 auto'}}>
        <h3>Update this Todo</h3>
        <Form action={`/update/${post.id}`} method='post'>
            <input type='text' name='subject' placeholder='subject'  defaultValue={post.subject}/>
            <input type='text' name='details' placeholder='details' defaultValue={post.deta
            }/>
            <button>Update</button>
        </Form>
        <Form action={`/delete/${post.id}`} method='post'>
            <button>Delete todo</button>
        </Form>
        </div>
        <Link to="/" >
            <button>Back</button>
        </Link>
    </div>
  };
  
  export default Show