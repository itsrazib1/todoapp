import TodoList from '../Todo/TodoList';
import "./Main.css"

const Main = () => {
    return (
        <div className='full-body mx-auto sm:px-48  px-10  items-center justify-around '>
            <div>
                <h1 className='text-center title-name pt-10 '>Todo List</h1>
                <div className='header-underline '></div>
                <div className='pt-10 rounded-none'>
                <TodoList />
                </div>
            </div>
            <div></div>
        </div>
    );
};

export default Main;