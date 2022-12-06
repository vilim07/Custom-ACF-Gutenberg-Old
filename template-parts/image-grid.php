
<?php
    $content = $attributes["content"];

?>

<section class="image-grid">
    <div class="container py-5">
        <div class="row">
            <div class="col-4 bottom-leave-staggers">
                <?php
                    $count = 0;
                    foreach ($content as $images) {

                        if ($count == 0){
                            echo '<img class="mb-4" src="'.$images["image"].'" />';
                            $count++;
                        }
                        else if($count == 2){
                            $count=0;
                        }
                        else{
                            $count++;
                        }
                    }
                ?>
            </div>
            <div class="col-4 bottom-leave-staggers">
                <?php
                    $count = 0;
                    foreach ($content as $images) {

                        if ($count == 1){
                            echo '<img class="mb-4" src="'.$images["image"].'" />';
                            $count++;
                        }
                        else if($count == 2){
                            $count=0;
                        }
                        else{
                            $count++;
                        }
                    }
                ?>
            </div>
            <div class="col-4 bottom-leave-staggers">
                <?php
                    $count = 0;
                    foreach ($content as $images) {

                        if ($count == 2){
                            echo '<img class="mb-4" src="'.$images["image"].'" />';
                            $count=0;
                        }
                        else{
                            $count++;
                        }
                    }
                ?>
            </div>
        </div>
    </div>
</section>