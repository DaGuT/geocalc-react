<?php

  $inp_file = $_FILES['file1']['tmp_name'];

  $c = shell_exec('../elf/Geo '.$inp_file.' 3 '.$_POST['variant']);
  echo $c;

?>
