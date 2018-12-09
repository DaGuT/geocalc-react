<?php
//include('./matrix.php');

  $inp_file = $_FILES['file1']['tmp_name'];

  $c = shell_exec('../elf/Geo '.$inp_file.' 2 '.$_POST['variant']);
  echo $c;


//
// $matrixA = parseMatrix(file($_FILES['matrixA']['tmp_name']));
// $matrixB = parseMatrix(file($_FILES['matrixB']['tmp_name']));
//
// print('multiplication result is: <br/>');
// //$c=matmatMul($matrixA,$matrixB);
// //asddsa
// print($_FILES['matrixA']['tmp_name'].'<br/>');
// print($_FILES['matrixB']['tmp_name'].'<br/>');
// $c = shell_exec('./a.out '.$_FILES['matrixA']['tmp_name'].' '.$_FILES['matrixB']['tmp_name']);
// //$c = exec('./test.o');
// print_r($c);
// print('<br/>')


//Old serverCalcTest() in js
////We extract our data that came as JSON
//$data = $_POST["data"];
//
////we parse our matrix. This func is in matrix.php
//$mass=parseMatrix($data);
//
//
//$mass=multMat($mass);
//printMatrix($mass);

?>
