import React from "react"

const Background = () => {
  return (
    <div className="background">
      <div className="backgroundImg">
        <img className="img-fluid" src="/door.jpg" alt="" />
        <div className="napis">
          <h1>
            Twoje no<dfn>we</dfn>
          </h1>
          <h1 className="text-right">
            me<dfn>ble</dfn>
          </h1>
        </div>
        <div className="chair">
          <img className="img-fluid" src="/chair.webp" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Background
