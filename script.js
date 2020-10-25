var share_btn = $(".sharing"),
    share_popup = $(".share"),
    article_author = $(".article_author"),
    article_text = $(".article_text");


share_btn.on( "click", function(){
  share_popup.toggleClass("activated");
  article_author.toggleClass("activated");
  article_text.toggleClass("activated");
} )