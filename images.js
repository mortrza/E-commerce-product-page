import data  from "./data.js";
const next=document.getElementById('next');
const previous=document.getElementById('previous');
const next1=document.getElementById('next1');
const previous1=document.getElementById('previous1');
const mainImage=document.getElementById('mainImage');
const closeDesktop=document.getElementById("closeDesktop");
const product1Thumbnail=document.getElementById("product-1-thumbnail");
const product2Thumbnail=document.getElementById("product-2-thumbnail");
const product3Thumbnail=document.getElementById("product-3-thumbnail");
const product4Thumbnail=document.getElementById("product-4-thumbnail");
const product1ThumbnailDisplay=document.getElementById("product-1-thumbnail-display");
const product2ThumbnailDisplay=document.getElementById("product-2-thumbnail-display");
const product3ThumbnailDisplay=document.getElementById("product-3-thumbnail-display");
const product4ThumbnailDisplay=document.getElementById("product-4-thumbnail-display");
const large=document.getElementById("large");
const larger=document.getElementById("larger");
const first=document.getElementById("first");
let thumbnailArrayDisplay=[product1ThumbnailDisplay,product2ThumbnailDisplay,product3ThumbnailDisplay,product4ThumbnailDisplay];
let thumbnailArray=[product1Thumbnail,product2Thumbnail,product3Thumbnail,product4Thumbnail];
var mainIdMobile=0;
var mainIdDesktop=0;
var active=0;
function checkCurrentIdMobile(){
    var currentIdMobile=0;
    data.forEach(e=>{
        mainImage.getAttribute("src")==e.mainImage ? currentIdMobile=e.id : null
    })
    return currentIdMobile;
}
function checkCurrentIdDesktop(){
    var currentIdDesktop=0;
    data.forEach(e=>{
        first.getAttribute("src")==e.mainImage ? currentIdDesktop=e.id : null
    })
    return currentIdDesktop;
}
next.onclick=function(){
    mainIdMobile=((checkCurrentIdMobile()==data.length) ? 1 : (checkCurrentIdMobile()+1));
    mainImage.src=data[mainIdMobile-1].mainImage;
}
previous.onclick=function(){
    mainIdMobile=((checkCurrentIdMobile()==1) ? data.length : (checkCurrentIdMobile()-1));
    mainImage.src=data[mainIdMobile-1].mainImage;
}
next1.onclick=function(){
    mainIdDesktop=((checkCurrentIdDesktop()==data.length) ? 1 : (checkCurrentIdDesktop()+1));
    first.src=data[mainIdDesktop-1].mainImage;
    thumbnailChange(thumbnailArrayDisplay[mainIdDesktop-1],thumbnailArrayDisplay);
}
previous1.onclick=function(){
    mainIdDesktop=((checkCurrentIdDesktop()==1) ? data.length : (checkCurrentIdDesktop()-1));
    first.src=data[mainIdDesktop-1].mainImage;
    thumbnailChange(thumbnailArrayDisplay[mainIdDesktop-1],thumbnailArrayDisplay);
}

