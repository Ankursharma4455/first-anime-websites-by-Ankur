let shopBox1 = document.querySelector(".shop-box-1");
let shopBox2 = document.querySelector(".shop-box-2");
let shopBox3 = document.querySelector(".shop-box-3");
let shopBox4 = document.querySelector(".shop-box-4");
let shopBox5 = document.querySelector(".shop-box-5");
let shopBox6 = document.querySelector(".shop-box-6");
let shopGirl = document.querySelector(".shop-girl");
let heroSection = document.querySelector(".herosection");
let shops = document.querySelector(".shops");
let shopsBoxes = document.querySelector(".shops-boxes");
let shopsBoxes2 = document.querySelector(".shops-boxes-2");
let body = document.querySelector("body");

//Add-click-btn-1 styleing//

shopBox1.addEventListener("click", function(){
  heroSection.style.display="none";
  shopsBoxes.style.display="none";
  shops.style.display="none";
  shopsBoxes2.style.display="none";
  shopGirl.style.display="none";


  //main div styleing

  let mainDiv = document.createElement("div");
  body.appendChild(mainDiv);

  mainDiv.style.height="500px";
  mainDiv.style.width="100%";
  mainDiv.style.marginTop="100px";
  mainDiv.style.display="flex";
  mainDiv.style.position="fixed";

  // div-left styleing//

  let divLeft = document.createElement("div");
  mainDiv.appendChild(divLeft);

  divLeft.style.height = "450px";
  divLeft.style.width = "50%";


  //div-left-image-styleing//
  
  let divLeftimage = document.createElement("div");
  divLeft.appendChild(divLeftimage);

  divLeftimage.style.height="450px";
  divLeftimage.style.width="300px";
  // divLeftimage.style.backgroundColor="white"//
  divLeftimage.style.marginLeft="230px";
  divLeftimage.style.backgroundImage="url('https://pngimg.com/uploads/anime_girl/anime_girl_PNG46.png')";
  divLeftimage.style.backgroundSize="cover";
  divLeftimage.style.borderRadius="20px";

  //div-right styleing//

  let divRight = document.createElement("div");
  mainDiv.appendChild(divRight);

  divRight.style.height = "450px";
  divRight.style.width = "50%";
  // divRight.style.marginTop="60px";
  

  //div-right-text-styleing//

 let divRightText = document.createElement("div");
 divRight.appendChild(divRightText);

  divRightText.style.height = "450px";
  divRightText.style.width = "400px";
  
  // divRightText.style.backgroundColor="white"
  divRightText.style.borderRadius="20px";

  // create-h1//

  let h1 = document.createElement("h1");
  divRightText.appendChild(h1);

  h1.innerText="Shoply offer : Trending shop Now"
  // h1.style.color="black";
  h1.style.fontSize="30px";
  h1.style.paddingTop="30px";


  //create-h3 styleing //

  let h3 = document.createElement("h3")
  divRightText.appendChild(h3);

  h3.innerText="Special Price";
  h3.style.fontSize="28px";
  // h3.style.color="black";
  h3.style.fontWeight="400";
  h3.style.paddingTop="10px";

  //create-h2 styleing //

  let h2 = document.createElement("h2")
  divRightText.appendChild(h2);

  h2.innerText="$11";
  h2.style.fontSize="28px";
  // h2.style.color="black";
  h2.style.fontWeight="400";
  h2.style.paddingTop="10px";

  // create-p-styling //

  let p = document.createElement("p")
  divRightText.appendChild(p);

  p.innerText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus facere necessitatibus ducimus, minima tenetur, cumque consectetur neque eveniet quasi voluptate, saepe placeat doloribus provident nobis eaque! Architecto quod et necessitatibus!...";
  p.style.fontSize="20px";
  // p.style.color="black";
  p.style.fontWeight="200";
  p.style.paddingTop="10px";

  //create-btn-styleing //

  let button = document.createElement("button");
  divRightText.appendChild(button);

  button.innerText="Back";
  button.style.height="48px";
  button.style.width="170px";
  button.style.fontSize="20px";
  button.style.fontWeight="800";
  button.style.marginTop="30px";
  button.style.borderRadius="15px";
  button.style.backgroundColor="sienna";
  button.style.color="white";
  button.style.border="none";
  button.style.cursor="pointer";
  

  //create-btn-2 styliing //


  let button2 = document.createElement("button");
  divRightText.appendChild(button2);

  button2.innerText="Add Card";
  button2.style.height="48px";
  button2.style.width="170px";
  button2.style.fontSize="20px";
  button2.style.fontWeight="800";
  button2.style.marginTop="30px";
  button2.style.borderRadius="15px";
  button2.style.backgroundColor="sienna";
  button2.style.color="white";
  button2.style.border="none";
  button2.style.marginLeft="15px";
  button2.style.border="none";
  button2.style.cursor="pointer";

  button.addEventListener("click", function(){
    heroSection.style.display="flex";
    shops.style.display="flex";
    shopsBoxes.style.display="flex";
    shopGirl.style.display="flex";
    shopsBoxes2.style.display="flex";
    mainDiv.style.display="none";
  })

})

