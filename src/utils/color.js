let color = '#'
const number = '0123456789ABCDEF'

export default function colors(){
    for (var i = 0; i < 6; i++){
        color += number[(Math.floor(Math.random() * 16))]
    }
    const visualColor = color;
    console.log(color);
    color = '#'
    
    return visualColor
}