product1Thumbnail.onclick=function(){
    changeImagesStyle(product1ThumbnailDisplay);
    thumbnail(product1Thumbnail,thumbnailArray);
    active=0;
}
product2Thumbnail.onclick=function(){
    changeImagesStyle(product2ThumbnailDisplay);
    thumbnail(product2Thumbnail,thumbnailArray);
    active=1;
}
product3Thumbnail.onclick=function(){
    changeImagesStyle(product3ThumbnailDisplay);
    thumbnail(product3Thumbnail,thumbnailArray);
    active=2;
    
}
product4Thumbnail.onclick=function(){
    changeImagesStyle(product4ThumbnailDisplay);
    thumbnail(product4Thumbnail,thumbnailArray);
    active=3;
}
product1ThumbnailDisplay.onclick=function(){
    
    thumbnail(product1ThumbnailDisplay,thumbnailArrayDisplay);
    active=0;
}
product2ThumbnailDisplay.onclick=function(){

    thumbnail(product2ThumbnailDisplay,thumbnailArrayDisplay);
    active=1;
}
product3ThumbnailDisplay.onclick=function(){
    
    thumbnail(product3ThumbnailDisplay,thumbnailArrayDisplay);
    active=2;
}
product4ThumbnailDisplay.onclick=function(){
    
    thumbnail(product4ThumbnailDisplay,thumbnailArrayDisplay);
    active=3;
    
}
product1Thumbnail.onmouseover=function(){
    product1Thumbnail.style.opacity="50%" ;
}
product2Thumbnail.onmouseover=function(){
    product2Thumbnail.style.opacity="50%" ;
}
product3Thumbnail.onmouseover=function(){
    product3Thumbnail.style.opacity="50%" ;
}
product4Thumbnail.onmouseover=function(){
    product4Thumbnail.style.opacity="50%" ;
}
product1Thumbnail.onmouseleave=function(){
    active==0 ? product1Thumbnail.style.opacity="50%" :  product1Thumbnail.style.opacity=null ;
}
product2Thumbnail.onmouseleave=function(){
    active==1 ? product2Thumbnail.style.opacity="50%" :  product2Thumbnail.style.opacity=null ;
}
product3Thumbnail.onmouseleave=function(){
    active==2 ? product3Thumbnail.style.opacity="50%" :  product3Thumbnail.style.opacity=null ;
}
product4Thumbnail.onmouseleave=function(){
    active==3 ? product4Thumbnail.style.opacity="50%" :  product4Thumbnail.style.opacity=null ;
}
product1ThumbnailDisplay.onmouseover=function(){
     product1ThumbnailDisplay.style.opacity="50%" ;
}
product2ThumbnailDisplay.onmouseover=function(){
     product2ThumbnailDisplay.style.opacity="50%" ;
}
product3ThumbnailDisplay.onmouseover=function(){
     product3ThumbnailDisplay.style.opacity="50%" ;
}
product4ThumbnailDisplay.onmouseover=function(){
     product4ThumbnailDisplay.style.opacity="50%" ;
}
product1ThumbnailDisplay.onmouseleave=function(){
    active==0 ? product1ThumbnailDisplay.style.opacity="50%" :  product1ThumbnailDisplay.style.opacity=null
}
product2ThumbnailDisplay.onmouseleave=function(){
    active==1 ? product2ThumbnailDisplay.style.opacity="50%" :  product2ThumbnailDisplay.style.opacity=null
}
product3ThumbnailDisplay.onmouseleave=function(){
    active==2 ? product3ThumbnailDisplay.style.opacity="50%" :  product3ThumbnailDisplay.style.opacity=null
}
product4ThumbnailDisplay.onmouseleave=function(){
    active==3 ? product4ThumbnailDisplay.style.opacity="50%" :  product4ThumbnailDisplay.style.opacity=null
}

function thumbnail(x,array)
{ 
    array.forEach((e,index) => {
        e==x ? ((first.src=data[index].mainImage) && (e.style.opacity="50%") && (e.style.borderColor="hsl(26, 100%, 55%)") && (e.style.borderWidth="3px") && (e.style.borderStyle="solid")) :((e.style.opacity="100%") && (e.style.border="none"))
    });

}
function thumbnailChange(x,array)
{ 
    array.forEach((e) => {
        e==x ? ( (e.style.opacity="50%") && (e.style.borderColor="hsl(26, 100%, 55%)") && (e.style.borderWidth="3px") && (e.style.borderStyle="solid")) :((e.style.opacity="100%") && (e.style.border="none"))
    });

}

function changeImagesStyle(x)
{
    next1.style.display="block";
    closeDesktop.style.display="block";
    previous1.style.display="block";
    large.style.display="flex";
    large.style.flexDirection="column";
    first.style.width="400px";
    larger.style.backgroundColor="hsl(0,0%,3%,.7)";
    larger.style.width="100vw";
    larger.style.height="100vh";
    larger.style.position="fixed";
    larger.style.inset="0";
    larger.style.zIndex="22";
    thumbnail(x,thumbnailArrayDisplay);
}
closeDesktop.onclick=function(){
    closeDesktop.style.background="none";
    large.style.display="none";
    larger.style.backgroundColor="white";
    larger.style.zIndex="0";
    larger.style.width="0vw";
    larger.style.height="0vh";
}

thumbnail(product1Thumbnail,thumbnailArray);