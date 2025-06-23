add_action('woocommerce_before_shop_loop_item_title', 'second_product_thumbnail_on_hover', 11);

function second_product_thumbnail_on_hover() {
    global $product;
    
    $attachment_ids = $product->get_gallery_image_ids();

    if (isset($attachment_ids[0])) {
        $secondary_image_id = $attachment_ids[0];
        $secondary_image_html = wp_get_attachment_image($secondary_image_id, 'woocommerce_thumbnail', false, array('class' => 'secondary-image'));
        echo $secondary_image_html;
    }
}


.woocommerce ul.products li.product .secondary-image {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
}

.woocommerce ul.products li.product:hover .secondary-image {
    opacity: 1;
}

.woocommerce ul.products li.product .woocommerce-loop-product__link {
    position: relative;
    display: block;
}
