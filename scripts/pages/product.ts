$('./body'){
	add_class('mw-product mw-body')
	$("./div[@id='Container']"){
		add_class_to('./div[@id="AjaxLoading"]','mw-hide')		
		$("./div[@id='Outer']"){
			$("./div[@id='Wrapper']"){
				hide("./div[@class='Left']")
				hide("./div[@class='Right']")
				hide("./div[@class='mw-menu-wrapper']/div[@class='Left']/div[2]")		
				$("./div[@class='Content']"){					
					add_class_to('./div[1]','mw-hide')
					hide("./div[@id='HomeFeaturedProducts']/h2/span[1]")
					hide("./div[@id='HomeNewProducts']/h2/span[1]")
					hide("./div[@id='HomeFeaturedProducts']/br[@class='Clear']")
					$('./div[@id="ProductDetails"]/div[@class="BlockContent"]'){
						add_class_to('./div[1]','mw-hide')
						$('./div[@class="ProductThumb"]'){
							add_class('mw-ProductThumb')
							add_class_to('./div[@class="ImageCarouselBox"]/a[@id="ImageScrollNext"]','mw-hide')
						}
						$('./div[@class="ProductMain"]'){
							add_class('mw-ProductMain')
							$('./div[@class="ProductDetailsGrid"]'){
								add_class_to('./div','mw-DetailRow'){
									add_class_to('./div[@class="Label"]','mw-left')
								}
							}
							$('./div[@class="productAddToCartRight"]/form/div/div[@class="DetailRow"]'){
								add_class_to('./div[@class="Label QuantityInput"]','mw-left')
								add_class_to('./div[@class="Value AddCartButton"]/div[@class="BulkDiscount"]','mw-BulkDiscount')
							}
						}
					}
					$('./div[@class="Block Moveable Panel ProductDescription"]'){
						attributes(data-ur-set:'toggler')
						$('./h3'){
                             attributes(data-ur-toggler-component: "button", class:'mw-bar1')
                         }
                          $('./div[@class="ProductDescriptionContainer"]'){
                            attributes(data-ur-toggler-component: "content",data-ur-state: "disabled")
                            add_class('mw-ProductDescription')     
                         }
                    }
					$('./div[10]'){
						attributes(data-ur-set:'toggler')
						add_class('mw-ProductReviews')
						$('./h3'){
                             attributes(data-ur-toggler-component: "button", class:'mw-bar1')

                         }
                          $('./div[@class="BlockContent"]'){
                            attributes(data-ur-toggler-component: "content",data-ur-state: "disabled")
                            add_class('mw-ProductDescription')
                            
                         }
					}
					$('./div[11]'){
						add_class_to('./div/ul/li','mw-box')
						attributes(data-ur-set:'toggler')
						$('./h3'){
                             attributes(data-ur-toggler-component: "button", class:'mw-bar1',data-ur-state:"enabled")
                             text(){
                             	set("Customers Also viewed")
                             }
                         }
                          $('./div[@class="BlockContent"]'){
                            attributes(data-ur-toggler-component: "content",data-ur-state: "enabled")   
                            add_class_to('./ul','mw-ProductList'){
                            	add_class_to('./li/div[@class="ProductDetails"]','mw-ProductDetails')
                            	add_class_to('./li/div[@class="ProductPriceRating"]','mw-ProductPriceRating')
                            }                 
                         }
					}
					add_class_to('./div[@id="ProductByCategory"]','mw-hide')
				}
						
			}
		}
		
	}	
}