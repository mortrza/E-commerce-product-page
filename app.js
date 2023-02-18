const minus=document.getElementById('minus');
const plus=document.getElementById('plus');
const cartValue=document.getElementById("cartValue");
const addToBascket=document.getElementById("addToBascket");
const cartCount=document.getElementById("cartCount");
const bascket=document.getElementById("bascket");
const productTitle=document.getElementById("product-title");
const productPrice=document.getElementById("product-price");
const description=document.getElementById("description");
const checkPrice=document.getElementById("checkPrice");
const checkOut=document.getElementById("checkOut");
const checkOutMain=document.getElementById("checkOutMain");
const empty=document.getElementById("empty");
const deleteItems=document.getElementById("delete");
const menu=document.getElementById("menu");
const slidebar=document.getElementById("slidebar");
const closeItem=document.getElementById("close");
const collections=document.getElementById("Collections");
const men=document.getElementById("Men");
const women=document.getElementById("Women");
const about=document.getElementById("About");
const contact=document.getElementById("Contact");
const avatar=document.getElementById("avatar");


    avatar.onmouseover=function(){
        avatar.style.borderColor="hsl(26, 100%, 55%)";
        avatar.style.borderWidth="2px";
        avatar.style.borderStyle="solid";
        avatar.style.borderRadius="50%";
    }
    avatar.onmouseleave=function(){
        avatar.style.border="none";
    }
    minus.onclick=function(){
        cartValue.innerHTML=parseInt(cartValue.innerHTML)==0 ? 0 : parseInt(cartValue.innerHTML)-1;
    }
    plus.onclick=function(){
        cartValue.innerHTML=parseInt(cartValue.innerHTML)+1;
    }
    addToBascket.onclick=function(){
        cartCount.innerHTML=parseInt(cartCount.innerHTML)+parseInt(cartValue.innerHTML);
        cartCount.style.display=(parseInt(cartValue.innerHTML)>0 || parseInt(cartCount.innerHTML)>0) ?"block" : "none";
        const currency=productPrice.innerHTML.substring(0,1);
        const truePrice=productPrice.innerHTML.slice(1);
        checkPrice.innerHTML=currency+truePrice+ "*" +parseInt(cartCount.innerHTML)+" "+currency+(parseInt(cartCount.innerHTML)*truePrice).toFixed(2) ; 
    } 
    bascket.onclick=function(){
        checkOut.style.display=checkOut.style.display=="none" ? "flex" : "none";
        checkOutMain.style.display=parseInt(cartCount.innerHTML)>0 ? "flex" :"none";
        empty.style.display=checkOutMain.style.display=="none" ? "flex" : "none";
        description.innerHTML=productTitle.innerHTML;
        const currency=productPrice.innerHTML.substring(0,1);
        const truePrice=productPrice.innerHTML.slice(1);
        checkPrice.innerHTML=currency+truePrice+ "*" +parseInt(cartCount.innerHTML)+" "+currency+(parseInt(cartCount.innerHTML)*truePrice).toFixed(2) ; 
    }   
    deleteItems.onclick=function(){
        cartCount.innerHTML=0;
        checkOutMain.style.display="none";
        empty.style.display="flex";
        cartCount.style.display="none";
    }        
    menu.onclick=function(){
        slidebar.style.display="flex";
        slidebar.style.flexDirection="column";

    }
    closeItem.onclick=function(){
        slidebar.style.display="none";
    }
    collections.onclick=function(){
        sidebarColor();
        collections.style.color="hsl(220, 13%, 13%)";
    }
    men.onclick=function(){
        sidebarColor();
        men.style.color="hsl(220, 13%, 13%)";

    }
    women.onclick=function(){
        sidebarColor();
        women.style.color="hsl(220, 13%, 13%)";
    }
    about.onclick=function(){
        sidebarColor();
        about.style.color="hsl(220, 13%, 13%)";
    }
    contact.onclick=function(){
        sidebarColor();
        contact.style.color="hsl(220, 13%, 13%)";
    }

    function sidebarColor(){
        collections.style.color="hsl(220, 14%, 75%) ";
        men.style.color="hsl(220, 14%, 75%) ";
        women.style.color="hsl(220, 14%, 75%) ";
        about.style.color="hsl(220, 14%, 75%) ";
        contact.style.color="hsl(220, 14%, 75%) ";
    }
    