import React, { useEffect, useState } from 'react'

const PasswordGenerator = () => {
  const [length, setlength] = useState(6)
const [Password, setPassword] = useState()
const [NumberAllow, setNumberAllow] = useState(false)
const [SpecialChar, setCharAllow] = useState(false)

let password = ""

let strPassword = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

if(NumberAllow===true){
  strPassword+="013456789"
}
if(SpecialChar===true){
  strPassword+="!@#$%^&*()-=_+[]{}|;':"
}

for (let index = 1; index <= length; index++) {
 var randomStrNum=Math.floor(Math.random()*strPassword.length +1)
password +=  strPassword.charAt(randomStrNum) 

  
}
useEffect(() => {
  
setPassword(password)
  
}, [length,NumberAllow,SpecialChar])





  return (
    <div  className='h-screen w-full bg-black text-[white] flex justify-center' >
      <div className='mt-[5vw]'>
<h1 style={{fontFamily:"arial"}} className='text-[2.5vw] text-center'>Password Generator</h1>
<div className=' p-[1vw]  w-[27vw] bg-slate-500 rounded-md'>
  <div className=' flex justify-between'>

 
<input value={Password} readOnly placeholder='Password' type="text" className="
p-1 outline-none rounded text-black " />

<h3  onClick={() => {
    navigator.clipboard.writeText(Password);
    alert('Password copied to clipboard!');
  }} className=' cursor-pointer p-[1vw] bg-[#0044ff] rounded'>Copy</h3>
</div>
<div className='flex items-center gap-[1vw]  '>
<div className='flex items-center gap-1 '>
<input 

value={length}
  onChange={(e)=> setlength(e.target.value) } className='w-[7vw]' min={6} max={80} type="range" />
<label  className='text-[1.3vw]'>{length}</label>
</div>
<div className='flex items-center  gap-1'>
<input onChange={()=>setNumberAllow((prev)=>(!prev))}  type="checkbox" />
<label>number</label>
</div>
<div className='flex items-center gap-1'>
<input onChange={()=>setCharAllow((prev)=>(!prev))}  type="checkbox" />
<label>character</label>
</div>
</div>

</div>
      </div>
    </div>
  )
}

export default PasswordGenerator

