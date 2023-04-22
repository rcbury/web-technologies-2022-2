import api from "../services/api.js";

const TodoRepository = {

    async create (description) {
        return await api('/todo', {
            method: 'POST',
            body: JSON.stringify({description})
        });
    },

    async get (id) {
        return await api(`/todo/${id}`);
    },

    async getAll () {
        return await api(`/todo`);
    },

    async update (values) {
        return await api(`/todo/${values.id}`, {
            method: 'PUT',
            body: JSON.stringify(values)
        });
    },

    async delete (id) {
        return await api(`/todo/${id}`, {
            method: 'DELETE'
        });
    }

    
    // create POST /todo { description: string }
    // get get /todo/1 - 1 это id
    // getAll get /todo
    // update put /todo/1 - 1 это id { description: string }
    // delete delete /todo/1 - 1 это id
}

export default TodoRepository