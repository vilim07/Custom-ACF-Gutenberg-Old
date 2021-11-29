
<?php
    $content = $attributes["content"][0];
?>


<section class="quote-bubble" data-aos="zoom-in">
    <div class="container my-5">
        <div class="row  
        <?php if( $content["blockPosition"]== "left"){
        }
        else if ($content["blockPosition"]== "center"){
            echo "justify-content-center";
        }
        else{
            echo "justify-content-end";

        } 
        ?>
        py-5">
            <div class="col-9 bubble p-5 shadow-lg">
                <span class="dashicons dashicons-editor-quote fs-2 mb-3"></span>
                <p><?php echo $content["quote"] ?></p>
                <p class="mb-0 text-end fw-bolder"> -<?php echo $content["quoteBy"] ?></p>

            </div>
        </div>
    </div>
</section>