import React from 'react'

export default function Loading() {
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'30vh',backgroundColor:'#0000000a'}}>
        <div className="spinner-border" role="status">
        </div>
    </div>
  )
}