//Add-click-btn-2 style//

shopBox2.addEventListener("click", function(){
  heroSection.style.display="none";
  shops.style.display="none";
  shopsBoxes.style.display="none";
  shopsBoxes2.style.display="none"
  shopGirl.style.display="none";
  

  //main div styleing//
  let mainDiv = document.createElement("div");
  body.appendChild(mainDiv);

  mainDiv.style.height="450px";
  mainDiv.style.width="100%";
  mainDiv.style.marginTop="130px";
  mainDiv.style.display="flex";
  mainDiv.style.position="fixed";

  // div-left styleing//

  let divLeft = document.createElement("div");
  mainDiv.appendChild(divLeft);

  divLeft.style.height = "450px";
  divLeft.style.width = "50%";

  //div-left-image-styleing//
  
  let divLeftimage = document.createElement("div");
  divLeft.appendChild(divLeftimage);

  divLeftimage.style.height="450px";
  divLeftimage.style.width="300px"
  // divLeftimage.style.backgroundColor="white"
  // divLeftimage.style.marginTop="25px";
  divLeftimage.style.marginLeft="230px"
  divLeftimage.style.backgroundImage="url('https://pngimg.com/d/anime_girl_PNG31.png')";
  divLeftimage.style.backgroundSize="cover";
  divLeftimage.style.borderRadius="20px"

  //div-right styleing//

  let divRight = document.createElement("div");
  mainDiv.appendChild(divRight);

  divRight.style.height = "450px";
  divRight.style.width = "50%";

  //div-right-text-styleing//

 let divRightText = document.createElement("div");
 divRight.appendChild(divRightText);

  divRightText.style.height = "450px";
  divRightText.style.width = "400px";
  // divRightText.style.backgroundColor="white"
  // divRightText.style.marginTop="25px";
  divRightText.style.borderRadius="20px";

  // create-h1//

  let h1 = document.createElement("h1");
  divRightText.appendChild(h1);

  h1.innerText="Shoply offer : Trending shop Now"
  // h1.style.color="black";
  h1.style.fontSize="30px";
  h1.style.paddingTop="10px";


  //create-h3 styleing //

  let h3 = document.createElement("h3")
  divRightText.appendChild(h3);

  h3.innerText="Special Price";
  h3.style.fontSize="28px";
  // h3.style.color="black";
  h3.style.fontWeight="400";
  h3.style.paddingTop="10px";

  //create-h2 styleing //

  let h2 = document.createElement("h2")
  divRightText.appendChild(h2);

  h2.innerText="$11";
  h2.style.fontSize="28px";
  // h2.style.color="black";
  h2.style.fontWeight="400";
  h2.style.paddingTop="10px";

  // create-p-styling //

  let p = document.createElement("p")
  divRightText.appendChild(p);

  p.innerText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus facere necessitatibus ducimus, minima tenetur, cumque consectetur neque eveniet quasi voluptate, saepe placeat doloribus provident nobis eaque! Architecto quod et necessitatibus!...";
  p.style.fontSize="20px";
  // p.style.color="black";
  p.style.fontWeight="200";
  p.style.paddingTop="10px";

  //create-btn-styleing //

  let button = document.createElement("button");
  divRightText.appendChild(button);

  button.innerText="Back";
  button.style.height="48px";
  button.style.width="170px";
  button.style.fontSize="20px";
  button.style.fontWeight="800";
  button.style.marginTop="30px";
  button.style.borderRadius="15px";
  button.style.backgroundColor="sienna";
  button.style.color="white";
  button.style.border="none";
  button.style.cursor="pointer";
  

  //create-btn-2 styliing //


  let button2 = document.createElement("button");
  divRightText.appendChild(button2);

  button2.innerText="Add Card";
  button2.style.height="48px";
  button2.style.width="170px";
  button2.style.fontSize="20px";
  button2.style.fontWeight="800";
  button2.style.marginTop="30px";
  button2.style.borderRadius="15px";
  button2.style.backgroundColor="sienna";
  button2.style.color="white";
  button2.style.border="none";
  button2.style.marginLeft="15px";
  button2.style.border="none";
  button2.style.cursor="pointer";

  button.addEventListener("click", function(){
    heroSection.style.display="flex";
    shops.style.display="flex";
    shopsBoxes.style.display="flex";
    shopsBoxes2.style.display="flex";
    shopGirl.style.display="flex";
    mainDiv.style.display="none";
    
  })


})

