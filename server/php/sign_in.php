<?php
header("Content-type:text/html;charset=UTF-8;Access-Control-Allow-Origin: *");
$username=$_GET['username'];

$coon=new mysqli('localhost','root','','meizu',3306);
$sql="select * from meizu_userinfo where username='$username'";
$coon->query("SET NAMES 'utf8'");

$result=$coon->query($sql);
$row=$result->fetch_assoc();

if($row){
    $arr=array("code" =>"10000" ,"data"=>"");
}else{
    $arr=array("code"=>"0", "data"=>"");
}
echo json_encode($arr);
// echo "注册成功！";
?>
