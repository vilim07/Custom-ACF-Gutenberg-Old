
<?php
    $content = $attributes["content"][0];
?>

<section class="big-img">


<?php if($content["imageSize"] =="full"){ ?>

    <div class="container-fluid py-5">
        <div class="row justify-content-center <?php if ($content["heading"]) echo "overlay";?>">
            <div class="fade-enter fade-leave col-12 px-0"><img class="img-c <?php if ($content["halfHeight"]) echo "hhImg";?>" src="<?php echo $content["image"] ?>" alt=""></div>
            <?php if ($content["heading"]) echo "<h1>". $content["heading"] ."</h1>";?>
        </div>
    </div>

<?php
}
else{?>

    <div class="container py-5">
        <div class="row justify-content-center <?php if ($content["heading"]) echo "overlay";?>">
            <div class="fade-enter fade-leave <?php echo $content["imageSize"] ?>"><img class="w-100<?php if ($content["halfHeight"]) echo "hhImg";?>" src="<?php echo $content["image"] ?>" alt=""></div>
            <?php if ($content["heading"]) echo "<h1>". $content["heading"] ."</h1>";?>

        </div>
    </div>

<?php   
}?>
</section>