//Add-click-btn-3 styling//

shopBox3.addEventListener("click", function(){
  heroSection.style.display="none";
  shops.style.display="none";
  shopsBoxes.style.display="none";
  shopsBoxes2.style.display="none";
  shopGirl.style.display="none";


  //main div styleing//
  let mainDiv = document.createElement("div");
  body.appendChild(mainDiv);

  mainDiv.style.height="450px";
  mainDiv.style.width="100%";
  mainDiv.style.marginTop="130px";
  mainDiv.style.display="flex";
  mainDiv.style.position="fixed";

  // div-left styleing//

  let divLeft = document.createElement("div");
  mainDiv.appendChild(divLeft);

  divLeft.style.height = "450px";
  divLeft.style.width = "50%";

  //div-left-image-styleing//
  
  let divLeftimage = document.createElement("div");
  divLeft.appendChild(divLeftimage);

  divLeftimage.style.height="450px";
  divLeftimage.style.width="300px"
  // divLeftimage.style.backgroundColor="white"
  divLeftimage.style.marginLeft="230px"
  divLeftimage.style.backgroundImage="url('https://www.pngplay.com/wp-content/uploads/12/Kawaii-Anime-Girl-Transparent-PNG.png')";
  divLeftimage.style.backgroundSize="cover";
  divLeftimage.style.borderRadius="20px"

  //div-right styleing//

  let divRight = document.createElement("div");
  mainDiv.appendChild(divRight);

  divRight.style.height = "450px";
  divRight.style.width = "50%";
  // divRight.style.marginTop="25px"

  //div-right-text-styleing//

 let divRightText = document.createElement("div");
 divRight.appendChild(divRightText);

  divRightText.style.height = "450px";
  divRightText.style.width = "400px";
  // divRightText.style.backgroundColor="white"
  // divRightText.style.marginTop="25px";
  divRightText.style.borderRadius="20px";

  // create-h1//

  let h1 = document.createElement("h1");
  divRightText.appendChild(h1);

  h1.innerText="Shoply offer : Trending shop Now"
  // h1.style.color="black";
  h1.style.fontSize="30px";
  h1.style.paddingTop="10px";


  //create-h3 styleing //

  let h3 = document.createElement("h3")
  divRightText.appendChild(h3);

  h3.innerText="Special Price";
  h3.style.fontSize="28px";
  // h3.style.color="black";
  h3.style.fontWeight="400";
  h3.style.paddingTop="10px";

  //create-h2 styleing //

  let h2 = document.createElement("h2")
  divRightText.appendChild(h2);

  h2.innerText="$11";
  h2.style.fontSize="28px";
  // h2.style.color="black";
  h2.style.fontWeight="400";
  h2.style.paddingTop="10px";

  // create-p-styling //

  let p = document.createElement("p")
  divRightText.appendChild(p);

  p.innerText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus facere necessitatibus ducimus, minima tenetur, cumque consectetur neque eveniet quasi voluptate, saepe placeat doloribus provident nobis eaque! Architecto quod et necessitatibus!...";
  p.style.fontSize="20px";
  // p.style.color="black";
  p.style.fontWeight="200";
  p.style.paddingTop="10px";

  //create-btn-styleing //

  let button = document.createElement("button");
  divRightText.appendChild(button);

  button.innerText="Back";
  button.style.height="48px";
  button.style.width="170px";
  button.style.fontSize="20px";
  button.style.fontWeight="800";
  button.style.marginTop="30px";
  button.style.borderRadius="15px";
  button.style.backgroundColor="sienna";
  button.style.color="white";
  button.style.border="none";
  button.style.cursor="pointer";

  //create-btn-2 styliing //


  let button2 = document.createElement("button");
  divRightText.appendChild(button2);

  button2.innerText="Add Card";
  button2.style.height="48px";
  button2.style.width="170px";
  button2.style.fontSize="20px";
  button2.style.fontWeight="800";
  button2.style.marginTop="30px";
  button2.style.borderRadius="15px";
  button2.style.backgroundColor="sienna";
  button2.style.color="white";
  button2.style.border="none";
  button2.style.marginLeft="15px";
  button2.style.border="none";
  button2.style.cursor="pointer";

  button.addEventListener("click", function(){
    heroSection.style.display="flex";
    shops.style.display="flex";
    shopsBoxes.style.display="flex";
    shopsBoxes2.style.display="flex";
    shopGirl.style.display="flex";
    mainDiv.style.display="none";

  })

})


