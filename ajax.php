<?php 
header('Content-Type: text/xml');
echo '<?xml version="1.0" encoding="UTF-8" standalone="yes" ?>';
echo '<response>';

$name = $_GET['name'];
$username = array('MAHESH','SANJAYA','NISHANTHA','DAVID','SANATH','SUMITH');

if(in_array(strtoupper($name),$username))
    echo 'Hello, Welcome '.htmlentities($name).'!';
else if(trim($name == ''))
    echo 'We need your name. Please enter your name';
else
    echo htmlentities($name).', you are not a member.'; 

echo '</response>';

?>