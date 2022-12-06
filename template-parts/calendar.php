
<?php
    $content = $attributes["content"];
?>
 <!-- <h2 class="mb-2">('Y-m-d h:i', $dateTime);</h2> -->

<section class="calendar fade-enter fade-leave">
    <div class="container my-5">
        <div class="row justify-content-center">
            <div class="col-6 mb-5 bg-blur">
                <?php
                    $dateTime = strtotime($content[0]["date"]);
                ?>
                <div class=" text-center">
                    <h2 class="mb-2"><?php echo date('Y-m-d', $dateTime); ?></h2>
                    <h3>- <u><?php echo $content[0]["ime"]; ?></u> -</h3>
                    <p><?php echo $content[0]["opis"]; ?></p>
                </div>
            </div>
        </div>
        <?php 
        foreach (array_slice($content ,1) as $key=>$event){ ?>
            <?php if($key %2 == 0){ ?>
                <div class="row my-5">
                    <div class="col-5 event shadow-sm">
                        <?php
                            $dateTime = strtotime($event["date"]);
                        ?>
                        <div class="text-start">
                            <h3 class="ms-3 mb-2"><?php echo date('Y-m-d', $dateTime); ?></h3>
                            <h4><?php echo $event["ime"]; ?></h4>
                            <p><?php echo $event["opis"]; ?></p>
                        </div>
                    </div>
                </div>
            <?php
             }
            else{ ?>
                <div class="row my-5 justify-content-end">
                    <div class="col-5 event shadow-sm">
                        <?php
                            $dateTime = strtotime($event["date"]);
                        ?>
                        <div class="text-end">
                            <h3 class="me-3 mb-2"><?php echo date('Y-m-d', $dateTime); ?></h3>
                            <h4><?php echo $event["ime"]; ?></h4>
                            <p><?php echo $event["opis"]; ?></p>
                        </div>
                    </div>
                </div>
            <?php
             };
            
            }; ?>

    </div>
</section>