// Add-click-btn-4 styling//

shopBox4.addEventListener("click", function(){
  heroSection.style.display="none";
  shopsBoxes.style.display="none";
  shops.style.display="none";
  shopsBoxes2.style.display="none";
  shopGirl.style.display="none";


  //main div styleing

  let mainDiv = document.createElement("div");
  body.appendChild(mainDiv);

  mainDiv.style.height="500px";
  mainDiv.style.width="100%";
  mainDiv.style.marginTop="100px";
  mainDiv.style.display="flex";
  mainDiv.style.position="fixed";

  // div-left styleing//

  let divLeft = document.createElement("div");
  mainDiv.appendChild(divLeft);

  divLeft.style.height = "450px";
  divLeft.style.width = "50%";


  //div-left-image-styleing//
  
  let divLeftimage = document.createElement("div");
  divLeft.appendChild(divLeftimage);

  divLeftimage.style.height="450px";
  divLeftimage.style.width="300px";
  // divLeftimage.style.backgroundColor="white"//
  divLeftimage.style.marginLeft="230px";
  divLeftimage.style.backgroundImage="url('https://pngimg.com/uploads/anime_girl/anime_girl_PNG44.png')";
  divLeftimage.style.backgroundSize="cover";
  divLeftimage.style.borderRadius="20px";

  //div-right styleing//

  let divRight = document.createElement("div");
  mainDiv.appendChild(divRight);

  divRight.style.height = "450px";
  divRight.style.width = "50%";
  // divRight.style.marginTop="60px";
  

  //div-right-text-styleing//

 let divRightText = document.createElement("div");
 divRight.appendChild(divRightText);

  divRightText.style.height = "450px";
  divRightText.style.width = "400px";
  
  // divRightText.style.backgroundColor="white"
  divRightText.style.borderRadius="20px";

  // create-h1//

  let h1 = document.createElement("h1");
  divRightText.appendChild(h1);

  h1.innerText="Shoply offer : Trending shop Now"
  // h1.style.color="black";
  h1.style.fontSize="30px";
  h1.style.paddingTop="30px";


  //create-h3 styleing //

  let h3 = document.createElement("h3")
  divRightText.appendChild(h3);

  h3.innerText="Special Price";
  h3.style.fontSize="28px";
  // h3.style.color="black";
  h3.style.fontWeight="400";
  h3.style.paddingTop="10px";

  //create-h2 styleing //

  let h2 = document.createElement("h2")
  divRightText.appendChild(h2);

  h2.innerText="$11";
  h2.style.fontSize="28px";
  // h2.style.color="black";
  h2.style.fontWeight="400";
  h2.style.paddingTop="10px";

  // create-p-styling //

  let p = document.createElement("p")
  divRightText.appendChild(p);

  p.innerText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus facere necessitatibus ducimus, minima tenetur, cumque consectetur neque eveniet quasi voluptate, saepe placeat doloribus provident nobis eaque! Architecto quod et necessitatibus!...";
  p.style.fontSize="20px";
  // p.style.color="black";
  p.style.fontWeight="200";
  p.style.paddingTop="10px";

  //create-btn-styleing //

  let button = document.createElement("button");
  divRightText.appendChild(button);

  button.innerText="Back";
  button.style.height="48px";
  button.style.width="170px";
  button.style.fontSize="20px";
  button.style.fontWeight="800";
  button.style.marginTop="30px";
  button.style.borderRadius="15px";
  button.style.backgroundColor="sienna";
  button.style.color="white";
  button.style.border="none";
  button.style.cursor="pointer";
  

  //create-btn-2 styliing //


  let button2 = document.createElement("button");
  divRightText.appendChild(button2);

  button2.innerText="Add Card";
  button2.style.height="48px";
  button2.style.width="170px";
  button2.style.fontSize="20px";
  button2.style.fontWeight="800";
  button2.style.marginTop="30px";
  button2.style.borderRadius="15px";
  button2.style.backgroundColor="sienna";
  button2.style.color="white";
  button2.style.border="none";
  button2.style.marginLeft="15px";
  button2.style.border="none";
  button2.style.cursor="pointer";

  button.addEventListener("click", function(){
    heroSection.style.display="flex";
    shops.style.display="flex";
    shopsBoxes.style.display="flex";
    shopGirl.style.display="flex";
    shopsBoxes2.style.display="flex";
    mainDiv.style.display="none";
  })

})

