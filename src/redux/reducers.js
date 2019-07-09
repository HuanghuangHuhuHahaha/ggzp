import { XXXX,YYYY } from './action-types'

const initState = 0

function fn (pre = initState, action) {
    switch (action.type) {
        case XXXX:
            return pre + action.data
        case YYYY:
            return pre - action.data
        default:
            return pre
    }
}

export default fn