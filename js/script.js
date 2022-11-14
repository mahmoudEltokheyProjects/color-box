var parentBox = document.querySelector(".colorBox") ,
    cogsIcon = document.getElementById("cogs-icon"),
    cartIcon = document.getElementById("cart-icon"),
    toolTip1 = document.querySelector(".tooltip1"),
    toolTip2 = document.querySelector(".tooltip2"),
    rightBox = document.querySelector(".demo-panel-content"),
    colorPaletteUl = document.querySelector(".color-palette");
/* +++++++++++++++++ Tooltip 1 +++++++++++++++++ */
cogsIcon.onmouseenter = () => {
    toolTip1.style.display = "block" ;
}
cogsIcon.onmouseleave = () => {
    toolTip1.style.display = "none" ;
}
/* +++++++++++++++++ Tooltip 2 +++++++++++++++++ */
cartIcon.onmouseenter = () => {
    toolTip2.style.display = "block" ;
}
cartIcon.onmouseleave = () => {
    toolTip2.style.display = "none" ;
}
/* ++++++++++++++++++++++++++++ When Click on "CogsIcon" ++++++++++++++++++++++++++++ */
cogsIcon.onclick = ()=>{

    if( parentBox.classList.contains("hidePanel"))
    {
        // Show "Panel"
        parentBox.classList.remove("hidePanel");
        // Change "close icon" to "cogs icon"
        document.getElementById("cogsIcon").setAttribute("class","fa fa-cogs fa-lg");  
        // Change "cogs icon" to "gray color"
        document.getElementById("cogsIcon").style.color = "#888";    
    }
    else
    {
        // Hide "Panel"
        parentBox.classList.add("hidePanel"); 
        // Change "cogs icon" to "close icon"
        document.getElementById("cogsIcon").setAttribute("class","fa fa-close fa-lg");      
        // Change "close icon" to "red color"
        document.getElementById("cogsIcon").style.color = "#f00";    
    }
    
}
/* +++++++++++++++++++++ Create "Color Palette" +++++++++++++++++++++ */
var colorBoxesList = colorPaletteUl.children ;
for( colorBox of colorBoxesList )
{
    // get "data-color" attribute value
    var dataColorVal = colorBox.dataset.color ;
    // Give each "colorBox" color according to "data-color" value
    colorBox.style.background = dataColorVal ;
}
/* +++++++++++++++++++++ When Click on "ColorBox" +++++++++++++++++++++ */
var  panelContentBtn =  document.querySelector(".demo-panel-btn") ;
document.querySelector(".color-palette").onclick = function(e)
{
    // assign "data-color" of "colorBox li" to button
    panelContentBtn.style.background = e.target.dataset.color ;
    // change "mainBk variable in root"
    document.documentElement.style.setProperty('--mainBk', `${e.target.dataset.color}`);
}
/* +++++++++++++++++++++ Create "Panel images" +++++++++++++++++++++ */
var panelImagesUl = document.querySelector(".demo-panel-inner3 ul");
for( var i=1 ; i <= 12 ; i++ )
{
    var liTag = document.createElement("li") ,
        anchorTag = document.createElement("a"),
        imgTag = document.createElement("img") ;
    // Create "<a></a>" tag and give values for "href" and "target" attributes
    anchorTag.href = `images/img${i}.jpeg`;
    anchorTag.target = "_blank";
    // Create "<img/>" tag and give values for  "src" attribute
    imgTag.src = `images/img${i}.jpeg`;
    // Append "<a></a>" as child to "<li></li>"
    liTag.appendChild(anchorTag);
    // Append "<img/>" as child to "<a></a>"
    anchorTag.appendChild(imgTag);
    // Append "<li></li>" as child to "<ul></ul>"
    panelImagesUl.appendChild(liTag);
}