//Add-click-btn-5 styling

shopBox5.addEventListener("click", function(){
  heroSection.style.display="none";
  shopsBoxes.style.display="none";
  shops.style.display="none";
  shopsBoxes2.style.display="none";
  shopGirl.style.display="none";


  //main div styleing

  let mainDiv = document.createElement("div");
  body.appendChild(mainDiv);

  mainDiv.style.height="500px";
  mainDiv.style.width="100%";
  mainDiv.style.marginTop="100px";
  mainDiv.style.display="flex";
  mainDiv.style.position="fixed";

  // div-left styleing//

  let divLeft = document.createElement("div");
  mainDiv.appendChild(divLeft);

  divLeft.style.height = "450px";
  divLeft.style.width = "50%";


  //div-left-image-styleing//
  
  let divLeftimage = document.createElement("div");
  divLeft.appendChild(divLeftimage);

  divLeftimage.style.height="450px";
  divLeftimage.style.width="300px";
  // divLeftimage.style.backgroundColor="white"//
  divLeftimage.style.marginLeft="230px";
  divLeftimage.style.backgroundImage="url('https://pngimg.com/uploads/anime_girl/anime_girl_PNG37.png')";
  divLeftimage.style.backgroundSize="cover";
  divLeftimage.style.borderRadius="20px";

  //div-right styleing//

  let divRight = document.createElement("div");
  mainDiv.appendChild(divRight);

  divRight.style.height = "450px";
  divRight.style.width = "50%";
  // divRight.style.marginTop="60px";
  

  //div-right-text-styleing//

 let divRightText = document.createElement("div");
 divRight.appendChild(divRightText);

  divRightText.style.height = "450px";
  divRightText.style.width = "400px";
  
  // divRightText.style.backgroundColor="white"
  divRightText.style.borderRadius="20px";

  // create-h1//

  let h1 = document.createElement("h1");
  divRightText.appendChild(h1);

  h1.innerText="Shoply offer : Trending shop Now"
  // h1.style.color="black";
  h1.style.fontSize="30px";
  h1.style.paddingTop="30px";


  //create-h3 styleing //

  let h3 = document.createElement("h3")
  divRightText.appendChild(h3);

  h3.innerText="Special Price";
  h3.style.fontSize="28px";
  // h3.style.color="black";
  h3.style.fontWeight="400";
  h3.style.paddingTop="10px";

  //create-h2 styleing //

  let h2 = document.createElement("h2")
  divRightText.appendChild(h2);

  h2.innerText="$11";
  h2.style.fontSize="28px";
  // h2.style.color="black";
  h2.style.fontWeight="400";
  h2.style.paddingTop="10px";

  // create-p-styling //

  let p = document.createElement("p")
  divRightText.appendChild(p);

  p.innerText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus facere necessitatibus ducimus, minima tenetur, cumque consectetur neque eveniet quasi voluptate, saepe placeat doloribus provident nobis eaque! Architecto quod et necessitatibus!...";
  p.style.fontSize="20px";
  // p.style.color="black";
  p.style.fontWeight="200";
  p.style.paddingTop="10px";

  //create-btn-styleing //

  let button = document.createElement("button");
  divRightText.appendChild(button);

  button.innerText="Back";
  button.style.height="48px";
  button.style.width="170px";
  button.style.fontSize="20px";
  button.style.fontWeight="800";
  button.style.marginTop="30px";
  button.style.borderRadius="15px";
  button.style.backgroundColor="sienna";
  button.style.color="white";
  button.style.border="none";
  button.style.cursor="pointer";
  

  //create-btn-2 styliing //


  let button2 = document.createElement("button");
  divRightText.appendChild(button2);

  button2.innerText="Add Card";
  button2.style.height="48px";
  button2.style.width="170px";
  button2.style.fontSize="20px";
  button2.style.fontWeight="800";
  button2.style.marginTop="30px";
  button2.style.borderRadius="15px";
  button2.style.backgroundColor="sienna";
  button2.style.color="white";
  button2.style.border="none";
  button2.style.marginLeft="15px";
  button2.style.border="none";
  button2.style.cursor="pointer";

  button.addEventListener("click", function(){
    heroSection.style.display="flex";
    shops.style.display="flex";
    shopsBoxes.style.display="flex";
    shopGirl.style.display="flex";
    shopsBoxes2.style.display="flex";
    mainDiv.style.display="none";
  })

})

