
<?php
    $content = $attributes["content"];
?>


<section>
    <div class="container">
        <h2><?php echo $content[0]["heading"]; ?></h2>

        <div class="row my-5">
        <?php 
        foreach ($content as $osoba){?>
            <div class="col-3 bottom-enter-staggers bottom-leave-staggers mb-3">
                <div class="card-person shadow p-3 pb-4 h-100">
                    <h4><?php echo $osoba["ime"]; ?></h4>
                    <h5><?php echo $osoba["titula"]; ?></h5>
                </div>
            </div>
        <?php }?>
        </div>
    </div>
</section>
