import TodoRepository from "../repository/todo.js";

class Todo {

    static async create (description) 
    {
        return await TodoRepository.create(description);
    }
    
    static async get (id) 
    {
        return await TodoRepository.get(id);
    }

    static async getAll () 
    {
        return await TodoRepository.getAll();
    }

    static async update (values) 
    {
        return await TodoRepository.update(values);
    }

    static async delete (id) 
    {
        return await TodoRepository.delete(id);
    }

    // create POST /todo { description: string }
    // get get /todo/1 - 1 это id
    // getAll get /todo
    // update put /todo/1 - 1 это id { description: string }
    // delete delete /todo/1 - 1 это id
}

export default Todo