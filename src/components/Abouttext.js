import React from "react";

export default function About(props){
  return (
    <>
      <div className="container p-3 border border-dark rounded" style={{color:props.mode==='light'?'black':'white',background:props.mode==='light'?'white':'black'}} > 
        <h1 className="my-3">About Us</h1>
        <div className="accordion " id="accordionExample">
          <div className="accordion-item rounded" >
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={{color:props.mode==='light'?'black':'white',background:props.mode==='light'?'white':'black'}}
              >
                Analyze Your Text
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show rounded"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={{color:props.mode==='light'?'black':'white',background:props.mode==='light'?'white':'black'}}>
                <strong>This is the first item's accordion body.</strong> By default, it is visible until the collapse plugin applies the necessary classes for styling each element. These classes manage the appearance and control the showing and hiding through CSS transitions. You can customize this with your own CSS or by overriding the default variables. It's important to note that nearly any HTML content can be placed within the <code>.accordion-body</code>, although the transition may have some limitations.
              </div>
            </div>
          </div>
          <div className="accordion-item rounded" >
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={{color:props.mode==='light'?'black':'white',background:props.mode==='light'?'white':'black'}}
              >
                Free to Use 
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse rounded"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={{color:props.mode==='light'?'black':'white',background:props.mode==='light'?'white':'black'}}>
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item rounded">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={{color:props.mode==='light'?'black':'white',background:props.mode==='light'?'white':'black'}}
              >
                Browser Compatible
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse rounded"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={{color:props.mode==='light'?'black':'white',background:props.mode==='light'?'white':'black'}}>
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
