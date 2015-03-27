
$(function(){

		// Declarando variáveis globais		
		var contindice = 0;
		var parindice  = 0;
		var edindice = 0;
		var visaux = false;

		// Ajuste para centralização do menu
		var menuwidth = $("#secmenu").width();
		$("#secmenu").css({"margin-left":menuwidth/2*(-1)});

		// Animação do menu
		$(".secsub").css({"display":"none"});

		$(".menuitem").hover(
			function() {
				$(".secsub").css({"margin-top":"15px"});
				$(this).children().stop().slideDown(200);
				$("#menubox").css({"height":"95px"});
			},
			function(){
				$(".secsub").slideUp(200);
			}
			);

		// Posição das DIV's de conteúdo
		var largura = $(document).width();
		var altura = $(document).height();

		$(".cbox:eq(0)").css({"background-color":"#EED02B","z-index":"40"});
		$(".cbox:eq(1)").css({"background-color":"#1DD67D","z-index":"30","display":"none"});
		$(".cbox:eq(2)").css({"background-color":"#C01242","z-index":"20","display":"none"});

		$("#contents").css({"width":largura , "height":altura});

		// Actions Menu 'Páginas'
		$(".menuitem:eq(0) .subitem").click(
			function(e){
				contindice = $(this).index();
				$(".cbox").fadeOut();
				$(".cbox:eq("+contindice+")").fadeIn("1000");
			}
			);

		// Actions Menu 'Parágrafos'
		$(".menuitem:eq(1) .subitem").click(
			function(e) {				
				var parindice = $(this).index();
				switch(parindice){
					case 0:
					$(".cbox:eq("+contindice+") p").animate({fontSize: "120px"}, 500);
					break;
					case 1:
					$(".cbox:eq("+contindice+") p").animate({fontSize: "50px"}, 500);
					break;
					case 2:
					$(".cbox:eq("+contindice+") p").animate({color: "#fff"}, "slow");
					break;
				}
			}
			);

		// Actions Menu 'Edição'
		$(".menuitem:eq(2) .subitem").click(
			function(e) {
				edindice = $(this).index();
				switch(edindice){
					
					case 0:
						$(".cbox:eq("+contindice+")").append("<p class='newp'>Esta é a página 0"+ (contindice+1) +"</p>");
						$(".cbox:eq("+contindice+")").on('click', '.newp',
							function(e){
								$(this).animate({letterSpacing:"20px"}, 300,
									function(e){
										$(this).hide(500);
										visaux = true;
									}
								)
							}
						);
					break;

					case 1:
						$(".cbox:eq("+contindice+") p:last").remove();
					break;
					case 2:
						if(visaux == true){
							$(".newp").show(300);
						}
					break;
				}
			}
		);
	});
