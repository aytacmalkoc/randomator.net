import axios from 'axios'

const password = {
    state: {
        type: '',
        encryption: '',
        result: ''
    },
    mutations: {
        createPassword: (state, res) => {
            state.result = res
        }
    },
    getters: {
        getPassword: (state) => {
            return state.result
        }
    },
    actions: {
        createPassword: ({commit}, encryptionType) => {
            axios.post(process.env.VUE_APP_API_URL + 'generate', {
                headers: {
                    'API_KEY': process.env.VUE_APP_API_KEY
                },
                random_type: 'password',
                encryption_type: encryptionType
            }).then(res => {
                commit('createPassword', res.data)
            }).catch(err => {
                console.log(err)
            })
        }
    },
}

export default password