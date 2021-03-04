import request from 'superagent';


const URL = 'http://localhost:3000';

export async function signUpUser(email, password) {
    const response = await request
        .post(`${URL}/auth/signup`)
        .send({ email, password })

    return response.body;
}

export async function loginUser(email, password) {
    const response = await request
        .post(`${URL}/auth/signin`)
        .send({ email, password })

    return response.body;
}

export async function getTodos(token) {
    const response = await request
        .get(`${URL}/api/todos`)
        .set('Authorization', token)

    return response.body;
}

export async function addTodo(todo, token) {
    const response = await request
        .post(`${URL}/api/todos`)
        .set('Authorization', token)
        .send({
            todo: todo,
            completed: false
        })

    return response.body;
}


export async function completeTodo(todoId, token, todo) {
    const response = await request
        .put(`${URL}/api/todos/${todoId}`)
        .set('Authorization', token)
        .send({
            todo: todo,
            completed: true
        })

    return response.body;
}