// Add-click-btn-6 styling // 

shopBox6.addEventListener("click", function(){
  heroSection.style.display="none";
  shopsBoxes.style.display="none";
  shops.style.display="none";
  shopsBoxes2.style.display="none";
  shopGirl.style.display="none";


  //main div styleing

  let mainDiv = document.createElement("div");
  body.appendChild(mainDiv);

  mainDiv.style.height="500px";
  mainDiv.style.width="100%";
  mainDiv.style.marginTop="100px";
  mainDiv.style.display="flex";
  mainDiv.style.position="fixed";

  // div-left styleing//

  let divLeft = document.createElement("div");
  mainDiv.appendChild(divLeft);

  divLeft.style.height = "450px";
  divLeft.style.width = "50%";


  //div-left-image-styleing//
  
  let divLeftimage = document.createElement("div");
  divLeft.appendChild(divLeftimage);

  divLeftimage.style.height="450px";
  divLeftimage.style.width="300px";
  // divLeftimage.style.backgroundColor="white"//
  divLeftimage.style.marginLeft="230px";
  divLeftimage.style.backgroundImage="url('https://pngimg.com/uploads/anime_girl/anime_girl_PNG96.png')";
  divLeftimage.style.backgroundSize="cover";
  divLeftimage.style.borderRadius="20px";

  //div-right styleing//

  let divRight = document.createElement("div");
  mainDiv.appendChild(divRight);

  divRight.style.height = "450px";
  divRight.style.width = "50%";
  // divRight.style.marginTop="60px";
  

  //div-right-text-styleing//

 let divRightText = document.createElement("div");
 divRight.appendChild(divRightText);

  divRightText.style.height = "450px";
  divRightText.style.width = "400px";
  
  // divRightText.style.backgroundColor="white"
  divRightText.style.borderRadius="20px";

  // create-h1//

  let h1 = document.createElement("h1");
  divRightText.appendChild(h1);

  h1.innerText="Shoply offer : Trending shop Now"
  // h1.style.color="black";
  h1.style.fontSize="30px";
  h1.style.paddingTop="30px";


  //create-h3 styleing //

  let h3 = document.createElement("h3")
  divRightText.appendChild(h3);

  h3.innerText="Special Price";
  h3.style.fontSize="28px";
  // h3.style.color="black";
  h3.style.fontWeight="400";
  h3.style.paddingTop="10px";

  //create-h2 styleing //

  let h2 = document.createElement("h2")
  divRightText.appendChild(h2);

  h2.innerText="$11";
  h2.style.fontSize="28px";
  // h2.style.color="black";
  h2.style.fontWeight="400";
  h2.style.paddingTop="10px";

  // create-p-styling //

  let p = document.createElement("p")
  divRightText.appendChild(p);

  p.innerText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus facere necessitatibus ducimus, minima tenetur, cumque consectetur neque eveniet quasi voluptate, saepe placeat doloribus provident nobis eaque! Architecto quod et necessitatibus!...";
  p.style.fontSize="20px";
  // p.style.color="black";
  p.style.fontWeight="200";
  p.style.paddingTop="10px";

  //create-btn-styleing //

  let button = document.createElement("button");
  divRightText.appendChild(button);

  button.innerText="Back";
  button.style.height="48px";
  button.style.width="170px";
  button.style.fontSize="20px";
  button.style.fontWeight="800";
  button.style.marginTop="30px";
  button.style.borderRadius="15px";
  button.style.backgroundColor="sienna";
  button.style.color="white";
  button.style.border="none";
  button.style.cursor="pointer";
  

  //create-btn-2 styliing //


  let button2 = document.createElement("button");
  divRightText.appendChild(button2);

  button2.innerText="Add Card";
  button2.style.height="48px";
  button2.style.width="170px";
  button2.style.fontSize="20px";
  button2.style.fontWeight="800";
  button2.style.marginTop="30px";
  button2.style.borderRadius="15px";
  button2.style.backgroundColor="sienna";
  button2.style.color="white";
  button2.style.border="none";
  button2.style.marginLeft="15px";
  button2.style.border="none";
  button2.style.cursor="pointer";

  button.addEventListener("click", function(){
    heroSection.style.display="flex";
    shops.style.display="flex";
    shopsBoxes.style.display="flex";
    shopGirl.style.display="flex";
    shopsBoxes2.style.display="flex";
    mainDiv.style.display="none";
  })

})