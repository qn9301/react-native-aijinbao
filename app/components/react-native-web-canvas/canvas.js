export const html = 
`
<html>
<head>
	<title>canvas</title>
	<style>
		*{
			margin: 0;
			padding: 0;
		}
	</style>
</head> 
<body>
	<canvas id='can' width='1' height='2' style="border: 1px solid black;">
		您的浏览器不支持canvas
	</canvas>
<script>
	var can;
	window.onload = function (){
		setTimeout(function (){
			can = document.getElementById('can');
			can.width = window._width;
			can.height = window._height;
			alert(window._width)
		})
	}

	window.document.addEventListener('message', function (e) {
	    console.log(e)
	})

</script>
</body>
</html>
`;