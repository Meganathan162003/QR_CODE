import { useState } from "react"

export const QRcode = () => {
 const[img,setimg]= useState("");
 const [load,setload]=useState(false);
 const [qr,qrdata]=useState("");

  async function Generateqr(){
    setload(true)

    try {
      const url = `https://api.qrserver.com/v1/create-qr-code/?size=150*150&data=${encodeURIComponent(qr)}`;
      setimg(url)
      
    } catch (error) {
      console.log("The error is :" ,error);
    }
    finally{
      setload(false)
    }
  }

 const  download = () =>{
   fetch(img)
   .then((response)=>response.blob())
   .then((blob)=>{
      const link = document.createElement("a")
      link.href=URL.createObjectURL(blob);
      link.download="url.png"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
   })
   .catch((error)=>{
    console.error("error in download".error);
   });
  
  }
  return (
    <div className="app-container">
      <h1>QR Code Generator</h1>
      {load &&  <p>Please Wait......</p>}
      {img && <img src={img} alt="" className="img" />}
      <div>

      <label htmlFor="dataInput" className="input-label" >Enter the QRcode data:</label>
      <input type="text"
      id="dataIuput" 
      placeholder="Enter the data"
      value={qr}
      onChange={(e)=>qrdata(e.target.value)}
      />

      <div className="btn">
      <button className="btn1" onClick={()=>Generateqr()}>Generate QR Code</button>
      <button className="btn2" onClick={()=>download()}>Download QR Code</button>
      </div>
      </div>
       <p>Designed by Meganathan</p>
    </div>
  )
}
