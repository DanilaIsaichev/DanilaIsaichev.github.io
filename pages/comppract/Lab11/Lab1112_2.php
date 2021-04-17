<html>
  <head>
    <title>PHP Test</title>
  </head>
  <body>
    <?php 
    if ($_SERVER['REQUEST_METHOD'] === "GET")
    {
    ?>
    <form name="calcform" action="index.php" method="POST"> 
    <input name="n1" type="number" placeholder="3" required pattern="1?[0-9]">
      <select name="op" id="operator">
        <option value="add">+</option>
        <option value="substract">-</option>  
        <option value="multiply">*</option> 
        <option value="divide">/</option>  
        <option value="exponentiate">^</option>         
      </select>
    <input name="n2" type="number"  placeholder="4" required pattern="1?[0-9]">
    <input type="submit">
    </form> 
    <?php 
    }
    if ($_SERVER['REQUEST_METHOD'] === "POST"){
      $a = $_POST['n1'];
      $o = $_POST['op'];
      $b = $_POST['n2'];
      switch ($o) {
        case "add":
        $res = $a + $b;
        echo "{$a} + {$b} = {$res}";
        break;
      case "substract":
        $res = $a - $b;
        echo "{$a} - {$b} = {$res}";
        break;
      case "multiply":
        $res = $a * $b;
        echo "{$a} * {$b} = {$res}";
        break;
      case "divide":
        $res = $a / $b;
        echo "{$a} / {$b} = {$res}";
        break;
      case "exponentiate":
        $res = $a ** $b;
        echo "{$a} ^ {$b} = {$res}";
        break;
      }
    }
    ?>
  </body>
</html>
