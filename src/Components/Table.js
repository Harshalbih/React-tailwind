import React from 'react'

function Table({data, config}) {
    const renderedRows = data.map((fruit)=>{
        return(
            <tr key={fruit.name} className='border-b'>
                <td className='p-3'>{fruit.name}</td>
                <td className='p-3'>
                    <div className={`p-3 m-2 ${fruit.color}`}></div>
                </td>
                <td className='p-3'>{fruit.score}</td>
            </tr>
        )
    });

    const renderedconfig = config.map((prop)=>{
        return(
            <th>{prop.label}</th>
        )
    })
  return (
        <table className='table-auto border-spacing-2'>
            <thead>
                <tr className='border-b-2'> {renderedconfig}</tr>
            </thead>
            <tbody>
                 {renderedRows}
            </tbody>
        </table>
  )
}

export default Table