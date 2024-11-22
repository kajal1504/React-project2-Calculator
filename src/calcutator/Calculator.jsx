import React, { useState } from 'react'

function Calculator() {
    const[value, setValue]=useState('')
  return (
    <>
    <div className='container w-[100wh] h-[100vh] flex justify-center items-center bg-gradient-to-r from-sky-500 to-indigo-500'>
        <div className='calculator bg-slate-700 p-5 m-5 rounded-xl mx-auto '>
            <form action="">
                <div><input type="text" value={value} placeholder='0' className='rounded-lg w-full p-2'></input></div>

                <div className='grid grid-cols-4 gap-2 p-2 cursor-pointer'>
                    <input type="button" value="AC" onClick={e=>setValue('')} 
                    className='bg-slate-700  text-white text-lg shadow-md shadow-yellow-50  hover:bg-blue-900'></input>
                    <input type="button" value="DC"onClick={e=>setValue(value.slice(0,-1))} 
                    className='bg-slate-700  text-white text-lg shadow-md shadow-yellow-50  hover:bg-blue-900'></input>
                    <input type="button" value="."  onClick={e=>setValue(value+e.target.value)} 
                    className='bg-slate-700  text-white text-lg shadow-md shadow-yellow-50  hover:bg-blue-900'></input>
                    <input type="button" value="/" onClick={e=>setValue(value+e.target.value)} 
                    className='bg-slate-700  text-white text-lg shadow-md shadow-yellow-50  hover:bg-blue-900'></input>

                    <input type="button" value="7" onClick={e=>setValue(value+e.target.value)}  
                    className='bg-slate-700  text-white text-lg shadow-md shadow-yellow-50  hover:bg-blue-900'></input>
                    <input type="button" value="8"onClick={e=>setValue(value+e.target.value)}  
                    className='bg-slate-700  text-white text-lg shadow-md shadow-yellow-50  hover:bg-blue-900'></input>
                    <input type="button" value="9" onClick={e=>setValue(value+e.target.value)} 
                    className='bg-slate-700  text-white text-lg shadow-md shadow-yellow-50  hover:bg-blue-900'></input>
                    <input type="button" value="*" onClick={e=>setValue(value+e.target.value)} 
                    className='bg-slate-700  text-white text-lg shadow-md shadow-yellow-50  hover:bg-blue-900'></input>

                    <input type="button" value="4" onClick={e=>setValue(value+e.target.value)}  
                    className='bg-slate-700  text-white text-lg shadow-md shadow-yellow-50  hover:bg-blue-900'></input>
                    <input type="button" value="5"onClick={e=>setValue(value+e.target.value)}  
                    className='bg-slate-700  text-white text-lg shadow-md shadow-yellow-50  hover:bg-blue-900'></input>
                    <input type="button" value="6" onClick={e=>setValue(value+e.target.value)} 
                    className='bg-slate-700  text-white text-lg shadow-md shadow-yellow-50  hover:bg-blue-900'></input>
                    <input type="button" value="+" onClick={e=>setValue(value+e.target.value)} 
                    className='bg-slate-700  text-white text-lg shadow-md shadow-yellow-50  hover:bg-blue-900'></input>

                    <input type="button" value="1" onClick={e=>setValue(value+e.target.value)}  
                    className='bg-slate-700  text-white text-lg shadow-md shadow-yellow-50  hover:bg-blue-900'></input>
                    <input type="button" value="2"onClick={e=>setValue(value+e.target.value)}  
                    className='bg-slate-700  text-white text-lg shadow-md shadow-yellow-50  hover:bg-blue-900'></input>
                    <input type="button" value="3" onClick={e=>setValue(value+e.target.value)} 
                    className='bg-slate-700  text-white text-lg shadow-md shadow-yellow-50  hover:bg-blue-900'></input>
                    <input type="button" value="-" onClick={e=>setValue(value+e.target.value)} 
                    className='bg-slate-700  text-white text-lg shadow-md shadow-yellow-50  hover:bg-blue-900'></input>

                    <input type="button" value="0" onClick={e=>setValue(value+e.target.value)}  
                    className='bg-slate-700  text-white text-lg shadow-md shadow-yellow-50  hover:bg-blue-900'></input>
                    <input type="button" value="00"onClick={e=>setValue(value+e.target.value)}  
                    className='bg-slate-700  text-white text-lg shadow-md shadow-yellow-50  hover:bg-blue-900'></input>
                    <input type="button" value="=" onClick={e=>setValue(eval(value))} 
                    className='bg-slate-700  text-white text-lg shadow-md shadow-yellow-50  hover:bg-blue-900'></input>
                    



                </div>
               

            </form>
        </div>
    </div>
    </>
  )
}

export default Calculator