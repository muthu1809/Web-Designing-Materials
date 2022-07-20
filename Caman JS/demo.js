function demo() {
  const canvas = document.getElementById('canvas');

  if (canvas.getContext) {
     const ctx = canvas.getContext('2d');

    let img = new Image(); 
    let fileName = ''; 


  
    const downloadButton = document.getElementById('download-btn');
  const uploadButton = document.getElementById('upload-file');
const removeButton = document.getElementById('remove-btn');


    // To Do Filters
    // Add Filters
    document.addEventListener('click', (event) => {  
    if(event.target.classList.contains('filter-btn'))
    {
    if(event.target.classList.contains('increase_bright'))
        {
        Caman('#canvas',img, function() {
    this.brightness(5).render(); 
    });
        }
    else if(event.target.classList.contains('decrease_bright'))
        {
        Caman('#canvas',img, function() {
    this.brightness(-5).render(); 
    });
        }
     else if(event.target.classList.contains('increase_contrast'))
        {
        Caman('#canvas',img, function() {
    this.contrast(5).render(); 
    });
        }
       else if(event.target.classList.contains('decrease_contrast'))
        {
        Caman('#canvas',img, function() {
    this.contrast(-5).render(); 
    });
        }
 else if(event.target.classList.contains('increase_saturation'))
        {
        Caman('#canvas',img, function() {
    this.saturation(5).render(); 
    });
        }
       else if(event.target.classList.contains('decrease_saturation'))
        {
        Caman('#canvas',img, function() {
    this.saturation(-5).render(); 
    });
        }
      else if(event.target.classList.contains('vintage'))
        {
        Caman('#canvas',img, function() {
    this.vintage().render(); 
    });
        }
     else if(event.target.classList.contains('lomo'))
        {
        Caman('#canvas',img, function() {
    this.lomo().render(); 
    });
        }

    }

    });
    // Filter part over
//  remove filters
removeButton.addEventListener('click', event => {
        Caman('#canvas',img, function() {
    this.revert(); 
        }); 

    });


    // Upload File 
    uploadButton.addEventListener('change', (e) => {
    // Get file 
    const file = document.getElementById('upload-file').files[0];
  
    
    //Init FileReader
    const reader = new FileReader(); 
    if(file){
        fileName = file.name; 
        alert(fileName)
        // Read Data
        reader.readAsDataURL(file);

    }
// Add Image to Canvas
    reader.addEventListener('load', () => {
    // Create img
    img = new Image(); 
    // Set src
    img.src = reader.result; 
    // On Image load, add to canvas
    img.onload = function() {       
    canvas.width = img.width; 
    canvas.height = img.height; 
    ctx.drawImage(img,0, 0,img.width, img.height); 
    canvas.removeAttribute('data-caman-id');
    }
    }, false);
    }); 

//Download button
downloadButton.addEventListener('click', event => {
      const fileExtension = fileName.slice(-4); 
    //  new file name
    let newFileName; 
    // check image type
    if(fileExtension == '.jpg' || fileExtension == '.png' )
    {
    newFileName = fileName.substring(0, fileName.length-4) + 'edited.jpg';
    }
    // Call Download
    download(canvas, newFileName); 
// Download Function
    function download(canvas, filename) 
        {
        let event; 
        const link = document.createElement('a'); 
        
        // Set props
        link.download = filename
        link.href = canvas.toDataURL('image/jpeg', 0.8);
            // New mouse event
        event = new MouseEvent('click'); 
        // Dispatch Event
        link.dispatchEvent(event);
         }

    });

}
   
}
