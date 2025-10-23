/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}
// module.exports = {
//   theme: {
//     extend: {
//       animation: {
//         'fadeUp': 'fadeUp 1s both view() entry 0% cover 40%',
//       },
//       keyframes: {
//         fadeUp: {
//           from: {
//             opacity: '0',
//             clipPath: 'inset(100% 100% 0 0)'
//           },
//           to: {
//             opacity: '1',
//             clipPath: 'inset(0 0 0 0)'
//           }
//         }
//       }
//     }
//   }
// }
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      animation: {
        'fadeUp': 'fadeUp 1s both view()',
        'rightt': 'rightt 1s both linear view()',
        'autoShow': 'text-appear 0.5s both view()' , 
        'lineUp': ' lineup both view() entry 0% cover 40% liner'
      },
      keyframes: {
        fadeUp: {
          'from': {
            opacity: '0',
            clipPath: 'inset(100% 100% 0 0)',
          },
          'to': {
            opacity: '1',
            clipPath: 'inset(0 0 0 0)',
          }
        },
        rightt: {
          'from': {
            opacity: '0',
            transform: 'translateX(-200px)',
            clipPath: 'inset(100% 100% 0 0)',
          },
          'to': {
            opacity: '1',
            transform: 'translateX(0)',
            clipPath: 'inset(0 0 0 0)',
          }
        },
        autoShow: {
          'from' : {
            opacity: '0',
            transform: 'transform: translateY(100px)',
          },
          'to' :{
            opacity : '1' ,
            transform: 'translateY(-25px)'
          }
        },
        lineup: {
          'from' : {
            width: '0',
            clipPath: 'inset(100% 100% 0 0)'
          },
          'to' : {
            width: '100%',
            clipPath: 'inset(0 0 0 0)'
          }
        }
      }
    }
  }
}