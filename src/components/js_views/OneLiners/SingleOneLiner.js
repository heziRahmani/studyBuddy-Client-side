import React from 'react'

export default function SingleOneLiner({data}) {
  return (
   <li>
                    <div className='oneLine_header_box'>
                        <h3 className='oneLine_header'>{data.Name}</h3>
                      
                    </div>
                    <div className='oneLine_description'>
                        <p>{data.Explanation}</p>
                    </div>
                    <div className='oneLine_code_box'>{data.Code}</div>
                </li>
  )
}
