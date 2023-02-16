import { useLoaderData, Form } from 'react-router-dom';
import Post from '../components/Post';

const Index = (props) => {

    const todos = useLoaderData()

    return <>
    <div style={{textAlign: 'center', width: '50%', margin: '0 auto'}}>
        <h3>Create a Todo</h3>
        <Form action='/create' method='post'>
            <input type='text' name='subject' placeholder='subject' />
            <input type='text' name='details' placeholder='details' />
            <button>Create</button>
        </Form>
    </div>
        {todos.map((post) => <Post key={post.id} post={post} />)}
    </>
  
}
  export default Index