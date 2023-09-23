import React,{useState} from 'react'

export default function TextForm(props) {
    const handleclear=()=>{
           if(text.length<=0)
               props.showalert("Something write in the Box","danger")
          else
               props.showalert("Clear text","success")
               setText('')
    }
    const handleCopy=()=>{
        var tex=document.getElementById("mybox");
        tex.select();
        navigator.clipboard.writeText(tex.value);
        if(text.length<=0)
         props.showalert("Something write in the Box","danger")
        else
         props.showalert("Copy text","success")
        
 }
    const handleupclick=()=>{
        setText(text.toUpperCase());
        if(text.length<=0)
         props.showalert("Something write in the Box","danger")
        else
        props.showalert("chnage to UpperCase","success")
        
        
    }
    const handlespace=()=>{
        let newtext=text.split(/[  ]+/);
        setText(newtext.join(" "));
        if(text.length<=0)
         props.showalert("Something write in the Box","danger")
        else
        props.showalert("remove space","success")
        
    }
    const handlelrclick=()=>{
        setText(text.toLowerCase());
        if(text.length<=0)
        props.showalert("Something write in the Box","danger")
       else
       props.showalert("Change to LowerCase","success")
    }
    const handleonchange=(event)=>{
        setText(event.target.value);
    }
    const[text,setText]=useState('');
  return (
    <>
    <div className={`container my-2 text-${props.mode==='dark'?'white':'black'}`}  >
        <h2>{props.heading}</h2>
        <div className="mb-3 my-2">
            <textarea className={`form-control  text-${props.mode==='dark'?'white':'black'} my-3 bg-${props.mode==='dark'?'secondary':'light'}` }   value={text} onChange={handleonchange} id="mybox" rows="8"></textarea>
        </div>
            <button className="btn btn-primary mx-1  my-1" onClick={handlelrclick}>ConvertoLowerCase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleupclick}>ConvertoUpperCase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleclear}>Clear text</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy text</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handlespace}>remove Extra space</button>

        </div>
        <div className={`container my-3 text-${props.mode==='dark'?'white':'dark'}`}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((a)=>{return a.length!==0}).length} words and {text.length} characters</p>
        <p>Total time requirde to read {0.008 * text.split(/\s+/).filter((a)=>{return a.length!==0}).length} min</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter somehting in above box for preview it"}</p>
    </div>
    </>
  )
}
