const { InspectorControls, InnerBlocks, MediaUpload, MediaUploadCheck  } = wp.blockEditor;
const { ToggleControl, PanelBody, PanelRow, CheckboxControl, SelectControl, ColorPicker, IconButton } = wp.components;
const { Fragment } = wp.element;
const { __ } = wp.i18n;

wp.blocks.registerBlockType("starter/test-block",{
    title:"Test Block",
    icon: "smiley",
    category: "custom-theme-blocks",
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


wp.blocks.registerBlockType("starter/hero-slider-block",{
    title:"Hero Slider Block",
    icon: "smiley",
    category: "custom-theme-blocks",
    attributes: {
        slides: {
            type: "array",
            default:[]
        },
        // mediaId: {
        //     type: 'number',
        //     default: 0
        // },
        // mediaUrl: {
        //     type: 'string',
        //     default: ''
        // }
    },


    edit: function (props){
        const Slides = props.attributes.slides;
//FUNCTIONS
    function updateProps(){
        props.setAttributes({slides: Slides.slice()})
    }

    function updateSlide(e){
        console.log(e.target)
        const field = e.target.getAttribute("field")
        Slides[e.target.parentNode.getAttribute("index")][field] = e.target.value
        console.log(Slides[e.target.parentNode.getAttribute("index")])
        updateProps()
    }
    function pushSlides(e){
        Slides.push(Slides.length);  
        Slides[Slides.length-1] = 
        {
            backgroundImage: " ",
            boja: " ",
        };
        updateProps()
    }
    function removeSlide(e){
        Slides.splice(e.target.getAttribute("index"), 1); 
        updateProps()
    }
//FUNCTIONS



const ssrProps = {
    block: 'starter/hero-slider-block',
    attributes: props.attributes
    }
        const [isSelected, setIsSelected] = React.useState(false);
        if (isSelected){
            return(
                <div class="custom-container">
                     {Slides.map(function(slide, index){
                          return (
                          <div index={index}  onChange={updateSlide}>
                                <MediaUpload
                                field="slideImg"
                                onSelect={updateSlide}
                                type="image"
                                value={slide.backgroundImage}
                                render={({open})=>{
                                    return (<IconButton
                                        onClick={open}
                                        icon="upload"
                                    >
                                        Change
                                    </IconButton>)

                                }}
                                />
                                 <input type="text" field="backgroundImage" value={slide.backgroundImage}  placeholder="Seljak Ime"/>
                                 <input type="text" field="boja" value={slide.boja}  placeholder="boja"/>

                             <button index={index}  onClick={removeSlide}>X</button>
                             <br />
                          </div>
                          )
                     })}
                     <br />
                     <button onClick={pushSlides}>Add Row</button>
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