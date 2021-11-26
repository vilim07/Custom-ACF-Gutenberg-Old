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
        Slides[index][field] = e.target.value
        console.log(Slides[e.target.parentNode.getAttribute("index")])
        updateProps()
    }
    function updateSlideImg(imgObject, field, index){
        console.log(imgObject)
        console.log(index)
        console.log(field)
        Slides[index][field] = imgObject.sizes.full.url;
        console.log(Slides[index])
        updateProps()
    }
    function pushSlides(e){
        Slides.push(Slides.length);  
        Slides[Slides.length-1] = 
        {
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
                          <div index={index}  onChange={(e)=>
                            updateSlide(e, index)
                          } 
                          class="one-repeat">
                                
                                <MediaUpload
                                    onSelect={(media)=>{
                                        updateSlideImg(media, "slideImg", index)

                                    }}
                                    type="image"
                                    value={slide.slideImg}
                                    render={({open})=>{
                                        return (
                                        <div class="d-flex flex-column">
                                            <img class="preview-bg-img" src={slide.slideImg} alt="" />
                                            <p>Slide Background Image</p>
                                            <IconButton
                                            onClick={open}
                                            icon="upload"
                                        >
                                                Change
                                            </IconButton>
                                        </div> 
                                        )

                                    }}
                                /> 
                                <p>Slide Text</p>
                                <textarea field="text"  value={slide.text}></textarea>
                             <button index={index}  onClick={removeSlide}>X</button>
                             <hr/>
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

wp.blocks.registerBlockType("starter/hero-flavor-block",{
    title:"Hero Flavor Block",
    icon: "smiley",
    category: "custom-theme-blocks",
    attributes: {
        content: {
            type: "object",
            default:{}
        },

    },


    edit: function (props){
        const Content = props.attributes.content;
//FUNCTIONS
    function updatePropsObject(field){
        props.setAttributes({content : Content})
        console.log(props.attributes.content)
    }

    function updateSlide(e){
        const field = e.target.getAttribute("field")
        Content[field] = e.target.value       
        updatePropsObject()
    }
    function updateSlideImg(imgObject, field){
        Content[field] = imgObject.sizes.full.url;
        updatePropsObject(field)
    }
//FUNCTIONS



const ssrProps = {
    block: 'starter/hero-flavor-block',
    attributes: props.attributes
    }
        const [isSelected, setIsSelected] = React.useState(false);
        if (isSelected){
            return(
                <div class="custom-container">
                          <div  onChange={(e)=>
                            updateSlide(e)
                          } 
                          class="one-repeat">
                                
                                <div class="d-flex">
                                    <MediaUpload
                                        onSelect={(media)=>{
                                            updateSlideImg(media, "firstImg")

                                        }}
                                        type="image"
                                        value={props.attributes.content.firstImg}
                                        render={({open})=>{
                                            return (
                                            <div class="d-flex flex-column">
                                                <img class="preview-img" src={props.attributes.content.firstImg} alt="" />
                                                <p>Image 1</p>
                                                <IconButton
                                                onClick={open}
                                                icon="upload"
                                            >
                                                    Change
                                                </IconButton>
                                            </div> 
                                            )

                                        }}
                                    /> 
                                </div>
                                <p>Slide Text</p>
                                <textarea field="text"  value={props.attributes.content.flavorParagraph}></textarea>
                             <hr/>
                          </div>
                     <br />
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
