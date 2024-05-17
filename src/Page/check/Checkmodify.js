// import React,{useState} from "react";


// export default function Checkmodify({index,important, content, description, dday}) {
//     const [isactive,setIsactive]=useState(0)
//     const [modifyinput,setModifyinput] =useState({ 
//         key:"",
//         important: important,
//         content: content,
//         description: description,
//         dday: dday
//     });
//     function handleInputChange(field, e) {
//         modifyinput((prevState) => ({
//             ...prevState,
//             [field]: e.target.value,
//         }
//         ));}
//     function IntoModify({index,onShow}){
//         return(
//             index===1? 
//             <div>    
//             <label>important:</label>
//               <input
//               type="number"
//               value={modifyinput.important}
//               placeholder="1~10"
//               onChange={(e) => handleInputChange("important", e)}/>
//           </div>
//           :index===2?
//           <div>
//             <label>content:</label>
//             <input
//                 type="text"
//                 value={modifyinput.content}
//                 placeholder="React coding 1hour"
//                 onChange={(e) => handleInputChange("content", e)}/>
//             </div>
//             :index===3?                
//             <div>
//             <label>description:</label>
//                     <input
//                         type="text"
//                         value={modifyinput.description}
//                         placeholder="description"
//                         onChange={(e) => handleInputChange("description", e)}
//                     />
//                     </div>
//                     :index===4?                      
//                     <div>
//                     <label>D-day:</label>
//                     <input
//                         type="number"
//                         value={modifyinput.dday}
//                         placeholder="number"
//                         onChange={(e) => handleInputChange("dday", e)}/>
//                         </div>:
//                 <button onClick={onShow}>
//                   Modify
//                 </button>
//         )
//     }

//     return (
//         <>
//             <IntoModify></IntoModify>
//         </>
//       );
// }
