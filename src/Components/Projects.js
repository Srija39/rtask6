
function projects()
{
  
    
    const handleClick1=()=>{
      window.location.href='https://srija39.github.io/react_task_5/';
     }
     const handleClick2=()=>{
      window.location.href='https://srija39.github.io/rt2/';
     }
     const hanldeClick3=()=>{
      window.location.href='https://srija39.github.io/JS-Task-8/';
     }
     const handleClick4=()=>{
      window.location.href='https://srija39.github.io/react_task_3/';
     }
    
    
    return(
    
              <div class="container">
                <center class="hovertext" data-hover="lets take a diversion and visit my projects">My Projects</center>
  <pre></pre><pre></pre><pre></pre><pre></pre><pre></pre>
 
  <div class="row  row-cols-md-4 g-4">
          <div class="col ">
              <div class="card h-100">
                  <img src="https://collegevidya.com/tool/images/age.png" class="card-img-top" />
                  <div class="card-body">
                    <h3 class="card-title">Age Calculator</h3>
                    <p class="card-text">This Project helps in finding your age.</p>
                    <button onClick={handleClick1}>How Old Am I?</button>
                  </div>
                </div>
          </div>
          <div class="col ">
              <div class="card h-100">
                  <img src="data:image/jpeg;base64,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" class="card-img-top" />
                  <div class="card-body">
                    <h3 class="card-title">Calculator</h3>
                    <p class="card-text">This helps performing basic calculations</p>
                    <button onClick={handleClick2}>Play With Numbers</button>
                  </div>
                </div>
          </div>
          <div class="col">
              <div class="card h-100">
                  <img src="data:image/jpeg;base64,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" class="card-img-top"/>
                  <div class="card-body">
                    <h3 class="card-title">Train</h3>
                    <p class="card-text">On clicking the start the button the image starts moving </p>
                    <button onClick={hanldeClick3}>See the Magic</button>
                  </div>
                </div>
          </div>
          <div class="col ">
              <div class="card h-100">
                  <img src="https://addons.mozilla.org/user-media/previews/full/223/223386.png?modified=1625032655" class="card-img-top" />
                    <h3 class="card-title">ColorPicker</h3>
                    <p class="card-text">Pick a Color and know its rgb format </p>
                    <button onClick={handleClick4}>See the Magic</button>
                  </div>
                </div>
          </div></div>
      
  
  )
}
export default projects;