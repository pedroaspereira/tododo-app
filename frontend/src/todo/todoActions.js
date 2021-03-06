import axios from 'axios'

const URL = 'http://localhost:3003/api/todos'

export const changeDescription = event => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

export const search = () => {
    const request = axio.get(`${URL}?sort=-createedAt`)
    return {
        type: 'TODO_SEARCHED',
        payload: request.data
    }
}