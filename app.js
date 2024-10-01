

let btn1 = document.querySelector(".btn1");
let url1 = "https://dog.ceo/api/breeds/image/random";




async function getimg() {
  
  try {
    let res = await axios.get(url1);
     return res.data.message ;
  }
  catch(e) {
    console.log(e);
  }

}




btn1.addEventListener("click" , async()=> {
 let link = await getimg();
 let img = document.querySelector(".result1");
 img.setAttribute("src" , link);
 console.log(link);
});



