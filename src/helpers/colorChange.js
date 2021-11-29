
export default function colorChange(text,color) {
    switch (text ){
        case 'Regular':
            color = { background: 'yellow' }
            break;
        case 'Urgent':
            color = { background: 'red' }
            break;
        case 'Trivial':
            color = { background: 'blue' }
            break;

        default:
            break;
    }
    return color;
}