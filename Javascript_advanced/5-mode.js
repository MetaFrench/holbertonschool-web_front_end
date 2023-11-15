<!DOCTYPE html>
<html lang="en">
<head>
  	<meta charset="UTF-8">
  	<meta name="viewport" content="width=device-width, initial-scale=1.0">
  	<title>Theme Changer</title>
  	<style>
    	body 
{
      font-family: Arial, sans-serif;
      transition: all 0.3s ease-in-out;
}
	</style>
	</head>
	<body>

  <p>Welcome Holberton!</p>
  <button onclick="spooky()">Spooky</button>
  <button onclick="darkMode()">Dark mode</button>
  <button onclick="screamMode()">Scream mode</button>

  <script>
    	function changeMode(size, weight, transform, background, color) 
{
      return function () 
{
        document.body.style.fontSize = size + 'px';
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color; 
};
}

    function main() {
      const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
      const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
      const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

      document.querySelector('button:nth-of-type(1)').addEventListener('click', spooky);
      document.querySelector('button:nth-of-type(2)').addEventListener('click', darkMode);
      document.querySelector('button:nth-of-type(3)').addEventListener('click', screamMode);
}

    main();
  </script>

</body>
</html>

