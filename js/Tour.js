AFRAME.registerComponent("tour",{
  init:function(){
    this.tour = this.el;
    this.createCards();
    
  },
  createCards:function(id,title,url){
    const thumbnail = [
      {
        id:"budapest",
        title:"Budapest",
        url:"../assets/thumbnails/budapest.jpg"
      },
      {
        id:"eiffel_tower",
        title:"Eiffel_Tower",
        url:"../assets/thumbnails/eiffel_tower.jpg"
      },
      {
        id:"new_york_city",
        title:"New_York_City",
        url:"../assets/thumbnails/new_york_city.png"
      },
      {
        id:"taj_mahal",
        title:"Taj_Mahal",
        url:"../assets/thumbnails/taj_mahal.png"
      }
    ]
    let xpos = -70
    for(var item of thumbnail){
      const posX = xpos+30;
      const posY = 10;
      const posZ = -50;
      const position = {x:posX,y:posY,z:posZ};
      xpos = posX;
      const bordere1 = this.createBorder(position,item.id);
      const thumbe1 = this.createThumbnail(item);
      bordere1.appendChild(thumbe1);
      const title1 = this.createTitle(position,item);
      bordere1.appendChild(title1);
      this.tour.appendChild(bordere1);
    }
  },
  createBorder:function(position,id){
    const entitye1 = document.createElement("a-entity");
    entitye1.setAttribute("id",id);
    entitye1.setAttribute("visible",true);
    entitye1.setAttribute("geometry",{primitive:"ring",radiusInner:9,radiusOuter:10});
    entitye1.setAttribute("position",position);
    entitye1.setAttribute("material",{color:"black",opacity:0.4});
    entitye1.setAttribute("cursor-list",{})
    return entitye1;
  },
  createThumbnail:function(item){
    const thumbnail1 = document.createElement("a-entity");
    thumbnail1.setAttribute("visible",true);
    thumbnail1.setAttribute("geometry",{primitive:"circle",radius:10});
    thumbnail1.setAttribute("material",{src:item.url});
    return thumbnail1;
  },
  createTitle:function(position,item){
    const titleel = document.createElement("a-entity");
    var posel = position;
    posel.y = 30
    titleel.setAttribute("visible",true);
    titleel.setAttribute("text",{font: "exo2bold" , width: 70, color: "red", value: item.title});
    titleel.setAttribute("position",posel);
    return titleel;
  },
})