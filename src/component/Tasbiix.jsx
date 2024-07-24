import {useState} from "react";
function Tasbiix(){


    const [count,setCounter] = useState(0)

return <div className="text-center mt-[20%]">
<div className="text-6xl font-bold mb-4">{count}</div>
<div>
<button  onClick={() => setCounter (count+1)} className="text-white w-[130px] bg-blue-600 hover:bg-slate-50 py-1 px-1 mr-2 rounded-[15px] border-2 border-blue-950 hover:text-blue-950">count</button>

<button onClick={() => setCounter (0)} className="text-white w-[130px] bg-blue-600  hover:bg-slate-50 py-1 px-1 mr-2 rounded-[15px] border-2 border-blue-950 hover:text-slate-800">Reset</button>
</div>
</div>
}
export default Tasbiix