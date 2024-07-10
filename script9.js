/*ДЗ*/

// class Marker {
//     constructor(color, ink_percent) {
//         this.color = color
//         this.ink_percent = ink_percent
//     }

//     print(text) {
//         let result_text = ''
//         for (let char of text) {
//             if (this.ink_percent <= 0) {
//                 document.write(`<span">Закончился маркер</span>`)
//                 break
//             }
//             if ([" ", "\t", "\n"].includes(char)) {
//                 result_text += char
//             }
//             else {
//                 this.ink_percent -= 0.5
//                 result_text += char
                
//             }
//         }
//          document.write(`<p style="color:${this.color}">${result_text}</p>`)
//     }
// }

// class Reloadedmarker extends Marker {
//     reload(value) {
//         this.ink_percent += value
//     }
// }

// marker = new Marker("red", 10)
// marker.print("Я хочу спать !!!+++6665165165161651")
// reload = new Reloadedmarker
// reload.reload(5)