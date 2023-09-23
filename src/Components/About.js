import React from 'react'

const About=(props)=> {
    const mystyle={
        color: props.mode==='dark'?'white':'black',
        backgroundColor: props.mode==='dark'?'#364a69':'white'
    }
    return (
    <>
    <div className="conatiner my-5" >
        <div className="accordion " id="accordionExample" >
             <h2 className="mx-2" style={{color: props.mode==='dark'?'white':'black'}}>About Textutills</h2>
            <div className="accordion-item" style={{backgroundColor: props.mode==='dark'?'black':'white'}}>
                <h2 className="accordion-header " style={{backgroundColor:'black'}}>
                <button className="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>Analyze your text</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={mystyle}>
                    Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or remove extra spaces  etc.
                </div>
                </div>
            </div>
            <div className="accordion-item" >
                <h2 className="accordion-header" >
                <button className="accordion-button collapsed" style={mystyle}type="button"  data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Free to use</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={mystyle}>
                    Textutils is a free character counter tool that provides instant character count & word count statistics for a given text. Textutils eports the number of words and character. Thus it is suitable for writing text with word/ character limit.
                </div>
                </div>
        </div>
        <div className="accordion-item" >
            <h2 className="accordion-header" >
            <button className="accordion-button collapsed" style={mystyle} type="button"  data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>Browser Compatible</strong>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={mystyle}>
                This word counter software works in any web browers such as Chrome, Firebox, Internet Explorer, Safari, Opera. It suits to count characters in facebook , blog, books, excel document, pdf document, essays, etc.
            </div>
            </div>
        </div>
        </div>
    </div>
    </>
  )
}
export default About;