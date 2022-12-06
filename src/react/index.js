const { InspectorControls, InnerBlocks, MediaUpload, MediaUploadCheck, RichText  } = wp.blockEditor;
const { ToggleControl, PanelBody, PanelRow, CheckboxControl, SelectControl, ColorPicker, IconButton, DateTimePicker } = wp.components;
const { Fragment } = wp.element;
const { __ } = wp.i18n;

//////////// TEST

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

//////////// HERO SLIDER
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
//////////// HERO FLAVOR

wp.blocks.registerBlockType("starter/hero-flavor-block",{
    title:"Hero Flavor Block",
    icon: "smiley",
    category: "custom-theme-blocks",
    attributes: {
        content: {
            type: "array",
            default:[]
        },

    },


    edit: function (props){
        const Content = props.attributes.content;
        if (Content.length == 0){
            Content.push(Content.length);  
            Content[Content.length-1] = {};
        }
//FUNCTIONS
    function updateProps(){
        props.setAttributes({content : Content.slice()})
        console.log(props.attributes.content)
    }

    function updateContentAdv(data, field){
        Content[0][field] = data   
        updateProps()
    }
    function updateContentImg(imgObject, field){
        Content[0][field] = imgObject.sizes.full.url;
        updateProps()
    }
    function removeContentImg(field){
        Content[0][field] = null;
        updateProps()
    }
//FUNCTIONS



    const ssrProps = {
        block: 'starter/hero-flavor-block',
        attributes: props.attributes
    }
    const blockContent = Content[0];
        const [isSelected, setIsSelected] = React.useState(false);
        if (isSelected){
            return(
                <div class="custom-container">
                          <div class="one-repeat">
                                <MediaUpload
                                        onSelect={(media)=>{
                                            updateContentImg(media, "topImg")

                                        }}
                                        type="image"
                                        value={blockContent.topImg}
                                        render={({open})=>{
                                            return (
                                            <div class="d-flex flex-column justify-content-end">
                                                <img class="preview-img" src={blockContent.topImg} alt="" />
                                                <p>Top Image</p>
                                                <div class="d-flex">
                                                    <IconButton
                                                    onClick={open}
                                                    icon="upload">
                                                        Change
                                                    </IconButton>
                                                    <button
                                                        class="ms-2 remove-button"
                                                        onClick={(media)=>{
                                                            removeContentImg("topImg")
                                                        }}
                                                    >
                                                        X
                                                    </button>
                                                </div>
                                            </div> 
                                            )

                                        }}
                                /> 
                                <RichText
                                    tagName="h1"
                                    onChange={(data)=>{
                                        updateContentAdv(data, "heading")

                                    }}
                                    value={blockContent.heading} 
                                    allowedFormats={ [ 'core/bold', 'core/italic', 'core/text-color' ] } 
                                    placeholder={ __( 'Heading...' ) } 
                                />
                                <RichText
                                    tagName="h3" 
                                    onChange={(data)=>{
                                        updateContentAdv(data, "subheading")

                                    }}
                                    value={blockContent.subheading} 
                                    allowedFormats={ [ 'core/bold', 'core/italic', 'core/text-color' ] } 
                                    placeholder={ __( 'subheading...' ) }
                                />
                                <div class="d-flex">
                                    <MediaUpload
                                        onSelect={(media)=>{
                                            updateContentImg(media, "firstImg")

                                        }}
                                        type="image"
                                        value={blockContent.firstImg}
                                        render={({open})=>{
                                            return (
                                            <div class="d-flex flex-column justify-content-end">
                                                <img class="preview-img" src={blockContent.firstImg} alt="" />
                                                <p>Image 1</p>
                                                <div class="d-flex">
                                                    <IconButton
                                                    onClick={open}
                                                    icon="upload">
                                                        Change
                                                    </IconButton>
                                                    <button
                                                        class="ms-2 remove-button"
                                                        onClick={(media)=>{
                                                            removeContentImg("firstImg")
                                                        }}
                                                    >
                                                        X
                                                    </button>
                                                </div>
                                            </div> 
                                            )

                                        }}
                                    /> 
                                        <MediaUpload
                                        onSelect={(media)=>{
                                            updateContentImg(media, "secondImg")
                                        }}
                                        type="image"
                                        value={blockContent.secondImg}
                                        render={({open})=>{
                                            return (
                                            <div class="d-flex flex-column justify-content-end">
                                                <img class="preview-img" src={blockContent.secondImg} alt="" />
                                                <p>Image 2</p>
                                                <div class="d-flex">
                                                    <IconButton
                                                    onClick={open}
                                                    icon="upload">
                                                        Change
                                                    </IconButton>
                                                    <button
                                                        class="ms-2 remove-button"
                                                        onClick={(media)=>{
                                                            removeContentImg("secondImg")
                                                        }}
                                                    >
                                                        X
                                                    </button>
                                                </div>
                                            </div> 
                                            )

                                        }}
                                    />
                                        <MediaUpload
                                        onSelect={(media)=>{
                                            updateContentImg(media, "thirdImg")

                                        }}
                                        type="image"
                                        value={blockContent.thirdImg}
                                        render={({open})=>{
                                            return (
                                            <div class="d-flex flex-column justify-content-end">
                                                <img class="preview-img" src={blockContent.thirdImg} alt="" />
                                                <p>Image 3</p>
                                                <div class="d-flex">
                                                    <IconButton
                                                    onClick={open}
                                                    icon="upload">
                                                        Change
                                                    </IconButton>
                                                    <button
                                                        class="ms-2 remove-button"
                                                        onClick={(media)=>{
                                                            removeContentImg("thirdImg")
                                                        }}
                                                    >
                                                        X
                                                    </button>
                                                </div>
                                            </div> 
                                            )

                                        }}
                                    />
                                </div>

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
//////////// HALF AND HALF

wp.blocks.registerBlockType("starter/half-and-half",{
    title:"Half And Half",
    icon: "smiley",
    category: "custom-theme-blocks",
    attributes: {
        content: {
            type: "array",
            default:[]
        },

    },


    edit: function (props){
        const Content = props.attributes.content;
        if (Content.length == 0){
            Content.push(Content.length);  
            Content[Content.length-1] = {};
        }
//FUNCTIONS
    function updateProps(){
        props.setAttributes({content : Content.slice()})
        console.log(props.attributes.content)
    }

    function updateContentAdv(data, field){
        Content[0][field] = data   
        updateProps()
    }
    function updateContentImg(imgObject, field){
        Content[0][field] = imgObject.sizes.full.url;
        updateProps()
    }
    function removeContentImg(field){
        Content[0][field] = null;
        updateProps()
    }
//FUNCTIONS



    const ssrProps = {
        block: 'starter/half-and-half',
        attributes: props.attributes
    }
    const blockContent = Content[0];
        const [isSelected, setIsSelected] = React.useState(false);

        if (isSelected){
            return(
                <div class="custom-container">
                          <div class="one-repeat">
                                <CheckboxControl
                                    label="Flipped"
                                    help=""
                                    checked={blockContent.isFlipped}
                                    onChange={(data)=>{
                                        updateContentAdv(data, "isFlipped")

                                    }}
                                />
                                <MediaUpload
                                        onSelect={(media)=>{
                                            updateContentImg(media, "halfImg")

                                        }}
                                        type="image"
                                        value={blockContent.halfImg}
                                        render={({open})=>{
                                            return (
                                            <div class="d-flex flex-column justify-content-end">
                                                <img class="preview-img" src={blockContent.halfImg} alt="" />
                                                <p>Half Image</p>
                                                <div class="d-flex">
                                                    <IconButton
                                                    onClick={open}
                                                    icon="upload">
                                                        Change
                                                    </IconButton>
                                                    <button
                                                        class="ms-2 remove-button"
                                                        onClick={(media)=>{
                                                            removeContentImg("halfImg")
                                                        }}
                                                    >
                                                        X
                                                    </button>
                                                </div>
                                            </div> 
                                            )

                                        }}
                                /> 
                                <RichText
                                    tagName="h1"
                                    onChange={(data)=>{
                                        updateContentAdv(data, "heading")

                                    }}
                                    value={blockContent.heading} 
                                    allowedFormats={ [ 'core/bold', 'core/italic', 'core/text-color' ] } 
                                    placeholder={ __( 'Heading...' ) } 
                                />
                                <RichText
                                    tagName="p"
                                    onChange={(data)=>{
                                        updateContentAdv(data, "paragraph")

                                    }}
                                    value={blockContent.paragraph} 
                                    allowedFormats={ [ 'core/bold', 'core/italic', 'core/text-color' ] } 
                                    placeholder={ __( 'Text...' ) } 
                                />
                                <RichText
                                    tagName="p"
                                    onChange={(data)=>{
                                        updateContentAdv(data, "btnUrl")

                                    }}
                                    value={blockContent.btnUrl} 
                                    allowedFormats={ [  ] } 
                                    placeholder={ __( 'Button url' ) } 
                                />

                                       

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
//////////// TEXT CENTER
wp.blocks.registerBlockType("starter/text-center",{
    title:"Text Center",
    icon: "smiley",
    category: "custom-theme-blocks",
    attributes: {
        content: {
            type: "array",
            default:[]
        },

    },


    edit: function (props){
        const Content = props.attributes.content;
        if (Content.length == 0){
            Content.push(Content.length);  
            Content[Content.length-1] = {};
        }
//FUNCTIONS
    function updateProps(){
        props.setAttributes({content : Content.slice()})
        console.log(props.attributes.content)
    }

    function updateContentAdv(data, field){
        Content[0][field] = data   
        updateProps()
    }
    function updateContentImg(imgObject, field){
        Content[0][field] = imgObject.sizes.full.url;
        updateProps()
    }
    function removeContentImg(field){
        Content[0][field] = null;
        updateProps()
    }
//FUNCTIONS



    const ssrProps = {
        block: 'starter/text-center',
        attributes: props.attributes
    }
    const blockContent = Content[0];
        const [isSelected, setIsSelected] = React.useState(false);

        if (isSelected){
            return(
                <div class="custom-container">
                          <div class="one-repeat">
                                <RichText
                                    tagName="h1"
                                    onChange={(data)=>{
                                        updateContentAdv(data, "heading")

                                    }}
                                    value={blockContent.heading} 
                                    allowedFormats={ [ 'core/bold', 'core/italic', 'core/text-color' ] } 
                                    placeholder={ __( 'Heading...' ) } 
                                />
                                <RichText
                                    tagName="p"
                                    onChange={(data)=>{
                                        updateContentAdv(data, "paragraph")

                                    }}
                                    value={blockContent.paragraph} 
                                    allowedFormats={ [ 'core/bold', 'core/italic', 'core/text-color' ] } 
                                    placeholder={ __( 'Text...' ) } 
                                />
                                       

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

wp.blocks.registerBlockType("starter/text-left",{
    title:"Text Left",
    icon: "smiley",
    category: "custom-theme-blocks",
    attributes: {
        content: {
            type: "array",
            default:[]
        },

    },


    edit: function (props){
        const Content = props.attributes.content;
        if (Content.length == 0){
            Content.push(Content.length);  
            Content[Content.length-1] = {};
        }
//FUNCTIONS
    function updateProps(){
        props.setAttributes({content : Content.slice()})
        console.log(props.attributes.content)
    }

    function updateContentAdv(data, field){
        Content[0][field] = data   
        updateProps()
    }
    function updateContentImg(imgObject, field){
        Content[0][field] = imgObject.sizes.full.url;
        updateProps()
    }
    function removeContentImg(field){
        Content[0][field] = null;
        updateProps()
    }
//FUNCTIONS



    const ssrProps = {
        block: 'starter/text-left',
        attributes: props.attributes
    }
    const blockContent = Content[0];
        const [isSelected, setIsSelected] = React.useState(false);

        if (isSelected){
            return(
                <div class="custom-container">
                          <div class="one-repeat">
                                <RichText
                                    tagName="h1"
                                    onChange={(data)=>{
                                        updateContentAdv(data, "heading")

                                    }}
                                    value={blockContent.heading} 
                                    allowedFormats={ [ 'core/bold', 'core/italic', 'core/text-color' ] } 
                                    placeholder={ __( 'Heading...' ) } 
                                />
                                <RichText
                                    tagName="p"
                                    onChange={(data)=>{
                                        updateContentAdv(data, "paragraph")

                                    }}
                                    value={blockContent.paragraph} 
                                    allowedFormats={ [ 'core/bold', 'core/italic', 'core/text-color', "core/image" ] } 
                                    placeholder={ __( 'Text...' ) } 
                                />
                                       

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
//////////// QUOTE BUBBLE

wp.blocks.registerBlockType("starter/quote-bubble",{
    title:"Quote Bubble",
    icon: "smiley",
    category: "custom-theme-blocks",
    attributes: {
        content: {
            type: "array",
            default:[]
        },

    },


    edit: function (props){
        const Content = props.attributes.content;
        if (Content.length == 0){
            Content.push(Content.length);  
            Content[Content.length-1] = {};
        }
//FUNCTIONS
    function updateProps(){
        props.setAttributes({content : Content.slice()})
        console.log(props.attributes.content)
    }

    function updateContentAdv(data, field){
        Content[0][field] = data   
        updateProps()
    }
    
    function updateContentSelect(data, field){
        console.log(data)
        Content[0][field] = data   
        updateProps()
    }
    function updateContentImg(imgObject, field){
        Content[0][field] = imgObject.sizes.full.url;
        updateProps()
    }
    function removeContentImg(field){
        Content[0][field] = null;
        updateProps()
    }
//FUNCTIONS



    const ssrProps = {
        block: 'starter/quote-bubble',
        attributes: props.attributes
    }
    const blockContent = Content[0];
        const [isSelected, setIsSelected] = React.useState(false);

        if (isSelected){
            return(
                <div class="custom-container">
                          <div class="one-repeat d-flex flex-column">
                            <p>Block Position</p>
                            <SelectControl
                                label="Block Position"
                                value={blockContent.blockPosition}
                                options={ [
                                    { label: 'Left', value: 'left' },
                                    { label: 'Center', value: 'center' },
                                    { label: 'Right', value: 'right' },
                                ] }
                                onChange={(data)=>{updateContentAdv(data, "blockPosition")}}
                            />
                                <RichText
                                    tagName="p"
                                    onChange={(data)=>{
                                        updateContentAdv(data, "quote")

                                    }}
                                    value={blockContent.quote} 
                                    allowedFormats={ [ 'core/bold', 'core/italic', 'core/text-color' ] } 
                                    placeholder={ __( 'quote...' ) } 
                                />
                                <div>
                                    <RichText
                                        tagName="p"
                                        onChange={(data)=>{
                                            updateContentAdv(data, "quoteBy")

                                        }}
                                        value={blockContent.quoteBy} 
                                        allowedFormats={ [ 'core/bold', 'core/italic', 'core/text-color' ] } 
                                        placeholder={ __( 'Quote By...' ) } 
                                    />
                                </div>
                                       

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

//////////////BIG IMAGE
wp.blocks.registerBlockType("starter/big-image",{
    title:"Big Image",
    icon: "smiley",
    category: "custom-theme-blocks",
    attributes: {
        content: {
            type: "array",
            default:[]
        },

    },


    edit: function (props){
        const Content = props.attributes.content;
        if (Content.length == 0){
            Content.push(Content.length);  
            Content[Content.length-1] = {};
        }
//FUNCTIONS
    function updateProps(){
        props.setAttributes({content : Content.slice()})
        console.log(props.attributes.content)
    }

    function updateContentAdv(data, field){
        Content[0][field] = data   
        updateProps()
    }
    
    function updateContentSelect(data, field){
        console.log(data)
        Content[0][field] = data   
        updateProps()
    }
    function updateContentImg(imgObject, field){
        Content[0][field] = imgObject.sizes.full.url;
        updateProps()
    }
    function removeContentImg(field){
        Content[0][field] = null;
        updateProps()
    }
//FUNCTIONS



    const ssrProps = {
        block: 'starter/big-image',
        attributes: props.attributes
    }
    const blockContent = Content[0];
        const [isSelected, setIsSelected] = React.useState(false);

        if (isSelected){
            return(
                <div class="custom-container">
                          <div class="one-repeat d-flex flex-column">
                            <p>Size</p>
                            <SelectControl
                                label="Size"
                                value={blockContent.imageSize}
                                options={ [
                                    { label: 'Small', value: 'col-6' },
                                    { label: 'Medium', value: 'col-8' },
                                    { label: 'Big', value: 'col-10' },
                                    { label: 'Huge', value: 'col-12' },
                                    { label: 'Full', value: 'full' },
                                ] }
                                onChange={(data)=>{updateContentAdv(data, "imageSize")}}
                            />
                            <CheckboxControl
                                    label="Half Screen Height?"
                                    help=""
                                    checked={blockContent.halfHeight}
                                    onChange={(data)=>{
                                        updateContentAdv(data, "halfHeight")

                                    }}
                            />
                            <MediaUpload
                                        onSelect={(media)=>{
                                            updateContentImg(media, "image")

                                        }}
                                        type="image"
                                        value={blockContent.image}
                                        render={({open})=>{
                                            return (
                                            <div class="d-flex flex-column justify-content-end">
                                                <img class="preview-img" src={blockContent.image} alt="" />
                                                <div class="d-flex">
                                                    <IconButton
                                                    onClick={open}
                                                    icon="upload">
                                                        Change
                                                    </IconButton>
                                                    <button
                                                        class="ms-2 remove-button"
                                                        onClick={(media)=>{
                                                            removeContentImg("image")
                                                        }}
                                                    >
                                                        X
                                                    </button>
                                                </div>
                                            </div> 
                                            )

                                        }}
                                /> 
                                <RichText
                                    tagName="h2"
                                    onChange={(data)=>{
                                        updateContentAdv(data, "heading")

                                    }}
                                    value={blockContent.heading} 
                                    allowedFormats={ [ 'core/bold', 'core/italic', 'core/text-color' ] } 
                                    placeholder={ __( 'overlayText' ) } 
                                />
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

wp.blocks.registerBlockType("starter/people-repeater",{
    title:"Clanovi",
    icon: "smiley",
    category: "custom-theme-blocks",
    attributes: {
        content: {
            type: "array",
            default:[]
        },
    },


    edit: function (props){
        const Content = props.attributes.content;
        if (Content.length == 0){
            Content.push(Content.length);  
            Content[Content.length-1] = {};
            updateProps()
        }
//FUNCTIONS

        function pushRow(e){
            Content.push(Content.length);  
            Content[Content.length-1] = {};
            console.log(Content.length)
            updateProps()
        }
        function removeRow(e){
            Content.splice(e.target.getAttribute("index"), 1); 
            updateProps()
        }
        function updateProps(){
            props.setAttributes({content : Content.slice()})
            console.log(props.attributes.content)
        }

        function updateContentAdv(data, field, index){
            Content[index][field] = data;   
            console.log(Content)
            updateProps()
        }


//FUNCTIONS



    const ssrProps = {
    block: 'starter/people-repeater',
    attributes: props.attributes
    }    
    const blockContent = Content[0];

        const [isSelected, setIsSelected] = React.useState(false);
        if (isSelected){
            return(
                <div class="custom-container">
                        <RichText
                                tagName="h2"
                                onChange={(data)=>{
                                    updateContentAdv(data, "heading", 0)

                                }}
                                value={blockContent.heading} 
                                allowedFormats={ [ 'core/bold', 'core/italic', 'core/text-color' ] } 
                                placeholder={ __( 'Heading' ) } 
                        />
                     <div class="row">
                        {Content.map(function(items, index){
                            return (
                            <div class="col-4 " index={index}>
                                <div className="rounded border p-3">
                                    <RichText
                                            tagName="h3"
                                            onChange={(data)=>{
                                                updateContentAdv(data, "ime", index)

                                            }}
                                            value={items.ime} 
                                            allowedFormats={ [ 'core/bold', 'core/italic', 'core/text-color' ] } 
                                            placeholder={ __( 'Ime osobe...' ) } 
                                    />
                                    <RichText
                                        tagName="h4"
                                        onChange={(data)=>{
                                            updateContentAdv(data, "titula", index)

                                        }}
                                        value={items.titula} 
                                        allowedFormats={ [ 'core/bold', 'core/italic', 'core/text-color' ] } 
                                        placeholder={ __( 'Titula...' ) } 
                                    />

                                    <button index={index}  onClick={removeRow}>X</button>
                                    <br />
                                </div>
                            </div>
                            )
                        })}
                     </div>
                     <br />
                     <button class="me-3" onClick={pushRow}>Add Row</button>
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

wp.blocks.registerBlockType("starter/video-block",{
    title:"Video Block",
    icon: "smiley",
    category: "custom-theme-blocks",
    attributes: {
        content: {
            type: "array",
            default:[]
        },

    },


    edit: function (props){
        const Content = props.attributes.content;
        if (Content.length == 0){
            Content.push(Content.length);  
            Content[Content.length-1] = {};
        }
//FUNCTIONS
    function updateProps(){
        props.setAttributes({content : Content.slice()})
        console.log(props.attributes.content)
    }

    function updateContentAdv(data, field){
        Content[0][field] = data   
        updateProps()
    }
    
    function updateContentSelect(data, field){
        console.log(data)
        Content[0][field] = data   
        updateProps()
    }
    function updateContentImg(imgObject, field){
        Content[0][field] = imgObject.sizes.full.url;
        updateProps()
    }
    function updateContentVid(vidObject, field){
        console.log(vidObject)
        Content[0][field] = vidObject.url;
        updateProps()
    }
    function removeContentImg(field){
        Content[0][field] = null;
        updateProps()
    }
//FUNCTIONS



    const ssrProps = {
        block: 'starter/video-block',
        attributes: props.attributes
    }
    const blockContent = Content[0];
        const [isSelected, setIsSelected] = React.useState(false);

        if (isSelected){
            return(
                <div class="custom-container">
                          <div class="one-repeat d-flex flex-column">
                            <p>Size</p>
                            <SelectControl
                                label="Size"
                                value={blockContent.vidSize}
                                options={ [
                                    { label: 'Normal', value: 0 },
                                    { label: 'Full Witdh', value: 1 },
                                ] }
                                onChange={(data)=>{updateContentAdv(data, "vidSize")}}
                            />
                            <MediaUpload
                                        onSelect={(media)=>{
                                            updateContentVid(media, "video")

                                        }}
                                        type="video"
                                        value={blockContent.video}
                                        render={({open})=>{
                                            return (
                                            <div class="d-flex flex-column justify-content-end">
                                                <video autoplay muted  class="preview-img" src={blockContent.video} alt=""/>
                                                <p>Half Image</p>
                                                <div class="d-flex">
                                                    <IconButton
                                                    onClick={open}
                                                    icon="upload">
                                                        Change
                                                    </IconButton>
                                                    <button
                                                        class="ms-2 remove-button"
                                                        onClick={(media)=>{
                                                            removeContentImg("video")
                                                        }}
                                                    >
                                                        X
                                                    </button>
                                                </div>
                                            </div> 
                                            )

                                        }}
                                /> 
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

wp.blocks.registerBlockType("starter/calendar",{
    title:"Kalendar",
    icon: "smiley",
    category: "custom-theme-blocks",
    attributes: {
        content: {
            type: "array",
            default:[]
        },

    },


    edit: function (props){
        const Content = props.attributes.content;
        if (Content.length == 0){
            Content.push(Content.length);  
            Content[Content.length-1] = {};
        }
//FUNCTIONS
    function pushRow(e){
        Content.push(Content.length);  
        Content[Content.length-1] = {};
        console.log(Content.length)
        updateProps()
    }
    function removeRow(e){
        Content.splice(e.target.getAttribute("index"), 1); 
        updateProps()
    }
    function updateProps(){
        props.setAttributes({content : Content.slice()})
        console.log(props.attributes.content)
    }

    function updateContentAdv(data, field, index){
        Content[index][field] = data;   
        console.log(Content)
        updateProps()
    }
    function switchThis(index, switcher){
        if ((index >= 0) && (switcher >= 0) && (switcher < Content.length)) {
            [Content[index], Content[switcher]] = [Content[switcher], Content[index]];
            updateProps()

        }


    }
//FUNCTIONS



    const ssrProps = {
        block: 'starter/calendar',
        attributes: props.attributes
    }
    const blockContent = Content[0];
    const [isSelected, setIsSelected] = React.useState(false);
        if (isSelected){
            return(
                <div class="custom-container">
                          <div class="one-repeat d-flex flex-column">
                            {Content.map(function(items, index){
                                return (
                                <div class="row  border p-3" index={index}>
                                        <DateTimePicker
                                            currentDate={ items.date }
                                            onChange={(data)=>{updateContentAdv(data, "date", index)}}
                                            is12Hour={ false }
                                        />
                                        <RichText
                                            tagName="h4"
                                            onChange={(data)=>{
                                                updateContentAdv(data, "ime", index)

                                            }}
                                            value={items.ime} 
                                            allowedFormats={ [ 'core/bold', 'core/italic', 'core/text-color' ] } 
                                            placeholder={ __( 'Ime događaja...' ) } 
                                        />
                                        <RichText
                                            tagName="p"
                                            onChange={(data)=>{
                                                updateContentAdv(data, "opis", index)

                                            }}
                                            value={items.opis} 
                                            allowedFormats={ [ 'core/bold', 'core/italic', 'core/text-color' ] } 
                                            placeholder={ __( 'Opis...' ) } 
                                        />

                                        <button onClick={(data)=>{ switchThis(index, index-1)}}><span class="dashicons dashicons-arrow-up-alt"></span></button>
                                        <button class="mx-2" onClick={(data)=>{ switchThis(index, index+1)}}><span class="dashicons dashicons-arrow-down-alt"></span></button>

                                        <button index={index}  onClick={removeRow}>X</button>
                                        <br />
                                </div>
                                )
                            })}

                          </div>
                     <br />
                     <button class="me-3" onClick={pushRow}>Add Row</button>
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

wp.blocks.registerBlockType("starter/current-page-title",{
    title:"Page Title",
    icon: "smiley",
    category: "custom-theme-blocks",
    attributes: {
        content: {
            type: "array",
            default:[]
        },

    },


    edit: function (props){
        const Content = props.attributes.content;
        if (Content.length == 0){
            Content.push(Content.length);  
            Content[Content.length-1] = {};
        }
//FUNCTIONS
    function updateProps(){
        props.setAttributes({content : Content.slice()})
        console.log(props.attributes.content)
    }

    function updateContentAdv(data, field, index){
        Content[index][field] = data;   
        console.log(Content)
        updateProps()
    }

//FUNCTIONS



    const ssrProps = {
        block: 'starter/current-page-title',
        attributes: props.attributes
    }
    const blockContent = Content[0];
    const [isSelected, setIsSelected] = React.useState(false);
        if (isSelected){
            return(
                <div class="custom-container">
                          <div class="one-repeat d-flex flex-column">
                            

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

wp.blocks.registerBlockType("starter/image-grid",{
    title:"Image Grid",
    icon: "smiley",
    category: "custom-theme-blocks",
    attributes: {
        content: {
            type: "array",
            default:[]
        },
    },


    edit: function (props){
        const Content = props.attributes.content;
        if (Content.length == 0){
            Content.push(Content.length);  
            Content[Content.length-1] = {};
            updateProps()
        }
//FUNCTIONS

        function pushRow(e){
            Content.push(Content.length);  
            Content[Content.length-1] = {};
            console.log(Content.length)
            updateProps()
        }
        function removeRow(e){
            Content.splice(e.target.getAttribute("index"), 1); 
            updateProps()
        }
        function updateProps(){
            props.setAttributes({content : Content.slice()})
            console.log(props.attributes.content)
        }
        function updateContentImg(imgObject, field, index){
            Content[index][field] = imgObject.sizes.full.url;
            updateProps()
        }
        function updateContentAdv(data, field, index){
            Content[index][field] = data;   
            console.log(Content)
            updateProps()
        }


//FUNCTIONS



    const ssrProps = {
    block: 'starter/image-grid',
    attributes: props.attributes
    }    
    const blockContent = Content[0];

        const [isSelected, setIsSelected] = React.useState(false);
        if (isSelected){
            return(
                <div class="custom-container">
                     <div class="row">
                        {Content.map(function(items, index){
                            return (
                            <div class="col-4 " index={index}>
                                <MediaUpload
                                        onSelect={(media)=>{
                                            updateContentImg(media, "image", index)

                                        }}
                                        type="image"
                                        value={items.image}
                                        render={({open})=>{
                                            return (
                                            <div class="d-flex flex-column justify-content-end">
                                                <img class="preview-img" src={items.image} alt="" />
                                                <div class="d-flex">
                                                    <IconButton
                                                    onClick={open}
                                                    icon="upload">
                                                        Change
                                                    </IconButton>
                                                </div>
                                            </div> 
                                            )

                                        }}
                                /> 
                                <button index={index}  onClick={removeRow}>X</button>

                            </div>
                            )
                        })}
                     </div>
                     <br />
                     <button class="me-3" onClick={pushRow}>Add Row</button>
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

wp.blocks.registerBlockType("starter/post-cards",{
    title:"post-cards",
    icon: "smiley",
    category: "custom-theme-blocks",
    attributes: {
        content: {
            type: "array",
            default:[]
        },

    },


    edit: function (props){
        const Content = props.attributes.content;
        if (Content.length == 0){
            Content.push(Content.length);  
            Content[Content.length-1] = {};
        }
//FUNCTIONS
    function updateProps(){
        props.setAttributes({content : Content.slice()})
        console.log(props.attributes.content)
    }

    function updateContentAdv(data, field, index){
        Content[index][field] = data;   
        console.log(Content)
        updateProps()
    }

//FUNCTIONS



    const ssrProps = {
        block: 'starter/post-cards',
        attributes: props.attributes
    }
    const blockContent = Content[0];
    const [isSelected, setIsSelected] = React.useState(false);
        if (isSelected){
            return(
                <div class="custom-container">
                          <div class="one-repeat d-flex flex-column">
                            

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