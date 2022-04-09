AFRAME.registerComponent("cursor-list",{
    schema:{
        selectItemId:{default:"",type:"string"}
    },
    init:function(){
        this.handleMouseEnterEvent();
        this.handleMouseLeaveEvent();
    },
    handlePlacesListState:function(){
        const id =this.el.getAttribute("id")
        const placesId = ["budapest","eiffel_tower","new_york_city","taj_mahal"]
        if(placesId.includes(id)){
            const placeContainer  = document.querySelector("#tour")
            placeContainer.setAttribute("cursor-list",{
                selectItemId:id
            })
            this.el.setAttribute("material",{color:"blue",opacity:1})
        }
    },
    handleMouseEnterEvent:function(){
        this.el.addEventListener("mouseenter",()=>{
            this.handlePlacesListState()
        })
    },
    handleMouseLeaveEvent:function(){
        this.el.addEventListener("mouseleave",()=>{
            const {selectItemId} = this.data
            if(selectItemId){
                const el = document.querySelector(`#${selectItemId}`)
                const id = el.getAttribute("id")
                if(id == selectItemId){
                    el.setAttribute("material",{color:"black",opacity:1})
                }
            }
        })
    }
})