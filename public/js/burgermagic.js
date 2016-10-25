<script
  src="https://code.jquery.com/jquery-3.1.1.js"
  integrity="sha256-16cdPddA6VdVInumRGo6IbivbERE8p7CQR3HzTBuELA="
  crossorigin="anonymous"></script>
<script>
  $( document ).ready(function() {
    
    $( "#burger-form" ).submit(function( event )
     {
			  event.preventDefault();
			  alert("clicked");
	});
});
</script>