const INITIAL_STATE = {
    description: 'Ler Livro',
    list: [{
        _id: 1,
        description: 'Pagar fatura do cartao',
        done: true
    }, {
        _id: 2,
        description: 'Reuniao com a equipe as 10h',
        done: false
    }, {
        _id: 3,
        description: 'Consulta medica depois do almoco',
        done: false
    }]
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.payload }
        default:
            return state
    }
}