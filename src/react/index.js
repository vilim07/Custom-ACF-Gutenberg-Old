wp.blocks.registerBlockType("starter/test-block",{
    title:"Test Block",
    icon: "smiley",
    category: "text",
    attributes: {
        seljaci: {
            type: "array",
            default:[]
        },
    },


    edit: function (props){
        const seljaki = props.attributes.seljaci;        
//FUNCTIONS
        function updateSeljakIme(e){
            const ime = e.target.value
            seljaki[e.target.parentNode.getAttribute("index")] = {...seljaki[e.target.parentNode.getAttribute("index")], ime};
            props.setAttributes({seljaci: seljaki.slice()})

        }
        
        function updateSeljakBoja(e){
            const boja = e.target.value
            seljaki[e.target.parentNode.getAttribute("index")] = {...seljaki[e.target.parentNode.getAttribute("index")], boja};
            props.setAttributes({seljaci: seljaki.slice()})

        }
        function pushSeljaci(e){
            seljaki.push(seljaki.length);            seljaki[e.target.parentNode.getAttribute("index")] = 
            {
                ime: " ",
                boja: " ",
            };
            props.setAttributes({seljaci: seljaki.slice()})
        }
        function removeSeljak(e){
            seljaki.splice(e.target.getAttribute("index"), 1); 
            props.setAttributes({seljaci: seljaki.slice()})
        }
//FUNCTIONS



    const ssrProps = {
    block: 'starter/test-block',
    attributes: props.attributes
    }
        const [isSelected, setIsSelected] = React.useState(false);
        if (isSelected){
            return(
                <div class="custom-container">
                     {seljaki.map(function(items, index){
                          return (
                          <div index={index}>
                                 <input type="text" field="ime" value={items.ime}  placeholder="Seljak Ime"  onChange={updateSeljakIme}  />
                                 <select field="boja" value={items.boja}  onChange={updateSeljakBoja}>
                                     <option value="Red">Red</option>
                                     <option value="Green">Green</option>
                                     <option value="Blue">Blue</option>
                                 </select>
                             <button index={index}  onClick={removeSeljak}>X</button>
                             <br />
                          </div>
                          )
                     })}
                     <br />
                     <button onClick={pushSeljaci}>Add Row</button>
                     <button onClick={() => setIsSelected(false)}>Finish Editing</button>
                     
                </div> 
             )
        }
        else{
            return(
                <div onClick={() => setIsSelected(true)}>
                    {
                    wp.element.createElement( wp.editor.ServerSideRender, ssrProps ),
                    wp.element.createElement( wp.components.ServerSideRender, ssrProps ),
                    wp.element.createElement( wp.serverSideRender, ssrProps )
                }
                </div>
            )
        }
       
    },
    save: function(props){
        return null
    }
})