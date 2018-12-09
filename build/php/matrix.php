<?php

function parseMatrix($text){
    $mass=array();
    $jj = 0;
    
    if (is_array($text)) {
        $lines = $text;
    }
    else {
    $lines = preg_split("/\n/",$text,-1,PREG_SPLIT_NO_EMPTY);
    //$lines = explode("\n",$text);
    }
    
    foreach ($lines as $line) {
        $temp=str_replace(',','.',$line);
        $mass[$jj]=preg_split("/ /",$temp,-1,PREG_SPLIT_NO_EMPTY);
        //$mass[$jj]=array_map('floatval', $mass[$jj]); //Это всё ломает.
        //$mass[$jj]=explode(" ",$line);
        ++$jj;
    };
	
	return $mass;
};

function matmatMul($A,$B) {
    $result=array();
	for ($i=0;$A[$i];++$i) {
		for ($j=0;$B[0][$j];++$j) {
            $result[$i][$j]=0;
			for ($k=0;$A[$i][$k];++$k) {
                $result[$i][$j]+=$A[$i][$k] * $B[$k][$j];
            }
		}
	}
	return $result;
}

function printMatrix($mass) {
	for ($i=0;$mass[$i];++$i) {
		for ($j=0;$mass[$i][$j];++$j) {
			echo $mass[$i][$j];
			echo ' ';
		}
		print("<br />");
	}
}

?>