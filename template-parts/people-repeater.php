
<?php
    $content = $attributes["content"];
?>


<section>
    <div class="container">
        <div class="row my-5">
        <?php 
        foreach ($content as $osoba){?>
            <div class="col-3">
                <h1><?php echo $osoba["ime"]; ?></h1>
            </div>
        <?php }?>
        </div>
    </div>
</section>
